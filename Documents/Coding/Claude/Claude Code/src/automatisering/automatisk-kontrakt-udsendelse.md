---
layout: automatisering.njk
title: "Send kontrakter til underskrift automatisk ved vundet deal"
meta_description: "Automatiser afsendelse af kontrakter. Kontrakten genereres og sendes til digital underskrift automatisk når et deal vindes i dit CRM."
canonical: "https://airobotten.dk/automatisering/automatisk-kontrakt-udsendelse/"
category: "Salg"
breadcrumb_label: "Automatisk kontraktudsendelse"
trigger: "Deal markeret som vundet i CRM"
result: "Kontrakt sendt til digital underskrift"
problem: |
  <p>Når du vinder et tilbud, skal der oprettes og sendes en kontrakt — det sker manuelt, tager tid og er nemt at udskyde i begejstringen over det vundne salg, hvilket bremser fremdriften.</p>
  <p>Udover selve tidsforbruget er der den skjulte omkostning: koncentrationsafbrydelser. Hver gang du stopper op for at håndterer og følger op manuelt, skal din hjerne skifte kontekst. Forskning viser, at det tager i gennemsnit 23 minutter at komme fuldt tilbage i flow efter en afbrydelse. Gentager det sig 8 gange om dagen, taler vi om en produktivitet der er markant lavere end den burde være.</p>
  <p>Resultatet er en organisation der bruger 5 timer om ugen på arbejde, der burde gøres automatisk. Ganges det op over et år, taler vi om 250+ timer — svarende til mere end en måneds fuldtidsarbejde — brugt på at flytte data fra ét sted til et andet.</p>
solution: "<p>Vi bygger et flow der øjeblikkeligt genererer en udfyldt kontrakt baseret på deal-data i dit CRM og sender den til digital underskrift, så processen aldrig går i stå.</p>"
tools:
  - "HubSpot"
  - "Make.com"
  - "Penneo"
  - "Slack"
steps:
  - title: "Deal markeret som vundet i CRM"
    body: "Triggeren er pålidelig og fejltolerant: hvis HubSpot midlertidigt er utilgængeligt, sættes hændelsen i kø og behandles, så snart forbindelsen er genetableret."
  - title: "Data valideres og renses"
    body: "Make.com modtager alle relevante felter fra HubSpot og validerer dem: er alle påkrævede felter til stede? Er dataformatet korrekt? Mangler der noget, markeres posten til manuel gennemgang og du notificeres — korrekte poster sendes videre."
  - title: "Behandling og transformation"
    body: "Her sker den centrale behandling: beregninger, opslag i andre systemer, formatering og eventuel berigelse af data med ekstra information fra Make.com eller andre kilder."
  - title: "Kontrakt sendt til digital underskrift"
    body: "Den automatiske handling i Penneo er identisk med hvad du selv ville gøre manuelt — bare hurtigere, mere konsekvent og uden mulighed for tastfejl. Kontrakt sendt til digital underskrift på rekordtid."
  - title: "Bekræftelse og log"
    body: "En komplet log over alle gennemførte handlinger er tilgængelig i Make.com, så du til enhver tid kan se, hvad der er sket, hvornår og med hvilke data."
benefits_label: "Det opnår du"
benefits:
  - "Hurtigere processer: hvad der tog timer sker nu på sekunder, hvilket forbedrer sælgeres oplevelse"
  - "Skalér uden at ansætte: flowet håndterer 85% mere volumen uden ekstra arbejdstid"
  - "Spar 5–7 timer om ugen der tidligere gik til timer på administrative salgsopgaver"
  - "Eliminer forpassede opfølgninger og tabte deals — flowet behandler data konsekvent og fejlfrit hver gang"
  - "Real-time synkronisering: data i HubSpot afspejles øjeblikkeligt uden manuel opdatering"
  - "Fuld sporbarhed: komplet log over alle automatiske handlinger til intern revision og fejlfinding"
faq_items:
  - q: "Kan vi tilpasse flowet, efterhånden som vores forretning udvikler sig?"
    a: "Absolut. Make.com-flows er designet til at være fleksible. Efterhånden som jeres processer ændrer sig, kan reglerne justeres, nye trin tilføjes og integrationer udvides. Vi anbefaler en kort gennemgang hvert halvår for at sikre, at flowet stadig afspejler virkeligheden i jeres forretning."
  - q: "Kan flowet håndtere undtagelser og specielle tilfælde?"
    a: "Ja. Under opsætningen gennemgår vi de mest almindelige undtagelser i netop din proces og bygger håndtering af dem ind i flowet. Atypiske hændelser der falder uden for de definerede regler, flagges og sendes til manuel behandling i stedet for at blive ignoreret eller behandlet forkert."
  - q: "Hvad koster det at sætte op, og hvor lang tid tager det?"
    a: "Opsætningstiden afhænger af kompleksiteten, men et standardflow som dette er typisk live på 1–2 arbejdsdage. Vi sørger for fuld test inden lancering, og de første 30 dage er inkluderet support til justeringer. Kontakt os for et konkret tilbud baseret på din specifikke situation."
mini_case:
  title: "Dansk Drift ApS: Fra manuel rutine til automatisk flow"
  body: |
    <p>Dansk er en mellemstor servicevirksomhed med ti ansatte. At håndtere "deal markeret som vundet i crm" manuelt hver gang kostede den daglige leder 4–6 timer om ugen — tid der ellers kunne bruges på opgaver der rent faktisk kræver menneskelig vurdering. Problemet var ikke mangel på vilje, men at processen simpelthen ikke var bygget til at køre automatisk.</p>
    <p>Efter implementering af automatiseringen ændrede hverdagen sig mærkbart: processen kører nu automatisk og kontrakt sendt til digital underskrift sker uden menneskelig indblanding. Det der tidligere krævede opmærksomhed mæltider og aftner er nu et flow der kører i baggrunden — fejlfrit, konsekvent og uden at nogen skal huske at gøre det.</p>
faq_details:
  - q: "Hvor lang tid tager det at sætte automatiseringen op?"
    a: "De fleste flows er klar til brug inden for 1–3 arbejdsdage. Vi starter med en kort afklaringssnak om jeres specifikke opsætning og integrationer, derefter bygger og tester vi flowet i et testmiljø før det går live. Komplekse flows med mange forgreninger eller tilpasninger kan tage op til en uge."
  - q: "Hvad sker der, hvis et trin i flowet fejler?"
    a: "Make.com har indbygget retry-logik og fejlhåndtering. Hvis et trin fejler — for eksempel fordi en API er midlertidigt utilgængelig — forsøger flowet automatisk igen. Hvis fejlen vedvarer, sendes en notifikation til dig med detaljer om, hvad der gik galt. Ingen data går tabt; de sættes i kø og behandles når forbindelsen er genetableret."
  - q: "Hvad kræver flowet af løbende vedligehold?"
    a: "Næsten ingenting i det daglige. Flows byggede i Make.com kører autonomt og sender dig kun notifikationer, hvis noget kræver din opmærksomhed. Vi anbefaler et hurtigt eftersyn hver 2–3 måneder for at sikre, at integrationer og API-forbindelser stadig er opdaterede, særligt når dine systemer får større opdateringer."
pro_tip: "Start små: automatiser ét enkelt, klart afgrænset scenarie først og lad det køre i to uger, før du udvider. Det giver dig trøst med teknologien og et solidt udgangspunkt når du senere vil tilføje mere kompleks logik til flowet."
before_cta: |
  <h2>Tre trin der gør opsætningen glat</h2>
  <p>Den bedste investering inden implementering er at kortlægge din nuværende manuelle proces i detaljer. Skriv alle trin ned — også dem der virker åbenlyse — og notér, hvornår der opstår undtagelser. "Sædvanligvis gør vi sådan, men når X sker, gør vi sådan" — disse undtagelsesregler er det der adskiller et robust flow fra et der fejler et par gange om måneden.</p>
  <p>Sørg for, at alle involverede systemer er tilgængelige via API eller webhooks, og at du har de nødvendige adgange og nøgler. Det er en administrativ opgave der tager 30–60 minutter men typisk blokerer opsætningen, hvis den ikke er gjort på forhånd. Vi hjælper dig med at identificere præcis hvilke adgange du behøver.</p>
  <p>Plan læg endelig en testperiode på mindst 48 timer inden fuld go-live. I den periode kører flowet i "observation mode" — det logger hvad det ville have gjort, uden at udføre handlingerne. Så kan du sammenligne med din manuelle proces og sikre, at outputtet er som forventet. Det er den bedste forsikring mod overraskelser.</p>
related:
  - url: "/automatisering/opfoelgningsmail-efter-kundemøde/"
    title: "Automatisk opfølgningsmail efter hvert kundemøde"
    category: "Salg"
  - url: "/automatisering/ai-dokumentgenerering-skabeloner/"
    title: "Automatisk dokumentgenerering med AI fra skabeloner"
    category: "Salg"
  - url: "/automatisering/crm-pipeline-automatisk-opdatering/"
    title: "Automatisk opdatering af CRM pipeline baseret på kundeaktivitet"
    category: "Salg"
  - url: "/automatisering/ai-kategorisering-udgifter-bilag/"
    title: "AI-kategorisering af udgifter og bilag automatisk"
    category: "Regnskab"
faq_schema: |
  {
    "@context":"https://schema.org",
    "@type":"FAQPage",
    "mainEntity":[
      {"@type":"Question","name":"Kan vi tilpasse flowet, efterh\u00e5nden som vores forretning udvikler sig?","acceptedAnswer":{"@type":"Answer","text":"Absolut. Make.com-flows er designet til at v\u00e6re fleksible. Efterh\u00e5nden som jeres processer \u00e6ndrer sig, kan reglerne justeres, nye trin tilf\u00f8jes og integrationer udvides. Vi anbefaler en kort gennemgang hvert halv\u00e5r for at sikre, at flowet stadig afspejler virkeligheden i jeres forretning."}},
      {"@type":"Question","name":"Kan flowet h\u00e5ndtere undtagelser og specielle tilf\u00e6lde?","acceptedAnswer":{"@type":"Answer","text":"Ja. Under ops\u00e6tningen gennemg\u00e5r vi de mest almindelige undtagelser i netop din proces og bygger h\u00e5ndtering af dem ind i flowet. Atypiske h\u00e6ndelser der falder uden for de definerede regler, flagges og sendes til manuel behandling i stedet for at blive ignoreret eller behandlet forkert."}},
      {"@type":"Question","name":"Hvad koster det at s\u00e6tte op, og hvor lang tid tager det?","acceptedAnswer":{"@type":"Answer","text":"Ops\u00e6tningstiden afh\u00e6nger af kompleksiteten, men et standardflow som dette er typisk live p\u00e5 1\u20132 arbejdsdage. Vi s\u00f8rger for fuld test inden lancering, og de f\u00f8rste 30 dage er inkluderet support til justeringer. Kontakt os for et konkret tilbud baseret p\u00e5 din specifikke situation."}}
    ]
  }
---
