---
layout: automatisering.njk
title: "Automatisk lageralarm ved lav beholdning i Shopify"
meta_description: "Få automatisk alarm i Slack eller email når et Shopify-produkt når et kritisk lagerniveau. Undgå udsolgte varer og tabte ordrer med intelligent lagerovervågning."
canonical: "https://airobotten.dk/automatisering/lager-alarm-lav-beholdning/"
category: "E-commerce"
breadcrumb_label: "Automatisk lageralarm"
trigger: "Lagerbeholdning falder under defineret tærskel"
result: "Alarm sendt med produktinfo og genbestillingsanbefaling"
problem: |
  <p>Et produkt der er løbet tør for lager koster dig på to måder: du mister det direkte salg, og du risikerer at skuffe kunden som måske ikke vender tilbage. For webshops med mange produkter og varianter er det næsten umuligt at holde øje med lagerstatus manuelt. Du opdager typisk, at et produkt er udsolgt, fordi en kunde skriver og spørger — eller fordi du ser det i statistikken efterfølgende.</p>
  <p>Shopifys interne lageradvarsler er baseret på e-mails der let drukner i indbakken, og de er ikke konfigurerbare nok til at håndtere produkter med meget forskellig omsætningshastighed. Et produkt der sælger 5 enheder om dagen har et kritisk niveau på f.eks. 20 — mens et produkt der sælger 2 om måneden godt kan have 3 på lager uden at det er kritisk.</p>
  <p>Resultatet er en konstant usikkerhed: enten bestiller du for meget og binder kapital i overskudslager, eller du bestiller for lidt og risikerer at gå glip af salg. Intelligent, automatiseret overvågning løser begge problemer.</p>
solution: |
  <p>Vi bygger et Make.com-flow der løbende overvåger lagerstatus for alle dine Shopify-produkter og varianter. For hvert produkt definerer du et minimum-lagerniveau — enten fast (f.eks. 10 enheder) eller dynamisk baseret på omsætningshastighed. Når beholdningen falder til eller under dette niveau, sendes en alarm øjeblikkeligt til Slack og/eller email.</p>
  <p>Alarmen indeholder produktnavn, SKU, nuværende lagerniveau, gennemsnitligt dagssalg de seneste 30 dage, og en beregnet estimeret antal dage til udsolgt. Med det grundlag kan du træffe en informeret genbestillingsbeslutning hurtigt. Hvis du arbejder med leverandørers leveringstider, kan flowet endda beregne, om du skal bestille nu for at undgå et lager-gap.</p>
tools:
  - "Shopify"
  - "Make.com"
  - "Slack"
  - "Gmail"
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
  - url: "/automatisering/automatisk-ordrebekraeftelse-email/"
    title: "Automatisk ordrebekræftelse via email"
    category: "E-commerce"
  - url: "/automatisering/pre-order-og-backorder-haandtering/"
    title: "Automatisk håndtering af pre-orders og backorders"
    category: "E-commerce"
  - url: "/automatisering/b2b-ordre-fakturering-automatisk/"
    title: "Automatisk B2B-ordreflow med godkendelse og fakturering"
    category: "E-commerce"
  - url: "/automatisering/fragtlabel-generering-nye-ordrer/"
    title: "Automatisk fragtlabel-generering ved nye ordrer"
    category: "E-commerce"
---
