---
layout: automatisering.njk
title: "Automatisk godkendelsesflow for indkøb og udgifter"
meta_description: "Digitalisér indkøbsgodkendelse med et automatisk flow i Slack. Medarbejdere anmoder, ledere godkender med ét klik, og alt logges automatisk — ingen emails frem og tilbage."
canonical: "https://airobotten.dk/automatisering/automatisk-indkoebsgodkendelse/"
category: "HR"
breadcrumb_label: "Automatisk indkøbsgodkendelse"
trigger: "Medarbejder indsender indkøbsanmodning"
result: "Godkendelse sendt og indkøb autoriseret med log"
problem: |
  <p>I mange virksomheder er indkøbsgodkendelse en kaotisk proces. En medarbejder skal købe noget, sender en email til sin leder, lederen ser den måske samme dag eller måske fire dage senere, godkendelsen sker via email-tråd, og ingen ved præcis hvad der er godkendt af hvem til hvilken pris. Der er ingen systematisk log, ingen budgetoverblik og ingen mulighed for at se mønstre i indkøbsbehovene.</p>
  <p>Problemet eskalerer, når godkendelsen involverer flere led. En udgift over 10.000 kr. skal måske godkendes af både afdelingsleder og CFO. Koordinationen sker typisk ad hoc — via email, Slack-beskeder eller mundtlige aftaler — og i travle perioder glipper ting. Enten købes noget uden godkendelse, eller en medarbejder venter i dagevis på svar, fordi godkendelsesprocessen ingen deadline og intet system har.</p>
  <p>Den manglende systematik er også et regnskabsproblem. Uden et klart godkendelsesflow er det svært at matche indkøbsordrer med fakturaer, dokumentere at udgifter er autoriseret, og give revisor et klart billede af den interne kontrol.</p>
solution: |
  <p>Vi bygger et Make.com-flow med en simpel Slack-baseret interface. Medarbejderen udfylder en formular — hvad skal købes, hos hvem, til hvilken pris, og til hvilken formål — og indsender den. Make.com identificerer hvem der skal godkende baseret på beløb og afdeling, og sender en Slack-besked til godkenderen med alle detaljer og to knapper: Godkend og Afvis.</p>
  <p>Godkenderen svarer med ét klik. Medarbejderen modtager øjeblikkeligt besked om beslutningen. Alle godkendelser, afvisninger og begrundelser logges automatisk i Google Sheets, der fungerer som det fulde indkøbsregister. For udgifter over en defineret grænse tilføjes et ekstra godkendelsestrin automatisk. CFO og økonomiansvarlige har altid et opdateret overblik over godkendte indkøb og ventende anmodninger.</p>
tools:
  - "Slack"
  - "Make.com"
  - "Google Sheets"
  - "Gmail"
mini_case:
  title: "Dansk Drift ApS: Fra manuel rutine til automatisk flow"
  body: |
    <p>Dansk er en mellemstor servicevirksomhed med ti ansatte. At håndtere "medarbejder indsender indkøbsanmodning" manuelt hver gang kostede den daglige leder 4–6 timer om ugen — tid der ellers kunne bruges på opgaver der rent faktisk kræver menneskelig vurdering. Problemet var ikke mangel på vilje, men at processen simpelthen ikke var bygget til at køre automatisk.</p>
    <p>Efter implementering af automatiseringen ændrede hverdagen sig mærkbart: processen kører nu automatisk og godkendelse sendt og indkøb autoriseret med log sker uden menneskelig indblanding. Det der tidligere krævede opmærksomhed mæltider og aftner er nu et flow der kører i baggrunden — fejlfrit, konsekvent og uden at nogen skal huske at gøre det.</p>
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
  - url: "/automatisering/automatisk-medarbejder-pulsmaling/"
    title: "Automatisk pulsmåling og survey af medarbejdertilfredshed"
    category: "HR"
  - url: "/automatisering/ai-referat-fra-moeder/"
    title: "Automatisk AI-referat fra møder via transskribering"
    category: "HR"
  - url: "/automatisering/timeseddel-og-fravaersregistrering/"
    title: "Automatisk timeseddel og fraværsregistrering for dit team"
    category: "HR"
  - url: "/automatisering/automatisk-onboarding-flow-nye-medarbejdere/"
    title: "Automatisk onboarding-flow for nye medarbejdere"
    category: "HR"
---
