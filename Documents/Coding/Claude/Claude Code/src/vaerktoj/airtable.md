---
title: "Airtable til danske virksomheder: mere end regneark"
slug: "airtable"
tool: "Airtable"
category: "Database & Automatisering"
meta_description: "Airtable er en fleksibel database med automatisering bygget ind. Perfekt til SMV'er der vil strukturere data og automatisere uden at ansætte en udvikler."
layout: vaerktoj.njk
---

<p>Airtable er et databaseværktøj der ser ud som et regneark men fungerer som en rigtig database med relationer, views og indbygget automatisering. Det er den hurtigste måde for en ikke-teknisk virksomhed at bygge brugerdefinerede interne applikationer.</p>

<div class="section-label">Hvad er Airtable?</div>
<h2>Airtable dansk forklaring</h2>

<p>Tænk på Airtable som et Google Sheet der er vokset op. I stedet for celler med tal og tekst har du felter med typer: dato, vedhæftede filer, tjeklister, formelfelter, relationer til andre databaser. En "base" i Airtable kan indeholde multiple tabeller der er linket til hinanden — præcis som en rigtig database, men med et brugervenligt interface.</p>

<p>Derudover har Airtable bygget automatisering ind direkte: "Automations" lader dig bygge triggers og actions uden at forlade platformen. Send en email når en record opdateres. Opret en Slack-besked når en ordre er markeret som leveret. Mange virksomheder bruger Airtable som både database og automatiseringsplatform.</p>

<div class="section-label">Use cases</div>
<h2>Hvad kan Airtable bruges til i din virksomhed?</h2>

<ul>
  <li><strong>Lager og produktstyring:</strong> En webshop styrer produktkataloget i Airtable: varenummer, leverandør, lagerbeholdning, kostpris og salgspris i ét overblik. Automatisk alarm via email når lagerbeholdning falder under minimum.</li>
  <li><strong>Indholdsstyring og content-kalender:</strong> Et marketingbureau planlægger alt indhold for fire kunder i ét Airtable. Status (idé, i produktion, til godkendelse, publiceret), ansvarlig, publiceringstidspunkt og links er samlet per post.</li>
  <li><strong>Kundeprojekter og leverancer:</strong> Et rekrutteringsfirma tracker alle aktive kandidater, interviews og ansættelser i Airtable. Relationsdatabasen linker kandidater til stillinger til kundevirksomheder.</li>
  <li><strong>Tilbuds- og kontraktstyring:</strong> Et rengøringsfirma registrerer alle udstedte tilbud i Airtable med status, beløb, følgedato og resultat. Månedsrapport genereres automatisk som et sammenfattet view.</li>
</ul>

<div class="section-label">Fordele og ulemper</div>
<h2>Airtable integration og pris — en ærlig vurdering</h2>

<div class="before-after">
  <div class="before">
    <h3>Ulemper</h3>
    <ul>
      <li>❌ Gratis plan begrænset til 1.000 records per base — nås hurtigt</li>
      <li>❌ Komplekse formler og views kræver tilvænning</li>
      <li>❌ Automations er begrænsede uden Team-plan</li>
      <li>❌ Kan ikke erstatte et fuldt CRM eller ERP-system</li>
    </ul>
  </div>
  <div class="after">
    <h3>Fordele</h3>
    <ul>
      <li>✅ Fleksibelt nok til næsten enhver use case</li>
      <li>✅ Powerful views: Kanban, Kalender, Galleri, Gantt uden ekstra betaling</li>
      <li>✅ Bygget-in automatisering uden Make.com/Zapier til simple flows</li>
      <li>✅ God API og integrationer med Make.com, Zapier og n8n</li>
    </ul>
  </div>
</div>

<div class="section-label">Airtable pris</div>
<h2>Hvad koster Airtable for en lille dansk virksomhed?</h2>

<div class="price-box">
  <p><strong>Gratis:</strong> Ubegrænset bases, 1.000 records per base, 1 GB storage, 100 automation-kørsler/md. Godt til test og enkle use cases.</p>
  <p><strong>Team (20 USD/seat/md.):</strong> 50.000 records per base, 5 GB storage, 25.000 automation-kørsler/md. Ca. 145 kr./seat/md. — standardplan for teams.</p>
  <p><strong>Business (45 USD/seat/md.):</strong> 125.000 records per base, 10 GB storage, avancerede admin-funktioner. Ca. 330 kr./seat/md.</p>
  <p><strong>Enterprise (fra ca. 70 USD/seat/md.):</strong> Ubegrænsede records, fuld admin-kontrol. Til større organisationer.</p>
</div>

<p>For virksomheder med store datamængder (over 50.000 records) er Airtable dyrt. Alternativt kan Make.com eller n8n bruges til at flytte data ud af Airtable til et billigere lager og kun holde aktive records i Airtable.</p>

<div class="section-label">Kom i gang</div>
<h2>Sådan starter du Airtable på 30 minutter</h2>

<ol class="steps">
  <li><strong>Opret en gratis konto</strong> på airtable.com. Du er klar til at bygge i løbet af to minutter. Start med en template fra Airtable Universe — der er hundredvis af brancherelevante templates.</li>
  <li><strong>Byg din første base.</strong> En "base" er din database. Start med at definere hvad der er dit primære objekt (produkter, kunder, projekter) og opret en tabel for det. Tilføj felter der matcher dine data.</li>
  <li><strong>Tilføj relationsfelter.</strong> Airtables styrke er relationerne. "Link to another record" forbinder to tabeller — fx kunder linket til projekter linket til fakturaer. Det er hvad der adskiller Airtable fra et almindeligt regneark.</li>
  <li><strong>Opsæt din første automation.</strong> Gå til "Automations" øverst i en base. Vælg en trigger (ny record oprettes, felt ændres, etc.) og en action (send email, HTTP-request, kør script). Ingen kodning til basale flows.</li>
  <li><strong>Del med teamet.</strong> Inviter kollegaer via email. Du kan styre adgang per base (læsning, kommentering, redigering, oprettelse). Gæster kan inviteres gratis på alle plans.</li>
</ol>

<div class="section-label">Eksempel</div>

<div class="case-study">
  <span class="case-label">Eksempel — fiktiv case</span>
  <h3>Marketingbureauet Pulse: content-produktion for seks kunder i ét system</h3>
  <p>Pulse producerer content for seks kunder: blogindlæg, sociale medier og nyhedsbreve. Projektstyringen kørte i emails og et Google Sheet der konstant var ude af sync. Det var svært at se hvad der afventede godkendelse, hvad der var forsinket og hvad der var klar til publicering.</p>
  <p>Vi opsatte en Airtable-base med tre tabeller: Kunder, Indholdskalender og Skribenter. Hvert indholdsstykke er linket til en kunde og en skribent. Status-feltet (Idé, I produktion, Til review, Godkendt, Publiceret) styrer kanban-visningen. En automation sender en email til kunden når et stykke skifter til "Til review".</p>
  <p><strong>Resultat:</strong> Reviewtiden faldt fra tre dage til seks timer (kunden notificeres straks). Ingen deadlines overset i de seneste fem måneder. Pris: Team-plan til tre seats = 435 kr./md.</p>
</div>

<div class="pro-tip">
  <p><strong>Pro-tip:</strong> Brug Airtables "Interface Designer" til at bygge en forenklet visning til kunder eller ikke-tekniske kolleger. Du bygger et interface der viser præcis de felter og views brugeren har brug for — intet mere. Kunden kan fx opdatere statussen på sit projekts tasks uden at se hele databasestrukturen. Det er en gratis funktion der gør Airtable til et professionelt klientportals-alternativ.</p>
</div>

<div class="section-label">Typiske spørgsmål</div>

<div class="faq-details">
  <details>
    <summary>Er Airtable på dansk?</summary>
    <p>Nej, Airtable's interface er på engelsk. Al tekst du selv skriver er på dansk, men selve platformen og dokumentationen er på engelsk. Der er ingen officiel dansk version, og supporten er på engelsk.</p>
  </details>
  <details>
    <summary>Kan Airtable bruges uden teknisk erfaring?</summary>
    <p>Ja — grundlæggende brug er tilgængeligt for ikke-tekniske brugere. At oprette tabeller, tilføje felter og navigere views er intuitivt. Relationsdatabaser og avancerede formler kræver mere tilvænning. Automations til simple flows (send email, opdater felt) kan opsættes af de fleste uden hjælp.</p>
  </details>
  <details>
    <summary>Hvad sker der med mine data i Airtable?</summary>
    <p>Airtable er GDPR-compliant med EU-datalagring tilgængeligt. Data krypteres i transit og på disk. Airtable tilbyder en databehandleraftale (DPA) til alle betalende kunder. Dine data kan eksporteres som CSV til enhver tid. Airtable er SOC 2 Type II-certificeret.</p>
  </details>
  <details>
    <summary>Kan jeg prøve Airtable gratis?</summary>
    <p>Ja. Den gratis plan er permanent med 1.000 records per base og basale automations. Det er tilstrækkeligt til at vurdere om Airtable løser dit behov. Den gratis plan har ingen tidsbegrænsning — du kan bruge den på ubestemt tid til enkle use cases.</p>
  </details>
</div>

<p>Se også: <a href="/sammenligning/notion-vs-airtable-danmark/">Notion vs. Airtable — hvad passer til din virksomhed?</a>, <a href="/kan-man/kan-man-automatisere-lagerstyring/">Kan man automatisere lagerstyring?</a> og <a href="/ordforklaring/hvad-er-workflow-automation/">Hvad er workflow automation?</a></p>
