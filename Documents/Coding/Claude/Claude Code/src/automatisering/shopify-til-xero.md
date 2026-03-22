---
layout: automatisering.njk
title: "Automatisk bogføring fra Shopify til Xero"
meta_description: "Bogfør Shopify-ordrer automatisk i Xero. Perfekt til webshops med internationale kunder — korrekt valuta, moms og kontoplan uden manuel indtastning."
canonical: "https://airobotten.dk/automatisering/shopify-til-xero/"
category: "Regnskab"
breadcrumb_label: "Shopify til Xero bogføring"
trigger: "Ny ordre betalt i Shopify"
result: "Ordre og betaling bogført korrekt i Xero med korrekt valuta og moms"
problem: |
  <p>Xero er regnskabssoftwaren der bruges af danske webshops der sælger internationalt — til engelske, tyske eller nordamerikanske kunder — eller af virksomheder med britiske eller australske ejere der foretrækker Xero over de traditionelle danske systemer. Og netop her opstår problemet: Shopify og Xero er begge kraftfulde systemer, men de taler ikke automatisk sammen, og de internationale kompleksiteter der gør Xero relevant, er præcis dem der gør manuel bogføring besværlig.</p>
  <p>Valutatransaktioner kræver løbende kursregulering. Momsen varierer afhængigt af kundens land — EU-moms, britisk VAT og canadisk GST har alle forskellige satser og rapporteringskrav. Shopify Payments udbetaler på tværs af valutaer med varierende gebyrer. Alt dette skal afspejles korrekt i Xero, og manuelt at holde styr på det for 100+ ordrer om måneden er en fuld beskæftigelse i sig selv.</p>
  <p>Mange webshops ender med at bruge timerne i slutningen af måneden — netop når der er travlt med ordre — på at sidde med et regneark og prøve at afstemme Shopify-rapporten med Xero-posteringerne. Det er frustrererende, fejlbehæftet og unødvendigt.</p>
solution: |
  <p>Vi bygger et Make.com-flow der via Shopify webhook og Xero API bogfører hver betalt ordre direkte i Xero. Flowet håndterer de internationale kompleksiteter automatisk: valuta registreres i den originale handelssvaluta med løbende kursregulering, moms beregnes baseret på leveringsland og EU/non-EU-status, og Shopify Payments-gebyrer bogføres på en separat konto. Resultatet er et Xero-regnskab der altid stemmer med Shopify — uden at du behøver at rykke ved det.</p>
  <p>Flowet understøtter både Shopify Payments og andre betalingsgateway'er (Stripe, PayPal), og håndterer automatisk multi-currency reconciliation i Xero. Refusioner behandles som kreditnotaer med korrekt valuta og tilbagebetalt moms. Du modtager en daglig opsummering og en månedlig rapport klar til revisor eller bogholder.</p>
tools:
  - "Shopify"
  - "Xero"
  - "Make.com"
  - "Stripe"
steps:
  - title: "Ordre betalt i Shopify"
    body: "Shopify sender øjeblikkeligt en webhook til Make.com ved betalt ordre. Alle ordredetaljer — produkter, beløb, valuta, leveringsland og betalingsmetode — inkluderes."
  - title: "Moms og valuta beregnes"
    body: "Flowet bestemmer momsstatus baseret på leveringsland: EU-ordrer med OSS-moms, britiske ordrer med UK VAT, uden for EU momsfri. Beløb konverteres til bogføringsvalutaen med den aktuelle kurs."
  - title: "Faktura oprettes i Xero"
    body: "En betalt Xero-faktura oprettes med korrekte kontoer: omsætning, moms, fragt og eventuelle rabatter. Xero-fakturaen linkes til Shopify-ordrenummeret for fuld sporbarhed."
  - title: "Betaling afstemt i Xero"
    body: "Betalingen registreres på den korrekte Xero-betalingskonto: Shopify Payments, Stripe eller PayPal. Gebyrer bogføres automatisk som finansieringsomkostninger."
  - title: "Daglig rapport og månedlig revisoroversigt"
    body: "Daglig Slack-opsummering med dagens ordrer og omsætning per valuta. Månedlig rapport med moms per land klar til OSS-angivelse eller momsindberetning."
benefits_label: "Det opnår du"
benefits:
  - "Xero altid opdateret i realtid — ingen månedlige afstemningssessioner"
  - "Korrekt international moms automatisk — OSS, UK VAT og non-EU håndteres uden manuel beregning"
  - "Multi-currency bogføring med automatisk kursregulering"
  - "Shopify Payments-gebyrer bogført korrekt — ikke skjult i omsætningscifret"
  - "Spar 5–10 timer om måneden der tidligere gik til manuel Shopify-Xero afstemning"
  - "Revisor-klar rapport med moms per land ved månedsskifte"
faq_items:
  - q: "Understøttes Shopify Markets og multi-currency Shopify-setups?"
    a: "Ja. Flowet understøtter Shopify Markets-opsætninger hvor ordrer sælges i lokale valutaer. Hvert marked konfigureres med de korrekte skatteindstillinger og bogholderiokonti i Xero."
  - q: "Hvad med UK VAT efter Brexit?"
    a: "Britiske ordrer over £135 kræver UK VAT-registrering hos HMRC. Flowet er konfigureret til at identificere disse ordrer og bogføre UK VAT separat i Xero, klar til din kvartårlige UK VAT-angivelse."
  - q: "Vi bruger Xero i GBP men sælger i DKK og EUR — fungerer det?"
    a: "Ja. Xero's multi-currency-funktion håndterer dette, og flowet bogfører i den originale handelssvaluta med automatisk konvertering til GBP. Urealiserede valutakursgevinster og -tab behandles korrekt."
mini_case:
  title: "ScandiHome Ltd.: Automatisk bogføring på tværs af 5 valutaer"
  body: |
    <p>ScandiHome Ltd. (fiktivt eksempel) er en dansk-britisk webshop der sælger skandinavisk design til kunder i UK, EU og USA. De bruger Shopify med Shopify Markets og Xero i GBP. Tidligere brugte deres bogholder 8 timer om måneden på at afstemme Shopify-transaktioner i DKK, EUR og USD med Xero-posteringerne i GBP.</p>
    <p>Efter implementeringen bogføres alle ordrer automatisk med korrekt valutaomregning, UK VAT og EU-moms. Bogholderen bruger nu 30 minutter om måneden på at gennemse den automatisk genererede rapport og godkende den til revisoren. De 7,5 frigjorte timer bruges på analyse og forretningsudvikling.</p>
faq_details:
  - q: "Kan flowet håndtere Shopify-abonnementer via ReCharge eller Subscriptions?"
    a: "Ja. ReCharge og Shopify Subscriptions-ordrer behandles som normale Shopify-ordrer af flowet. Abonnementsordrer identificeres og kan bogføres på en separat omsætningskonto hvis I ønsker det."
  - q: "Hvad sker der med delvist refunderede ordrer?"
    a: "Delvise refusioner håndteres korrekt: en kreditnota oprettes i Xero for det refunderede beløb med korrekt momstilbageføring. Restordren forbliver bogført med det korrekte nettobeløb."
  - q: "Har vi brug for en Xero-partner eller revisor til opsætning?"
    a: "Nej, vi opsætter flowet direkte med jeres Xero-adgangsnøgler. Vi anbefaler dog, at jeres revisor eller bogholder godkender kontoplanen og momskonfigurationen inden go-live."
pro_tip: "Opret separate Xero-trackingkategorier for hvert Shopify-marked (DK, UK, DE, US). Det giver øjeblikkeligt overblik over omsætning og marginer per marked i Xero's rapporteringsværktøj — og identificerer hvilke markeder der faktisk er profitable efter valutaeksponering og markedsspecifikke gebyrer."
related:
  - url: "/automatisering/shopify-ordre-til-economic/"
    title: "Shopify ordrer til e-conomic bogføring"
    category: "Regnskab"
  - url: "/automatisering/shopify-til-dinero-automatisk-bogfoering-af-ordrer/"
    title: "Shopify til Dinero — automatisk bogføring"
    category: "Regnskab"
  - url: "/automatisering/stripe-betaling-til-regnskab/"
    title: "Automatisk bogføring af Stripe-betalinger"
    category: "Regnskab"
  - url: "/automatisering/automatisk-moms-afstemning-og-angivelse/"
    title: "Automatisk momsafstemning og angivelse"
    category: "Regnskab"
faq_schema: |
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {"@type": "Question", "name": "Understøttes Shopify Markets og multi-currency Shopify-setups?", "acceptedAnswer": {"@type": "Answer", "text": "Ja. Flowet understøtter Shopify Markets-opsætninger hvor ordrer sælges i lokale valutaer. Hvert marked konfigureres med de korrekte skatteindstillinger og bogholderiokonti i Xero."}},
      {"@type": "Question", "name": "Hvad med UK VAT efter Brexit?", "acceptedAnswer": {"@type": "Answer", "text": "Britiske ordrer over £135 kræver UK VAT-registrering hos HMRC. Flowet identificerer disse ordrer og bogfører UK VAT separat i Xero, klar til din kvartårlige UK VAT-angivelse."}},
      {"@type": "Question", "name": "Vi bruger Xero i GBP men sælger i DKK og EUR — fungerer det?", "acceptedAnswer": {"@type": "Answer", "text": "Ja. Xero's multi-currency-funktion håndterer dette, og flowet bogfører i den originale handelssvaluta med automatisk konvertering til GBP."}}
    ]
  }
---
