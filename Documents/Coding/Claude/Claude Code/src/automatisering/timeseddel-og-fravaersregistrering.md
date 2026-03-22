---
layout: automatisering.njk
title: "Automatisk timeseddel og fraværsregistrering for dit team"
meta_description: "Automatiser indsamling af timesedler og fraværsregistrering med Slack og Google Sheets. Ingen manuelle rykke-emails, altid et opdateret overblik og løngrundlag klar til tid."
canonical: "https://airobotten.dk/automatisering/timeseddel-og-fravaersregistrering/"
category: "HR"
breadcrumb_label: "Automatisk timeseddel og fravær"
trigger: "Ugentlig påmindring eller fraværsanmodning indsendt"
result: "Timeseddel indsamlet og fraværsoversigt opdateret automatisk"
problem: |
  <p>Manuelle timesedler er et frustrationsmoment i næsten alle virksomheder. Ansatte udfylder dem for sent, glemmer dem helt, eller afleverer dem i et format der kræver ekstra bearbejdning inden de kan bruges til lønberegning. HR og administrationen bruger hvert lønkørselsperiode 2-4 timer på at rykke medarbejdere, sammenligne med projektregistreringer og sikre at alle er med.</p>
  <p>Fraværsregistrering er endnu et smertepunkt. Hvem er syg i dag, hvem holder ferie næste uge, og hvem holder barnets første sygedag? I mange SMV'er sker det via Slack-beskeder, sms'er og mundtlige aftaler — spredt over mange kanaler, umuligt at aggregere og uden et samlet overblik der viser kapaciteten for projektstyring og ressourceplanlægning.</p>
  <p>Konsekvensen er lønkørsler der er stressende, projektplaner der er baseret på forkert kapacitetsantagelse, og HR der bruger tid på administrative opgaver frem for strategiske. Et systematisk, automatiseret flow løser begge problemer.</p>
solution: |
  <p>Vi bygger to sammenkoblede Make.com-flows. Det første sender en automatisk Slack-reminder til alle medarbejdere fredag eftermiddag — eller den dag du specificerer — med en simpel formular til at indberette ugens timer per projekt. Indberetningerne samles automatisk i Google Sheets i et format der er klar til import til dit lønsystem.</p>
  <p>Det andet flow håndterer fraværsanmodninger: medarbejderen indsender via en Slack-kommando, HR/lederen godkender med ét klik, og fraværet logges automatisk i teamkalenderen og Google Sheets-oversigten. Alle ferie-, syge- og barnets sygedage er samlet ét sted og opdateret i realtid. Hvert lønkørselsperiode har du det komplette grundlag klar — ingen rykkemails, ingen manglende data.</p>
tools:
  - "Google Sheets"
  - "Make.com"
  - "Slack"
  - "Gmail"
mini_case:
  title: "Mediakonsult A/S: Fra manuel rutine til automatisk flow"
  body: |
    <p>Mediakonsult er en konsulentvirksomhed med 42 ansatte og en HR-afdeling på to. At håndtere "ugentlig påmindring eller fraværsanmodning indsendt" manuelt hver gang kostede HR-chefen 4–6 timer om ugen — tid der ellers kunne bruges på opgaver der rent faktisk kræver menneskelig vurdering. Problemet var ikke mangel på vilje, men at processen simpelthen ikke var bygget til at køre automatisk.</p>
    <p>Efter implementering af automatiseringen ændrede hverdagen sig mærkbart: processen kører nu automatisk og timeseddel indsamlet og fraværsoversigt opdateret automatisk sker uden menneskelig indblanding. Det der tidligere krævede opmærksomhed mæltider og aftner er nu et flow der kører i baggrunden — fejlfrit, konsekvent og uden at nogen skal huske at gøre det.</p>
faq_details:
  - q: "Hvor lang tid tager det at sætte automatiseringen op?"
    a: "De fleste flows er klar til brug inden for 1–3 arbejdsdage. Vi starter med en kort afklaringssnak om jeres specifikke opsætning og integrationer, derefter bygger og tester vi flowet i et testmiljø før det går live. Komplekse flows med mange forgreninger eller tilpasninger kan tage op til en uge."
  - q: "Hvad sker der, hvis et trin i flowet fejler?"
    a: "Make.com har indbygget retry-logik og fejlhåndtering. Hvis et trin fejler — for eksempel fordi en API er midlertidigt utilgængelig — forsøger flowet automatisk igen. Hvis fejlen vedvarer, sendes en notifikation til dig med detaljer om, hvad der gik galt. Ingen data går tabt; de sættes i kø og behandles når forbindelsen er genetableret."
  - q: "Hvad kræver flowet af løbende vedligehold?"
    a: "Næsten ingenting i det daglige. Flows byggede i Make.com kører autonomt og sender dig kun notifikationer, hvis noget kræver din opmærksomhed. Vi anbefaler et hurtigt eftersyn hver 2–3 måneder for at sikre, at integrationer og API-forbindelser stadig er opdaterede, særligt når dine systemer får større opdateringer."
pro_tip: "Start små: automatiser ét enkelt, klart afgrænset scenarie først og lad det køre i to uger, før du udvider. Det giver dig trøst med teknologien og et solidt udgangspunkt når du senere vil tilføje mere kompleks logik til flowet."
before_cta: |
  <h2>Forankr automatiseringen i HR-processerne</h2>
  <p>HR-automatiseringer kæmper tit med én specifik udfordring: de involverer mange forskellige systemer på tærs af organisationen. IT-systemer, lønsystem, adgangsstyring og måske et HRsystem skal alle tale sammen. Før vi går i gang, kortlægger vi alle de systemer, der skal inv olveres, og sikrer os, at vi har de nødvendige API-adgange til dem alle.</p>
  <p>Definér også de præcise steps i din nuværende manuelle proces. Hvad gøres først, hvad er afhængigt af hvad, og hvem godkender hvad? En detaljeret procesk ortlægning tager typisk en time, men er guld værd når vi skal bygge flowet — særligt i onboarding-processer, der ofte indeholder undtagelser for specifikke roller, teams eller kontrakttyper.</p>
  <p>Endelig: husk at informere de involverede teams om automatiseringen inden go-live. Når IT pludselig får automatiske adgangsanmodninger, eller når lønteamet modtager automatiske notifikationer, er det vigtigt at de ved, hvad der sker og hvem de kontakter, hvis noget ser forkert ud.</p>
related:
  - url: "/automatisering/it-adgang-ny-medarbejder/"
    title: "Automatisk IT-provisionering ved ansættelse af ny medarbejder"
    category: "HR"
  - url: "/automatisering/ai-referat-fra-moeder/"
    title: "Automatisk AI-referat fra møder via transskribering"
    category: "HR"
  - url: "/automatisering/automatisk-indkoebsgodkendelse/"
    title: "Automatisk godkendelsesflow for indkøb og udgifter"
    category: "HR"
  - url: "/automatisering/automatisk-onboarding-flow-nye-medarbejdere/"
    title: "Automatisk onboarding-flow for nye medarbejdere"
    category: "HR"
---
