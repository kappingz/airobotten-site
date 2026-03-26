---
title: "Kan man automatisere lagerstyring? Ja — og det er nemmere end du tror"
slug: "kan-man-automatisere-lagerstyring"
process: "Lagerstyring"
tools:
  - "Make.com"
  - "Shopify / WooCommerce"
  - "Gmail / Slack"
  - "Google Sheets"
meta_description: "Ja, lagerstyring kan automatiseres. Automatiske genbestillinger, lav-lager-advarsler og synkronisering på tværs af salgskanaler. Se hvad en webshop med 2.000 SKU'er sparede."
layout: kan-man.njk
---

<div class="answer-box">
  <span class="answer-badge">Kort svar</span>
  <p><strong>Ja.</strong> Systemet overvåger løbende dit lager, sender automatisk genbestillingsordre til leverandøren når beholdningen rammer dit minimum, og synkroniserer lagerstatus på tværs af alle dine salgskanaler i realtid.</p>
</div>

<div class="section-label">Sådan fungerer det</div>
<h2>Fra lagerniveau til genbestilt vare — automatisk</h2>

<div class="flow-diagram">
  <div class="flow-step"><span>Overvågning</span>Lagerstand tjekkes løbende pr. SKU</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><span>Trigger</span>Beholdning rammer minimum-niveau</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><span>Ordre</span>Genbestillingsmail eller EDI-ordre til leverandør</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><span>Sync</span>Lagertal opdateres på alle salgskanaler</div>
</div>

<p>Kernen er en simpel tabel: pr. SKU definerer du et minimums-niveau (hvornår skal der genbestilles?) og en genbestillingsmængde (hvor meget?). Det er de parametre der driver alt automatisk.</p>

<p>Når en ordre trækker lageret under minimum, sender systemet automatisk en genbestillingsmail til leverandøren med produkt, antal og leveringsadresse. Ønsker du godkendelse inden ordren sendes, tilføjer vi et review-trin. Modtages varen, opdateres lagertallet automatisk baseret på leveringskvittering eller manuelt input.</p>

<p>Synkronisering på tværs af kanaler — Shopify, WooCommerce, Amazon, fysisk butik — sker i realtid, så du ikke oversælger og lover leveringer du ikke kan holde.</p>

<div class="section-label">Forudsætninger</div>
<h2>Hvad der skal være på plads</h2>

<ul class="req-list">
  <li><strong>Digitalt lagersystem:</strong> Shopify, WooCommerce, Linnworks eller Excel med produktkoder. Papirlager kan ikke automatiseres — men er du der endnu, hjælper vi med at flytte dig til et digitalt system som første skridt.</li>
  <li><strong>Definerede min/max-niveauer pr. SKU:</strong> du skal bestemme hvornår der skal genbestilles og med hvor meget. Har du mange SKU'er, sætter vi en simpel beregningsmodel op baseret på din gennemsnitlige omsætningshastighed.</li>
  <li><strong>Leverandørers email-adresse eller EDI-forbindelse:</strong> de fleste leverandører accepterer email-bestillinger i et fastlagt format. EDI er mere avanceret og kræver leverandørens medvirken.</li>
  <li><strong>Produktkoder der er ensartede på tværs af kanaler:</strong> synkronisering på tværs af Shopify og WooCommerce kræver at samme vare har samme SKU begge steder. Er det kaotisk i dag, bruger vi tid på oprydning inden opsætning.</li>
</ul>

<div class="section-label">Hvad du sparer</div>
<h2>Tid og fejl — hvad ændrer sig</h2>

<div class="before-after">
  <div class="before">
    <span class="ba-label">Før</span>
    <p>5–10 timer om ugen på manuel lagertjek og genbestilling</p>
    <p>Oversalg og udsolgte varer på grund af forsinkede opdateringer</p>
    <p>Genbestillinger glemmes i travle perioder</p>
  </div>
  <div class="after">
    <span class="ba-label">Efter</span>
    <p>1–2 timer om ugen til at reviewe alerts og godkende genbestillinger</p>
    <p>Realtids-synkronisering eliminerer oversalg</p>
    <p>Automatisk genbestilling — selv i din ferie</p>
  </div>
</div>

<p>Oversalg er en undervurderet omkostning. En enkelt ordre på en udsolgt vare koster typisk 100–300 kr. i ekstra håndtering, kundeservice og eventuelt tilbagebetaling. Ved 10 oversalg om måneden er det 1.000–3.000 kr. direkte spildt — plus tabte kunder der ikke vender tilbage.</p>

<div class="section-label">Eksempel</div>

<div class="case-study">
  <span class="case-label">Eksempel — fiktiv case</span>
  <h3>Nordic Sport Supply: fra fuldtidsopgave til 2 timers ugentlig oversight</h3>
  <p>Nordic Sport Supply sælger sportsudstyr via Shopify og en fysisk butik med til sammen 2.000 aktive SKU'er. Indkøbsansvarlig Martin brugte 8–10 timer om ugen på at tjekke lagerbeholdninger, identificere varer der skulle genbestilles, og manuelt sende bestillinger til 12 leverandører. I højsæsonen var det endnu mere.</p>
  <p>Vi opsatte et system der overvåger alle 2.000 SKU'er løbende. For hver SKU er der defineret et minimumsniveau baseret på de seneste 90 dages omsætningshastighed. Når niveauet rammes, genereres en genbestillingsmail til den relevante leverandør — automatisk, med korrekt format og antal.</p>
  <p>Martin modtager en daglig sammenfatning over aktiverede genbestillinger og kan godkende eller afvise med ét klik. Shopify og butikslageret synkroniseres i realtid.</p>
  <p><strong>Tidsforbrug:</strong> Fra 8–10 timer til 2 timer om ugen<br>
  <strong>Oversalg:</strong> Reduceret med 94 % første kvartal efter implementering<br>
  <strong>Glemt genbestilling:</strong> Nul siden opsætning</p>
</div>

<div class="section-label">Næste skridt</div>
<h2>Tre konkrete handlinger</h2>

<ol class="next-steps">
  <li>Lav en liste over dine 20 vigtigste SKU'er og definer et minimumslager for dem. Det er et godt første skridt mod automatisering — og giver dig klarhed over din beholdning allerede i dag.</li>
  <li>Tjek om dine salgskanaler bruger ensartede produktkoder. Gør de ikke det, er det det vigtigste at rydde op i inden vi kan synkronisere dem.</li>
  <li><a href="/#contact">Beskriv dit lageropset til os</a> — antal SKU'er, salgskanaler og leverandørantal. Vi estimerer hvad det koster og hvad du sparer. Se også <a href="/automatisering/lager-alarm-lav-beholdning/">Automatisk lager-alarm ved lav beholdning</a> og <a href="/automatisering/automatisk-lageropdatering-tvaers-af-salgskanaler/">Lageropdatering på tværs af salgskanaler</a>.</li>
</ol>

<div class="section-label">Typiske spørgsmål</div>

<div class="faq-details">
  <details>
    <summary>Hvad hvis min nuværende software ikke understøttes?</summary>
    <p>Shopify, WooCommerce, Magento og de fleste populære e-commerce-platforme understøttes direkte. Bruger du et ERP-system som Navision, Microsoft Business Central eller et branchespecifikt system, undersøger vi API-kompatibiliteten specifikt. De fleste systemer har enten en direkte Make.com-integration eller en generisk API vi kan bruge. I det sjældne tilfælde at ingen integration er mulig, kan CSV-eksport/import bruges som midlertidig løsning.</p>
  </details>
  <details>
    <summary>Hvor lang tid tager opsætningen?</summary>
    <p>For en standard webshop med ét lager og én leverandørtype: 4–6 arbejdsdage. For virksomheder med mange SKU'er, flere salgskanaler og mange leverandører kan det tage 2–4 uger, primært fordi vi bruger tid på at kortlægge og rydde op i eksisterende produktdata. Vi starter altid med en pilotopsætning på 10–20 SKU'er og udvider gradvist.</p>
  </details>
  <details>
    <summary>Kan jeg se det inden jeg betaler?</summary>
    <p>Ja. Vi tilbyder et gratis 30-minutters opkald hvor vi gennemgår din situation og vurderer hvad der er muligt. Inden vi sætter noget op, modtager du et konkret tilbud med scope, pris og estimeret ROI. Og inden flowet går live på rigtige data, tester vi det i et isoleret miljø og viser dig præcis hvad der sker step by step.</p>
  </details>
</div>

<p>Se også: <a href="/automatisering/lager-alarm-lav-beholdning/">Automatisk lager-alarm ved lav beholdning</a>, <a href="/automatisering/automatisk-lageropdatering-tvaers-af-salgskanaler/">Automatisk lageropdatering på tværs af salgskanaler</a> og <a href="/automatisering/pre-order-og-backorder-haandtering/">Pre-order og backorder-håndtering</a>.</p>
