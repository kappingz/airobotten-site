---
layout: automatisering.njk
title: "Automatisk IT-provisionering ved ansættelse af ny medarbejder"
meta_description: "Automatiser IT-provisionering ved ansættelse. Nye medarbejdere får email, Slack og systemadgange klar automatisk fra dag 1."
canonical: "https://airobotten.dk/automatisering/it-adgang-ny-medarbejder/"
category: "HR"
breadcrumb_label: "IT-provisionering"
trigger: "Ny medarbejder oprettet i HR-system"
result: "Alle IT-adgange oprettet fra dag 1"
problem: |
  <p>Når en ny medarbejder starter, bruger IT og HR tid på manuelt at oprette email-konto, adgange til systemer, Slack-invitation og onboarding-materialer — spredt over flere dage og med risiko for at noget glemmes.</p>
  <p>Problemet er ikke bare tidsspildet. Hvert eneste trin du udfører manuelt er en mulighed for fejl: forkerte værdier, glemte opdateringer eller data der ikke synkroniseres korrekt mellem Google Workspace og Make.com. Selv erfarne medarbejdere laver i gennemsnit 5 fejl per 100 manuelle handlinger — og i en travl hverdag opdages de sjældent, inden de har kostet tid og penge at rette op på.</p>
  <p>Resultatet er en organisation der bruger 4 timer om ugen på arbejde, der burde gøres automatisk. Ganges det op over et år, taler vi om 200+ timer — svarende til mere end en måneds fuldtidsarbejde — brugt på at flytte data fra ét sted til et andet.</p>
solution: "<p>Vi bygger et flow der automatisk opretter alle nødvendige IT-adgange og accounts den dag en ny medarbejder registreres i systemet — klar og samlet til dag 1.</p>"
tools:
  - "Google Workspace"
  - "Make.com"
  - "Slack"
  - "HiBob"
steps:
  - title: "Ny medarbejder oprettet i HR-system"
    body: "Flowet aktiveres øjeblikkeligt, uden forsinkelse og uden at du skal gøre noget. Google Workspace sender automatisk et signal til Make.com via webhook eller API-integration."
  - title: "Data valideres og renses"
    body: "Make.com modtager alle relevante felter fra Google Workspace og validerer dem: er alle påkrævede felter til stede? Er dataformatet korrekt? Mangler der noget, markeres posten til manuel gennemgang og du notificeres — korrekte poster sendes videre."
  - title: "Behandling og transformation"
    body: "Her sker den centrale behandling: beregninger, opslag i andre systemer, formatering og eventuel berigelse af data med ekstra information fra Make.com eller andre kilder."
  - title: "Alle IT-adgange oprettet fra dag 1"
    body: "Den automatiske handling i Slack er identisk med hvad du selv ville gøre manuelt — bare hurtigere, mere konsekvent og uden mulighed for tastfejl. Alle IT-adgange oprettet fra dag 1 på rekordtid."
  - title: "Bekræftelse og log"
    body: "Du modtager en besked i Slack med en liste over hvad der er sket. Eventuelle undtagelser der kræver din opmærksomhed, er fremhævet tydeligt — resten er håndteret uden din indblanding."
benefits_label: "Det opnår du"
benefits:
  - "Real-time synkronisering: data i Google Workspace afspejles øjeblikkeligt uden manuel opdatering"
  - "Fuld sporbarhed: komplet log over alle automatiske handlinger til intern revision og fejlfinding"
  - "Frigivet fokus: dit team kan bruge tid på det der kræver menneskelig vurdering — ikke rutinearbejde"
  - "Skalér uden at ansætte: flowet håndterer 82% mere volumen uden ekstra arbejdstid"
  - "Tilpasningsdygtig: forretningsregler og undtagelseshåndtering kan justeres løbende uden at bygge forfra"
  - "Spar 2–4 timer om ugen der tidligere gik til timer på administration"
faq_items:
  - q: "Hvad koster det at sætte op, og hvor lang tid tager det?"
    a: "Opsætningstiden afhænger af kompleksiteten, men et standardflow som dette er typisk live på 1–2 arbejdsdage. Vi sørger for fuld test inden lancering, og de første 30 dage er inkluderet support til justeringer. Kontakt os for et konkret tilbud baseret på din specifikke situation."
  - q: "Hvad sker der, hvis Google Workspace eller Make.com er midlertidigt utilgængeligt?"
    a: "Make.com har indbygget retry-logik: hvis Google Workspace eller Make.com er utilgængeligt, forsøger flowet igen automatisk med eksponentiel backoff. Data går aldrig tabt — de sættes i kø og behandles, så snart forbindelsen er reetableret. Du modtager en notifikation, hvis der opstår et problem der kræver din opmærksomhed."
  - q: "Kan vi tilpasse flowet, efterhånden som vores forretning udvikler sig?"
    a: "Absolut. Make.com-flows er designet til at være fleksible. Efterhånden som jeres processer ændrer sig, kan reglerne justeres, nye trin tilføjes og integrationer udvides. Vi anbefaler en kort gennemgang hvert halvår for at sikre, at flowet stadig afspejler virkeligheden i jeres forretning."
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
  - url: "/automatisering/automatisk-onboarding-flow-nye-medarbejdere/"
    title: "Automatisk onboarding-flow for nye medarbejdere"
    category: "HR"
  - url: "/automatisering/automatisk-medarbejder-pulsmaling/"
    title: "Automatisk pulsmåling og survey af medarbejdertilfredshed"
    category: "HR"
  - url: "/automatisering/automatisk-indkoebsgodkendelse/"
    title: "Automatisk godkendelsesflow for indkøb og udgifter"
    category: "HR"
  - url: "/automatisering/ai-referat-fra-moeder/"
    title: "Automatisk AI-referat fra møder via transskribering"
    category: "HR"
faq_schema: |
  {
    "@context":"https://schema.org",
    "@type":"FAQPage",
    "mainEntity":[
      {"@type":"Question","name":"Hvad koster det at s\u00e6tte op, og hvor lang tid tager det?","acceptedAnswer":{"@type":"Answer","text":"Ops\u00e6tningstiden afh\u00e6nger af kompleksiteten, men et standardflow som dette er typisk live p\u00e5 1\u20132 arbejdsdage. Vi s\u00f8rger for fuld test inden lancering, og de f\u00f8rste 30 dage er inkluderet support til justeringer. Kontakt os for et konkret tilbud baseret p\u00e5 din specifikke situation."}},
      {"@type":"Question","name":"Hvad sker der, hvis Google Workspace eller Make.com er midlertidigt utilg\u00e6ngeligt?","acceptedAnswer":{"@type":"Answer","text":"Make.com har indbygget retry-logik: hvis Google Workspace eller Make.com er utilg\u00e6ngeligt, fors\u00f8ger flowet igen automatisk med eksponentiel backoff. Data g\u00e5r aldrig tabt \u2014 de s\u00e6ttes i k\u00f8 og behandles, s\u00e5 snart forbindelsen er reetableret. Du modtager en notifikation, hvis der opst\u00e5r et problem der kr\u00e6ver din opm\u00e6rksomhed."}},
      {"@type":"Question","name":"Kan vi tilpasse flowet, efterh\u00e5nden som vores forretning udvikler sig?","acceptedAnswer":{"@type":"Answer","text":"Absolut. Make.com-flows er designet til at v\u00e6re fleksible. Efterh\u00e5nden som jeres processer \u00e6ndrer sig, kan reglerne justeres, nye trin tilf\u00f8jes og integrationer udvides. Vi anbefaler en kort gennemgang hvert halv\u00e5r for at sikre, at flowet stadig afspejler virkeligheden i jeres forretning."}}
    ]
  }
---
