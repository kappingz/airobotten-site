---
layout: automatisering.njk
title: "Automatisk opfølgningsmail efter hvert kundemøde"
meta_description: "Send automatisk en personlig opfølgningsmail efter hvert kundemøde bookad via Calendly. AI udarbejder indholdet — du lukker flere deals ved at følge op konsekvent."
canonical: "https://airobotten.dk/automatisering/opfoelgningsmail-efter-kundemøde/"
category: "Salg"
breadcrumb_label: "Automatisk opfølgningsmail efter møde"
trigger: "Kundemøde afsluttes i Calendly"
result: "Personlig opfølgningsmail sendt til kunden"
problem: |
  <p>Opfølgning efter et salgsmøde er en af de mest kritiske handlinger i salgsprocessen — og en af dem der oftest glemmes eller udsættes. Undersøgelser viser, at 80% af salg kræver minimum 5 opfølgningskontakter, men mange sælgere giver op efter 1-2. Den primære årsag: det er tidskrævende og mentalt krævende at formulere en god, personlig opfølgningsmail for hvert møde.</p>
  <p>Problemet forstærkes af volumen. Har du 4-6 kundemøder om dagen, er det realistisk umuligt at sende en veltilrettelagt opfølgningsmail til alle inden for de første 2 timer — det tidspunkt, hvor du stadig er frisk i kundens hukommelse og engagementet er højest. I stedet sender du måske noget generisk sidst på dagen, eller du udskyder det til næste morgen og ender med at glemme det.</p>
  <p>En inkonsekvent opfølgningspraksis betyder tabte deals. En kunde du mødte og imponerede, men som ikke hørte fra dig i 3 dage, er en kunde der er kølet af og måske allerede har talt med en konkurrent. Hastighed og konsistens i opfølgning er direkte korreleret med konverteringsrate.</p>
solution: |
  <p>Vi kobler Calendly med Make.com og HubSpot. Når et møde i Calendly afsluttes — enten ved at mødetidspunktet er passeret, eller ved at du markerer det som gennemført — aktiveres flowet. OpenAI genererer en personlig opfølgningsmail baseret på kundens navn, mødetypen, og eventuelle noter du har tilføjet til Calendly-aftalen eller HubSpot-dealen.</p>
  <p>Emailen indeholder en tak for mødet, en opsummering af de vigtigste diskussionspunkter, og et klart næste skridt — f.eks. et link til at booke et opfølgningsmøde, en invitation til at se en demo, eller et tilbud I aftalte. Mailen kan sendes automatisk, eller den kan sættes i kø som kladde til din godkendelse. Aldrig mere et møde der ikke følges op på.</p>
tools:
  - "Calendly"
  - "OpenAI"
  - "Make.com"
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
related:
  - url: "/automatisering/automatisk-kontrakt-udsendelse/"
    title: "Send kontrakter til underskrift automatisk ved vundet deal"
    category: "Salg"
  - url: "/automatisering/ai-dokumentgenerering-skabeloner/"
    title: "Automatisk dokumentgenerering med AI fra skabeloner"
    category: "Salg"
  - url: "/automatisering/crm-pipeline-automatisk-opdatering/"
    title: "Automatisk opdatering af CRM pipeline baseret på kundeaktivitet"
    category: "Salg"
  - url: "/automatisering/chatgpt-guide-til-smv-og-webshop/"
    title: "ChatGPT — komplet guide til danske SMV'er og webshops"
    category: "Redskaber"
---
