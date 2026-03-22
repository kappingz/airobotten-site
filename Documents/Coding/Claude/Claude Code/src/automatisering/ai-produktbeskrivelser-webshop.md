---
layout: automatisering.njk
title: "AI-genererede produktbeskrivelser til din webshop"
meta_description: "Spar dage på produktbeskrivelser — lad AI generere SEO-optimerede tekster direkte i Shopify baseret på produktdata. Konsekvent tone, dansk sprog, klar til publicering."
canonical: "https://airobotten.dk/automatisering/ai-produktbeskrivelser-webshop/"
category: "E-commerce"
breadcrumb_label: "AI-genererede produktbeskrivelser"
trigger: "Nyt produkt tilføjet i Shopify"
result: "SEO-optimeret produktbeskrivelse genereret automatisk"
problem: |
  <p>At skrive gode produktbeskrivelser er en af de mest tidskrævende opgaver for webshop-ejere. For hvert nyt produkt skal du formulere en tekst der både overbeviser kunden og er optimeret til søgemaskiner — med de rigtige søgeord, den rigtige tone og den rigtige længde. Har du 50, 200 eller 500 produkter, bliver det hurtigt en fuldtidsopgave i sig selv.</p>
  <p>Mange webshops ender med at kopiere leverandørernes standardtekster. Det er ikke bare kedeligt — det er direkte skadeligt for SEO. Google straffer duplikeret indhold, og en kopieret leverandørtekst der findes på 40 andre webshops giver dig ingen plads i søgeresultaterne. Du konkurrerer om præcis de samme placeringer som alle dine konkurrenter.</p>
  <p>Alternativet — at ansætte en tekstforfatter — koster typisk 300-600 kr. per produktbeskrivelse. For en webshop med 200 produkter løber det op i 60.000-120.000 kr. for én omgang, og så er teksterne ikke engang dynamiske: nye produkter kræver nye tekster, løbende.</p>
solution: |
  <p>Vi bygger et Make.com-flow der er koblet direkte til dit Shopify-catalog. Når du tilføjer et nyt produkt og gemmer det — med blot produktnavn, pris, kategori og eventuelle nøglespecifikationer — aktiveres flowet automatisk. OpenAI modtager produktdata og genererer en fuldt formuleret, SEO-optimeret produktbeskrivelse på dansk i den tone du har defineret for din butik.</p>
  <p>Teksten skrives direkte ind i Shopify-produktets beskrivelsesfeld og er klar til publicering. Du kan konfigurere outputformat præcist: ønsker du en kort intro, bullet points med features, og en call-to-action? En sammenhængende brødtekst? En version til mobile og en til desktop? Flowet leverer det du specificerer, konsekvent på tværs af hele dit catalog.</p>
tools:
  - "OpenAI"
  - "Shopify"
  - "Make.com"
mini_case:
  title: "Nordisk Livsstil ApS: Fra manuel rutine til automatisk flow"
  body: |
    <p>Nordisk er en dansk webshop der sælger boligindretning og sover tungt i højsæsoner. At transkribere møder, skrive referater og starte på blogindlæg fra bunden kostede webshopejeren 4–5 timer om ugen — tid der ellers kunne bruges på opgaver der rent faktisk kræver menneskelig vurdering. Problemet var ikke mangel på vilje, men at processen simpelthen ikke var bygget til at køre automatisk.</p>
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
  - url: "/automatisering/forladte-kurve-paamindelse/"
    title: "Send påmindelse til kunder om forladte kurve"
    category: "E-commerce"
  - url: "/automatisering/automatisk-lageropdatering-tvaers-af-salgskanaler/"
    title: "Automatiser lageropdatering på tværs af alle dine salgskanaler"
    category: "E-commerce"
  - url: "/automatisering/fragtlabel-generering-nye-ordrer/"
    title: "Automatisk fragtlabel-generering ved nye ordrer"
    category: "E-commerce"
  - url: "/automatisering/lager-alarm-lav-beholdning/"
    title: "Automatisk lageralarm ved lav beholdning i Shopify"
    category: "E-commerce"
---
