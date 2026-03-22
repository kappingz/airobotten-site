---
layout: automatisering.njk
title: "Automatisk dokumentgenerering med AI fra skabeloner"
meta_description: "Generer tilbud, kontrakter og præsentationer automatisk med AI fra CRM-data. Personlige dokumenter klar på minutter frem for timer — med korrekte tal og kundenavn."
canonical: "https://airobotten.dk/automatisering/ai-dokumentgenerering-skabeloner/"
category: "Salg"
breadcrumb_label: "AI-dokumentgenerering fra skabeloner"
trigger: "Deal når specifik fase i HubSpot CRM"
result: "Personligt tilbud eller kontrakt genereret og klar til afsendelse"
problem: |
  <p>At udarbejde et skræddersyet tilbud eller kontrakt er en af de mest tidskrævende aktiviteter i salgsprocessen. Selvom grundstrukturen er den samme for alle kunder, er detaljerne unikke: kundens navn og virksomhed, de specificerede produkter eller services, priser, leveringstider, og eventuelle særlige vilkår. For mange sælgere tager det 30-90 minutter at udarbejde ét professionelt tilbud — tid der kunne bruges på at sælge.</p>
  <p>Problemet med manuelt udarbejdede dokumenter er ikke bare tid — det er fejl. Forkerte priser kopiert fra en gammel skabelon, kundens navn stavet forkert, eller en vilkårsklausul der burde have været opdateret for 6 måneder siden. Dokumentfejl er pinlige og kan i værste fald skabe juridiske problemer eller forsinke lukkeprocessen.</p>
  <p>I organisationer med mange sælgere er der desuden et konsistens-problem. Tilbud ser anderledes ud afhængigt af hvem der udarbejder dem, og brand-konsistens lider. En ny sælger bruger et gammelt format, en erfaren sælger tilpasser skabelonen på sin egen måde — og pludselig har I 12 versioner af det samme tilbud i omløb.</p>
solution: |
  <p>Vi bygger et Make.com-flow der aktiveres, når en HubSpot-deal når en specifik fase — f.eks. "Klar til tilbud". Flowet henter alle relevante data fra dealen og kontakten: kundenavn, virksomhed, udvalgte produkter, priser, kontaktperson og eventuelle noter. OpenAI fylder skabelonen med disse data og genererer en personlig, professionelt formuleret tekst i de dele der kræver naturligt sprog — f.eks. introduktionsteksten og en tilpasset problemformulering.</p>
  <p>Det færdige dokument gemmes automatisk i Google Drive i den korrekte kundemappestruktur og linkes i HubSpot-dealen. Sælgeren notificeres i Slack med et link til dokumentet, gennemgår det hurtigt, og sender det direkte til kunden. Fra deal-fase til klar tilbud: under 5 minutter, frem for 30-90 minutter.</p>
tools:
  - "OpenAI"
  - "Make.com"
  - "Google Drive"
  - "HubSpot"
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
  - url: "/automatisering/opfoelgningsmail-efter-kundemøde/"
    title: "Automatisk opfølgningsmail efter hvert kundemøde"
    category: "Salg"
  - url: "/automatisering/automatisk-kontrakt-udsendelse/"
    title: "Send kontrakter til underskrift automatisk ved vundet deal"
    category: "Salg"
  - url: "/automatisering/crm-pipeline-automatisk-opdatering/"
    title: "Automatisk opdatering af CRM pipeline baseret på kundeaktivitet"
    category: "Salg"
  - url: "/automatisering/google-ads-performance-rapport/"
    title: "Automatisk Google Ads performance-rapport til Sheets og Slack"
    category: "Marketing"
---
