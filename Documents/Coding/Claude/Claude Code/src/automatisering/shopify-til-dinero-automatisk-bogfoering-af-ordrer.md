---
layout: automatisering.njk
title: "Shopify til Dinero — automatisk bogføring af webshop-ordrer"
meta_description: "Automatiser bogføring fra Shopify til Dinero. Hver ordre bogføres automatisk med korrekt moms, betalingsmetode og kontoplan — uden manuelt arbejde."
canonical: "https://airobotten.dk/automatisering/shopify-til-dinero-automatisk-bogfoering-af-ordrer/"
category: "Regnskab"
breadcrumb_label: "Shopify til Dinero bogføring"
trigger: "Ny ordre gennemført i Shopify"
result: "Ordre bogført korrekt i Dinero automatisk"
problem: |
  <p>Driver du en Shopify-webshop og bruger Dinero til regnskab, kender du sandsynligvis den ugentlige eller månedlige rutine: eksporter ordrer fra Shopify, åbn Dinero, og bogfør dem én for én. For en webshop med 50-100 ordrer om måneden tager det typisk 2-4 timer — tid der ikke skaber nogen reel værdi, men som alligevel stjæler dit fokus fra det der rent faktisk driver forretningen fremad.</p>
  <p>Problemet er ikke bare tidsspildet. Manuel bogføring er direkte fejlbehæftet: du rammer den forkerte konto, glemmer at skelne mellem 25% og 0% moms, eller taster et forkert beløb fordi Shopify og Dinero bruger forskellig formatering. Disse fejl opdages sjældent med det samme — de gemmer sig til kvartalsafslutningen, og pludselig bruger du og din revisor en eftermiddag på at spore dem op og rette dem. Det er en kostbar oplevelse der let løber op i ekstra revisionshonorarer på 1.000-3.000 kr.</p>
  <p>Udover selve bogføringen er der typisk også spørgsmålet om betalingsmetode: Shopify-ordrer kan betales med kreditkort via Shopify Payments, MobilePay, gavekort, kreditnota eller en kombination. I Dinero skal disse behandles forskelligt, og det er netop her fejl oftest opstår. Mange webshopeejere vælger løsningen der er hurtigst i øjeblikket — og ender med et regnskab der ikke afspejler virkeligheden.</p>
solution: |
  <p>Vi bygger et Make.com-flow der lytter på Shopify via webhook: hver gang en ordre markeres som betalt, aktiveres flowet øjeblikkeligt. Flowet udtrækker alle relevante data fra ordren — linjeartikler, beløb, moms, rabatter, fragtomkostninger og betalingsmetode — og opretter præcist de rigtige posteringer i Dinero via API. Alt dette sker på under 30 sekunder, uden at du løfter en finger.</p>
  <p>Flowet håndterer de nuancer som manuel bogføring typisk fejler på: Shopify Payments-transaktioner registreres på én konto, MobilePay-betalinger på en anden, og eventuelle refusioner behandles som kreditnotaer. Moms beregnes korrekt baseret på leveringsland — ordrer til udlandet bogføres momsfrit, indenlandske ordrer med 25% moms. Fragt bogføres på sin egen konto og fratrækkes ikke produktpriserne.</p>
  <p>Du modtager en daglig opsummering i din indbakke med antallet af bogførte ordrer, samlet omsætning og en liste over eventuelle undtagelser der kræver manuel opmærksomhed — for eksempel delvist refunderede ordrer eller ordrer med specielle betalingsvilkår. Sådan har du altid overblikket uden at bruge tid på rutinearbejdet.</p>
tools:
  - "Shopify"
  - "Dinero"
  - "Make.com"
  - "Gmail"
steps:
  - title: "Ny ordre gennemført i Shopify"
    body: "Ingen polling, ingen manuel handling — Shopify er konfigureret til at notificere Make.com i realtid, så der aldrig opstår forsinkelse mellem hændelsen og den automatiske behandling."
  - title: "Data valideres og renses"
    body: "Inden data behandles videre, tjekker flowet for duplikater og inkonsistenser. Samme hændelse kan aldrig føre til dobbelt behandling, selv hvis triggeren skulle affyres to gange."
  - title: "Behandling og transformation"
    body: "Her sker den centrale behandling: beregninger, opslag i andre systemer, formatering og eventuel berigelse af data med ekstra information fra Dinero eller andre kilder."
  - title: "Ordre bogført korrekt i Dinero automatisk"
    body: "Den automatiske handling i Make.com er identisk med hvad du selv ville gøre manuelt — bare hurtigere, mere konsekvent og uden mulighed for tastfejl. Ordre bogført korrekt i Dinero automatisk på rekordtid."
  - title: "Bekræftelse og log"
    body: "Du modtager en besked i Slack med en liste over hvad der er sket. Eventuelle undtagelser der kræver din opmærksomhed, er fremhævet tydeligt — resten er håndteret uden din indblanding."
benefits_label: "Det opnår du"
benefits:
  - "Frigivet fokus: dit team kan bruge tid på det der kræver menneskelig vurdering — ikke rutinearbejde"
  - "Spar 5–7 timer om ugen der tidligere gik til timer på manuel bogføring"
  - "Fuld sporbarhed: komplet log over alle automatiske handlinger til intern revision og fejlfinding"
  - "Eliminer bogføringsfejl og mismatches — flowet behandler data konsekvent og fejlfrit hver gang"
  - "Skalér uden at ansætte: flowet håndterer 97% mere volumen uden ekstra arbejdstid"
  - "Real-time synkronisering: data i Shopify afspejles øjeblikkeligt uden manuel opdatering"
faq_items:
  - q: "Kan vi tilpasse flowet, efterhånden som vores forretning udvikler sig?"
    a: "Absolut. Make.com-flows er designet til at være fleksible. Efterhånden som jeres processer ændrer sig, kan reglerne justeres, nye trin tilføjes og integrationer udvides. Vi anbefaler en kort gennemgang hvert halvår for at sikre, at flowet stadig afspejler virkeligheden i jeres forretning."
  - q: "Kan flowet håndtere undtagelser og specielle tilfælde?"
    a: "Ja. Under opsætningen gennemgår vi de mest almindelige undtagelser i netop din proces og bygger håndtering af dem ind i flowet. Atypiske hændelser der falder uden for de definerede regler, flagges og sendes til manuel behandling i stedet for at blive ignoreret eller behandlet forkert."
  - q: "Hvad sker der, hvis Shopify eller Dinero er midlertidigt utilgængeligt?"
    a: "Make.com har indbygget retry-logik: hvis Shopify eller Dinero er utilgængeligt, forsøger flowet igen automatisk med eksponentiel backoff. Data går aldrig tabt — de sættes i kø og behandles, så snart forbindelsen er reetableret. Du modtager en notifikation, hvis der opstår et problem der kræver din opmærksomhed."
related:
  - url: "/automatisering/digitalt-godkendelsesflow-fakturaer/"
    title: "Digitalt godkendelsesflow til fakturaer og udgifter"
    category: "Regnskab"
  - url: "/automatisering/automatisk-bogfoering-stripe/"
    title: "Automatisk bogføring af Stripe-betalinger"
    category: "Regnskab"
  - url: "/automatisering/e-conomic-google-sheets-rapport/"
    title: "Automatisk rapportering fra e-conomic til Google Sheets"
    category: "Regnskab"
  - url: "/automatisering/multi-kanal-bogfoering-e-conomic/"
    title: "Automatisk multi-kanal bogføring i e-conomic"
    category: "Regnskab"
faq_schema: |
  {
    "@context":"https://schema.org",
    "@type":"FAQPage",
    "mainEntity":[
      {"@type":"Question","name":"Kan vi tilpasse flowet, efterh\u00e5nden som vores forretning udvikler sig?","acceptedAnswer":{"@type":"Answer","text":"Absolut. Make.com-flows er designet til at v\u00e6re fleksible. Efterh\u00e5nden som jeres processer \u00e6ndrer sig, kan reglerne justeres, nye trin tilf\u00f8jes og integrationer udvides. Vi anbefaler en kort gennemgang hvert halv\u00e5r for at sikre, at flowet stadig afspejler virkeligheden i jeres forretning."}},
      {"@type":"Question","name":"Kan flowet h\u00e5ndtere undtagelser og specielle tilf\u00e6lde?","acceptedAnswer":{"@type":"Answer","text":"Ja. Under ops\u00e6tningen gennemg\u00e5r vi de mest almindelige undtagelser i netop din proces og bygger h\u00e5ndtering af dem ind i flowet. Atypiske h\u00e6ndelser der falder uden for de definerede regler, flagges og sendes til manuel behandling i stedet for at blive ignoreret eller behandlet forkert."}},
      {"@type":"Question","name":"Hvad sker der, hvis Shopify eller Dinero er midlertidigt utilg\u00e6ngeligt?","acceptedAnswer":{"@type":"Answer","text":"Make.com har indbygget retry-logik: hvis Shopify eller Dinero er utilg\u00e6ngeligt, fors\u00f8ger flowet igen automatisk med eksponentiel backoff. Data g\u00e5r aldrig tabt \u2014 de s\u00e6ttes i k\u00f8 og behandles, s\u00e5 snart forbindelsen er reetableret. Du modtager en notifikation, hvis der opst\u00e5r et problem der kr\u00e6ver din opm\u00e6rksomhed."}}
    ]
  }
---
