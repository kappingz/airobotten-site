---
title: "Shopify Flow: automatiser din webshop gratis"
slug: "shopify-flow"
tool: "Shopify Flow"
category: "E-commerce automatisering"
meta_description: "Shopify Flow er Shopifys gratis automatiseringsværktøj. Automatiser lagerstyring, ordrehåndtering og kundesegmentering direkte i Shopify uden Make.com."
layout: vaerktoj.njk
---

<p>Shopify Flow er Shopifys eget no-code automatiseringsværktøj der er inkluderet gratis i Shopify-planer. Det lader dig bygge automatiseringer direkte i din webshop — uden at forlade Shopify og uden at betale for Make.com til simple Shopify-specifikke opgaver.</p>

<div class="section-label">Hvad er Shopify Flow?</div>
<h2>Shopify Flow dansk forklaring</h2>

<p>Shopify Flow fungerer med trigger-betingelse-aktion-logik: "Når X sker, tjek om Y er opfyldt, gør derefter Z." Eksempel: "Når en ordre placeres, tjek om ordrebeløbet er over 1.000 kr., tilføj i så fald kunden til segmentet 'VIP-kunder'." Flowet bygges i en visuel editor direkte i Shopify admin.</p>

<p>Flow er primært stærkt til Shopify-interne automatiseringer: lagerhåndtering, kundesegmentering, ordrerouting og marketing-tagging. For flows der skal kommunikere med systemer uden for Shopify (fx bogføring, SMS-gateways, CRM) er Make.com eller Zapier stadig nødvendige. Shopify Flow er det første sted du bør kigge inden du bygger en ekstern integration.</p>

<div class="section-label">Use cases</div>
<h2>Hvad kan Shopify Flow bruges til i din webshop?</h2>

<ul>
  <li><strong>Automatisk VIP-segmentering:</strong> Kunder der har købt for over 5.000 kr. i alt, tagges automatisk som "VIP" og får adgang til en skjult rabat-kollektion. Taggingen sker ved hvert køb uden manuel indgriben.</li>
  <li><strong>Lageralarm og skjul af udsolgte produkter:</strong> Når lagerbeholdningen på et produkt falder til nul, skjules produktet automatisk på webshoppen og en intern email sendes til indkøbsansvarlig med produktnavn og varenummer.</li>
  <li><strong>Ordrerouting til rette lager:</strong> En webshop med to fysiske lagre i henholdsvis Jylland og Sjælland router automatisk ordrer til nærmeste lager baseret på kundens postnummer.</li>
  <li><strong>Risikobaseret ordresuspension:</strong> Ordrer der Shopify vurderer som "høj risiko" for svindel, sættes automatisk på hold og en intern email sendes til ejeren til manuel gennemgang — ingen mistænkelige ordrer sendes til behandling automatisk.</li>
</ul>

<div class="section-label">Fordele og ulemper</div>
<h2>Shopify Flow integration og pris — en ærlig vurdering</h2>

<div class="before-after">
  <div class="before">
    <h3>Ulemper</h3>
    <ul>
      <li>❌ Kun tilgængeligt på Shopify Basic og opefter — ikke på Starter-planen</li>
      <li>❌ Begrænset til Shopify-interne handlinger og udvalgte app-integrationer</li>
      <li>❌ Kan ikke erstatte Make.com til flows der involverer systemer uden for Shopify</li>
      <li>❌ Debugging er begrænset — flow-loggen er simpel sammenlignet med Make.com</li>
    </ul>
  </div>
  <div class="after">
    <h3>Fordele</h3>
    <ul>
      <li>✅ Gratis — inkluderet i alle Shopify-planer (Basic og op)</li>
      <li>✅ Ingen tredjepartsintegration kræves til Shopify-interne flows</li>
      <li>✅ Officielt Shopify-produkt — stabil og godt vedligeholdt</li>
      <li>✅ Voksende bibliotek af pre-byggede flow-skabeloner</li>
    </ul>
  </div>
</div>

<div class="section-label">Shopify Flow pris</div>
<h2>Hvad koster Shopify Flow for en dansk webshop?</h2>

<div class="price-box">
  <p><strong>Inkluderet gratis</strong> i alle Shopify-planer fra Basic og opefter.</p>
  <p><strong>Shopify Basic (29 USD/md.):</strong> Shopify Flow inkluderet. Den plan de fleste SMV-webshops starter på. Ca. 210 kr./md.</p>
  <p><strong>Shopify (79 USD/md.):</strong> Shopify Flow + lavere transaktionsgebyrer. Ca. 575 kr./md.</p>
  <p><strong>Advanced (299 USD/md.):</strong> Avancerede rapporter og laveste transaktionsgebyrer. Ca. 2.175 kr./md.</p>
  <p><strong>Bemærk:</strong> Shopify Flow er ikke tilgængeligt på Shopify Starter-planen (5 USD/md.). Betaler du for Shopify, er Flow allerede inkluderet.</p>
</div>

<div class="section-label">Kom i gang</div>
<h2>Sådan starter du med Shopify Flow på 30 minutter</h2>

<ol class="steps">
  <li><strong>Gå til Shopify Flow i admin.</strong> I din Shopify admin, gå til Apps → Flow. Shopify Flow er forudinstalleret og kræver ingen yderligere installation.</li>
  <li><strong>Udforsk skabelonbiblioteket.</strong> Flow har et bibliotek med pre-byggede skabeloner opdelt efter kategori (lager, ordrer, kunder, marketing). Start med en skabelon der matcher dit behov — rediger den frem for at bygge fra bunden.</li>
  <li><strong>Byg dit første flow fra bunden.</strong> Klik "Opret workflow". Vælg trigger (fx "Ordre oprettet"), tilføj en betingelse (fx "Ordrebeløb er over 500 kr."), tilføj en aktion (fx "Tilføj tag til kunde"). Det tager fem minutter.</li>
  <li><strong>Test flowet.</strong> Brug "Forhåndsvisning"-funktionen i Flow-editoren til at simulere hvad der sker med en specifik ordre eller kunde. Verificer at betingelserne opfanges korrekt inden du aktiverer flowet.</li>
  <li><strong>Aktiver og overvåg.</strong> Tænd for flowet. Under "Flow-aktivitet" kan du se alle kørsler og om de lykkedes eller fejlede. Flow sender ikke notifikationer ved fejl — tjek aktivitets-loggen jævnligt eller kombiner med Make.com til fejlvarsling.</li>
</ol>

<div class="section-label">Eksempel</div>

<div class="case-study">
  <span class="case-label">Eksempel — fiktiv case</span>
  <h3>Sportsbutikken ActiveWear: stockouts elimineret med automatisk lageralarm</h3>
  <p>ActiveWear sælger sportstøj online med 340 aktive varenumre. Udsolgte varer forblev synlige på hjemmesiden i timevis fordi ejeren manuelt tjekkede lager to gange om dagen. Kunder bestilte udsolgte varer og måtte afvises — tre til fire gange om ugen med tilhørende negativ oplevelse.</p>
  <p>Vi opsatte to Shopify Flow-workflows: det første skjuler produkter automatisk når lagerbeholdningen rammer nul og sender en email til indkøbsansvarlig. Det andet viser produktet igen automatisk når lageret opdateres til over nul. Begge flows tager under to sekunder fra trigger til handling.</p>
  <p><strong>Resultat:</strong> Nul kundeordrer på udsolgte varer i de seneste fire måneder. Nul driftsomkostning ud over Shopify-abonnementet. Opsætningstid: én time.</p>
</div>

<div class="pro-tip">
  <p><strong>Pro-tip:</strong> Kombiner Shopify Flow med Make.com til at bygge flows der starter i Shopify men slutter uden for Shopify. Shopify Flow kan sende en HTTP-request til Make.com som webhook-trigger. Eksempel: Flow registrerer en ny VIP-kunde (ordre over 5.000 kr.) og sender data til Make.com, der opretter et CRM-deal i Pipedrive og sender en Slack-besked. Du bruger Flow til det den er god til (Shopify-logik) og Make.com til resten.</p>
</div>

<div class="section-label">Typiske spørgsmål</div>

<div class="faq-details">
  <details>
    <summary>Er Shopify Flow på dansk?</summary>
    <p>Shopify Flow's interface følger dit Shopify-sprogs indstilling. Shopify's admin har en dansk version, og Flow-editoren er oversat til dansk. Det er en af de mere tilgængelige automatiseringsplatforme for dansk-talende virksomhedsejere.</p>
  </details>
  <details>
    <summary>Kan Shopify Flow bruges uden teknisk erfaring?</summary>
    <p>Ja — Shopify Flow er designet til webshop-ejere, ikke udviklere. Den visuelle editor med pre-byggede skabeloner gør det muligt at opsætte de mest almindelige flows på 10–15 minutter uden teknisk baggrund. Komplekse flows med HTTP-requests og avancerede betingelser kræver mere hjælp.</p>
  </details>
  <details>
    <summary>Hvad sker der med mine data i Shopify Flow?</summary>
    <p>Shopify Flow er en integreret del af Shopify-platformen og er underlagt Shopifys databeskyttelsespolitik. Data forlader ikke Shopify-platformen medmindre dit flow indeholder en HTTP-request til en ekstern tjeneste. Shopify er GDPR-compliant og tilbyder EU-datalagring.</p>
  </details>
  <details>
    <summary>Kan jeg prøve Shopify Flow gratis?</summary>
    <p>Shopify Flow er gratis for alle Shopify Basic-brugere og op. Shopify tilbyder en tre-dages gratis trial efterfulgt af tre måneder til 1 kr./md. for nye brugere. Dermed kan du teste Shopify Flow praktisk talt gratis i tre måneder inden du forpligter dig til fuldt abonnement.</p>
  </details>
</div>

<p>Se også: <a href="/pris/hvad-koster-shopify-automatisering/">Hvad koster Shopify automatisering?</a>, <a href="/kan-man/kan-man-automatisere-ordrebekraeftelse/">Kan man automatisere ordrebekræftelse?</a> og <a href="/kan-man/kan-man-automatisere-lagerstyring/">Kan man automatisere lagerstyring?</a></p>
