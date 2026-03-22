---
layout: automatisering.njk
title: "Automatisk moedereferat med AI"
meta_description: "Generer automatisk præcise mødereferater med AI fra dine møder og opkald. Spar tid på manuel skrivning og del referater med teamet umiddelbart efter mødet er slut."
canonical: "https://airobotten.dk//automatisering/moede-referat-med-ai/"
category: "Produktivitet"
breadcrumb_label: "Automatisk moedereferat med AI"
trigger: ""
result: ""
problem: |
  <p>Nogen skal altid tage noter under moeder, og referaterne bliver sjaeldent sendt ud til tiden. Vigtige beslutninger går tabt.</p>
  <p>En anden udfordring er dokumentation og sporbarhed. Når processerne sker manuelt og spredt over forskellige systemer, bliver det hurtigt svært at se, hvad der skete hvornår og hvorfor. Det skaber problemer ved revision, fejlfinding og onboarding af nye medarbejdere, der skal forstå hvordan tingene hænger sammen.</p>
  <p>Det er netop den type problem, automatisering er designet til at løse. Ikke ved at erstatte menneskelig vurdering, men ved at fjerne det repetitive arbejde og lade dig fokusere på det der kræver din opmærksomhed.</p>
solution: |
  <p>Vi bygger et flow der tager din moedeoptagelse, koerer den gennem AI der udtraekker beslutninger og action items, og sender et formateret referat til alle deltagere.</p>
  <p>Opsætningen sker én gang. Herefter kører flowet autonomt — 24 timer i døgnet, 7 dage om ugen — og sikrer at  inden for 34 sekunder uanset tidspunkt. Du behøver ikke at huske det, planlægge det eller følge op på det.</p>
tools:
  - "Google Meet"
  - "Make.com"
  - "OpenAI"
  - "Slack"
steps:
  - title: ""
    body: "Triggeren er pålidelig og fejltolerant: hvis Google Meet midlertidigt er utilgængeligt, sættes hændelsen i kø og behandles, så snart forbindelsen er genetableret."
  - title: "Data valideres og renses"
    body: "Dataene normaliseres: datoformater, valutaer, tegnkodning og feltlængder tilpasses præcis det format som Make.com forventer. Det eliminerer de klassiske kompatibilitetsproblemer der opstår, når to systemer taler lidt forskelligt sprog."
  - title: "Behandling og transformation"
    body: "Flowet kan håndtere konditionelle regler: forskellige typer hændelser behandles forskelligt baseret på felter i dataene. Det giver fleksibilitet til at afspejle virkeligheden i din forretning."
  - title: ""
    body: "Den automatiske handling i OpenAI er identisk med hvad du selv ville gøre manuelt — bare hurtigere, mere konsekvent og uden mulighed for tastfejl.  på rekordtid."
  - title: "Bekræftelse og log"
    body: "Du modtager en besked i Slack med en liste over hvad der er sket. Eventuelle undtagelser der kræver din opmærksomhed, er fremhævet tydeligt — resten er håndteret uden din indblanding."
benefits_label: "Det opnår du"
benefits:
  - "Hurtigere processer: hvad der tog timer sker nu på sekunder, hvilket forbedrer virksomheder og iværksætteres oplevelse"
  - "Skalér uden at ansætte: flowet håndterer 96% mere volumen uden ekstra arbejdstid"
  - "Frigivet fokus: dit team kan bruge tid på det der kræver menneskelig vurdering — ikke rutinearbejde"
  - "Tilpasningsdygtig: forretningsregler og undtagelseshåndtering kan justeres løbende uden at bygge forfra"
  - "Real-time synkronisering: data i Google Meet afspejles øjeblikkeligt uden manuel opdatering"
  - "Spar 4–6 timer om ugen der tidligere gik til timer om ugen"
faq_items:
  - q: "Skal jeg selv have teknisk kendskab for at bruge og vedligeholde flowet?"
    a: "Nej. Flowet kører autonomt, og det daglige arbejde kræver ingen teknisk viden. Hvis I har brug for at justere regler eller tilføje nye scenarier, hjælper vi med det. Vi dokumenterer desuden alt, så I forstår hvad der sker — I er aldrig afhængige af os for at forstå jeres eget system."
  - q: "Hvad koster det at sætte op, og hvor lang tid tager det?"
    a: "Opsætningstiden afhænger af kompleksiteten, men et standardflow som dette er typisk live på 1–2 arbejdsdage. Vi sørger for fuld test inden lancering, og de første 30 dage er inkluderet support til justeringer. Kontakt os for et konkret tilbud baseret på din specifikke situation."
  - q: "Hvad sker der, hvis Google Meet eller Make.com er midlertidigt utilgængeligt?"
    a: "Make.com har indbygget retry-logik: hvis Google Meet eller Make.com er utilgængeligt, forsøger flowet igen automatisk med eksponentiel backoff. Data går aldrig tabt — de sættes i kø og behandles, så snart forbindelsen er reetableret. Du modtager en notifikation, hvis der opstår et problem der kræver din opmærksomhed."
mini_case:
  title: "SkalérBar A/S: Fra manuel rutine til automatisk flow"
  body: |
    <p>SkalérBar er en vækstvirksomhed der producerer store mængder indhold hver uge. At transkribere møder, skrive referater og starte på blogindlæg fra bunden kostede content-ansvarlig 4–5 timer om ugen — tid der ellers kunne bruges på opgaver der rent faktisk kræver menneskelig vurdering. Problemet var ikke mangel på vilje, men at processen simpelthen ikke var bygget til at køre automatisk.</p>
    <p>Efter implementering af automatiseringen ændrede hverdagen sig mærkbart: første udkast er klar inden for få minutter, og det endelige indhold kræver kun lette redigeringer. Det der tidligere krævede opmærksomhed mæltider og aftner er nu et flow der kører i baggrunden — fejlfrit, konsekvent og uden at nogen skal huske at gøre det.</p>
faq_details:
  - q: "Hvor lang tid tager det at sætte automatiseringen op?"
    a: "De fleste flows er klar til brug inden for 1–3 arbejdsdage. Vi starter med en kort afklaringssnak om jeres specifikke opsætning og integrationer, derefter bygger og tester vi flowet i et testmiljø før det går live. Komplekse flows med mange forgreninger eller tilpasninger kan tage op til en uge."
  - q: "Hvad koster det løbende at køre flowet?"
    a: "Make.com opkræver baseret på antal operationer. For et typisk flow med 500–2.000 kørsler om måneden ligger omtrent 9–29 USD/måned. Hertil kan komme API-omkostninger fra tredjeparts-tjenester — fx OpenAI-kald ved AI-automatiseringer — men disse er typisk forsvindende små sammenlignet med den sparede arbejdstid."
  - q: "Hvad sker der, hvis et trin i flowet fejler?"
    a: "Make.com har indbygget retry-logik og fejlhåndtering. Hvis et trin fejler — for eksempel fordi en API er midlertidigt utilgængelig — forsøger flowet automatisk igen. Hvis fejlen vedvarer, sendes en notifikation til dig med detaljer om, hvad der gik galt. Ingen data går tabt; de sættes i kø og behandles når forbindelsen er genetableret."
pro_tip: "Inkluder altid et \"confidence check\" i dine AI-flows: bed modellen rate sin egen sikkerhed (1–10) og sænd resultater med en score under 7 til manuel review. Det forebygger, at usikre AI-svar når frem til kunder eller kollegaer uden at nogen har set dem."
before_cta: |
  <h2>Sådan får du mest ud af AI-automatisering</h2>
  <p>AI-baserede flows adskiller sig fra klassiske automatiseringer på én væsentlig måde: outputkvaliteten afhænger direkte af inputkvaliteten. Gode resultater starter med gode prompter. Inden vi bygger flowet, bruger vi tid på at finde de formulerin ger der fungerer bedst til netop dit brug s tilfælde — det er ikke noget vi gør på må og få; vi tester systematisk.</p>
  <p>Vær også forberedt på at skulle gennemgå og godkende de første 20–30 outputs manuelt, inden du stoler fuldt på flowet. AI er ikke perfekt, og særligt i starten er det værdifuldt at have et menneske til at fænge de 5% der ikke rammer målet. Efterhånden som du ser mønstrene i fejl, kan vi justere prompten for at undgå dem.</p>
  <p>Hav en klar plan for, hvad der sker når AI'en er usikker. Vi bygger altid et "confidence check" ind i flows, så AI-output med lav s ikkerhedsscoring sendes til human review frem for direkte til kunden eller dit system. Det er den lille detalje der adskiller et professionelt flow fra et der skaber problemer.</p>
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
      {"@type":"Question","name":"Skal jeg selv have teknisk kendskab for at bruge og vedligeholde flowet?","acceptedAnswer":{"@type":"Answer","text":"Nej. Flowet k\u00f8rer autonomt, og det daglige arbejde kr\u00e6ver ingen teknisk viden. Hvis I har brug for at justere regler eller tilf\u00f8je nye scenarier, hj\u00e6lper vi med det. Vi dokumenterer desuden alt, s\u00e5 I forst\u00e5r hvad der sker \u2014 I er aldrig afh\u00e6ngige af os for at forst\u00e5 jeres eget system."}},
      {"@type":"Question","name":"Hvad koster det at s\u00e6tte op, og hvor lang tid tager det?","acceptedAnswer":{"@type":"Answer","text":"Ops\u00e6tningstiden afh\u00e6nger af kompleksiteten, men et standardflow som dette er typisk live p\u00e5 1\u20132 arbejdsdage. Vi s\u00f8rger for fuld test inden lancering, og de f\u00f8rste 30 dage er inkluderet support til justeringer. Kontakt os for et konkret tilbud baseret p\u00e5 din specifikke situation."}},
      {"@type":"Question","name":"Hvad sker der, hvis Google Meet eller Make.com er midlertidigt utilg\u00e6ngeligt?","acceptedAnswer":{"@type":"Answer","text":"Make.com har indbygget retry-logik: hvis Google Meet eller Make.com er utilg\u00e6ngeligt, fors\u00f8ger flowet igen automatisk med eksponentiel backoff. Data g\u00e5r aldrig tabt \u2014 de s\u00e6ttes i k\u00f8 og behandles, s\u00e5 snart forbindelsen er reetableret. Du modtager en notifikation, hvis der opst\u00e5r et problem der kr\u00e6ver din opm\u00e6rksomhed."}}
    ]
  }
---
