---
layout: automatisering.njk
title: "Automatisk bogføring fra WooCommerce til Billy"
meta_description: "Bogfør WooCommerce-ordrer automatisk i Billy. Hvert salg overføres med korrekt moms, betalingsmetode og kontoplan — uden manuel indtastning."
canonical: "https://airobotten.dk/automatisering/woocommerce-til-billy/"
category: "Regnskab"
breadcrumb_label: "WooCommerce til Billy bogføring"
trigger: "Ny ordre betalt i WooCommerce"
result: "Ordre automatisk bogført i Billy med korrekt moms og kontoplan"
problem: |
  <p>Driver du en WordPress-webshop med WooCommerce og bruger Billy til regnskab, kender du rutinen: eksportér ordrer fra WooCommerce, åbn Billy, og bogfør dem manuelt én for én. For en webshop med blot 40–60 ordrer om måneden bruger du typisk 3–5 timer på denne opgave — timer der ikke skaber omsætning, men som alligevel er umulige at undgå, fordi regnskabet skal stemme.</p>
  <p>Det reelle problem er ikke kun tidsspildet. Manuel bogføring er fejlbehæftet på netop de punkter der koster mest at rette: forkert momssats på produkter med 0% moms, fragtbeløb bogført som omsætning i stedet for på en separat konto, betalingsgebyrer fra Stripe eller MobilePay der ender forkert. Fejlene opdages sjældent i øjeblikket — de dukker op ved kvartalsafslutningen, og din revisor skal bruge tid på at spore dem op. Det er ekstraregninger du sagtens kan undgå.</p>
  <p>WooCommerce og Billy taler desuden ikke samme sprog: WooCommerce arbejder med ordrestatusser som "completed" og "refunded", mens Billy bruger bogføringslogik med debiteringer og krediteringer. At oversætte korrekt manuelt kræver, at du forstår begge systemer og aldrig laver en fejl. Det er en urealistisk forventning, når du driver en forretning og har hundrede andre ting at holde styr på.</p>
solution: |
  <p>Vi bygger et Make.com-flow der forbinder WooCommerce og Billy via API. Når en ordre i WooCommerce skifter status til "betalt" eller "gennemført", aktiveres flowet øjeblikkeligt via webhook. Det udtrækker alle relevante data — produktlinjer, beløb, momssatser, rabatter, fragt og betalingsmetode — og opretter præcist de rigtige posteringer i Billy. Det hele sker på under 30 sekunder, uden at du behøver at logge ind på noget som helst.</p>
  <p>Flowet håndterer de nuancer der typisk skaber problemer manuelt: Stripe-betalinger bogføres på Stripe-kontoen, MobilePay-betalinger på MobilePay-kontoen, og refusioner oprettes automatisk som kreditnotaer i Billy. Produkter med 0% moms (bøger, visse fødevarer) behandles korrekt, og varesalg, fragtindtægter og gebyrer lander hver på sin egen konto ifølge din kontoplan. Resultatet er et regnskab der altid er opdateret og klar til revisoren.</p>
tools:
  - "WooCommerce"
  - "Billy"
  - "Make.com"
  - "Stripe"
steps:
  - title: "Ordre betalt i WooCommerce"
    body: "Så snart en ordre markeres som betalt i WooCommerce, sender systemet automatisk en notifikation til Make.com via webhook — ingen polling, ingen forsinkelse."
  - title: "Data valideres og normaliseres"
    body: "Flowet tjekker for duplikater og normaliserer data: beløb konverteres, momssatser identificeres per produkttype, og betalingsmetode mappet til den rigtige konto i Billy."
  - title: "Posteringer oprettes i Billy"
    body: "Make.com opretter de korrekte bogføringsposteringer i Billy via API: salg på omsætningskontoen, moms på momskontoen, fragt på fragtindtægtskontoen og betaling på den relevante betalingskonto."
  - title: "Refusioner håndteres automatisk"
    body: "Hvis en ordre refunderes i WooCommerce, opretter flowet automatisk en kreditnota i Billy og tilbagefører bogføringen korrekt — uden at du skal gøre noget manuelt."
  - title: "Daglig opsummering til din indbakke"
    body: "Hver morgen modtager du en email med gårsdagens bogføringsaktivitet: antal ordrer, samlet omsætning og eventuelle undtagelser der kræver manuel opmærksomhed."
benefits_label: "Det opnår du"
benefits:
  - "Spar 3–5 timer om måneden der tidligere gik til manuel bogføring"
  - "Eliminer bogføringsfejl — flowet behandler moms, fragt og betalingsmetoder konsekvent"
  - "Altid opdateret regnskab: Billy afspejler WooCommerce-salg i realtid"
  - "Fuld sporbarhed: komplet log over alle automatiske posteringer til revision"
  - "Refusioner og kreditnotaer håndteres automatisk uden manuel indblanding"
  - "Skalér uden ekstra arbejde — flowet håndterer 10 eller 1.000 ordrer om måneden"
faq_items:
  - q: "Virker det med alle betalingsgateway'er i WooCommerce?"
    a: "Vi opsætter flowet til de betalingsmetoder I bruger: Stripe, MobilePay, Nets Easy, PayPal og WooCommerce Payments understøttes alle. Hvert gateway mappes til den rigtige konto i Billy efter jeres kontoplan."
  - q: "Hvad sker der med ordrer der indeholder produkter med forskellig moms?"
    a: "Flowet håndterer blandede ordrer korrekt. Hvert produktlinje bogføres med sin egen momssats baseret på produktkategorien i WooCommerce. Standardprodukter bogføres med 25% moms, momsfritagne produkter med 0%."
  - q: "Kan vi bruge flowet selvom vi allerede har bogført nogle måneder manuelt?"
    a: "Ja. Flowet starter fra den dato I sætter det op og behandler alle nye ordrer fremadrettet. Historiske ordrer kan importeres separat som en engangskørsel, hvis I ønsker et komplet billede i Billy."
mini_case:
  title: "NaturKost.dk: Fra 4 timers månedsregnskab til fuldautomatisk bogføring"
  body: |
    <p>NaturKost.dk (fiktivt eksempel) er en dansk netbutik med økologiske fødevarer. De brugte WooCommerce og Billy, men bogføringen tog 4 timer om måneden — og med produkter der spændte fra 25% til 0% moms, opstod der jævnligt fejl der måtte rettes.</p>
    <p>Efter implementering af automatiseringen kører bogføringen nu uden menneskelig indblanding. De 4 månedlige timer er reduceret til nul, og revisoren har for første gang i tre år kunne lukke kvartalet uden korrekturkørsel. Den sparede tid bruges nu på produktudvikling og leverandørkontakter.</p>
faq_details:
  - q: "Hvor lang tid tager det at sætte op?"
    a: "Et standardflow er typisk live inden for 1–2 arbejdsdage. Vi starter med en kortlægning af jeres kontoplan i Billy og jeres produktkategorier i WooCommerce, derefter bygger og tester vi i et testmiljø med rigtige ordredata."
  - q: "Hvad koster det løbende at køre flowet?"
    a: "Make.com koster fra 9 USD om måneden for de fleste WooCommerce-shops. Dertil kommer vores opsætningshonorar. For de fleste shops er ROI opnået inden for den første måned alene i sparet bogføringstid."
  - q: "Kan vi selv justere flowet efterfølgende?"
    a: "Ja. Vi dokumenterer flowet grundigt og oplærer jer i Make.com-interfacet, så I selvstændigt kan tilpasse enklere regler. Større ændringer som nye betalingsmetoder eller ændringer i kontoplanen hjælper vi med."
pro_tip: "Opret en separat Billy-konto til 'Ventende Stripe-afregning' og lad flowet bogføre Stripe-betalinger hertil. Når Stripe udbetaler (typisk ugentligt), overføres beløbet til bankkontoen. Det giver et præcist billede af likviditeten og gør bankkontoafstemning triviel."
related:
  - url: "/automatisering/shopify-til-billy-regnskab/"
    title: "Automatisk bogføring fra Shopify til Billy"
    category: "Regnskab"
  - url: "/automatisering/woocommerce-bogfoering-e-conomic/"
    title: "Automatisk bogføring fra WooCommerce til e-conomic"
    category: "Regnskab"
  - url: "/automatisering/automatisk-bogfoering-stripe/"
    title: "Automatisk bogføring af Stripe-betalinger"
    category: "Regnskab"
  - url: "/automatisering/automatisk-rykkerprocedure/"
    title: "Automatisk rykkerprocedure for ubetalte fakturaer"
    category: "Regnskab"
faq_schema: |
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {"@type": "Question", "name": "Virker det med alle betalingsgateway'er i WooCommerce?", "acceptedAnswer": {"@type": "Answer", "text": "Vi opsætter flowet til de betalingsmetoder I bruger: Stripe, MobilePay, Nets Easy, PayPal og WooCommerce Payments understøttes alle. Hvert gateway mappes til den rigtige konto i Billy efter jeres kontoplan."}},
      {"@type": "Question", "name": "Hvad sker der med ordrer der indeholder produkter med forskellig moms?", "acceptedAnswer": {"@type": "Answer", "text": "Flowet håndterer blandede ordrer korrekt. Hvert produktlinje bogføres med sin egen momssats baseret på produktkategorien i WooCommerce. Standardprodukter bogføres med 25% moms, momsfritagne produkter med 0%."}},
      {"@type": "Question", "name": "Kan vi bruge flowet selvom vi allerede har bogført nogle måneder manuelt?", "acceptedAnswer": {"@type": "Answer", "text": "Ja. Flowet starter fra den dato I sætter det op og behandler alle nye ordrer fremadrettet. Historiske ordrer kan importeres separat som en engangskørsel, hvis I ønsker et komplet billede i Billy."}}
    ]
  }
---
