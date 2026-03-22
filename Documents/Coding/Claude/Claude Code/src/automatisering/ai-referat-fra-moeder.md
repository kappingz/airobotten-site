---
layout: automatisering.njk
title: "Automatisk AI-referat fra møder via transskribering"
meta_description: "Generer automatisk mødereferater med AI fra optagelse eller transskribering. Nøglebeslutninger, handlingspunkter og ansvar er klar inden mødet er slut."
canonical: "https://airobotten.dk/automatisering/ai-referat-fra-moeder/"
category: "HR"
breadcrumb_label: "AI-referat fra møder"
trigger: "Møde afsluttes med optagelse eller transskribering"
result: "Struktureret referat med beslutninger og handlingspunkter klar"
problem: |
  <p>Mødereferater er en af de mest undervurderede produktivitetsfaktorer i en organisation. Et godt referat sikrer at beslutninger huskes og handles på, at ansvar er klart fordelt, og at folk der ikke deltog i mødet kan komme op i tempo. Et dårligt eller manglende referat er årsag til misforståelser, forpassede handlingspunkter og møder der gentager de samme diskussioner gang efter gang.</p>
  <p>Men referatskrivning er tidskrævende. Den person der skriver referatet under mødet, er ikke fuldt til stede i diskussionen. Den der skriver efterfølgende, bruger 20-45 minutter på at rekonstruere hvad der blev sagt, og risikerer at misrepræsentere nuancer eller glemme vigtige beslutninger. I organisationer med mange møder kan referatskrivning nemt bruge 2-4 timer om ugen per person.</p>
  <p>Mange organisationer har simpelthen opgivet at skrive referater systematisk — og betaler prisen i form af manglende follow-through, gentagne diskussioner og uklarhed om hvem der har ansvaret for hvad. Det er en løselig organisation, ikke en lean en.</p>
solution: |
  <p>Vi bygger et Make.com-flow der aktiveres, når et møde afsluttes med en optagelse eller en automatisk transskribering (f.eks. fra Teams, Zoom eller en dedikereret transkriberings-app). OpenAI analyserer transskriberingen og genererer et struktureret referat med: mødets formål, deltagere, nøglebeslutninger, handlingspunkter med ansvarlig og deadline, og eventuelle åbne spørgsmål til næste møde.</p>
  <p>Referatet gemmes automatisk i Notion-databasen tilknyttet det relevante projekt eller team. Alle deltagere og ansvarlige for handlingspunkter notificeres i Slack med et link til referatet og deres specifikke handlingspunkter fremhævet. Det tager under 2 minutter fra mødet slutter til alle har referatet — ingen skriver noget manuelt.</p>
tools:
  - "Notion"
  - "OpenAI"
  - "Make.com"
  - "Slack"
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
  - url: "/automatisering/it-adgang-ny-medarbejder/"
    title: "Automatisk IT-provisionering ved ansættelse af ny medarbejder"
    category: "HR"
  - url: "/automatisering/automatisk-indkoebsgodkendelse/"
    title: "Automatisk godkendelsesflow for indkøb og udgifter"
    category: "HR"
  - url: "/automatisering/automatisk-medarbejder-pulsmaling/"
    title: "Automatisk pulsmåling og survey af medarbejdertilfredshed"
    category: "HR"
  - url: "/automatisering/timeseddel-og-fravaersregistrering/"
    title: "Automatisk timeseddel og fraværsregistrering for dit team"
    category: "HR"
---
