---
title: "Kan man automatisere dataoverførsel mellem systemer? Ja — og det er nemmere end du tror"
slug: "kan-man-automatisere-dataoverfoersel"
process: "dataoverførsel mellem systemer"
tools:
  - "Make.com"
  - "n8n"
  - "Webhooks / REST API"
  - "Google Sheets / Airtable"
meta_description: "Ja, du kan automatisere dataoverførsel mellem systemer. Se hvordan det fungerer, hvad det kræver, og hvad en fiktiv virksomhed sparede ved at stoppe manuel kopiering af data."
layout: kan-man.njk
---

<div class="answer-box">
  <span class="answer-badge">Kort svar</span>
  <p><strong>Ja.</strong> Hvis to systemer begge har en API eller webhook-understøttelse, kan data flytte sig automatisk og i realtid mellem dem — uden at nogen manuelt kopierer, eksporterer eller importerer noget som helst.</p>
</div>

<div class="section-label">Sådan fungerer det</div>
<h2>Processen fra dataoprindelse til destinationssystem</h2>

<div class="flow-diagram">
  <div class="flow-step"><span>System A</span>Ny data oprettes eller opdateres</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><span>Trigger</span>Webhook eller tidsbaseret polling</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><span>Make.com</span>Modtager, transformer og renser data</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><span>Validering</span>Tjekker format og integritet</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><span>System B</span>Data oprettes eller opdateres korrekt</div>
</div>

<p>Kernen i dataoverførselsautomatisering er en Make.com-flow der lytter på ændringer i ét system og sender dem videre til et andet. Det kan ske i realtid via webhooks — System A sender automatisk en notifikation til Make.com i det øjeblik data ændres — eller via polling, hvor Make.com tjekker System A hvert femte eller tiende minut for at se om der er nyt.</p>

<p>Undervejs transformerer og validerer flowet data: mapper felter fra System A's navngivning til System B's format, konverterer datoformater, renser ugyldige tegn og sikrer at obligatoriske felter er til stede. Fejler et trin, logges det og du notificeres — data går aldrig tabt.</p>

<div class="section-label">Forudsætninger</div>
<h2>Hvad kræver det af din virksomhed</h2>

<ul class="req-list">
  <li><strong>At begge systemer har en API eller webhook:</strong> De fleste moderne forretningssystemer — CRM, webshops, regnskabssystemer, HR-systemer, marketing-platforme — har dette. Ældre systemer fra 2010 og tidligere er undtagelsen. Vi undersøger altid kompatibiliteten specifikt inden vi giver et tilbud. Mangler et system API, kan filbaseret integration (CSV via SFTP eller email) bruges som alternativ.</li>
  <li><strong>Klarhed over hvilke data der skal overføres:</strong> Hvilke felter fra System A skal matche hvilke felter i System B? Er alle felter navngivet ens, eller kræver det en oversættelsestabel? Jo klarere feltmapping er defineret inden vi bygger, jo hurtigere er opsætningen. Et simpelt "Fra → Til"-dokument er tilstrækkeligt.</li>
  <li><strong>Klarhed over duplikat-håndtering:</strong> Hvad sker der hvis det samme objekt forsøges oprettet to gange? Skal System B opdatere den eksisterende post eller oprette en ny? Det er et af de spørgsmål vi altid afklarer inden vi bygger — forkert duplikathåndtering er den hyppigste årsag til datainkonsistens i automatiseringsflows.</li>
  <li><strong>API-credentials til begge systemer:</strong> API-nøgler eller OAuth-adgang til begge systemer skal skaffes inden opsætning. Det er typisk en 10-minutters opgave i hvert systems indstillinger — vi guider dig igennem det.</li>
</ul>

<div class="section-label">Hvad du sparer</div>
<h2>Tid og ressourcer — før og efter</h2>

<div class="before-after">
  <div class="before">
    <span class="ba-label">Før</span>
    <p>30–120 minutter dagligt på at eksportere, importere og kopiere data manuelt</p>
    <p>Data er aldrig synkroniseret i realtid — altid forsinket</p>
    <p>Fejlrate på 2–5 % ved manuel datakopiering</p>
    <p>Medarbejdere arbejder med forældede data fordi synkronisering ikke er sket</p>
  </div>
  <div class="after">
    <span class="ba-label">Efter</span>
    <p>Nul manuel tid til dataoverførsel — alt sker automatisk</p>
    <p>Data synkroniseres i realtid eller hvert 5–10 minut</p>
    <p>Nul manuelle fejl i dataoverførslen — validering sikrer korrekthed</p>
    <p>Alle medarbejdere arbejder med opdaterede data på tværs af systemer</p>
  </div>
</div>

<div class="section-label">Eksempel</div>

<div class="case-study">
  <span class="case-label">Eksempel — fiktiv case</span>
  <h3>Grossisten Midtjysk Indkøb: tre daglige synkroniseringer erstattet af ét realtids-flow</h3>
  <p>Midtjysk Indkøb bruger tre systemer dagligt: et lager- og indkøbssystem (Visma), et webshop-system (WooCommerce) og et regnskabssystem (e-conomic). Lagermedarbejder Finn brugte 90 minutter om dagen på at eksportere lagerstatus fra Visma og importere til WooCommerce, og eksportere ordrer fra WooCommerce og importere til e-conomic. To eksporter og to importer — og altid timers forsinkelse, hvilket betød kunder der bestilte varer der var udsolgt.</p>
  <p>Vi opsatte to Make.com-flows: det første synkroniserer lagerstatus fra Visma til WooCommerce hvert 10. minut via API, det andet overfører WooCommerce-ordrer til e-conomic i realtid via webhook. Ingen eksporter, ingen imports, ingen forsinkelser. Varer der udsolgte fra lageret forsvandt fra webshoppen inden for minutter.</p>
  <p><strong>Investering:</strong> 9.000 kr. opsætning + 180 kr./md. driftsomkostninger<br>
  <strong>Frigjort tid:</strong> 90 min/dag × 250 arbejdsdage × 350 kr./time = 131.250 kr./år<br>
  <strong>Tilbagebetalingstid:</strong> Under 4 uger</p>
</div>

<div class="section-label">Næste skridt</div>
<h2>Sådan kommer du i gang</h2>

<ol class="next-steps">
  <li>Lav en simpel liste over de manuelle dataoverførsler du eller dine medarbejdere udfører regelmæssigt: fra hvilket system, til hvilket system, hvilke felter, og hvor ofte. Det er din analyse af automatiseringspotentialet — typisk tager det 30 minutter at kortlægge.</li>
  <li>Tjek om begge systemer har en API ved at søge på "[system navn] API" eller "[system navn] webhooks" i systemets dokumentation. Har begge en API, er dataoverførslen teknisk mulig at automatisere.</li>
  <li>Kontakt os med din liste over manuelle overførsler og dine systemer — vi vurderer konkret hvad der kan automatiseres og estimerer pris og opsætningstid. <a href="/#contact">Send din opgave her</a>.</li>
</ol>

<div class="section-label">Typiske spørgsmål</div>

<div class="faq-details">
  <details>
    <summary>Hvad hvis det ene system ikke har en API?</summary>
    <p>Der er alternativer til en direkte API-integration: email-parsing (flowet læser automatisk emails og udtrækker data), filbaseret integration via SFTP (systemet eksporterer CSV-filer på en tidsplan, Make.com indlæser dem), eller web-scraping ved simple sider. Alle tre er mere sårbare end direkte API-integration, men kan fungere godt som midlertidig løsning mens du overvejer at skifte til et system med bedre API-support.</p>
  </details>
  <details>
    <summary>Hvad sker der hvis et system er utilgængeligt?</summary>
    <p>Make.com har indbygget retry-logik: hvis et system er midlertidigt utilgængeligt, forsøger flowet automatisk igen med eksponentiel backoff — typisk tre til fem forsøg over en time. Data sættes i kø og behandles når forbindelsen er reetableret. Vedvarer nedetiden, notificeres du med detaljer om, hvad der afventer behandling. Ingen data går tabt.</p>
  </details>
  <details>
    <summary>Kan vi synkronisere historiske data bagudrettet?</summary>
    <p>Ja. Ud over at sætte et fremadrettet flow op, kan vi lave en engangs-migration af historiske data fra System A til System B. Det er typisk en separat opgave fra den løbende automatisering og prissættes separat. Migrationer af historiske data kræver særlig opmærksomhed på duplikatlogik og feltmapping for at sikre at eksisterende data i System B ikke overskrives forkert.</p>
  </details>
</div>

<p>Se også: <a href="/automatisering/data-sync-mellem-systemer/">Automatisk datasynkronisering mellem systemer</a>, <a href="/automatisering/zapier-til-make-migration/">Migrer dine Zapier-flows til Make.com</a> og <a href="/automatisering/webhook-monitor-med-alerts/">Overvåg webhooks og få alerts ved fejl</a>.</p>
