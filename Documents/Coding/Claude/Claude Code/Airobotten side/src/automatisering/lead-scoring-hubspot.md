---
layout: automatisering.njk
title: "Automatisk lead scoring i HubSpot med AI"
meta_description: "Automatiser lead scoring i HubSpot med AI. Prioriter de varmeste leads automatisk og spar salgsteamets tid på de forkerte emner."
canonical: "https://airobotten.dk/automatisering/lead-scoring-hubspot/"
category: "Lead-håndtering"
breadcrumb_label: "AI lead scoring"
trigger: "Ny aktivitet på lead"
result: "Lead scoret og prioriteret automatisk"
problem: |
  <p>Dit salgsteam bruger tid på leads der aldrig konverterer, mens de varme leads ikke får nok opmærksomhed. Uden systematisk scoring er det tilfældigt hvem der følges op på og hvornår.</p>
  <p>En anden udfordring er dokumentation og sporbarhed. Når processerne sker manuelt og spredt over forskellige systemer, bliver det hurtigt svært at se, hvad der skete hvornår og hvorfor. Det skaber problemer ved revision, fejlfinding og onboarding af nye medarbejdere, der skal forstå hvordan tingene hænger sammen.</p>
  <p>Og det er penge. Om det er interne timer der bruges på rutinearbejde i stedet for værdiskabende aktiviteter, eller om det er fejl der medfører ekstraomkostninger til rettelse, revision eller tabte kunder — leads der kolner inden de kontaktes, og tabte omsætning er en reel forretningsmæssig risiko, ikke bare et irritationsmoment.</p>
solution: "<p>Vi bygger et scoring-system der automatisk tildeler point baseret på firmastørrelse, adfærd, engagementniveau og timing — og notificerer den relevante sælger automatisk når et lead er modent til opfølgning.</p>"
tools:
  - "HubSpot"
  - "Make.com"
  - "OpenAI"
steps:
  - title: "Ny aktivitet på lead"
    body: "Triggeren er pålidelig og fejltolerant: hvis HubSpot midlertidigt er utilgængeligt, sættes hændelsen i kø og behandles, så snart forbindelsen er genetableret."
  - title: "Data valideres og renses"
    body: "Dataene normaliseres: datoformater, valutaer, tegnkodning og feltlængder tilpasses præcis det format som Make.com forventer. Det eliminerer de klassiske kompatibilitetsproblemer der opstår, når to systemer taler lidt forskelligt sprog."
  - title: "Behandling og transformation"
    body: "Make.com udfører de nødvendige transformationer og beregninger baseret på de regler I har aftalt under opsætningen. Forretningslogikken er konfigureret én gang og køres konsekvent hver eneste gang."
  - title: "Lead scoret og prioriteret automatisk"
    body: "OpenAI modtager de behandlede data og udfører handlingen: lead scoret og prioriteret automatisk. Alt sker inden for sekunder og skrives direkte ind i systemet med de korrekte felter, kategorier og relationer."
  - title: "Bekræftelse og log"
    body: "Flowet holder dig orienteret uden at overdynge dig med notifikationer. Du kan konfigurere nøjagtigt hvilke hændelser der skal generere en besked til dig, og hvilke der blot logges."
benefits_label: "Det opnår du"
benefits:
  - "Eliminer mistede leads og forpassede salgsmuligheder — flowet behandler data konsekvent og fejlfrit hver gang"
  - "Fuld sporbarhed: komplet log over alle automatiske handlinger til intern revision og fejlfinding"
  - "Spar 4–6 timer om ugen der tidligere gik til timer på lead-opfølgning"
  - "Tilpasningsdygtig: forretningsregler og undtagelseshåndtering kan justeres løbende uden at bygge forfra"
  - "Enkel opsætning: flowet er live på 1–3 arbejdsdage og kræver ingen teknisk viden at vedligeholde"
  - "Skalér uden at ansætte: flowet håndterer 98% mere volumen uden ekstra arbejdstid"
faq_items:
  - q: "Hvad sker der, hvis HubSpot eller Make.com er midlertidigt utilgængeligt?"
    a: "Make.com har indbygget retry-logik: hvis HubSpot eller Make.com er utilgængeligt, forsøger flowet igen automatisk med eksponentiel backoff. Data går aldrig tabt — de sættes i kø og behandles, så snart forbindelsen er reetableret. Du modtager en notifikation, hvis der opstår et problem der kræver din opmærksomhed."
  - q: "Kan flowet håndtere undtagelser og specielle tilfælde?"
    a: "Ja. Under opsætningen gennemgår vi de mest almindelige undtagelser i netop din proces og bygger håndtering af dem ind i flowet. Atypiske hændelser der falder uden for de definerede regler, flagges og sendes til manuel behandling i stedet for at blive ignoreret eller behandlet forkert."
  - q: "Skal jeg selv have teknisk kendskab for at bruge og vedligeholde flowet?"
    a: "Nej. Flowet kører autonomt, og det daglige arbejde kræver ingen teknisk viden. Hvis I har brug for at justere regler eller tilføje nye scenarier, hjælper vi med det. Vi dokumenterer desuden alt, så I forstår hvad der sker — I er aldrig afhængige af os for at forstå jeres eget system."
mini_case:
  title: "TechSales ApS: Fra manuel rutine til automatisk flow"
  body: |
    <p>TechSales er et B2B-softwarehus med otte sælgere og en travl salgschef. Manuelt at opdatere CRM, flytte leads og skrive opfølgningsmails kostede salgschefen 6 timer om ugen — tid der ellers kunne bruges på opgaver der rent faktisk kræver menneskelig vurdering. Problemet var ikke mangel på vilje, men at processen simpelthen ikke var bygget til at køre automatisk.</p>
    <p>Efter implementering af automatiseringen ændrede hverdagen sig mærkbart: ingen leads falder gennem sprækkerne, og salgscyklusen er forkortet med 30%. Det der tidligere krævede opmærksomhed mæltider og aftner er nu et flow der kører i baggrunden — fejlfrit, konsekvent og uden at nogen skal huske at gøre det.</p>
faq_details:
  - q: "Hvor lang tid tager det at sætte automatiseringen op?"
    a: "De fleste flows er klar til brug inden for 1–3 arbejdsdage. Vi starter med en kort afklaringssnak om jeres specifikke opsætning og integrationer, derefter bygger og tester vi flowet i et testmiljø før det går live. Komplekse flows med mange forgreninger eller tilpasninger kan tage op til en uge."
  - q: "Kan vi justere reglerne i flowet, når vores forretning ændrer sig?"
    a: "Ja. Make.com er bygget til at være fleksibelt, og vi sætter flows op med det for øje. Enklere justeringer — som at tilføje et nyt produkt til en trigger-liste eller ændre en emailskabelon — kan I selv gøre efter en kort introduktion. Mere komplekse ændringer hjælper vi med hurtigt."
  - q: "Hvordan håndteres følsomme data og GDPR?"
    a: "Make.com er GDPR-compliant og hostet i EU. Vi opsætter flows med mindst-privileges-princippet: integrationer får kun adgang til præcis de data de behøver. Følsomme felter som CPR-numre eller betalingsinformation behandles aldrig af Make.com direkte — de håndteres af de dertil certificerede systemer som Stripe eller Nets."
pro_tip: "Tilføj altid et duplikat-tjek som første trin i leads-flows. Et enkelt opslag i dit CRM på email-adresse kan spare dig for hundredvis af dobbeltindtastninger om måneden — og hindre, at salgsteamet kontakter samme lead to gange med en uge imellem."
before_cta: |
  <h2>Klæd dit salgsteam på til automatisering</h2>
  <p>Det vigtigste førarbejde til CRM-automatisering er at få salgsteamet med på råd. Automatiseringer der bygges uden sælgernes input ender tit med at skabe friktion frem for lethed: flowet overvåger fælt der ikke måler det rigtige, eskalerer for tidligt, eller sender opfølgningsemails på forkerte tidspunkter. Brug 45 minutter på at interviewe dine to bedste sælgere om, hvad de gør manuelt i dag — og byg det ind.</p>
  <p>Definér også klare ejerskabsregler: hvem ejer et lead, når det når et bestemt stadie? Hvad sker der, hvis ingen tager action inden for X dage? Automatiserede eskalerings- og re-assignment-regler er kun nyttige, hvis de er defineret på forhånd — ikke når flowet allerede kører.</p>
  <p>Sørg endelig for at dine CRM-felter er ryddet op inden go-live. Duplikatkontakter, manglende virksomhedsnavne og tomme email-adresser kan få selv det bedste flow til at opføre sig uventet. En time på datakvalitet før opsætningen sparer dig for dage på fejlfinding bagefter.</p>
related:
  - url: "/automatisering/email-lead-nurturing-sekvens/"
    title: "Automatisk email nurturing-sekvens til leads"
    category: "Lead-håndtering"
  - url: "/automatisering/lead-fra-typeform-til-hubspot/"
    title: "Send Typeform-leads direkte til HubSpot"
    category: "Lead-håndtering"
  - url: "/automatisering/nye-ordrer-til-slack/"
    title: "Send automatisk besked i Slack ved nye ordrer"
    category: "E-commerce"
  - url: "/automatisering/automatisk-ordrebekraeftelse-email/"
    title: "Automatisk ordrebekræftelse via email"
    category: "E-commerce"
faq_schema: |
  {
    "@context":"https://schema.org",
    "@type":"FAQPage",
    "mainEntity":[
      {"@type":"Question","name":"Hvad sker der, hvis HubSpot eller Make.com er midlertidigt utilg\u00e6ngeligt?","acceptedAnswer":{"@type":"Answer","text":"Make.com har indbygget retry-logik: hvis HubSpot eller Make.com er utilg\u00e6ngeligt, fors\u00f8ger flowet igen automatisk med eksponentiel backoff. Data g\u00e5r aldrig tabt \u2014 de s\u00e6ttes i k\u00f8 og behandles, s\u00e5 snart forbindelsen er reetableret. Du modtager en notifikation, hvis der opst\u00e5r et problem der kr\u00e6ver din opm\u00e6rksomhed."}},
      {"@type":"Question","name":"Kan flowet h\u00e5ndtere undtagelser og specielle tilf\u00e6lde?","acceptedAnswer":{"@type":"Answer","text":"Ja. Under ops\u00e6tningen gennemg\u00e5r vi de mest almindelige undtagelser i netop din proces og bygger h\u00e5ndtering af dem ind i flowet. Atypiske h\u00e6ndelser der falder uden for de definerede regler, flagges og sendes til manuel behandling i stedet for at blive ignoreret eller behandlet forkert."}},
      {"@type":"Question","name":"Skal jeg selv have teknisk kendskab for at bruge og vedligeholde flowet?","acceptedAnswer":{"@type":"Answer","text":"Nej. Flowet k\u00f8rer autonomt, og det daglige arbejde kr\u00e6ver ingen teknisk viden. Hvis I har brug for at justere regler eller tilf\u00f8je nye scenarier, hj\u00e6lper vi med det. Vi dokumenterer desuden alt, s\u00e5 I forst\u00e5r hvad der sker \u2014 I er aldrig afh\u00e6ngige af os for at forst\u00e5 jeres eget system."}}
    ]
  }
---
