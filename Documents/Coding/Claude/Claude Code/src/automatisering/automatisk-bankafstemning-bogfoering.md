---
layout: automatisering.njk
title: "Automatisk bankafstemning med bogføring i Dinero"
meta_description: "Afstem bankkontoen automatisk med Dinero. Matcher bankposteringer mod bogførte bilag og markerer uoverensstemmelser til behandling — spar timer ved månedsskiftet."
canonical: "https://airobotten.dk/automatisering/automatisk-bankafstemning-bogfoering/"
category: "Regnskab"
breadcrumb_label: "Automatisk bankafstemning"
trigger: "Ny bankpostering registreret"
result: "Postering matchet og afstemt automatisk"
problem: |
  <p>Bankafstemning er en af de mest sikkerhedskritiske, men også mest tidskrævende regnskabsopgaver. Hver måned skal bankens bevægelser matche de bogførte posteringer i Dinero præcist — krone for krone. Selv en lille uoverensstemmelse kan indikere en fejl, en manglende faktura eller i værste fald en uautoriseret transaktion. Manuel afstemning tager typisk 1-3 timer om måneden, afhængigt af transaktionsvolumen.</p>
  <p>Problemet opstår, når måneden hober sig op. Er du 6-8 uger bagud med afstemningen, er det svært at huske konteksten bag transaktionerne — hvad var det køb til, og er der en faktura til det? Jo længere du venter, jo mere revisor-tid bruger du på at spore ting op efterfølgende. Mange virksomheder opdager bogføringsfejl langt for sent, fordi bankafstemningen ikke sker løbende.</p>
  <p>Udover tidsforbruget er der et opmærksomhedsproblem: manuel sammenligning af lange transaktionslister er kedeligt og fejlbehæftet. Det er let at overse en dobbelt postering, en forkert dato eller et beløb der er tastet forkert — netop de fejl som en automatisk afstemning fanger øjeblikkeligt.</p>
solution: |
  <p>Vi bygger et Make.com-flow der dagligt henter nye bankposteringer fra din bank via Open Banking API og sammenligner dem med de tilsvarende posteringer i Dinero. Matches er automatisk matchet og markeret som afstemt. Uoverensstemmelser — posteringer der ikke har et match, eller beløb der ikke stemmer — samles i en daglig rapport til dig.</p>
  <p>Rapporten sendes til din email og er klar til gennemgang hvert morgen. I stedet for at sidde med to lister og sammenligne manuelt, har du kun de afvigelser der kræver din opmærksomhed præsenteret klart og tydeligt. Månedlig bankafstemning der tidligere tog 2 timer, klares nu på 15-20 minutter — kun afvigelserne.</p>
tools:
  - "Dinero"
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
  - url: "/automatisering/digitalt-godkendelsesflow-fakturaer/"
    title: "Digitalt godkendelsesflow til fakturaer og udgifter"
    category: "Regnskab"
  - url: "/automatisering/automatisk-moms-afstemning-og-angivelse/"
    title: "Automatisk momsafstemning og forberedelse af momsangivelse"
    category: "Regnskab"
  - url: "/automatisering/faktura-fra-email-til-regnskab/"
    title: "Automatiser fakturahåndtering fra email til regnskab"
    category: "Regnskab"
  - url: "/automatisering/e-conomic-google-sheets-rapport/"
    title: "Automatisk rapportering fra e-conomic til Google Sheets"
    category: "Regnskab"
---
