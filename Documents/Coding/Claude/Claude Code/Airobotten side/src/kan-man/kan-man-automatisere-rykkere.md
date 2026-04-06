---
title: "Kan man automatisere rykkere og betalingsopfølgning?"
slug: "kan-man-automatisere-rykkere"
process: "rykkere og betalingsopfølgning"
tools:
  - "Make.com"
  - "e-conomic / Dinero / Billy"
  - "Stripe / Quickpay"
  - "SMS-gateway / email"
meta_description: "Ja, du kan automatisere rykkere og betalingsopfølgning. Se flowet og hvad en fiktiv virksomhed inddrev mere automatisk."
layout: kan-man.njk
---

<div class="answer-box">
  <span class="answer-badge">Kort svar</span>
  <p><strong>Ja.</strong> Fra en faktura er forfalden til den er betalt — eller eskaleret til inkasso — kan hele rykkerprocessen køre automatisk med eskalerende grad af alvor og konsekvent timing, uden at du behøver huske det.</p>
</div>

<div class="section-label">Sådan fungerer det</div>
<h2>Processen fra forfalden faktura til betaling</h2>

<div class="flow-diagram">
  <div class="flow-step"><span>Regnskab</span>Faktura forfalder uden betaling</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><span>Make.com</span>Opdager forfaldne fakturaer automatisk</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><span>Rykker 1</span>Venlig påmindelsesmail dag 1</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><span>Rykker 2</span>Opfølgning med rykkergebyr dag 7</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><span>Eskalering</span>SMS + intern notifikation dag 14</div>
</div>

<p>Make.com tjekker dagligt — eller på en tidsplan du definerer — om der er forfaldne fakturaer i dit regnskabssystem. For hver ubetalt faktura starter et individuelt rykkerflow: en venlig påmindelsesmail den første dag, en mere direkte opfølgning med rykkergebyr efter syv dage, og en SMS kombineret med en intern notifikation til dig efter fjorten dage.</p>

<p>Flowet tager højde for betaling undervejs: er fakturaen betalt inden rykker 2 sendes, stoppes sekvensen automatisk. Kunden modtager aldrig en rykker for en faktura der er betalt — en klassisk kilde til irritation i manuelle processer.</p>

<div class="section-label">Forudsætninger</div>
<h2>Hvad kræver det af din virksomhed</h2>

<ul class="req-list">
  <li><strong>Et regnskabssystem med API:</strong> e-conomic, Dinero, Billy og Stripe understøtter alle Make.com-integration. Flowet henter fakturastatusser direkte og opdaterer systemet automatisk når en rykker er afsendt. Bruger du et ældre system uden API, kan email-parsing bruges som alternativ.</li>
  <li><strong>Afklarede rykkerregler:</strong> Hvornår sendes rykker 1? Hvad er rykkergebyret? Hvornår eskalerer du til inkasso? Disse regler skal eksistere inden vi kan automatisere dem. Vi hjælper dig med at formulere dem, men det er jeres forretningsbeslutning.</li>
  <li><strong>En SMS-gateway til rykker 3 (valgfrit men anbefalet):</strong> SMS-rykkere har markant højere åbningsrater end email — typisk 98 % mod 20–30 % for email. Vi integrerer med Twilio, Vonage eller tilsvarende. En SMS-konto koster fra 0,05 kr. pr. besked.</li>
  <li><strong>Klarhed om undtagelser:</strong> Har du kunder der altid betaler lidt for sent men aldrig undlader at betale? Lange betalingsaftaler? Store kunder der skal håndteres med forsigtighed? Undtagelserne skal defineres eksplicit, så flowet håndterer dem korrekt frem for at sende en rykker til din bedste kunde for 500 kr.</li>
</ul>

<div class="section-label">Hvad du sparer</div>
<h2>Tid og ressourcer — før og efter</h2>

<div class="before-after">
  <div class="before">
    <span class="ba-label">Før</span>
    <p>30–60 minutter om ugen på at tjekke forfaldne fakturaer og sende rykkere manuelt</p>
    <p>Inkonsistent timing — rykkere sent fordi du var travl</p>
    <p>Glemte fakturaer der aldrig rykkedes og aldrig blev betalt</p>
    <p>Ubehag ved personlig opfølgning, som resulterede i forsinket handling</p>
  </div>
  <div class="after">
    <span class="ba-label">Efter</span>
    <p>Nul tid på rutine-rykkere — kun komplekse sager kræver din opmærksomhed</p>
    <p>Konsekvent timing uanset din kalender</p>
    <p>Ingen faktura glemmes — alle forfaldne fakturaer behandles automatisk</p>
    <p>Kortere gennemsnitlig betalingstid — konsistente rykkere virker</p>
  </div>
</div>

<div class="section-label">Eksempel</div>

<div class="case-study">
  <span class="case-label">Eksempel — fiktiv case</span>
  <h3>Bygherrerådgivning Strand & Co: gennemsnitlig betalingstid reduceret fra 42 til 26 dage</h3>
  <p>Bygherrerådgivning Strand &amp; Co fakturerer 35–50 kunder om måneden. Indehaver Thomas brugte mandag morgen på at gennemgå forfaldne fakturaer i e-conomic og sende rykkere — typisk 45–60 minutter. Alligevel gled det for sig: i travle perioder saltede rykkerne over, og to til tre fakturaer om måneden endte med at være 30+ dage overskredet inden opfølgning.</p>
  <p>Vi opsatte et Make.com-flow der kører dagligt kl. 07.30 og henter alle forfaldne fakturaer fra e-conomic. Rykker 1 sendes automatisk dag 1 som en venlig email. Rykker 2 med rykkergebyr sendes dag 7 via email. Dag 14 sendes en SMS til kunden og Thomas modtager en Slack-notifikation med de fakturaer der stadig er ubetalte og kræver hans personlige opfølgning.</p>
  <p>Den gennemsnitlige betalingstid faldt fra 42 til 26 dage. De to til tre fakturaer der månedligt saltede over til 30+ dage er nu nul.</p>
  <p><strong>Investering:</strong> 5.500 kr. opsætning + 100 kr./md. driftsomkostninger<br>
  <strong>Frigjort tid:</strong> 45 min/uge × 50 uger × 500 kr./time = 18.750 kr./år<br>
  <strong>Likviditetsgevinst:</strong> 16 dage kortere betalingstid på 35 fakturaer × 25.000 kr. gennemsnitlig faktura = bedre likviditet til en konkret forretningsværdi</p>
</div>

<div class="section-label">Næste skridt</div>
<h2>Sådan kommer du i gang</h2>

<ol class="next-steps">
  <li>Gennemgå din nuværende rykkerproces og definer reglerne præcist: hvornår sendes rykker 1, 2 og 3? Hvad er rykkergebyrerne? Hvornår eskalerer du til advokat eller inkasso? At have disse regler på papir er forudsætningen for at automatisere dem.</li>
  <li>Lav en liste over eventuelle undtagelser — kunder med særlige betalingsaftaler eller relationer der kræver personlig behandling. Flowet kan eksplicit undtage disse kunder fra automatisk rykker.</li>
  <li>Kontakt os med dit regnskabssystem og dine rykkerregler — vi estimerer opsætningstid og pris. <a href="/#contact">Send din opgave her</a>.</li>
</ol>

<div class="section-label">Typiske spørgsmål</div>

<div class="faq-details">
  <details>
    <summary>Hvad hvis en kunde har en tvist om fakturaen?</summary>
    <p>Flowet kan konfigureres til at respektere en "tvist"-markering i dit regnskabssystem: sæt en faktura i tvistkategori, og flowet springer den over automatisk. Vi anbefaler at alle tvister markeres eksplicit frem for at stoppe flowet manuelt — det sikrer at ingen faktura rykkeres mens der er en aktiv dialog om den.</p>
  </details>
  <details>
    <summary>Kan flowet sende rykkere på forskellige sprog?</summary>
    <p>Ja. Har du kunder der foretrækker engelsk, kan flowet generere engelsksprogede rykkere baseret på et sprogfelt i din kundepost. Vi definerer sproglogikken under opsætningen. De fleste danske SMV-er har kun brug for dansk, men funktionaliteten er nem at tilføje.</p>
  </details>
  <details>
    <summary>Er der en risiko for at flowet sender rykkere til forkerte kunder?</summary>
    <p>Vi bygger altid en test-fase på to til tre uger hvor flowet kører i "observationstilstand" — det viser dig hvilke rykkere det ville have sendt, men sender dem ikke. Først når du har valideret logikken aktiverer vi afsendelse. Derudover bygger vi validerings-checks ind: fakturaens forfaldsdato verificeres, betalingsstatus tjekkes igen umiddelbart inden afsendelse, og der logges fuld historik over alle rykkere.</p>
  </details>
</div>

<p>Se også: <a href="/automatisering/automatisk-rykkerprocedure/">Automatisk rykkerprocedure ved manglende betaling</a>, <a href="/automatisering/automatisk-bankafstemning-bogfoering/">Automatisk bankafstemning med bogføring i Dinero</a> og <a href="/automatisering/faktura-fra-email-til-regnskab/">Automatiser fakturahåndtering fra email til regnskab</a>.</p>
