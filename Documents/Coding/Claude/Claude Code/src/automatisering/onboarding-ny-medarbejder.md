---
layout: automatisering.njk
title: "Automatisk onboarding-flow for nye medarbejdere"
meta_description: "Giv nye medarbejdere den bedste start med et automatisk onboarding-flow. Opsæt adgange, send velkomstmails og tildel opgaver automatisk fra første arbejdsdag."
canonical: "https://airobotten.dk//automatisering/onboarding-ny-medarbejder/"
category: "HR"
breadcrumb_label: "Automatisk onboarding-flow for nye medarbejdere"
trigger: ""
result: ""
problem: |
  <p>Når en ny medarbejder starter skal du manuelt oprette dem i 5+ systemer. Noget bliver altid glemt.</p>
  <p>Den manuelle tilgang skalerer heller ikke. Når din virksomhed vokser og mængden af hændelser stiger, vokser arbejdsbyrden proportionalt. Det betyder, at du enten skal hyre flere folk til rutineopgaver — eller acceptere, at tingene tager længere tid. Ingen af delene er en holdbar løsning på sigt.</p>
  <p>Det er netop den type problem, automatisering er designet til at løse. Ikke ved at erstatte menneskelig vurdering, men ved at fjerne det repetitive arbejde og lade dig fokusere på det der kræver din opmærksomhed.</p>
solution: |
  <p>Vi bygger et flow der automatisk opretter brugerkonti, sender velkomstmails, opretter onboarding-opgaver i Asana og booker intromoeder.</p>
  <p>Opsætningen sker én gang. Herefter kører flowet autonomt — 24 timer i døgnet, 7 dage om ugen — og sikrer at  inden for 21 sekunder uanset tidspunkt. Du behøver ikke at huske det, planlægge det eller følge op på det.</p>
tools:
  - "Notion"
  - "Make.com"
  - "Google Workspace"
  - "Asana"
  - "Slack"
steps:
  - title: ""
    body: "Triggeren er pålidelig og fejltolerant: hvis Notion midlertidigt er utilgængeligt, sættes hændelsen i kø og behandles, så snart forbindelsen er genetableret."
  - title: "Data valideres og renses"
    body: "Dataene normaliseres: datoformater, valutaer, tegnkodning og feltlængder tilpasses præcis det format som Make.com forventer. Det eliminerer de klassiske kompatibilitetsproblemer der opstår, når to systemer taler lidt forskelligt sprog."
  - title: "Behandling og transformation"
    body: "Her sker den centrale behandling: beregninger, opslag i andre systemer, formatering og eventuel berigelse af data med ekstra information fra Make.com eller andre kilder."
  - title: ""
    body: "Resultatet i Google Workspace er fuldstændigt og korrekt fra første forsøg: ingen manglende felter, ingen forkerte kategorier, ingen efterbehandling nødvendig."
  - title: "Bekræftelse og log"
    body: "Flowet holder dig orienteret uden at overdynge dig med notifikationer. Du kan konfigurere nøjagtigt hvilke hændelser der skal generere en besked til dig, og hvilke der blot logges."
benefits_label: "Det opnår du"
benefits:
  - "Enkel opsætning: flowet er live på 1–3 arbejdsdage og kræver ingen teknisk viden at vedligeholde"
  - "Eliminer oversete opgaver og forsinkede processer — flowet behandler data konsekvent og fejlfrit hver gang"
  - "Fuld sporbarhed: komplet log over alle automatiske handlinger til intern revision og fejlfinding"
  - "Tilpasningsdygtig: forretningsregler og undtagelseshåndtering kan justeres løbende uden at bygge forfra"
  - "Spar 5–7 timer om ugen der tidligere gik til timer på administration"
  - "Hurtigere processer: hvad der tog timer sker nu på sekunder, hvilket forbedrer HR-ansvarlige og virksomhedslederes oplevelse"
faq_items:
  - q: "Kan flowet håndtere undtagelser og specielle tilfælde?"
    a: "Ja. Under opsætningen gennemgår vi de mest almindelige undtagelser i netop din proces og bygger håndtering af dem ind i flowet. Atypiske hændelser der falder uden for de definerede regler, flagges og sendes til manuel behandling i stedet for at blive ignoreret eller behandlet forkert."
  - q: "Hvad sker der, hvis Notion eller Make.com er midlertidigt utilgængeligt?"
    a: "Make.com har indbygget retry-logik: hvis Notion eller Make.com er utilgængeligt, forsøger flowet igen automatisk med eksponentiel backoff. Data går aldrig tabt — de sættes i kø og behandles, så snart forbindelsen er reetableret. Du modtager en notifikation, hvis der opstår et problem der kræver din opmærksomhed."
  - q: "Hvad koster det at sætte op, og hvor lang tid tager det?"
    a: "Opsætningstiden afhænger af kompleksiteten, men et standardflow som dette er typisk live på 3–4 arbejdsdage. Vi sørger for fuld test inden lancering, og de første 30 dage er inkluderet support til justeringer. Kontakt os for et konkret tilbud baseret på din specifikke situation."
mini_case:
  title: "Mediakonsult A/S: Fra manuel rutine til automatisk flow"
  body: |
    <p>Mediakonsult er en konsulentvirksomhed med 42 ansatte og en HR-afdeling på to. At oprette konti, sende velkomstmails og bestille udstyr manuelt for hver nyansættelse kostede HR-chefen 3–4 timer per ny medarbejder — tid der ellers kunne bruges på opgaver der rent faktisk kræver menneskelig vurdering. Problemet var ikke mangel på vilje, men at processen simpelthen ikke var bygget til at køre automatisk.</p>
    <p>Efter implementering af automatiseringen ændrede hverdagen sig mærkbart: onboarding-flowet kører helt uden manuel indblanding og tager under 10 minutter at sætte i gang. Det der tidligere krævede opmærksomhed mæltider og aftner er nu et flow der kører i baggrunden — fejlfrit, konsekvent og uden at nogen skal huske at gøre det.</p>
faq_details:
  - q: "Kan det integreres med de systemer vi allerede bruger?"
    a: "Så godt som altid. Make.com understøtter mere end 1.000 apps og APIs, og langt størstedelen af de systemer danske virksomheder bruger — Shopify, e-conomic, HubSpot, Zendesk, Slack, Google Workspace m.fl. — har native-integrationer. Hvis dit system ikke er på listen, kan vi i de fleste tilfælde forbinde via webhook eller REST API."
  - q: "Hvordan håndteres følsomme data og GDPR?"
    a: "Make.com er GDPR-compliant og hostet i EU. Vi opsætter flows med mindst-privileges-princippet: integrationer får kun adgang til præcis de data de behøver. Følsomme felter som CPR-numre eller betalingsinformation behandles aldrig af Make.com direkte — de håndteres af de dertil certificerede systemer som Stripe eller Nets."
  - q: "Hvad kræver flowet af løbende vedligehold?"
    a: "Næsten ingenting i det daglige. Flows byggede i Make.com kører autonomt og sender dig kun notifikationer, hvis noget kræver din opmærksomhed. Vi anbefaler et hurtigt eftersyn hver 2–3 måneder for at sikre, at integrationer og API-forbindelser stadig er opdaterede, særligt når dine systemer får større opdateringer."
pro_tip: "Lav en dedikeret \"offboarding-tjekliste\" som en separat Notion-database eller Asana-skabelon, og lad flowet automatisk oprætte en opgave for hvert punkt når en medarbejder fratræder. Så er intet glømt — hverken tilbagelevering af udstyr, sletning af adgange eller exit-samtale."
before_cta: |
  <h2>Forankr automatiseringen i HR-processerne</h2>
  <p>HR-automatiseringer kæmper tit med én specifik udfordring: de involverer mange forskellige systemer på tærs af organisationen. IT-systemer, lønsystem, adgangsstyring og måske et HRsystem skal alle tale sammen. Før vi går i gang, kortlægger vi alle de systemer, der skal inv olveres, og sikrer os, at vi har de nødvendige API-adgange til dem alle.</p>
  <p>Definér også de præcise steps i din nuværende manuelle proces. Hvad gøres først, hvad er afhængigt af hvad, og hvem godkender hvad? En detaljeret procesk ortlægning tager typisk en time, men er guld værd når vi skal bygge flowet — særligt i onboarding-processer, der ofte indeholder undtagelser for specifikke roller, teams eller kontrakttyper.</p>
  <p>Endelig: husk at informere de involverede teams om automatiseringen inden go-live. Når IT pludselig får automatiske adgangsanmodninger, eller når lønteamet modtager automatiske notifikationer, er det vigtigt at de ved, hvad der sker og hvem de kontakter, hvis noget ser forkert ud.</p>
related:
  - url: "/automatisering/nye-ordrer-til-slack/"
    title: "Send automatisk besked i Slack ved nye ordrer"
    category: "E-commerce"
  - url: "/automatisering/lead-fra-typeform-til-hubspot/"
    title: "Send Typeform-leads direkte til HubSpot"
    category: "Lead-håndtering"
  - url: "/automatisering/faktura-fra-email-til-regnskab/"
    title: "Automatiser fakturahåndtering fra email til regnskab"
    category: "Regnskab"
  - url: "/automatisering/social-media-content-med-ai/"
    title: "Generer ugentlige social media-opslag med AI"
    category: "Content"
faq_schema: |
  {
    "@context":"https://schema.org",
    "@type":"FAQPage",
    "mainEntity":[
      {"@type":"Question","name":"Kan flowet h\u00e5ndtere undtagelser og specielle tilf\u00e6lde?","acceptedAnswer":{"@type":"Answer","text":"Ja. Under ops\u00e6tningen gennemg\u00e5r vi de mest almindelige undtagelser i netop din proces og bygger h\u00e5ndtering af dem ind i flowet. Atypiske h\u00e6ndelser der falder uden for de definerede regler, flagges og sendes til manuel behandling i stedet for at blive ignoreret eller behandlet forkert."}},
      {"@type":"Question","name":"Hvad sker der, hvis Notion eller Make.com er midlertidigt utilg\u00e6ngeligt?","acceptedAnswer":{"@type":"Answer","text":"Make.com har indbygget retry-logik: hvis Notion eller Make.com er utilg\u00e6ngeligt, fors\u00f8ger flowet igen automatisk med eksponentiel backoff. Data g\u00e5r aldrig tabt \u2014 de s\u00e6ttes i k\u00f8 og behandles, s\u00e5 snart forbindelsen er reetableret. Du modtager en notifikation, hvis der opst\u00e5r et problem der kr\u00e6ver din opm\u00e6rksomhed."}},
      {"@type":"Question","name":"Hvad koster det at s\u00e6tte op, og hvor lang tid tager det?","acceptedAnswer":{"@type":"Answer","text":"Ops\u00e6tningstiden afh\u00e6nger af kompleksiteten, men et standardflow som dette er typisk live p\u00e5 3\u20134 arbejdsdage. Vi s\u00f8rger for fuld test inden lancering, og de f\u00f8rste 30 dage er inkluderet support til justeringer. Kontakt os for et konkret tilbud baseret p\u00e5 din specifikke situation."}}
    ]
  }
---
