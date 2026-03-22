---
layout: automatisering.njk
title: "Automatisk onboarding-flow for nye medarbejdere"
meta_description: "Automatiser hele onboarding-flowet for nye medarbejdere. Velkomstmail, opgavelister, adgange og check-ins kører automatisk fra dag 1 — uden HR-manualarbejde."
canonical: "https://airobotten.dk/automatisering/automatisk-onboarding-flow-nye-medarbejdere/"
category: "HR"
breadcrumb_label: "Automatisk onboarding-flow"
trigger: "Ny medarbejder oprettet i HR-system"
result: "Komplet onboarding-forløb startet automatisk"
problem: |
  <p>Ansættelse af en ny medarbejder udløser en kæde af opgaver der skal koordineres på tværs af HR, IT, nærmeste leder og den nye medarbejder selv. I de fleste SMV'er sker denne koordinering via en blanding af hukommelse, tilfældige noter og ad hoc-mails — og resultatet er forudsigeligt: vigtige trin glemmes, velkomstmails sendes for sent, og den nye medarbejder ankommer til sin første dag og opdager at adgange mangler, introduktionsmaterialet ikke er sendt, eller at ingen har bookede de nødvendige møder.</p>
  <p>En dårlig onboarding koster mere end blot en dårlig oplevelse. Forskning viser, at medarbejdere der oplever en struktureret og professionel onboarding, har 69% større sandsynlighed for at blive i virksomheden i mindst tre år. En halvvejs onboarding er ikke bare uprofessionel — den er en direkte risikofaktor for tidlig opsigelse. Rekrutteringsomkostningerne for en gennemsnitlig stilling i Danmark løber let op i 50.000-100.000 kr. inklusive annonce, screeningen, onboarding-tid og produktivitetstab — det er en omkostning du ikke har råd til at gentage fordi processen ikke var i orden.</p>
  <p>Hertil kommer det daglige tidsspild: HR-ansvarlige i SMV'er bruger typisk 4-8 timer pr. ny medarbejder på at koordinere den administrative onboarding — mails frem og tilbage, opfølgning på om IT har oprettet adgange, påmindelser til lederen om at booke introduktionsmøder. Alt dette er arbejde der burde køre af sig selv.</p>
solution: |
  <p>Vi bygger et automatiseret onboarding-flow der starter i det øjeblik en ny medarbejder oprettes i dit HR-system eller Notion-database. Flowet sender straks en personlig velkomstmail til den nye medarbejder med praktisk information om første dag, en digital velkomstpakke og links til relevante dokumenter. Samtidig oprettes en opgaveliste i dit projektstyringsværktøj — enten Notion, Asana eller Trello — med alle de trin der skal gennemføres inden første dag, på første dag, i første uge og i første måned.</p>
  <p>Lederen modtager automatisk en besked i Slack med en tjekliste over hvad der skal klar til dag 1: introduktionsmøder der skal bookes, hvem der skal vise den nye rundt, og hvilke systemer der kræver særlig adgang. IT-afdelingen — eller i en SMV typisk den IT-ansvarlige — modtager en separat notifikation med de specifikke adgange der skal oprettes, baseret på stillingsbeskrivelsen. Intet overlades til tilfældighederne.</p>
  <p>Efter første dag kører flowet videre med automatiske check-ins: en 30-dages survey sendes til den nye medarbejder for at måle trivslen, en påmindelse til lederen om at holde et 1:1-møde sendes efter 14 dage, og ved 90-dages-mærket sendes endnu en evaluering. Hele forløbet kører uden HR-afdelingens løbende indblanding — de kan se status på en dashboard og gribe ind hvis noget kræver opmærksomhed.</p>
tools:
  - "Make.com"
  - "Notion"
  - "Slack"
  - "Gmail"
  - "Google Workspace"
steps:
  - title: "Ny medarbejder oprettet i HR-system"
    body: "Triggeren er pålidelig og fejltolerant: hvis Make.com midlertidigt er utilgængeligt, sættes hændelsen i kø og behandles, så snart forbindelsen er genetableret."
  - title: "Data valideres og renses"
    body: "Inden data behandles videre, tjekker flowet for duplikater og inkonsistenser. Samme hændelse kan aldrig føre til dobbelt behandling, selv hvis triggeren skulle affyres to gange."
  - title: "Behandling og transformation"
    body: "Make.com udfører de nødvendige transformationer og beregninger baseret på de regler I har aftalt under opsætningen. Forretningslogikken er konfigureret én gang og køres konsekvent hver eneste gang."
  - title: "Komplet onboarding-forløb startet automatisk"
    body: "Resultatet i Slack er fuldstændigt og korrekt fra første forsøg: ingen manglende felter, ingen forkerte kategorier, ingen efterbehandling nødvendig."
  - title: "Bekræftelse og log"
    body: "Du modtager en notifikation i dit foretrukne kommunikationsværktøj med en liste over hvad der er sket. Eventuelle undtagelser der kræver din opmærksomhed, er fremhævet tydeligt — resten er håndteret uden din indblanding."
benefits_label: "Det opnår du"
benefits:
  - "Tilpasningsdygtig: forretningsregler og undtagelseshåndtering kan justeres løbende uden at bygge forfra"
  - "Frigivet fokus: dit team kan bruge tid på det der kræver menneskelig vurdering — ikke rutinearbejde"
  - "Enkel opsætning: flowet er live på 1–3 arbejdsdage og kræver ingen teknisk viden at vedligeholde"
  - "Real-time synkronisering: data i Make.com afspejles øjeblikkeligt uden manuel opdatering"
  - "Skalér uden at ansætte: flowet håndterer 83% mere volumen uden ekstra arbejdstid"
  - "Spar 2–4 timer om ugen der tidligere gik til timer på administration"
faq_items:
  - q: "Skal jeg selv have teknisk kendskab for at bruge og vedligeholde flowet?"
    a: "Nej. Flowet kører autonomt, og det daglige arbejde kræver ingen teknisk viden. Hvis I har brug for at justere regler eller tilføje nye scenarier, hjælper vi med det. Vi dokumenterer desuden alt, så I forstår hvad der sker — I er aldrig afhængige af os for at forstå jeres eget system."
  - q: "Hvad er forskellen på at bruge jer frem for at sætte det op selv?"
    a: "Make.com er et no-code-værktøj, så teknisk er det muligt at bygge selv. Forskellen er tid og erfaring: vi har bygget hundredvis af flows og kender faldgruberne. Vi bygger med korrekt fejlhåndtering, retry-logik og dokumentation fra starten — ikke som eftertanke. Og vi sikrer, at I forstår hvad I har, så I aldrig sidder fast."
  - q: "Hvad sker der, hvis Make.com eller Notion er midlertidigt utilgængeligt?"
    a: "Make.com har indbygget retry-logik: hvis Make.com eller Notion er utilgængeligt, forsøger flowet igen automatisk med eksponentiel backoff. Data går aldrig tabt — de sættes i kø og behandles, så snart forbindelsen er reetableret. Du modtager en notifikation, hvis der opstår et problem der kræver din opmærksomhed."
related:
  - url: "/automatisering/automatisk-indkoebsgodkendelse/"
    title: "Automatisk godkendelsesflow for indkøb og udgifter"
    category: "HR"
  - url: "/automatisering/timeseddel-og-fravaersregistrering/"
    title: "Automatisk timeseddel og fraværsregistrering for dit team"
    category: "HR"
  - url: "/automatisering/it-adgang-ny-medarbejder/"
    title: "Automatisk IT-provisionering ved ansættelse af ny medarbejder"
    category: "HR"
  - url: "/automatisering/automatisk-medarbejder-pulsmaling/"
    title: "Automatisk pulsmåling og survey af medarbejdertilfredshed"
    category: "HR"
faq_schema: |
  {
    "@context":"https://schema.org",
    "@type":"FAQPage",
    "mainEntity":[
      {"@type":"Question","name":"Skal jeg selv have teknisk kendskab for at bruge og vedligeholde flowet?","acceptedAnswer":{"@type":"Answer","text":"Nej. Flowet k\u00f8rer autonomt, og det daglige arbejde kr\u00e6ver ingen teknisk viden. Hvis I har brug for at justere regler eller tilf\u00f8je nye scenarier, hj\u00e6lper vi med det. Vi dokumenterer desuden alt, s\u00e5 I forst\u00e5r hvad der sker \u2014 I er aldrig afh\u00e6ngige af os for at forst\u00e5 jeres eget system."}},
      {"@type":"Question","name":"Hvad er forskellen p\u00e5 at bruge jer frem for at s\u00e6tte det op selv?","acceptedAnswer":{"@type":"Answer","text":"Make.com er et no-code-v\u00e6rkt\u00f8j, s\u00e5 teknisk er det muligt at bygge selv. Forskellen er tid og erfaring: vi har bygget hundredvis af flows og kender faldgruberne. Vi bygger med korrekt fejlh\u00e5ndtering, retry-logik og dokumentation fra starten \u2014 ikke som eftertanke. Og vi sikrer, at I forst\u00e5r hvad I har, s\u00e5 I aldrig sidder fast."}},
      {"@type":"Question","name":"Hvad sker der, hvis Make.com eller Notion er midlertidigt utilg\u00e6ngeligt?","acceptedAnswer":{"@type":"Answer","text":"Make.com har indbygget retry-logik: hvis Make.com eller Notion er utilg\u00e6ngeligt, fors\u00f8ger flowet igen automatisk med eksponentiel backoff. Data g\u00e5r aldrig tabt \u2014 de s\u00e6ttes i k\u00f8 og behandles, s\u00e5 snart forbindelsen er reetableret. Du modtager en notifikation, hvis der opst\u00e5r et problem der kr\u00e6ver din opm\u00e6rksomhed."}}
    ]
  }
---
