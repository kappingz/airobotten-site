#!/usr/bin/env node
'use strict';

const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname);
const SITE_DIR = path.join(BASE, '_site');
const SRC_DIR = path.join(BASE, 'src');
const DEST_DIR = path.join(SRC_DIR, 'automatisering');

if (!fs.existsSync(DEST_DIR)) {
  fs.mkdirSync(DEST_DIR, { recursive: true });
}

// ── YAML helpers ────────────────────────────────────────────────────────────

/**
 * Serialize a value as an inline YAML value (no block scalars).
 * Safe for strings that fit on one line.
 */
function yamlInline(val) {
  if (val === null || val === undefined) return 'null';
  if (typeof val === 'boolean' || typeof val === 'number') return String(val);
  if (typeof val === 'string') {
    if (val === '') return '""';
    // Use JSON string – always safe in YAML
    return JSON.stringify(val);
  }
  return JSON.stringify(val);
}

/**
 * Serialize a possibly multi-line string.
 * Uses YAML literal block scalar (|) when multi-line, otherwise inline.
 */
function yamlStr(val) {
  if (!val || val.trim() === '') return '""';
  val = val.trim();
  if (val.includes('\n')) {
    const indented = val.split('\n').map(l => '  ' + l).join('\n');
    return `|\n${indented}`;
  }
  return yamlInline(val);
}

/**
 * Serialize a nested string under a parent that is already indented by `depth` spaces.
 * Used for fields inside objects in arrays.
 */
function yamlStrAt(val, depth) {
  if (!val || val.trim() === '') return '""';
  val = val.trim();
  if (val.includes('\n')) {
    const pad = ' '.repeat(depth);
    const indented = val.split('\n').map(l => pad + l).join('\n');
    return `|\n${indented}`;
  }
  return yamlInline(val);
}

// ── HTML extraction ──────────────────────────────────────────────────────────

function siblingsUntilNextLabel($, startEl) {
  const result = [];
  let cur = startEl.next();
  while (cur.length) {
    const cls = cur.attr('class') || '';
    const tag = cur.prop('tagName') ? cur.prop('tagName').toLowerCase() : '';
    if (cls.includes('section-label') || cls.includes('cta-box') || cls.includes('related') || cls.includes('faq-details') || cls.includes('pro-tip') || cls.includes('mini-case') || cls.includes('faq-details')) break;
    result.push(cur);
    cur = cur.next();
  }
  return result;
}

function parsePage(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  const $ = cheerio.load(html);

  // ── Basic meta ──
  const title = $('h1').first().text().trim();
  const meta_description = $('meta[name="description"]').attr('content') || '';
  const canonical = $('link[rel="canonical"]').attr('href') || '';
  const category = $('.page-category').first().text().trim();
  const breadcrumb_label = $('.breadcrumb span:not(.sep)').last().text().trim();

  // ── Flow trigger / result ──
  const flowValues = $('.flow-step-value');
  const trigger = flowValues.eq(0).text().trim();
  const result = flowValues.eq(1).text().trim();

  // ── Section extraction by label text ──
  const sections = {};
  $('.section-label').each((_, el) => {
    const label = $(el).text().trim().replace(/\u00a0/g, ' ');
    sections[label] = $(el);
  });

  function paragraphsAfter(labelEl) {
    if (!labelEl) return '';
    const paras = [];
    let cur = labelEl.next();
    while (cur.length) {
      const cls = cur.attr('class') || '';
      const tag = cur.prop('tagName') ? cur.prop('tagName').toLowerCase() : '';
      if (cls.includes('section-label') || cls.includes('cta-box') || cls.includes('related') || cls.includes('mini-case') || cls.includes('faq-details') || cls.includes('pro-tip')) break;
      if (tag === 'p') paras.push($.html(cur).trim());
      cur = cur.next();
    }
    return paras.join('\n');
  }

  const problem = paragraphsAfter(sections['Problemet']);
  const solution = paragraphsAfter(sections['Løsningen']);

  // ── Benefits (label varies) ──
  const benefitsLabelEl = sections['Det opnår du'] || sections['Det sparer du'] || null;
  const benefits_label = sections['Det sparer du'] ? 'Det sparer du' : 'Det opnår du';
  const benefits = [];
  if (benefitsLabelEl) {
    let cur = benefitsLabelEl.next();
    while (cur.length) {
      const tag = cur.prop('tagName') ? cur.prop('tagName').toLowerCase() : '';
      if ((cur.attr('class') || '').includes('section-label')) break;
      if (tag === 'ul') {
        cur.find('li').each((_, li) => benefits.push($(li).text().trim()));
        break;
      }
      cur = cur.next();
    }
  }

  // ── Tools ──
  const tools = [];
  $('.tools-list li').each((_, el) => tools.push($(el).text().trim()));

  // ── Steps ──
  const steps = [];
  $('.step-item').each((_, el) => {
    const ps = $(el).find('p');
    const stepTitle = ps.eq(0).find('strong').text().trim();
    const stepBody = ps.eq(1).text().trim();
    steps.push({ title: stepTitle, body: stepBody });
  });

  // ── FAQ items (h3/p style — label: "Typiske spørgsmål" or "FAQ") ──
  const faq_items = [];
  $('.faq .faq-item').each((_, el) => {
    const q = $(el).find('h3').text().trim();
    const a = $(el).find('p').text().trim();
    if (q) faq_items.push({ q, a });
  });

  // ── Mini case ──
  let mini_case = null;
  const mc = $('.mini-case');
  if (mc.length) {
    const mcTitle = mc.find('h3').text().trim();
    const mcBody = mc.find('p').map((_, p) => $.html(p).trim()).get().join('\n');
    mini_case = { title: mcTitle, body: mcBody };
  }

  // ── FAQ details (interactive details/summary) ──
  const faq_details = [];
  $('.faq-details details').each((_, el) => {
    const q = $(el).find('summary').text().trim();
    const a = $(el).find('p').text().trim();
    if (q) faq_details.push({ q, a });
  });

  // ── Pro tip ──
  const pro_tip = $('.pro-tip p').first().text().trim();

  // ── "Inden du går i gang" extra section (before CTA) ──
  let before_cta = '';
  const indendel = sections['Inden du går i gang'];
  if (indendel) {
    const parts = [];
    let cur = indendel.next();
    while (cur.length) {
      const cls = cur.attr('class') || '';
      if (cls.includes('cta-box') || cls.includes('related') || cls.includes('section-label')) break;
      const tag = cur.prop('tagName') ? cur.prop('tagName').toLowerCase() : '';
      if (tag === 'h2' || tag === 'p') {
        parts.push($.html(cur).trim());
      }
      cur = cur.next();
    }
    before_cta = parts.join('\n');
  }

  // ── Related cards ──
  const related = [];
  $('.related-card').each((_, el) => {
    const url = $(el).attr('href') || '';
    const cardTitle = $(el).find('h4').text().trim();
    const cardCat = $(el).find('p').text().trim();
    if (url && cardTitle) related.push({ url, title: cardTitle, category: cardCat });
  });

  // ── FAQ JSON-LD schema ──
  let faq_schema = '';
  $('script[type="application/ld+json"]').each((_, el) => {
    const txt = $(el).html() || '';
    if (txt.includes('FAQPage')) faq_schema = txt.trim();
  });

  return {
    title, meta_description, canonical, category, breadcrumb_label,
    trigger, result,
    problem, solution,
    benefits, benefits_label,
    tools, steps,
    faq_items, mini_case, faq_details, pro_tip,
    before_cta, related, faq_schema,
  };
}

// ── Frontmatter generation ───────────────────────────────────────────────────

function buildFrontmatter(d) {
  const lines = [];
  const push = (...args) => lines.push(...args);

  push('---');
  push(`layout: automatisering.njk`);
  push(`title: ${yamlStr(d.title)}`);
  push(`meta_description: ${yamlStr(d.meta_description)}`);
  push(`canonical: ${yamlStr(d.canonical)}`);
  push(`category: ${yamlStr(d.category)}`);
  push(`breadcrumb_label: ${yamlStr(d.breadcrumb_label)}`);
  push(`trigger: ${yamlStr(d.trigger)}`);
  push(`result: ${yamlStr(d.result)}`);

  push(`problem: ${yamlStr(d.problem)}`);
  push(`solution: ${yamlStr(d.solution)}`);

  // Tools
  if (d.tools.length) {
    push('tools:');
    d.tools.forEach(t => push(`  - ${yamlInline(t)}`));
  } else {
    push('tools: []');
  }

  // Steps
  if (d.steps.length) {
    push('steps:');
    d.steps.forEach(s => {
      push(`  - title: ${yamlInline(s.title)}`);
      push(`    body: ${yamlInline(s.body)}`);
    });
  }

  // Benefits
  if (d.benefits.length) {
    push(`benefits_label: ${yamlInline(d.benefits_label)}`);
    push('benefits:');
    d.benefits.forEach(b => push(`  - ${yamlInline(b)}`));
  }

  // FAQ items
  if (d.faq_items.length) {
    push('faq_items:');
    d.faq_items.forEach(item => {
      push(`  - q: ${yamlInline(item.q)}`);
      push(`    a: ${yamlInline(item.a)}`);
    });
  }

  // Mini case
  if (d.mini_case) {
    push('mini_case:');
    push(`  title: ${yamlInline(d.mini_case.title)}`);
    push(`  body: ${yamlStrAt(d.mini_case.body, 4)}`);
  }

  // FAQ details
  if (d.faq_details.length) {
    push('faq_details:');
    d.faq_details.forEach(item => {
      push(`  - q: ${yamlInline(item.q)}`);
      push(`    a: ${yamlInline(item.a)}`);
    });
  }

  // Pro tip
  if (d.pro_tip) push(`pro_tip: ${yamlStr(d.pro_tip)}`);

  // Before CTA
  if (d.before_cta) push(`before_cta: ${yamlStr(d.before_cta)}`);

  // Related
  if (d.related.length) {
    push('related:');
    d.related.forEach(r => {
      push(`  - url: ${yamlInline(r.url)}`);
      push(`    title: ${yamlInline(r.title)}`);
      push(`    category: ${yamlInline(r.category)}`);
    });
  }

  // FAQ schema
  if (d.faq_schema) push(`faq_schema: ${yamlStr(d.faq_schema)}`);

  push('---');
  return lines.join('\n');
}

// ── Main ─────────────────────────────────────────────────────────────────────

const automatiseringDir = path.join(SITE_DIR, 'automatisering');
const slugs = fs.readdirSync(automatiseringDir).filter(entry => {
  return fs.statSync(path.join(automatiseringDir, entry)).isDirectory();
});

let migrated = 0;
const errors = [];

for (const slug of slugs.sort()) {
  const htmlFile = path.join(automatiseringDir, slug, 'index.html');
  if (!fs.existsSync(htmlFile)) {
    errors.push({ slug, error: 'index.html mangler' });
    continue;
  }
  try {
    const data = parsePage(htmlFile);
    const fm = buildFrontmatter(data);
    const outPath = path.join(DEST_DIR, `${slug}.md`);
    fs.writeFileSync(outPath, fm + '\n', 'utf8');
    migrated++;
    process.stdout.write(`✓ ${slug}\n`);
  } catch (err) {
    errors.push({ slug, error: err.message });
    process.stderr.write(`✗ ${slug}: ${err.message}\n`);
  }
}

// Also handle automatiseringer/index.html — listing page, skip (handled by .njk)
console.log('\n═══════════════════════════════');
console.log(`Migreret: ${migrated} sider`);
if (errors.length) {
  console.log(`Fejl (${errors.length}):`);
  errors.forEach(e => console.log(`  ✗ ${e.slug}: ${e.error}`));
} else {
  console.log('Ingen fejl ✓');
}
