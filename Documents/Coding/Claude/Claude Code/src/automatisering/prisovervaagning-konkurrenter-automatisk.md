---
layout: automatisering.njk
title: "Automatisk prisovervågning af konkurrenter"
meta_description: "Overvåg konkurrenters priser automatisk og modtag alarm i Slack eller email når de ændrer sig. Reagér hurtigere og behold din konkurrencefordel uden manuelt arbejde."
canonical: "https://airobotten.dk/automatisering/prisovervaagning-konkurrenter-automatisk/"
category: "E-commerce"
breadcrumb_label: "Automatisk prisovervågning"
trigger: "Konkurrent ændrer pris på overvåget produkt"
result: "Alarm sendt med pris, forskel og anbefaling"
problem: |
  <p>At holde øje med konkurrenternes priser er en af de vigtigste opgaver i e-commerce — og en af de mest tidskrævende. Mange webshop-ejere tjekker manuelt konkurrenternes sider et par gange om ugen, noterer priserne i et regneark og forsøger at reagere, når de ser udsving. Men manuelt prischeck er langsomt, inkonsistent og dækker sjældent alle relevante produkter.</p>
  <p>Problemet er timing. Hvis en konkurrent sætter prisen ned på et populært produkt fredag eftermiddag, og du ikke opdager det før mandag morgen, har du mistet et helt weekends salg til dem. I sæsonperioder som jul og Black Friday kan en prisskifte på blot 5-10% flytte en betydelig del af markedets ordrer.</p>
  <p>Alternativet — at abonnere på et dyrt prisovervågningsværktøj som Prisync eller Omnia — koster typisk 2.000-8.000 kr. om måneden. For mange SMV-webshops er det svært at retfærdiggøre den udgift, selvom behovet for prisdata er reelt.</p>
solution: |
  <p>Vi bygger et Make.com-flow der regelmæssigt tjekker priserne på de konkurrentprodukter du specificerer. Flowet scraper eller kalder relevante datapunkter, sammenligner med dine egne priser i Google Sheets, og sender øjeblikkeligt en alarm til Slack eller email, hvis en konkurrents pris ændrer sig med mere end en defineret procentsats.</p>
  <p>Alarmen indeholder præcis den information du har brug for: produkt, konkurrent, gammel pris, ny pris, forskel i procent, og din nuværende pris. Du kan også konfigurere flowet til at sende et dagligt sammendrag af alle overvågede priser, så du altid har et aktuelt konkurrencebillede uden at have løftet en finger.</p>
tools:
  - "Make.com"
  - "Google Sheets"
  - "Slack"
  - "Gmail"
mini_case:
  title: "Dansk Drift ApS: Fra manuel rutine til automatisk flow"
  body: |
    <p>Dansk er en mellemstor servicevirksomhed med ti ansatte. At håndtere "konkurrent ændrer pris på overvåget produkt" manuelt hver gang kostede den daglige leder 4–6 timer om ugen — tid der ellers kunne bruges på opgaver der rent faktisk kræver menneskelig vurdering. Problemet var ikke mangel på vilje, men at processen simpelthen ikke var bygget til at køre automatisk.</p>
    <p>Efter implementering af automatiseringen ændrede hverdagen sig mærkbart: processen kører nu automatisk og alarm sendt med pris, forskel og anbefaling sker uden menneskelig indblanding. Det der tidligere krævede opmærksomhed mæltider og aftner er nu et flow der kører i baggrunden — fejlfrit, konsekvent og uden at nogen skal huske at gøre det.</p>
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
  - url: "/automatisering/nye-ordrer-til-slack/"
    title: "Send automatisk besked i Slack ved nye ordrer"
    category: "E-commerce"
  - url: "/automatisering/forladte-kurve-paamindelse/"
    title: "Send påmindelse til kunder om forladte kurve"
    category: "E-commerce"
  - url: "/automatisering/klaviyo-email-automation/"
    title: "Opsæt Klaviyo email-automations til din webshop"
    category: "E-commerce"
  - url: "/automatisering/automatisk-lageropdatering-tvaers-af-salgskanaler/"
    title: "Automatiser lageropdatering på tværs af alle dine salgskanaler"
    category: "E-commerce"
---
