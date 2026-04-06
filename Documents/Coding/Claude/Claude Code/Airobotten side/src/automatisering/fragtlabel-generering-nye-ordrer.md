---
layout: automatisering.njk
title: "Automatisk fragtlabel-generering ved nye ordrer"
meta_description: "Generer fragtlabels automatisk ved nye ordrer i Shopify. Spar 2-4 timer om ugen og undgå fejl i adresser og pakkedata med Make.com og Shipmondo."
canonical: "https://airobotten.dk/automatisering/fragtlabel-generering-nye-ordrer/"
category: "E-commerce"
breadcrumb_label: "Automatisk fragtlabel-generering"
trigger: "Ny betalt ordre i Shopify"
result: "Fragtlabel genereret og klar til print"
problem: |
  <p>Hver gang en ny ordre lander i din webshop, starter det samme manuelle ritual: log ind i Shopify, åbn ordren, kopier leveringsadressen, skift til Shipmondo eller PostNord, opret forsendelsen, vælg fragtprodukt, generer label og print. For en webshop med 80 ordrer om måneden tager det typisk 2-4 minutter per ordre — det er op til 5 timer månedligt brugt på ren rutineregistrering.</p>
  <p>Problemet er ikke kun tidsspildet. Adressefejl er en af de hyppigste årsager til returnerede pakker. Når du kopierer manuelt fra Shopify til dit fragtsystem, er risikoen for tastefejl, forkerte postnumre eller byttet for- og efternavn reel. En enkelt forkert adresse koster typisk 80-150 kr. i ekstra fragttillæg og den tid, det tager at spore pakken og kontakte kunden.</p>
  <p>Har du sæsonudsving — jul, Black Friday, morsdag — vokser problemet proportionalt. Mange webshopejeree løser det ved at tage ekstra timer ind eller selv arbejde sent om aftenen. Det er dyrt, stressende og unødvendigt, når processen kan køre automatisk.</p>
solution: |
  <p>Vi bygger et Make.com-flow der lytter på Shopify via webhook. Hver gang en ordre skifter status til "betalt" eller "bekræftet", trækkes alle leveringsdata automatisk ud og sendes direkte til Shipmondo API. Shipmondo opretter forsendelsen, vælger det korrekte fragtprodukt baseret på ordrevægt og destination, og returnerer en label-URL. Make.com sender labelen til din printer eller gemmer den i en delt mappe klar til print.</p>
  <p>Flowet håndterer danske og udenlandske adresser forskelligt: indenlandske ordrer bruger f.eks. GLS eller DAO, mens udenlandske ordrer automatisk routes til PostNord International eller DHL baseret på regler du selv definerer. Ordrer der overskrider en bestemt vægt eller pris, kan desuden automatisk opgraderes til en premium fragttjeneste.</p>
tools:
  - "Shopify"
  - "Shipmondo"
  - "Make.com"
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
  - url: "/automatisering/pre-order-og-backorder-haandtering/"
    title: "Automatisk håndtering af pre-orders og backorders"
    category: "E-commerce"
  - url: "/automatisering/nye-ordrer-til-slack/"
    title: "Send automatisk besked i Slack ved nye ordrer"
    category: "E-commerce"
  - url: "/automatisering/sms-marketing-flows/"
    title: "Automatiske SMS marketing-flows til dine kunder"
    category: "E-commerce"
  - url: "/automatisering/prisovervaagning-konkurrenter-automatisk/"
    title: "Automatisk prisovervågning af konkurrenter"
    category: "E-commerce"
---
