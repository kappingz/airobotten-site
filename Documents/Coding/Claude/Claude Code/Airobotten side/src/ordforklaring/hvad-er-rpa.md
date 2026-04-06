---
title: "Hvad er RPA? Robotic Process Automation forklaret"
slug: "hvad-er-rpa"
term: "RPA"
category: "Tekniske begreber"
meta_description: "Hvad er RPA (Robotic Process Automation)? Enkel forklaring og forskellen på RPA og AI-automatisering for danske SMV-ejere."
canonical: "https://airobotten.dk/ordforklaring/hvad-er-rpa/"
layout: ordforklaring.njk
definition: "RPA (Robotic Process Automation) er software der efterligner menneskelige handlinger i computersystemer — klik, kopier, indsæt, udfyld — for at automatisere gentagne arbejdsgange."
explanation: |
  <p>Forestil dig en medarbejder der hver morgen åbner tre systemer, kopierer data fra det første til det andet, udfylder et felt i det tredje og gemmer et Excel-ark. Det tager 20 minutter. RPA er software der gør præcist det samme — åbner systemerne, klikker de rigtige steder, kopierer og indsætter dataen og gemmer filen — men gør det på 30 sekunder uden fejl, hver dag, uden at kede sig.</p>
  <p>RPA arbejder på brugerfladen, ikke i koden. Det er et afgørende punkt: RPA behøver ikke integration med et systems API for at fungere. Det "ser" og "klikker" ligesom en bruger. Det gør det særligt nyttigt til systemer der er gamle, ikke har API'er, og ikke er designet til integration.</p>
  <p>De mest kendte RPA-platforme er UiPath, Automation Anywhere og Blue Prism — primært enterprise-produkter med enterprise-priser. For SMV'er er alternativerne Make.com, n8n og Zapier mere relevante — disse er API-baserede automatiseringsplatforme der dækker mange af de samme use cases til en brøkdel af prisen.</p>
example: |
  <p>Et konkret eksempel: en bogholder i et mellemstort regnskabsfirma skal dagligt hente saldorapporter fra tre bankers netbankplatforme, gemme dem som PDF og uploade dem til et fælles drev. Bankernes systemer er gamle og har ingen API. Et RPA-program logger automatisk ind i hver netbank, navigerer til rapportsiden, downloader PDF'en og gemmer den i den korrekte mappe — alt uden menneskelig involvering.</p>
  <p>Et andet eksempel: en medarbejder i en forsikringsvirksomhed registrerer skadeanmeldelser i et ældre sagsbehandlingssystem der ikke har en API. En RPA-bot modtager dataen fra et emailformular, åbner sagsbehandlingssystemet, navigerer til oprettelsesformularen og udfylder alle felterne automatisk — som om en medarbejder sad ved tastaturet.</p>
  <div class="case-study">
    <span class="case-label">Eksempel — fiktiv case</span>
    <h3>Revisionsfirmaet Steens: fra 2 timers daglig bankrapport-hentning til automatisk</h3>
    <p>Steens Revision (fiktivt) håndterede 30 erhvervsklienters kontoudtog fra fire forskellige banker. En assistent brugte 2 timer om morgenen på manuelt at logge ind i hver bank, downloade kontoudtog og organisere dem i klientmapper. Bankernes platforme havde ingen API-adgang.</p>
    <p>Vi implementerede en RPA-løsning baseret på UiPath der automatisk logger ind i alle fire bankplatforme på skift, downloader de korrekte rapporter og gemmer dem med korrekte navngivningskonventioner i klientmapperne. Processen kører nu kl. 06.00 — rapporterne er klar inden assistenten møder ind. Daglig besparelse: 2 timer × 250 arbejdsdage = 500 timers frigjort kapacitet per år.</p>
  </div>
relevance: |
  <p>For de fleste SMV'er er "klassisk" RPA med dedikerede enterprise-platforme overkill — prismæssigt og kompleksitetsmæssigt. Men princippet er relevant, og alternative løsninger er tilgængelige: Make.com og n8n dækker langt de fleste automatiseringsbehov til API-understøttede systemer, og browser-automatisering via open source-værktøjer som Playwright kan håndtere systemer uden API til en brøkdel af enterprise-RPA-prisen.</p>
  <p>Bruger din virksomhed systemer der er 5–15 år gamle og ikke har API-adgang, er det det scenarie hvor traditionel RPA oftest giver mening. Bruger du primært moderne SaaS-systemer (Shopify, HubSpot, e-conomic, Slack), er API-baseret automatisering via Make.com den bedre løsning — hurtigere at sætte op, billigere at drifte og mere robust. Se vores forklaring af <a href="/ordforklaring/hvad-er-workflow-automation/">hvad workflow automation er</a> og <a href="/ordforklaring/hvad-er-no-code/">hvad no-code er</a> for mere kontekst.</p>
related_terms:
  - term: "Workflow Automation"
    definition: "Workflow automation er den brede kategori som RPA tilhører — automatisering af arbejdsgange via software. RPA er en specifik teknologi indenfor workflow automation der arbejder på brugerfladen, ikke via API'er."
  - term: "API"
    definition: "En API er en struktureret forbindelsesmekanisme systemer tilbyder til andre systemer. API-baseret automatisering (Make.com, n8n) er hurtigere og mere robust end RPA, men kræver at systemet understøtter en API."
  - term: "No-code"
    definition: "No-code automatiseringsplatforme som Make.com og Zapier dækker mange af de samme use cases som RPA, men til lavere pris og uden behov for RPA-specialister — forudsat at systemerne har API-adgang."
  - term: "Bot"
    definition: "I RPA-kontekst er en bot et softwareprogram der udfører automatiserede opgaver i et system — ikke en AI-chatbot, men et regelbaseret program der klikker og skriver som en menneskelig bruger."
next_steps:
  - "Kortlæg dine manuelle processer og identificér hvilke systemer der er involveret. Har systemerne API-adgang? Ja → overvej Make.com. Nej → overvej RPA."
  - "For API-baserede systemer: se vores guide til <a href='/vaerktoj/make-com/'>Make.com til automatisering</a> — det dækker langt de fleste SMV-behov til en brøkdel af RPA-platformprisen."
  - "Kontakt os hvis du er i tvivl om din specifikke proces kan automatiseres — vi vurderer det gratis og anbefaler den mest kostnadseffektive løsning. <a href='/#contact'>Send din opgave her</a>."
faq_details:
  - q: "Hvad koster RPA for en lille dansk virksomhed?"
    a: "Enterprise RPA-platforme som UiPath og Automation Anywhere starter fra 5.000–15.000 USD/år i licens alene — hertil kommer implementerings- og vedligeholdelsesomkostninger. Det gør dem irrelevante for de fleste SMV'er. For SMV-relevant automatisering med Make.com er den månedlige platformpris 9–29 USD/md., og opsætning af et specifikt flow koster typisk 4.000–15.000 kr. i én gang."
  - q: "Hvad er forskellen på RPA og AI-automatisering?"
    a: "RPA er regelbaseret: botten udfører præcist de handlinger den er programmeret til. AI-automatisering tilføjer intelligens: systemet kan vurdere, kategorisere og handle på baggrund af ustruktureret information. Et RPA-system kan kopiere felter fra ét system til et andet. Et AI-automatiseringssystem kan læse en email, forstå indholdet og afgøre hvilken handling der er korrekt — uden at nogen har defineret hvert enkelt scenarie på forhånd."
  - q: "Er Make.com og Zapier RPA?"
    a: "Nej, ikke teknisk set. Make.com og Zapier er API-baserede integrations- og automatiseringsplatforme — de kommunikerer med systemers officielle API'er, ikke med brugerfladen. Men de løser mange af de samme praktiske problemer som RPA: at flytte data automatisk og reducere manuelt arbejde. For systemer med API-adgang er de hurtigere, billigere og mere stabile end traditionel RPA."
related:
  - url: "/ordforklaring/hvad-er-workflow-automation/"
    title: "Hvad er workflow automation?"
    category: "Ordforklaring"
  - url: "/ordforklaring/hvad-er-no-code/"
    title: "Hvad er no-code automatisering?"
    category: "Ordforklaring"
  - url: "/vaerktoj/make-com/"
    title: "Make.com til danske virksomheder"
    category: "Automatiseringsplatforme"
  - url: "/ordforklaring/hvad-er-api/"
    title: "Hvad er en API?"
    category: "Ordforklaring"
faq_schema: |
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {"@type": "Question", "name": "Hvad koster RPA for en lille dansk virksomhed?", "acceptedAnswer": {"@type": "Answer", "text": "Enterprise RPA starter fra 5.000–15.000 USD/år. For SMV'er er Make.com mere relevant: 9–29 USD/md. + 4.000–15.000 kr. opsætning per flow."}},
      {"@type": "Question", "name": "Hvad er forskellen på RPA og AI-automatisering?", "acceptedAnswer": {"@type": "Answer", "text": "RPA er regelbaseret og udfører præcist definerede handlinger. AI-automatisering kan vurdere ustruktureret information og handle på baggrund af kontekst og intelligens."}},
      {"@type": "Question", "name": "Er Make.com og Zapier RPA?", "acceptedAnswer": {"@type": "Answer", "text": "Nej teknisk set — de er API-baserede. Men de løser mange af de samme praktiske problemer som RPA, og er hurtigere og billigere for systemer med API-adgang."}}
    ]
  }
---
