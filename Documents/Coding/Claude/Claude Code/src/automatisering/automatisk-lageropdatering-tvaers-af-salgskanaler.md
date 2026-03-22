---
layout: automatisering.njk
title: "Automatiser lageropdatering på tværs af alle dine salgskanaler"
meta_description: "Synkroniser lagerbeholdning automatisk på tværs af Shopify, WooCommerce, fysisk butik og marketplace. Undgå oversalg og manuelle lagertjek for altid."
canonical: "https://airobotten.dk/automatisering/automatisk-lageropdatering-tvaers-af-salgskanaler/"
category: "E-commerce"
breadcrumb_label: "Lageropdatering på tværs af salgskanaler"
trigger: "Salg eller lagerjustering på én kanal"
result: "Alle kanaler opdateret automatisk i realtid"
problem: |
  <p>Sælger du på mere end én platform — for eksempel Shopify og en fysisk butik, eller Shopify og et B2B-grossistsite — kender du det velkendte problem: en vare sælger to steder på samme tid, og pludselig har du solgt noget du ikke har. Oversalg er ikke blot en logistisk ulejlighed; det skaber en frustreret kunde der allerede har afgivet sin ordre og forventet levering, og som nu modtager en besked om at varen alligevel ikke er på lager. Det er en kundeoplevelse der sjældent fører til genkøb.</p>
  <p>Selv hvis du aldrig har oplevet oversalg, er der det daglige vedligehold: du opdaterer lager ét sted og husker (eller glemmer) at gøre det alle andre steder. For en virksomhed der sælger på Shopify, WooCommerce, på et B2B-site og via Google Shopping Feed, er der reelt fire systemer der skal holdes synkroniserede — manuelt, af et menneske, som nemt laver fejl og altid bruger unødvendig tid på det. Med 200-500 produktlinjer og daglige lagerbevægelser er fuld manuel synkronisering simpelthen ikke realistisk.</p>
  <p>Konsekvensen er ofte, at man vælger "den vigtigste" kanal og holder den opdateret, mens de andre halter bagefter. Det betyder langsomt at de sekundære kanaler taber troværdighed hos kunderne — varer der vises som på lager er det ikke, leveringstider stemmer ikke. Det er en stille erosion af tilliden der på sigt koster mere end det korsigtede tidsbesvær ved at holde det synkroniseret.</p>
solution: |
  <p>Vi bygger et centralt lager-synkroniseringsflow med Shopify (eller et dedikeret lagersystem som Linnworks eller SKUvault) som master. Hver gang en ordre gennemføres på én af dine salgskanaler — uanset om det er webshop, fysisk kasseapparat via POS, B2B-platform eller et marketplace — registrerer flowet salget via webhook og opdaterer straks lagerbeholdningen på alle tilknyttede kanaler. Opdateringen sker typisk inden for 15-30 sekunder, så risikoen for parallelt oversalg er minimal.</p>
  <p>Flowet håndterer ikke blot salg, men alle lagerjusteringer: modtagne leverancer fra leverandør, returnerede varer der lægges tilbage på lager, og manuelle korrektioner ved periodisk optælling. Sker der en ændring i masterlageret, propageres den automatisk til alle tilknyttede systemer. Du opdaterer ét sted — resten sker af sig selv. Derudover sætter vi alerts op: når et produkt falder under en defineret minimumslagerbeholdning, sender flowet en notifikation til den indkøbsansvarlige, så genbestilling sker proaktivt fremfor reaktivt.</p>
  <p>For virksomheder der sælger på Zalando, Amazon eller lignende marketplace er integrationen tilsvarende: ordrer der indgår via marketplace-API'et reducerer automatisk lageret i alle øvrige systemer. Returpakker fra marketplace håndteres som særskilte lagertransaktioner, så regnskabet og lagerbeholdningen altid er korrekt, uanset hvilken kanal varerne kom retur fra.</p>
tools:
  - "Shopify"
  - "WooCommerce"
  - "Make.com"
  - "Shopify POS"
  - "Slack (alerts)"
  - "Gmail"
steps:
  - title: "Salg eller lagerjustering på én kanal"
    body: "Ingen polling, ingen manuel handling — Shopify er konfigureret til at notificere Make.com i realtid, så der aldrig opstår forsinkelse mellem hændelsen og den automatiske behandling."
  - title: "Data valideres og renses"
    body: "Inden data behandles videre, tjekker flowet for duplikater og inkonsistenser. Samme hændelse kan aldrig føre til dobbelt behandling, selv hvis triggeren skulle affyres to gange."
  - title: "Behandling og transformation"
    body: "Flowet kan håndtere konditionelle regler: forskellige typer hændelser behandles forskelligt baseret på felter i dataene. Det giver fleksibilitet til at afspejle virkeligheden i din forretning."
  - title: "Alle kanaler opdateret automatisk i realtid"
    body: "Resultatet i Make.com er fuldstændigt og korrekt fra første forsøg: ingen manglende felter, ingen forkerte kategorier, ingen efterbehandling nødvendig."
  - title: "Bekræftelse og log"
    body: "Du modtager en besked i Slack med en liste over hvad der er sket. Eventuelle undtagelser der kræver din opmærksomhed, er fremhævet tydeligt — resten er håndteret uden din indblanding."
benefits_label: "Det opnår du"
benefits:
  - "Enkel opsætning: flowet er live på 1–3 arbejdsdage og kræver ingen teknisk viden at vedligeholde"
  - "Frigivet fokus: dit team kan bruge tid på det der kræver menneskelig vurdering — ikke rutinearbejde"
  - "Reduceret tabte ordrer, forsinkede leverancer og utilfredse kunder — proaktiv håndtering frem for reaktiv brandslukning"
  - "Eliminer forsinket eller forkert ordrebehandling — flowet behandler data konsekvent og fejlfrit hver gang"
  - "Spar 5–7 timer om ugen der tidligere gik til timer på manuel ordrehåndtering"
  - "Real-time synkronisering: data i Shopify afspejles øjeblikkeligt uden manuel opdatering"
faq_items:
  - q: "Hvad sker der, hvis Shopify eller WooCommerce er midlertidigt utilgængeligt?"
    a: "Make.com har indbygget retry-logik: hvis Shopify eller WooCommerce er utilgængeligt, forsøger flowet igen automatisk med eksponentiel backoff. Data går aldrig tabt — de sættes i kø og behandles, så snart forbindelsen er reetableret. Du modtager en notifikation, hvis der opstår et problem der kræver din opmærksomhed."
  - q: "Kan flowet håndtere undtagelser og specielle tilfælde?"
    a: "Ja. Under opsætningen gennemgår vi de mest almindelige undtagelser i netop din proces og bygger håndtering af dem ind i flowet. Atypiske hændelser der falder uden for de definerede regler, flagges og sendes til manuel behandling i stedet for at blive ignoreret eller behandlet forkert."
  - q: "Hvad er forskellen på at bruge jer frem for at sætte det op selv?"
    a: "Make.com er et no-code-værktøj, så teknisk er det muligt at bygge selv. Forskellen er tid og erfaring: vi har bygget hundredvis af flows og kender faldgruberne. Vi bygger med korrekt fejlhåndtering, retry-logik og dokumentation fra starten — ikke som eftertanke. Og vi sikrer, at I forstår hvad I har, så I aldrig sidder fast."
related:
  - url: "/automatisering/nye-ordrer-til-slack/"
    title: "Send automatisk besked i Slack ved nye ordrer"
    category: "E-commerce"
  - url: "/automatisering/lager-alarm-lav-beholdning/"
    title: "Automatisk lageralarm ved lav beholdning i Shopify"
    category: "E-commerce"
  - url: "/automatisering/automatisk-upsell-sekvens/"
    title: "Automatisk upsell-sekvens baseret på købshistorik"
    category: "E-commerce"
  - url: "/automatisering/google-shopping-feed-opdatering/"
    title: "Automatisk opdatering af Google Shopping-feed"
    category: "E-commerce"
faq_schema: |
  {
    "@context":"https://schema.org",
    "@type":"FAQPage",
    "mainEntity":[
      {"@type":"Question","name":"Hvad sker der, hvis Shopify eller WooCommerce er midlertidigt utilg\u00e6ngeligt?","acceptedAnswer":{"@type":"Answer","text":"Make.com har indbygget retry-logik: hvis Shopify eller WooCommerce er utilg\u00e6ngeligt, fors\u00f8ger flowet igen automatisk med eksponentiel backoff. Data g\u00e5r aldrig tabt \u2014 de s\u00e6ttes i k\u00f8 og behandles, s\u00e5 snart forbindelsen er reetableret. Du modtager en notifikation, hvis der opst\u00e5r et problem der kr\u00e6ver din opm\u00e6rksomhed."}},
      {"@type":"Question","name":"Kan flowet h\u00e5ndtere undtagelser og specielle tilf\u00e6lde?","acceptedAnswer":{"@type":"Answer","text":"Ja. Under ops\u00e6tningen gennemg\u00e5r vi de mest almindelige undtagelser i netop din proces og bygger h\u00e5ndtering af dem ind i flowet. Atypiske h\u00e6ndelser der falder uden for de definerede regler, flagges og sendes til manuel behandling i stedet for at blive ignoreret eller behandlet forkert."}},
      {"@type":"Question","name":"Hvad er forskellen p\u00e5 at bruge jer frem for at s\u00e6tte det op selv?","acceptedAnswer":{"@type":"Answer","text":"Make.com er et no-code-v\u00e6rkt\u00f8j, s\u00e5 teknisk er det muligt at bygge selv. Forskellen er tid og erfaring: vi har bygget hundredvis af flows og kender faldgruberne. Vi bygger med korrekt fejlh\u00e5ndtering, retry-logik og dokumentation fra starten \u2014 ikke som eftertanke. Og vi sikrer, at I forst\u00e5r hvad I har, s\u00e5 I aldrig sidder fast."}}
    ]
  }
---
