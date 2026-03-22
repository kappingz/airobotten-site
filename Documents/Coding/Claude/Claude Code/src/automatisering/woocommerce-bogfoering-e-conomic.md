---
layout: automatisering.njk
title: "Automatisk bogføring af WooCommerce-ordrer i e-conomic"
meta_description: "Forbind WooCommerce med e-conomic og bogfør alle ordrer automatisk med korrekt moms, betalingsmetode og konteringer. Spar timer og eliminer bogføringsfejl."
canonical: "https://airobotten.dk/automatisering/woocommerce-bogfoering-e-conomic/"
category: "Regnskab"
breadcrumb_label: "WooCommerce til e-conomic bogføring"
trigger: "Ny betalt ordre i WooCommerce"
result: "Salgsbilag oprettet korrekt i e-conomic"
problem: |
  <p>Kører du en WooCommerce-webshop og bruger e-conomic til regnskab, er den manuelle bogføring sandsynligvis en af de mest frustrerende tilbagevendende opgaver. Hver uge eller måned eksporterer du ordrer fra WooCommerce, åbner e-conomic, og bogfører dem én for én — eller i bedste fald i batches. For en webshop med 60-100 ordrer om måneden tager det nemt 3-5 timer.</p>
  <p>WooCommerce og e-conomic taler ikke samme sprog. Betalingsmetoder, momsbehandling, rabatter og fragtomkostninger skal alle mappes korrekt til de rigtige e-conomic-konti. Laver du fejl — og det sker, når man gentager den samme manuelle proces hundredvis af gange — opdages de sjældent med det samme. De gemmer sig til din revisor ser på regnskabet og finder uoverensstemmelser, der tager lang tid at spore op.</p>
  <p>Mange WooCommerce-ejere vælger at lade bogføringen hobe sig op og klare alt på én gang ved kvartalets afslutning. Det er en skrøbelig strategi: jo længere du venter, jo sværere er det at huske konteksten bag transaktioner, og jo mere tid bruger din revisor — på din regning.</p>
solution: |
  <p>Vi bygger et Make.com-flow der lytter på WooCommerce via webhook. Hver gang en ordre skifter status til "betalt" eller "processing", trækkes alle relevante data ud — linjeartikler, moms, rabatter, fragt, kundeinfo og betalingsmetode — og sendes til e-conomic API, der opretter et korrekt salgsbilag med de rigtige posteringer.</p>
  <p>Flowet håndterer de nuancer der typisk fejler ved manuel bogføring: WooCommerce-betalinger via Stripe bogføres på én konto, MobilePay på en anden, og ordrer til udlandet behandles momsfrit med korrekt EU-kontokode. Refunderinger oprettes automatisk som kreditnotaer med reference til den originale faktura. Din revisor vil takke dig.</p>
tools:
  - "WooCommerce"
  - "e-conomic"
  - "Make.com"
  - "Gmail"
mini_case:
  title: "Nordisk Livsstil ApS: Fra manuel rutine til automatisk flow"
  body: |
    <p>Nordisk er en dansk webshop der sælger boligindretning og sover tungt i højsæsoner. Manuel overføring af posteringer og afstemning af konti kostede webshopejeren 5–7 timer om ugen — tid der ellers kunne bruges på opgaver der rent faktisk kræver menneskelig vurdering. Problemet var ikke mangel på vilje, men at processen simpelthen ikke var bygget til at køre automatisk.</p>
    <p>Efter implementering af automatiseringen ændrede hverdagen sig mærkbart: fejl i regnskabet er faldet til næsten nul, og revisoren slipper for at rette efterbehandlede poster. Det der tidligere krævede opmærksomhed mæltider og aftner er nu et flow der kører i baggrunden — fejlfrit, konsekvent og uden at nogen skal huske at gøre det.</p>
faq_details:
  - q: "Kan det integreres med de systemer vi allerede bruger?"
    a: "Så godt som altid. Make.com understøtter mere end 1.000 apps og APIs, og langt størstedelen af de systemer danske virksomheder bruger — Shopify, e-conomic, HubSpot, Zendesk, Slack, Google Workspace m.fl. — har native-integrationer. Hvis dit system ikke er på listen, kan vi i de fleste tilfælde forbinde via webhook eller REST API."
  - q: "Hvad sker der, hvis et trin i flowet fejler?"
    a: "Make.com har indbygget retry-logik og fejlhåndtering. Hvis et trin fejler — for eksempel fordi en API er midlertidigt utilgængelig — forsøger flowet automatisk igen. Hvis fejlen vedvarer, sendes en notifikation til dig med detaljer om, hvad der gik galt. Ingen data går tabt; de sættes i kø og behandles når forbindelsen er genetableret."
  - q: "Hvordan håndteres følsomme data og GDPR?"
    a: "Make.com er GDPR-compliant og hostet i EU. Vi opsætter flows med mindst-privileges-princippet: integrationer får kun adgang til præcis de data de behøver. Følsomme felter som CPR-numre eller betalingsinformation behandles aldrig af Make.com direkte — de håndteres af de dertil certificerede systemer som Stripe eller Nets."
pro_tip: "Start med at automatisere én enkelt bilagstype — fx Stripe-kvitteringer — og test den grundigt i 2 uger, før du udvider til flere kildesystemer. Det giver dig tillid til flowets nøjagtighed og gør det meget nemmere at fejlfinde, hvis noget skulle være forkert konfigureret."
before_cta: |
  <h2>Hvad skal være på plads før opsætningen?</h2>
  <p>For at få det bedste resultat af automatiseringen er det en god idé at have et par ting klar på forhånd. Sørg for, at din regnskabssoftware har en aktiv API-adgang, og at du ved hvilken kontoplan du bruger. Det gør opsætningen markant hurtigere og reducerer risikoen for at posteringer lander på forkerte konti fra start.</p>
  <p>Det er også værd at kortlægge, hvilke bilagstyper der fylder mest i dit daglige arbejde. Er det primært Stripe-betalinger, faktura-PDF'er fra leverandører eller banktransaktioner? Start med den bilagstype der fylder mest, og lad resten vente til flowet er testet grundigt. En gradueret udrulning giver dig langt mere kontrol og selvtillid.</p>
  <p>Endelig: afsæt 30 minutter til et kort interview med os, hvor vi går din kontoplan og eventuelle undtagelsesregler igennem. De fleste virksomheder har 3–5 "specielle tilfælde" de ikke har tænkt på før vi spørger. Det er meget billigere at håndtere dem i designfasen end efter go-live.</p>
related:
  - url: "/automatisering/tidsregistrering-til-faktura/"
    title: "Automatisk fakturering baseret på tidsregistrering"
    category: "Regnskab"
  - url: "/automatisering/automatisk-bankafstemning-bogfoering/"
    title: "Automatisk bankafstemning med bogføring i Dinero"
    category: "Regnskab"
  - url: "/automatisering/ai-kategorisering-udgifter-bilag/"
    title: "AI-kategorisering af udgifter og bilag automatisk"
    category: "Regnskab"
  - url: "/automatisering/milepael-fakturering-projekter/"
    title: "Automatisk fakturering ved projektmilepæle"
    category: "Regnskab"
---
