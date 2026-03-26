---
title: "n8n til danske virksomheder: gratis automatisering"
slug: "n8n"
tool: "n8n"
category: "Automatiseringsplatform"
meta_description: "n8n er open source og kan hostes gratis. Perfekt til virksomheder der vil eje egne data og bygge avancerede automatiseringer. Se opsætning og use cases."
layout: vaerktoj.njk
---

<p>n8n er en open source automatiseringsplatform der kan køre på din egen server — eller i skyen. I modsætning til Make.com og Zapier ejer du selv din installation og dine data. Det gør n8n særlig attraktiv for virksomheder med høje datakrav eller høje automatiseringsvolumener.</p>

<div class="section-label">Hvad er n8n?</div>
<h2>n8n dansk forklaring</h2>

<p>n8n (udtales "n-eight-n" eller "nodemation") er en workflow-automatiseringsplatform med et visuelt interface der minder om Make.com. Du bygger flows ved at forbinde noder — hver node repræsenterer en app eller en operation. n8n understøtter over 350 integrationer og har desuden en "Code"-node der lader dig skrive JavaScript direkte i flowet til komplekse transformationer.</p>

<p>Den afgørende forskel: n8n kan køres self-hosted. Det betyder ingen månedlig per-operation-betaling, ingen grænser på kørsler, og dine data forlader aldrig din server. Til gengæld kræver opsætning af en server en smule teknisk forståelse — eller hjælp fra en specialist.</p>

<div class="section-label">Use cases</div>
<h2>Hvad kan n8n bruges til i din virksomhed?</h2>

<ul>
  <li><strong>Høj-volumen databehandling:</strong> Et inkassobureau behandler dagligt tusindvis af transaktioner der skal matches, valideres og bogføres. Med n8n self-hosted koster det nul pr. ekstra transaktion.</li>
  <li><strong>AI-integrationer:</strong> En marketingvirksomhed bruger n8n til at forbinde OpenAI med deres CRM. n8n genererer automatisk personaliserede emailudkast baseret på CRM-data og lægger dem klar til godkendelse.</li>
  <li><strong>Intern tooling:</strong> Et softwarebureau bruger n8n til at automatisere deres CI/CD-notifikationer: nye GitHub-releases trigger n8n der poster i Slack, opdaterer Notion og sender en email til kunder på relevant abonnementstype.</li>
  <li><strong>GDPR-følsomme processer:</strong> En psykologisk klinik bruger n8n self-hosted fordi patientdata aldrig må forlade deres egne servere. Bookingsystemet, journalsystemet og faktureringen er forbundet via n8n.</li>
</ul>

<div class="section-label">Fordele og ulemper</div>
<h2>n8n pris og kvalitet — en ærlig vurdering</h2>

<div class="before-after">
  <div class="before">
    <h3>Ulemper</h3>
    <ul>
      <li>❌ Self-hosting kræver en server og basis teknisk opsætning</li>
      <li>❌ Færre app-integrationer end Zapier (350+ vs. 7.000+)</li>
      <li>❌ Ingen officiel dansk support</li>
      <li>❌ Opdateringer og vedligehold er dit ansvar ved self-hosting</li>
    </ul>
  </div>
  <div class="after">
    <h3>Fordele</h3>
    <ul>
      <li>✅ Ubegrænsede kørsler ved self-hosting — nul per-operation-pris</li>
      <li>✅ Dine data er på din server — optimal GDPR-kontrol</li>
      <li>✅ Open source — du kan bygge egne integrationer</li>
      <li>✅ JavaScript-node giver programmeringsfleksibilitet direkte i flows</li>
    </ul>
  </div>
</div>

<div class="section-label">n8n pris</div>
<h2>Hvad koster n8n for en lille dansk virksomhed?</h2>

<div class="price-box">
  <p><strong>Self-hosted (gratis):</strong> Kræver en server. En Digital Ocean Droplet til 48 kr./md. er tilstrækkelig for de fleste SMV'er. Selve n8n er gratis og open source.</p>
  <p><strong>n8n Cloud Starter (20 EUR/md.):</strong> Hostet af n8n — ingen server kræves. 2.500 workflow-kørsler/md. Ca. 150 kr./md.</p>
  <p><strong>n8n Cloud Pro (50 EUR/md.):</strong> 10.000 workflow-kørsler/md. + prioriteret support. Ca. 375 kr./md.</p>
  <p><strong>Enterprise (fra 500 EUR/md.):</strong> Ubegrænsede kørsler, SSO, avancerede roller. Til større organisationer.</p>
</div>

<p>For virksomheder med høje automatiseringsvolumener er self-hosting klart den billigste løsning. En server til 48 kr./md. mod 375 kr./md. for n8n Cloud Pro — og ingen per-kørsel-begrænsninger. Kræver dog at nogen sætter serveren op og holder den vedligeholdt.</p>

<div class="section-label">Kom i gang</div>
<h2>Sådan starter du n8n på 30 minutter</h2>

<ol class="steps">
  <li><strong>Start med n8n Cloud.</strong> Opret en gratis 14-dages trial på n8n.io uden kreditkort. Det er den hurtigste måde at lære platformen på uden at sætte en server op.</li>
  <li><strong>Udforsk de 350+ integrationer.</strong> Søg efter dine apps i node-biblioteket. De fleste apps kræver blot en API-nøgle eller OAuth-login — præcis som Make.com og Zapier.</li>
  <li><strong>Byg dit første workflow.</strong> Start med et simpelt trigger-action-flow. n8n's visuelle editor er intuitiv: venstre side er trigger, højre side er actions, pile forbinder noderne.</li>
  <li><strong>Test og debug.</strong> n8n's "Execute Workflow"-knap kører flowet med testdata og viser outputtet fra hvert node visuelt. Fejl markeres med rødt med en præcis fejlbesked.</li>
  <li><strong>Beslut dig for hosting.</strong> Vil du bruge n8n i produktion? Vurder om n8n Cloud (nemt, men dyrere) eller self-hosting (billigere, kræver teknisk hjælp) er den rette model for din virksomhed.</li>
</ol>

<div class="section-label">Eksempel</div>

<div class="case-study">
  <span class="case-label">Eksempel — fiktiv case</span>
  <h3>Bogholderiet Nørreskov: 40.000 transaktioner/md. til nul ekstra driftsomkostning</h3>
  <p>Bogholderiet Nørreskov håndterer regnskaber for 35 kunder. De havde forsøgt Make.com men ramte hurtigt loftet for operationer — 40.000 bankposteringer om måneden skulle matches, kategoriseres og bogføres, og Make.coms Pro-plan til 16 USD/md. var langt fra tilstrækkelig for den volumen.</p>
  <p>Vi opsatte n8n på en VPS til 58 kr./md. Bankposteringer fra e-conomics API behandles automatisk: hvert betalingsbilag matches med en åben faktura, bogføres og en bekræftelse sendes til kundens email. Flowet kører 24/7 og behandler op til 2.000 posteringer i timen.</p>
  <p><strong>Resultat:</strong> Driftsomkostning: 58 kr./md. til server + 290 kr./md. til os for vedligehold. Tidligere kostede manuelt bogholderi på dette volumen 12.000 kr./md. i medarbejdertid.</p>
</div>

<div class="pro-tip">
  <p><strong>Pro-tip:</strong> Brug n8n's "Wait"-node til at bygge tidsforsinkede flows — fx "send en opfølgningsemail tre dage efter første kontakt, men kun hvis kunden ikke har svaret". Wait-noden holder kørslen i pause uden at forbruge server-ressourcer. Det giver dig Klaviyo-lignende email-sekvenser bygget i n8n uden behov for et separat email-automatiseringsværktøj.</p>
</div>

<div class="section-label">Typiske spørgsmål</div>

<div class="faq-details">
  <details>
    <summary>Er n8n på dansk?</summary>
    <p>Nej, n8n's interface er på engelsk. Dokumentationen er på engelsk, men der er en stor internationalt community med aktive fora. n8n er open source, så der er teknisk mulighed for at bidrage med en dansk oversættelse, men der er ingen officiel dansk version endnu.</p>
  </details>
  <details>
    <summary>Kan n8n bruges uden teknisk erfaring?</summary>
    <p>Det afhænger af hostingmodellen. n8n Cloud kan bruges af ikke-tekniske brugere — oplevelsen ligner Make.com. Self-hosting kræver at man sætter en server op, installerer n8n via Docker eller npm, og holder serveren opdateret. Det kræver basalt kendskab til Linux eller hjælp fra en specialist. Vi hjælper med opsætning og kan overtage vedligehold.</p>
  </details>
  <details>
    <summary>Hvad sker der med mine data i n8n?</summary>
    <p>Ved self-hosting forbliver alle dine data på din egen server — n8n sender intet til tredjepart. Det er den primære årsag til at GDPR-bevidste virksomheder vælger n8n. Ved n8n Cloud gælder n8n's egne privatlivspolitikker — data lagres på EU-servere og n8n er GDPR-compliant, men data passerer igennem n8n's infrastruktur.</p>
  </details>
  <details>
    <summary>Kan jeg prøve n8n gratis?</summary>
    <p>Ja, på to måder. Du kan downloade n8n og køre det lokalt på din computer gratis og uden tidsbegrænsning. Alternativt giver n8n Cloud en 14-dages gratis trial uden kreditkort. Den lokale installation er den nemmeste måde at lære platformen på inden du beslutter dig for en hosting-model.</p>
  </details>
</div>

<p>Se også: <a href="/pris/hvad-koster-n8n-automatisering/">Hvad koster n8n automatisering?</a>, <a href="/ordforklaring/hvad-er-api/">Hvad er en API?</a> og <a href="/kan-man/kan-man-automatisere-fakturering/">Kan man automatisere fakturering?</a></p>
