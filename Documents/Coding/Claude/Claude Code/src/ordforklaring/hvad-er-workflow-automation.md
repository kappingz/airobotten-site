---
title: "Hvad er workflow automation? En simpel forklaring til virksomhedsejere"
slug: "hvad-er-workflow-automation"
term: "Workflow automation"
category: "Automatisering"
meta_description: "Hvad er workflow automation? Forklaret uden jargon — hvad det er, hvad det ikke er, og hvordan du kommer i gang med at spare tid i din virksomhed."
canonical: "https://airobotten.dk/ordforklaring/hvad-er-workflow-automation/"
layout: ordforklaring.njk
definition: "Workflow automation er at lade software automatisk udføre en sekvens af opgaver, der ellers ville kræve menneskelig handling — fra et bestemt startsignal til et færdigt resultat."
explanation: |
  <p>Et workflow er en serie af handlinger der altid sker i samme rækkefølge. "Ny kunde indsender formular → du opretter dem i CRM → du sender velkomstemail → du opretter dem i regnskabssystemet." Det er fire handlinger der hænger sammen og altid sker i samme orden. Det er et workflow.</p>
  <p>Automation er at lade software gøre det i stedet for dig. Ikke fordi det er for simpelt til dig — men fordi det tager tid, fordi det er gentagende, og fordi du laver fejl når du er træt eller stresset. Software laver aldrig fejl på gentagende opgaver. Den glemmer aldrig. Den arbejder om natten, i weekenden og på ferier.</p>
  <p>Workflow automation er dermed ikke at "erstatte" mennesker med robotter. Det er at flytte det gentagende, regelbundne arbejde til software — så de mennesker der arbejder i virksomheden kan bruge deres tid på det der faktisk kræver en menneskelig hjerne: kundesamtaler, problemløsning, kreativitet og beslutninger der kræver kontekst og vurdering.</p>
  <p>Og det er ikke kun for store virksomheder. En soloselvstændig der automatiserer sin fakturering, opfølgningsemail og social media-posting vinder 5–10 timer om måneden — timer der enten kan bruges på at tage flere kunder, eller simpelthen på at leve et bedre liv.</p>
example: |
  <p>Forestil dig at du ejer et ejendomsmæglerfirma i Aarhus med tre mæglere. Hvert år er I vært for en boligkøber-event med 40–50 deltagere. Tilmeldingen sker via en formular på jeres hjemmeside.</p>
  <p>Den manuelle proces: når en tilmelding kommer ind, kopierer I deltageren manuelt til en Excel-liste, sender en bekræftelsesmail, sætter dem på jeres email-liste til nyhedsbreve og tilføjer dem til jeres CRM. Fire trin, ca. 8 minutter per deltager, 50 deltagere = 400 minutters manuelt arbejde.</p>
  <p>Det automatiserede workflow: tilmeldingen modtages → Make.com sender automatisk en bekræftelsesmail, opretter kontakten i CRM, tilføjer dem til email-listen og opdaterer Excel-listen. Alt sker inden for 30 sekunder af tilmeldingen. De 400 minutter er reduceret til 0. Mæglerne ser tilmeldingerne, men behøver ikke gøre noget.</p>
  <p>Det er workflow automation i praksis: hvert trin i processen sker stadig — men software gør det, ikke mennesker.</p>
relevance: |
  <p>De fleste SMV'er bruger 15–30% af arbejdstiden på opgaver der i princippet er automatiserbare: dataindtastning, kopieringsopgaver, standardmails, rapportgenerering, opfølgning på ubetalte fakturaer. Det er ikke spildtid fordi folk er ineffektive — det er strukturel ineffektivitet der opstår fordi systemerne ikke taler sammen.</p>
  <p>Workflow automation er svaret. Men det kræver, at man kortlægger sine processer og identificerer, hvilke der er gentagende og regelbundne nok til at automatisere. Ikke alt kan eller bør automatiseres — kundesamtaler, komplekse beslutninger og kreativt arbejde kræver mennesker. Men det er vores erfaring, at de fleste virksomheder har 5–10 workflows der sagtens kan automatiseres og tilsammen sparer 8–15 timer om måneden fra dag ét.</p>
related_terms:
  - term: "Trigger"
    definition: "Det startsignal der sætter et workflow i gang — fx 'ny ordre placeret', 'formular indsendt', 'dato nået' eller 'email modtaget'. Et workflow starter altid med en trigger."
  - term: "Action"
    definition: "Hvad der sker som reaktion på triggeren — fx 'send email', 'opret CRM-kontakt', 'bogfør faktura' eller 'send Slack-besked'. Et workflow kan have mange actions i rækkefølge."
  - term: "Betingelse"
    definition: "En if/then-regel i et workflow — fx 'send kun velkomstmail hvis kunden er ny' eller 'send kun rykker hvis fakturaen er mere end 14 dage forsinket'. Betingelser gør workflows intelligente."
  - term: "Make.com"
    definition: "Den platform vi primært bruger til at bygge workflows. Make.com forbinder hundredvis af systemer via en visuel editor — ingen programmering krævet for de fleste flows."
next_steps:
  - "Kortlæg dine gentagende processer — brug 15 minutter på at skrive alle de opgaver ned du laver mere end tre gange om ugen, der følger en fast rækkefølge. Det er kandidater til automatisering."
  - "Prioritér efter tidsbesparelse — beregn for hvert punkt: antal gange om måneden × minutter per gang. De workflows med størst tidsbesparelse skal automatiseres først."
  - "Start med ét simpelt workflow — fx <a href='/automatisering/automatisk-ordrebekraeftelse-email/'>automatisk ordrebekræftelse ved nye Shopify-ordrer</a> eller <a href='/automatisering/lead-fra-typeform-til-hubspot/'>automatisk lead-oprettelse i CRM</a>. Et vellykket første workflow giver mod til at automatisere de næste."
faq_details:
  - q: "Hvad er forskellen på workflow automation og RPA (Robotic Process Automation)?"
    a: "RPA (Robotic Process Automation) er en type automation der imiterer menneskelige handlinger i interfaces — fx at klikke i et system der ikke har en API. Det er typisk til legacy-systemer fra 1990erne. Workflow automation som Make.com bruger derimod APIs og er langt hurtigere, mere stabilt og nemmere at vedligeholde. De fleste moderne SMV'er har ikke brug for RPA."
  - q: "Hvad koster workflow automation at opsætte?"
    a: "Opsætningsprisen varierer efter kompleksitet. Simple flows (én trigger, to-tre actions) tager 2–4 timer. Komplekse flows med betingelser, fejlhåndtering og multiple systemer tager 8–20 timer. Make.com-abonnementet starter ved 9 USD/md. Typisk er investeringen tjent hjem inden for de første tre måneder."
  - q: "Kan vi selv vedligeholde workflows efter opsætning?"
    a: "Ja. Make.com er designet til at ikke-tekniske brugere kan se og forstå flows. Vi leverer dokumentation for hvert flow vi bygger, og de fleste af vores kunder foretager selv mindre justeringer — fx at ændre en emailtekst eller tilføje et nyt filter. Større ændringer og fejlsøgning klarer vi typisk."
related:
  - url: "/automatisering/automatisk-ordrebekraeftelse-email/"
    title: "Automatisk ordrebekræftelse til kunder"
    category: "E-commerce"
  - url: "/automatisering/ny-kunde-velkomst-flow/"
    title: "Automatisk velkomstflow til nye kunder"
    category: "Salg"
  - url: "/automatisering/automatisk-ugentlig-statusmail/"
    title: "Automatisk ugentlig statusmail til teamet"
    category: "Produktivitet"
  - url: "/automatisering/email-lead-nurturing-sekvens/"
    title: "Automatisk email lead nurturing-sekvens"
    category: "Salg"
faq_schema: |
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {"@type": "Question", "name": "Hvad er forskellen på workflow automation og RPA?", "acceptedAnswer": {"@type": "Answer", "text": "RPA imiterer menneskelige handlinger i interfaces og bruges til legacy-systemer. Workflow automation bruger APIs og er hurtigere, mere stabilt og nemmere at vedligeholde."}},
      {"@type": "Question", "name": "Hvad koster workflow automation at opsætte?", "acceptedAnswer": {"@type": "Answer", "text": "Simple flows tager 2–4 timer. Komplekse flows 8–20 timer. Make.com starter ved 9 USD/md. Investeringen er typisk tjent hjem inden for de første tre måneder."}},
      {"@type": "Question", "name": "Kan vi selv vedligeholde workflows efter opsætning?", "acceptedAnswer": {"@type": "Answer", "text": "Ja. Make.com er designet til ikke-tekniske brugere. Vi leverer dokumentation og de fleste kunder foretager selv mindre justeringer."}}
    ]
  }
---
