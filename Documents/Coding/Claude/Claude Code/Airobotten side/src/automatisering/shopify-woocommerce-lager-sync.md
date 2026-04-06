---
layout: automatisering.njk
title: "Synkroniser lager mellem Shopify og WooCommerce"
meta_description: "Synkroniser lager automatisk mellem Shopify og WooCommerce. Undgå oversalg med realtids lagersync på tværs af platforme."
canonical: "https://airobotten.dk/automatisering/shopify-woocommerce-lager-sync/"
category: "E-commerce"
breadcrumb_label: "Shopify & WooCommerce lagersync"
trigger: "Lagerbeholdning ændret"
result: "Begge platforme opdateret"
problem: |
  <p>Du sælger på både Shopify og WooCommerce, men lager opdateres ikke automatisk på begge platforme, hvilket fører til oversalg og frustrerede kunder.</p>
  <p>Udover selve tidsforbruget er der den skjulte omkostning: koncentrationsafbrydelser. Hver gang du stopper op for at opdaterer og håndterer manuelt, skal din hjerne skifte kontekst. Forskning viser, at det tager i gennemsnit 23 minutter at komme fuldt tilbage i flow efter en afbrydelse. Gentager det sig 7 gange om dagen, taler vi om en produktivitet der er markant lavere end den burde være.</p>
  <p>Resultatet er en organisation der bruger 4 timer om ugen på arbejde, der burde gøres automatisk. Ganges det op over et år, taler vi om 200+ timer — svarende til mere end en måneds fuldtidsarbejde — brugt på at flytte data fra ét sted til et andet.</p>
solution: |
  <p>Vi bygger et tovejs-sync der automatisk opdaterer lagerbeholdningen på begge platforme i realtid, så du aldrig sælger varer du ikke har på lager.</p>
  <p>Flowet er bygget til at håndtere edge cases og undtagelser: tomme felter, duplikater, uventede dataformater og netværksfejl behandles alle kontrolleret, så du aldrig ender med halvfærdige poster i Make.com. Fejlhåndteringen er tænkt ind fra starten, ikke tilføjet som eftertanke.</p>
tools:
  - "Shopify"
  - "WooCommerce"
  - "Make.com"
steps:
  - title: "Lagerbeholdning ændret"
    body: "Ingen polling, ingen manuel handling — Shopify er konfigureret til at notificere Make.com i realtid, så der aldrig opstår forsinkelse mellem hændelsen og den automatiske behandling."
  - title: "Data valideres og renses"
    body: "Inden data behandles videre, tjekker flowet for duplikater og inkonsistenser. Samme hændelse kan aldrig føre til dobbelt behandling, selv hvis triggeren skulle affyres to gange."
  - title: "Behandling og transformation"
    body: "Flowet kan håndtere konditionelle regler: forskellige typer hændelser behandles forskelligt baseret på felter i dataene. Det giver fleksibilitet til at afspejle virkeligheden i din forretning."
  - title: "Begge platforme opdateret"
    body: "Den automatiske handling i Make.com er identisk med hvad du selv ville gøre manuelt — bare hurtigere, mere konsekvent og uden mulighed for tastfejl. Begge platforme opdateret på rekordtid."
  - title: "Bekræftelse og log"
    body: "En komplet log over alle gennemførte handlinger er tilgængelig i Make.com, så du til enhver tid kan se, hvad der er sket, hvornår og med hvilke data."
benefits_label: "Det opnår du"
benefits:
  - "Enkel opsætning: flowet er live på 1–3 arbejdsdage og kræver ingen teknisk viden at vedligeholde"
  - "Skalér uden at ansætte: flowet håndterer 99% mere volumen uden ekstra arbejdstid"
  - "Frigivet fokus: dit team kan bruge tid på det der kræver menneskelig vurdering — ikke rutinearbejde"
  - "Spar 2–4 timer om ugen der tidligere gik til timer på manuel ordrehåndtering"
  - "Eliminer forsinket eller forkert ordrebehandling — flowet behandler data konsekvent og fejlfrit hver gang"
  - "Tilpasningsdygtig: forretningsregler og undtagelseshåndtering kan justeres løbende uden at bygge forfra"
faq_items:
  - q: "Hvad koster det at sætte op, og hvor lang tid tager det?"
    a: "Opsætningstiden afhænger af kompleksiteten, men et standardflow som dette er typisk live på 2–3 arbejdsdage. Vi sørger for fuld test inden lancering, og de første 30 dage er inkluderet support til justeringer. Kontakt os for et konkret tilbud baseret på din specifikke situation."
  - q: "Kan flowet håndtere undtagelser og specielle tilfælde?"
    a: "Ja. Under opsætningen gennemgår vi de mest almindelige undtagelser i netop din proces og bygger håndtering af dem ind i flowet. Atypiske hændelser der falder uden for de definerede regler, flagges og sendes til manuel behandling i stedet for at blive ignoreret eller behandlet forkert."
  - q: "Hvad sker der, hvis Shopify eller WooCommerce er midlertidigt utilgængeligt?"
    a: "Make.com har indbygget retry-logik: hvis Shopify eller WooCommerce er utilgængeligt, forsøger flowet igen automatisk med eksponentiel backoff. Data går aldrig tabt — de sættes i kø og behandles, så snart forbindelsen er reetableret. Du modtager en notifikation, hvis der opstår et problem der kræver din opmærksomhed."
mini_case:
  title: "Nordisk Livsstil ApS: Fra manuel rutine til automatisk flow"
  body: |
    <p>Nordisk er en dansk webshop der sælger boligindretning og sover tungt i højsæsoner. At tjekke lagerstatus, opdatere ordrer og sende bekræftelser manuelt kostede webshopejeren 3–5 timer om ugen — tid der ellers kunne bruges på opgaver der rent faktisk kræver menneskelig vurdering. Problemet var ikke mangel på vilje, men at processen simpelthen ikke var bygget til at køre automatisk.</p>
    <p>Efter implementering af automatiseringen ændrede hverdagen sig mærkbart: kunderne modtager svar og bekræftelser øjeblikkeligt — også uden for åbningstid. Det der tidligere krævede opmærksomhed mæltider og aftner er nu et flow der kører i baggrunden — fejlfrit, konsekvent og uden at nogen skal huske at gøre det.</p>
faq_details:
  - q: "Kan det integreres med de systemer vi allerede bruger?"
    a: "Så godt som altid. Make.com understøtter mere end 1.000 apps og APIs, og langt størstedelen af de systemer danske virksomheder bruger — Shopify, e-conomic, HubSpot, Zendesk, Slack, Google Workspace m.fl. — har native-integrationer. Hvis dit system ikke er på listen, kan vi i de fleste tilfælde forbinde via webhook eller REST API."
  - q: "Hvad sker der, når volumen vokser?"
    a: "Flows skalerer automatisk med din volumen — du behøver ikke gøre noget. Make.com håndterer 10 eller 10.000 kørsler med samme pålidelighed. Hvis du rammer din plans loft for operationer, er det ligetil at opgradere plantypen; selve flowets logik ændres ikke."
  - q: "Hvad sker der, hvis et trin i flowet fejler?"
    a: "Make.com har indbygget retry-logik og fejlhåndtering. Hvis et trin fejler — for eksempel fordi en API er midlertidigt utilgængelig — forsøger flowet automatisk igen. Hvis fejlen vedvarer, sendes en notifikation til dig med detaljer om, hvad der gik galt. Ingen data går tabt; de sættes i kø og behandles når forbindelsen er genetableret."
pro_tip: "Tilføj et \"dry run\"-trin i flowet der logger, hvad det ville have gjort, uden at udføre handlingen. Kør det i 48 timer parallelt med den manuelle proces, og sammenlign outputtet. Når de matcher 100%, er du klar til at slå automatiseringen helt til."
before_cta: |
  <h2>Sådan forbereder du din webshop</h2>
  <p>Før vi sætter flowet op, er det en fordel at have styr på et par tekniske forudsætninger. Kontroller at din Shopify- eller WooCommerce-konto har webhook-adgang aktiveret, og at du har en API-nøgle klar. Det er typisk et to-minutters arbejde i din butiksadministration, men det sparer unødige afbrydelser undervejs.</p>
  <p>Gennemgå også dine ordrestatusser og se, om du bruger standardnavne eller har tilpasset dem. Tilpassede statusser kræver blot en lille ekstra mapping i flowet — men vi skal vide det på forhånd for at bygge det korrekt ind. Det samme gælder eventuelle særlige produkttyper som downloadbare varer, gavekort eller abonnementsprodukter, der kan have en lidt anderledes ordrehåndtering.</p>
  <p>Planlæg en testperiode på minimum 48 timer, hvor flowet kører parallelt med din nuværende manuelle proces. Det giver dig trøst i, at automatiseringen opfører sig som forventet før du slår den helt til og holder op med den manuelle kontrol.</p>
related:
  - url: "/automatisering/klaviyo-email-automation/"
    title: "Opsæt Klaviyo email-automations til din webshop"
    category: "E-commerce"
  - url: "/automatisering/shopify-trustpilot-invitation/"
    title: "Automatisk Trustpilot-invitation efter Shopify-levering"
    category: "E-commerce"
  - url: "/automatisering/automatisk-upsell-sekvens/"
    title: "Automatisk upsell-sekvens baseret på købshistorik"
    category: "E-commerce"
  - url: "/automatisering/automatisk-ordrebekraeftelse-email/"
    title: "Automatisk ordrebekræftelse via email"
    category: "E-commerce"
faq_schema: |
  {
    "@context":"https://schema.org",
    "@type":"FAQPage",
    "mainEntity":[
      {"@type":"Question","name":"Hvad koster det at s\u00e6tte op, og hvor lang tid tager det?","acceptedAnswer":{"@type":"Answer","text":"Ops\u00e6tningstiden afh\u00e6nger af kompleksiteten, men et standardflow som dette er typisk live p\u00e5 2\u20133 arbejdsdage. Vi s\u00f8rger for fuld test inden lancering, og de f\u00f8rste 30 dage er inkluderet support til justeringer. Kontakt os for et konkret tilbud baseret p\u00e5 din specifikke situation."}},
      {"@type":"Question","name":"Kan flowet h\u00e5ndtere undtagelser og specielle tilf\u00e6lde?","acceptedAnswer":{"@type":"Answer","text":"Ja. Under ops\u00e6tningen gennemg\u00e5r vi de mest almindelige undtagelser i netop din proces og bygger h\u00e5ndtering af dem ind i flowet. Atypiske h\u00e6ndelser der falder uden for de definerede regler, flagges og sendes til manuel behandling i stedet for at blive ignoreret eller behandlet forkert."}},
      {"@type":"Question","name":"Hvad sker der, hvis Shopify eller WooCommerce er midlertidigt utilg\u00e6ngeligt?","acceptedAnswer":{"@type":"Answer","text":"Make.com har indbygget retry-logik: hvis Shopify eller WooCommerce er utilg\u00e6ngeligt, fors\u00f8ger flowet igen automatisk med eksponentiel backoff. Data g\u00e5r aldrig tabt \u2014 de s\u00e6ttes i k\u00f8 og behandles, s\u00e5 snart forbindelsen er reetableret. Du modtager en notifikation, hvis der opst\u00e5r et problem der kr\u00e6ver din opm\u00e6rksomhed."}}
    ]
  }
---
