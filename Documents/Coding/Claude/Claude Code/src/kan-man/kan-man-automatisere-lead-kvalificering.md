---
title: "Kan man automatisere lead kvalificering? Ja — og det er nemmere end du tror"
slug: "kan-man-automatisere-lead-kvalificering"
process: "lead kvalificering og scoring"
tools:
  - "Make.com"
  - "HubSpot / Pipedrive"
  - "OpenAI"
  - "Clearbit / Apollo.io"
meta_description: "Ja, du kan automatisere lead kvalificering og scoring. Se hvordan det fungerer, hvad det kræver, og hvad en fiktiv virksomhed opnåede ved at automatisere lead-scoren."
layout: kan-man.njk
---

<div class="answer-box">
  <span class="answer-badge">Kort svar</span>
  <p><strong>Ja.</strong> Fra et lead oprettes i dit CRM til det er scoret, enriched med firmografisk data og routet til den rette sælger med en briefing — det kan ske automatisk på under ét minut, uanset hvornår leadet kommer ind.</p>
</div>

<div class="section-label">Sådan fungerer det</div>
<h2>Processen fra nyt lead til kvalificeret og prioriteret</h2>

<div class="flow-diagram">
  <div class="flow-step"><span>Lead</span>Oprettes i CRM via formular eller import</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><span>Enrichment</span>Firmografisk data hentes automatisk</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><span>Scoring</span>Lead scores baseret på fit og adfærd</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><span>Routing</span>Sendes til rette sælger med kontekst</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><span>Nurturing</span>Passende flow aktiveres baseret på score</div>
</div>

<p>Flowet starter i det øjeblik et nyt lead oprettes — via kontaktformular, LinkedIn-annonce, webinar-tilmelding eller manuel import. Make.com henter øjeblikkeligt enrichment-data fra Clearbit eller Apollo.io: virksomhedsstørrelse, branche, omsætning, antal ansatte og teknologibrug. Disse data kombineres med leadets adfærd — hvilke sider de har besøgt, hvilke emails de har åbnet — og beregner en lead score der indikerer sandsynlighed for køb.</p>

<p>Baseret på scoren routes leadet: høj score → notifikation til sælger med prioritet og briefing. Mellemscore → email-nurturing-sekvens der varmer dem op inden sælgerkontakt. Lav score → langsigtet nurturing-flow der holder dem engagerede mens de ikke er købsklare endnu.</p>

<div class="section-label">Forudsætninger</div>
<h2>Hvad kræver det af din virksomhed</h2>

<ul class="req-list">
  <li><strong>Et CRM med lead-felter og workflow-muligheder:</strong> HubSpot Professional eller Enterprise er idealvalget til avanceret lead scoring — det har native scoring-funktionalitet. Pipedrive med Make.com-integration er et godt alternativ. Bruger du et simplere CRM, kan vi bygge scoring-logikken i Make.com og skrive resultatet tilbage til CRM som et felt.</li>
  <li><strong>Klarhed over din ideelle kundeprofil (ICP):</strong> Lead scoring er kun så god som definitionen af hvad et godt lead er. Hvad er din ideelle kundes virksomhedsstørrelse? Branche? Budget? Beslutningsroller? Disse kriterier er inputtet til scoring-logikken. Har du aldrig formaliseret din ICP, hjælper vi dig med det inden vi bygger — det er den vigtigste strategiske øvelse.</li>
  <li><strong>Historiske konverteringsdata:</strong> Den bedste scoring-model er en der er kalibreret mod faktiske konverteringer: hvilke lead-karakteristika forudsiger faktisk køb i din specifikke virksomhed? Har du 6+ måneder af CRM-data med vundne og tabte deals, kan vi bygge en datadrevet model. Har du ikke det, starter vi med en hypotese-baseret model og kalibrerer løbende.</li>
  <li><strong>En enrichment-kilde:</strong> Clearbit og Apollo.io kan berige leads med firmografisk data baseret på email-domænet. Begge har Make.com-integration og gratis tiers der dækker moderate volumener. Uden enrichment-data er scoring begrænset til adfærdsdata — stadig nyttigt, men mindre præcist end kombinerede modeller.</li>
</ul>

<div class="section-label">Hvad du sparer</div>
<h2>Tid og ressourcer — før og efter</h2>

<div class="before-after">
  <div class="before">
    <span class="ba-label">Før</span>
    <p>Sælgerne bruger 30–40 % af salgsforespørgselstiden på ukvalificerede leads</p>
    <p>Manuel research pr. lead: 15–30 minutter på at finde firmografisk data</p>
    <p>Hot leads behandles samme hastighed som cold leads — timing-vinduet spildes</p>
    <p>Ingen systematisk nurturing af leads der ikke er klar til at købe nu</p>
  </div>
  <div class="after">
    <span class="ba-label">Efter</span>
    <p>Sælgerne kontakter kun leads med score over defineret grænse</p>
    <p>Enrichment-data klar inden for sekunder — sælgeren er forberedt</p>
    <p>Hot leads notificeres sælgeren øjeblikkeligt — reaktionstid under 5 minutter</p>
    <p>Alle leads får relevant nurturing baseret på score og position i funnel</p>
  </div>
</div>

<div class="section-label">Eksempel</div>

<div class="case-study">
  <span class="case-label">Eksempel — fiktiv case</span>
  <h3>B2B-softwarevirksomheden Vertex: salgsteamets produktive tid steg med 60 %</h3>
  <p>Vertex genererer 120–150 leads om måneden via webinarer, Google Ads og hjemmesideformular. Salgsteamet på tre håndterede alle leads ens — en opfølgningsemail til alle, derefter et forsøg på telefonkontakt. 65 % af den tid der bruges på leads, bruges på leads der aldrig konverterer. Hot leads der er klar til at købe nu venter i kø ligesom kolde leads.</p>
  <p>Vi opsatte et HubSpot-baseret scoring-flow via Make.com. Ved nyt lead hentes enrichment fra Clearbit: virksomhedsstørrelse, branche, omsætning og teknologistak. Scoren beregnes baseret på fit (25 % af Vertex's eksisterende kunder er i samme branche og størrelse — høj score), adfærd (hjemmesidebesøg, email-engagement) og timing (lead der downloader pricing-siden scores 20 point ekstra). Leads over 70 point sender en Slack-notifikation til sælgeren med fuld briefing. Leads under 40 point går i et seks-ugers email-nurturing-flow.</p>
  <p>Salgsteamets kontakttid med høj-score leads steg fra 35 % til 58 % af arbejdstiden. Win-raten steg fra 17 % til 24 %.</p>
  <p><strong>Investering:</strong> 13.000 kr. opsætning + 250 kr./md. driftsomkostninger<br>
  <strong>Effekt:</strong> Win-rate steg med 7 procentpoint × 150 leads × 35.000 kr. gennemsnitlig ordreværdi = 3.675.000 kr./år i øget omsætningspotentiale<br>
  <strong>Tilbagebetalingstid:</strong> Under 2 uger</p>
</div>

<div class="section-label">Næste skridt</div>
<h2>Sådan kommer du i gang</h2>

<ol class="next-steps">
  <li>Gennemgå de seneste 20–30 vundne deals i dit CRM og find fællestrækkene: hvilken branche, størrelse og rolle? Det er din ICP — og fundamentet for scoring-modellen. Det tager typisk 60–90 minutter og er den vigtigste forberedelse.</li>
  <li>Tjek om dit CRM understøtter lead scoring-felter og om dine lead-datafelter er konsistent udfyldt. En scoring-model kræver strukturerede data at arbejde med — halvfyldte kontakter giver upræcise scores.</li>
  <li>Kontakt os med din ICP-beskrivelse og dit CRM-system — vi estimerer opsætningstid og pris konkret og vurderer om din datakvalitet er klar til automatiseret scoring. <a href="/#contact">Send din opgave her</a>.</li>
</ol>

<div class="section-label">Typiske spørgsmål</div>

<div class="faq-details">
  <details>
    <summary>Hvad hvis vores leads ikke er virksomheder men privatpersoner?</summary>
    <p>B2C lead scoring er anderledes end B2B fordi der ikke er firmografisk data at berige med. I stedet scorer vi primært på adfærd: hvilke sider besøgt, hvilke produkter kigget på, emailengagement og tid siden første besøg. Clearbit Reveal (hjemmeside-genkendelse) og AI-baseret adfærdsanalyse kan supplere. B2C scoring er fuldt mulig — logikken er blot anderledes end B2B.</p>
  </details>
  <details>
    <summary>Hvad hvis vores ICP ændrer sig over tid?</summary>
    <p>Scoring-modellen kan opdateres løbende. Vi anbefaler kvartalsvis gennemgang: er de leads der scorer højt faktisk de der konverterer bedst? Scorer vi noget for lavt eller for højt? Det er en løbende kalibrering baseret på faktiske konverteringsdata. Make.com-flowet kan opdateres hurtigt — typisk under én time at justere scoring-vægte og tilføje nye kriterier.</p>
  </details>
  <details>
    <summary>Kan AI hjælpe med at kvalificere leads?</summary>
    <p>Ja. Vi kan bygge et AI-trin ind der analyserer leadets formular-besvarelse og email-kommunikation og genererer en kvalificeringsrapport: sandsynlig use case, estimeret budget-størrelse baseret på virksomhedsprofil, og anbefalede åbningsspørgsmål til det første salgsmøde. Det er særlig værdifuldt for komplekse B2B-løsninger hvor kontekstforståelse er afgørende for salgssucces.</p>
  </details>
</div>

<p>Se også: <a href="/automatisering/lead-scoring-hubspot/">Automatisk lead scoring i HubSpot med AI</a>, <a href="/automatisering/crm-opdatering-fra-email/">Opdater CRM automatisk baseret på emails</a> og <a href="/automatisering/email-lead-nurturing-sekvens/">Automatisk email nurturing-sekvens til leads</a>.</p>
