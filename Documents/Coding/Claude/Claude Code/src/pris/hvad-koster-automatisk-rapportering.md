---
title: "Hvad koster automatisk rapportering? Priser og hvad du får for pengene"
slug: "hvad-koster-automatisk-rapportering"
service: "Automatisk rapportering"
price_from: "3.000"
price_to: "22.000"
meta_description: "Automatisk rapportering koster 3.000–22.000 kr. afhængigt af datakilder og frekvens. Se hvad der er inkluderet, hvad der driver prisen og hvad du typisk sparer om måneden."
layout: pris.njk
---

<div class="section-label">Hvad du får</div>
<h2>Hvad er inkluderet i prisen</h2>

<p>Automatisk rapportering handler om at gøre det der alligevel sker — at data samles, formateres og sendes — til noget der sker af sig selv. I stedet for at du bruger en time hver mandag på at hente tal fra fire systemer, samle dem i et ark og sende dem til ledelsen, gør et flow det for dig — hurtigt, korrekt og konsekvent.</p>

<ul class="benefit-list">
  <li>Kortlægning af dine eksisterende rapporteringsrutiner og identificering af de der tager mest tid eller sker oftest</li>
  <li>Design og opsætning af Make.com-flow der henter data fra dine systemer på definerede tidspunkter</li>
  <li>Dataaggregering og beregninger: omsætning, konverteringsrate, lagerstatus, annonceforbrug — hvad din rapport skal indeholde</li>
  <li>Formatering og levering: rapporten sendes som email, Slack-besked, Google Sheets-opdatering eller kombinationer</li>
  <li>AI-genereret kommentar der beskriver de vigtigste ændringer siden sidst — ikke blot tal, men kontekst</li>
  <li>30 dages monitorering efter go-live med justeringer inkluderet</li>
</ul>

<div class="section-label">Hvad påvirker prisen</div>
<h2>Fire faktorer der rykker prisen</h2>

<p>Automatisk rapportering er et af de flows med lavest indgangsbarriere — men det kan også blive komplekst. Her er hvad der afgør prisen:</p>

<ul class="factor-list">
  <li>
    <strong>Antal datakilder der skal samles</strong>
    En rapport der kun henter fra ét system — for eksempel en daglig Shopify-omsætningsrapport til Slack — er enkel og billig. En rapport der kombinerer Shopify-salg, Google Ads-forbrug, lagerdata og CRM-aktivitet kræver fire separate integrationer og en aggregeringslogik der sammensætter dem korrekt. Tommelfingerregel: hver ekstra datakilde tilføjer 1.500–3.500 kr.
  </li>
  <li>
    <strong>Frekvens og tidsstyring</strong>
    En ugentlig rapport er enkel. En rapport der kører fem gange om dagen på tværs af tidszoner og tilpasser sig weekender og helligdage kræver mere konfiguration. De fleste SMV-kunder har god nytte af daglige eller ugentlige rapporter — og det er typisk i den lave ende af prisskalaen.
  </li>
  <li>
    <strong>AI-kommentar inkluderet eller ej</strong>
    En rapport der blot samler tal er én ting. En rapport der automatisk fremhæver de tre vigtigste ændringer siden sidst ("Annonceforbrug steg 22 % — konverteringsrate faldt 8 %") kræver et ekstra AI-trin i flowet. Det tilføjer typisk 2.000–3.500 kr. til opsætningsprisen, men er for mange den del der giver størst ledelsesmæssig værdi.
  </li>
  <li>
    <strong>Leveringsformat og modtagere</strong>
    Email til én modtager er simpelt. Et Looker Studio-dashboard opdateret i realtid med rollebaseret adgang til seks ledere er komplekst. Vi hjælper med at vælge det format der passer til jeres organisation — ikke altid det mest avancerede, men det der faktisk bruges.
  </li>
</ul>

<div class="section-label">Den skjulte pris</div>
<h2>Hvad koster manuel rapportering</h2>

<div class="cost-box">
  <h3>Beregning: ugentlig manuel rapportering i en SMV</h3>
  <p>Tid brugt på at forberede og sende den ugentlige lederrapport: <strong>2,5 timer</strong></p>
  <p>Rapporter om ugen i alt (salg, marketing, drift): <strong>3</strong></p>
  <p>Intern timeværdi (marketingmedarbejder eller controller): <strong>400 kr./time</strong></p>
  <span class="cost-total">156.000 kr./år i manuel rapporteringsarbejde</span>
  <p>Hertil kommer den skjulte pris ved forsinkede beslutninger. Ledelse der modtager data én uge for sent handler én uge for sent. Et automatiseret flow leverer tal om morgenen — ikke fredag eftermiddag efter at ugen er slut og vinduet for korrektion er lukket.</p>
</div>

<div class="section-label">Eksempel</div>

<div class="case-study">
  <span class="case-label">Eksempel — fiktiv case</span>
  <h3>Byggefirmaet Hansen & Krog: tre ugerapporter erstattet af ét automatiseret flow</h3>
  <p>Byggefirmaet Hansen &amp; Krog har 18 ansatte og tre ledere der hver modtog sin ugentlige rapport manuelt forberedt af kontorassistenten Dorthe. Dorthes fredag eftermiddage gik med at trække tal fra e-conomic, projektlisten i Notion og timesedlerne — samle dem i tre separate Excel-ark og sende dem på email. Det tog 4–5 timer om ugen.</p>
  <p>Vi opsatte et Make.com-flow der kører fredag kl. 07.00: henter faktureret beløb fra e-conomic, projektfremgang fra Notion og timeforbrug fra timeregistreringssystemet, beregner avancer og sender automatisk en formateret email med AI-genereret resumé til de tre ledere. Dorthe reviewer kl. 08.00 og sender videre med ét klik.</p>
  <p><strong>Investering:</strong> 8.500 kr. opsætning + 180 kr./md. driftsomkostninger<br>
  <strong>Frigjort tid:</strong> 4 timer/uge × 400 kr. × 50 uger = 80.000 kr./år<br>
  <strong>Tilbagebetalingstid:</strong> Under 6 uger</p>
</div>

<div class="section-label">Typiske spørgsmål</div>
<h2>Spørgsmål om automatisk rapportering og pris</h2>

<div class="faq-details">
  <details>
    <summary>Hvad hvis tallene i rapporten er forkerte?</summary>
    <p>Vi bygger altid et validerings-trin ind: flowet tjekker om nøgletal er inden for et forventet interval og markerer afvigelser eksplicit. Falder omsætningen til nul en tirsdag, er det enten korrekt eller en integrationsfejl — flowet sender en advarsel frem for at sende en rapport med nul-tal stiltiende. Vi dokumenterer præcis hvilke checks der er indbygget, så du ved hvad systemet selv opdager og hvad der kræver din opmærksomhed.</p>
  </details>
  <details>
    <summary>Kan vi få rapporten i et andet format end email?</summary>
    <p>Ja. De mest brugte formater er: email med formateret HTML, Slack-besked med nøgletal, Google Sheets opdateret automatisk og Notion-database med historik. Vi kan kombinere formater — for eksempel en kort Slack-besked til lederen og et detaljeret Google Sheets-ark til controlleren. Formatet afgør ikke prisen væsentligt.</p>
  </details>
  <details>
    <summary>Kan rapporten tilpasses over tid?</summary>
    <p>Ja. Forretningsbehov ændrer sig, og en rapport der var relevant for seks måneder siden er måske ikke det i dag. Vi konfigurerer flowet så det er nemt at tilføje nye datakilder eller ændre hvilke KPI'er der vises. Enkle ændringer kan du selv foretage i Make.com — mere strukturelle ændringer hjælper vi med.</p>
  </details>
  <details>
    <summary>Er der bindingsperiode?</summary>
    <p>Nej. Opsætningsbetalingen er et engangsbeløb. Make.com-abonnementet har ingen bindingsperiode. Flowene er dine — fuldt dokumenterede og eksporterbare — og du kan lukke dem ned, duplicere dem eller ændre dem uden at kontakte os.</p>
  </details>
</div>

<p>Se også: <a href="/automatisering/daglig-omsaetningsrapport/">Automatisk daglig omsætningsrapport</a>, <a href="/automatisering/seo-rapport-med-ai-analyse/">Ugentlig SEO-rapport med AI-analyse</a> og <a href="/automatisering/google-ads-rapport-automatisk/">Automatisk Google Ads-rapport til dit team</a>.</p>
