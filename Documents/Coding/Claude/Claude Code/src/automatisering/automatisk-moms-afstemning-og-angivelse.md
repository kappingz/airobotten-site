---
layout: automatisering.njk
title: "Automatisk momsafstemning og forberedelse af momsangivelse"
meta_description: "Automatiser momsafstemning og klargøring af momsangivelse til SKAT. Momstal beregnes automatisk fra e-conomic, afstemmes og klargøres til revisor — spar timer ved momsperioden."
canonical: "https://airobotten.dk/automatisering/automatisk-moms-afstemning-og-angivelse/"
category: "Regnskab"
breadcrumb_label: "Automatisk momsafstemning"
trigger: "Momsperiode afsluttes"
result: "Momsafstemning komplet og angivelse klar til godkendelse"
problem: |
  <p>Momsangivelse er en af de mest regelret tilbagevendende administrative opgaver for danske virksomheder — og en der koster mange timer hvert kvartal eller halvår. At afstemme momsen korrekt kræver, at du trækker alle relevante bogføringsposter, beregner udgående og indgående moms separat, sikrer at alle bilag er korrekt momskonteret, og matcher totalerne mod SKATs forventede angivelse.</p>
  <p>Fejl i momsangivelsen er ikke bare irriterende — de kan medføre tillægsafgifter og i værste fald revision fra SKAT. Mange virksomheder overlader hele processen til revisor, men det er en kostbar løsning for noget der i princippet er en struktureret databehandlingsopgave, ikke en avanceret juridisk analyse.</p>
  <p>Uden automatisering opstår der ofte et hæktisk arbejde i de sidste dage af momsperioden: bogføring der ikke er helt ajour, bilag der mangler, og en revisor der skal bruge ekstra tid fordi materialet ikke er komplet. Det koster ekstra honorar og skaber unødvendig stress.</p>
solution: |
  <p>Vi bygger et Make.com-flow der ved periodens afslutning automatisk henter alle momsrelevante posteringer fra e-conomic, beregner udgående moms (salgsmoms), indgående moms (købsmoms) og nettomomsen, og sammenstiller dem i et afstemningsark i Google Sheets. Flowet tjekker for de mest almindelige fejl: manglende momskoder, posteringer på forkerte konti, og uoverensstemmelser mellem bogføring og kontoudtog.</p>
  <p>Det komplette afstemningsark sendes automatisk til din revisor med en email der indeholder en klar statusoversigt: hvad der er i orden, og hvilke afvigelser der kræver gennemgang. Revisor kan derefter hurtigt validere tallene og indsende angivelsen til SKAT. Processen der tidligere tog 4-6 timer at forberede er nu komplet på under 30 minutter — størstedelen automtisk.</p>
tools:
  - "e-conomic"
  - "Make.com"
  - "Google Sheets"
  - "Gmail"
mini_case:
  title: "Andersen Revision: Fra manuel rutine til automatisk flow"
  body: |
    <p>Andersen er et regnskabsbureau med 18 kunder og to bogholdere. Manuel overføring af posteringer og afstemning af konti kostede bogholderen 5–7 timer om ugen — tid der ellers kunne bruges på opgaver der rent faktisk kræver menneskelig vurdering. Problemet var ikke mangel på vilje, men at processen simpelthen ikke var bygget til at køre automatisk.</p>
    <p>Efter implementering af automatiseringen ændrede hverdagen sig mærkbart: fejl i regnskabet er faldet til næsten nul, og revisoren slipper for at rette efterbehandlede poster. Det der tidligere krævede opmærksomhed mæltider og aftner er nu et flow der kører i baggrunden — fejlfrit, konsekvent og uden at nogen skal huske at gøre det.</p>
faq_details:
  - q: "Kan det integreres med de systemer vi allerede bruger?"
    a: "Så godt som altid. Make.com understøtter mere end 1.000 apps og APIs, og langt størstedelen af de systemer danske virksomheder bruger — Shopify, e-conomic, HubSpot, Zendesk, Slack, Google Workspace m.fl. — har native-integrationer. Hvis dit system ikke er på listen, kan vi i de fleste tilfælde forbinde via webhook eller REST API."
  - q: "Hvad sker der, hvis et trin i flowet fejler?"
    a: "Make.com har indbygget retry-logik og fejlhåndtering. Hvis et trin fejler — for eksempel fordi en API er midlertidigt utilgængelig — forsøger flowet automatisk igen. Hvis fejlen vedvarer, sendes en notifikation til dig med detaljer om, hvad der gik galt. Ingen data går tabt; de sættes i kø og behandles når forbindelsen er genetableret."
  - q: "Hvordan håndteres følsomme data og GDPR?"
    a: "Make.com er GDPR-compliant og hostet i EU. Vi opsætter flows med mindst-privileges-princippet: integrationer får kun adgang til præcis de data de behøver. Følsomme felter som CPR-numre eller betalingsinformation behandles aldrig af Make.com direkte — de håndteres af de dertil certificerede systemer som Stripe eller Nets."
pro_tip: "Start med at automatisere én enkelt bilagstype — fx Stripe-kvitteringer — og test den grundigt i 2 uger, før du udvider til flere kildesystemer. Det giver dig tillid til flowets nøjagtighed og gør det meget nemmere at fejlfinde, hvis noget skulle være forkert konfigureret."
before_cta: |
  <h2>Hvad skal være på plads før opsætningen?</h2>
  <p>For at få det bedste resultat af automatiseringen er det en god idé at have et par ting klar på forhånd. Sørg for, at din regnskabssoftware har en aktiv API-adgang, og at du ved hvilken kontoplan du bruger. Det gør opsætningen markant hurtigere og reducerer risikoen for at posteringer lander på forkerte konti fra start.</p>
  <p>Det er også værd at kortlægge, hvilke bilagstyper der fylder mest i dit daglige arbejde. Er det primært Stripe-betalinger, faktura-PDF'er fra leverandører eller banktransaktioner? Start med den bilagstype der fylder mest, og lad resten vente til flowet er testet grundigt. En gradueret udrulning giver dig langt mere kontrol og selvtillid.</p>
  <p>Endelig: afsæt 30 minutter til et kort interview med os, hvor vi går din kontoplan og eventuelle undtagelsesregler igennem. De fleste virksomheder har 3–5 "specielle tilfælde" de ikke har tænkt på før vi spørger. Det er meget billigere at håndtere dem i designfasen end efter go-live.</p>
related:
  - url: "/automatisering/ai-kategorisering-udgifter-bilag/"
    title: "AI-kategorisering af udgifter og bilag automatisk"
    category: "Regnskab"
  - url: "/automatisering/automatisk-bogfoering-stripe/"
    title: "Automatisk bogføring af Stripe-betalinger"
    category: "Regnskab"
  - url: "/automatisering/digitalt-godkendelsesflow-fakturaer/"
    title: "Digitalt godkendelsesflow til fakturaer og udgifter"
    category: "Regnskab"
  - url: "/automatisering/woocommerce-bogfoering-e-conomic/"
    title: "Automatisk bogføring af WooCommerce-ordrer i e-conomic"
    category: "Regnskab"
---
