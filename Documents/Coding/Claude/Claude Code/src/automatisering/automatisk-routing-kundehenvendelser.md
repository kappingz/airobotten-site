---
layout: automatisering.njk
title: "Automatisk routing af kundehenvendelser til rette afdeling"
meta_description: "Sorter og rout kundehenvendelser automatisk til den rigtige medarbejder eller afdeling. Hurtigere svartider, ingen henvendelser der falder igennem og bedre kundeoplevelse."
canonical: "https://airobotten.dk/automatisering/automatisk-routing-kundehenvendelser/"
category: "Kundeservice"
breadcrumb_label: "Automatisk routing af kundehenvendelser"
trigger: "Ny kundehenvendelse modtaget via email eller formular"
result: "Henvendelse routet til rette person med prioritet og kategori"
problem: |
  <p>Når kundehenvendelser ankommer til en fælles indbakke, starter der typisk en ineffektiv sorteringsproces: hvem læser emailen, afgør om den hører til salg, support eller regnskab, og videresender den til den rigtige person. I en travl hverdag tager denne manuelle routing tid, og i perioder med mange henvendelser er det nemt for en email at ligge og vente i timevis — eller falde helt igennem.</p>
  <p>Problemet eskalerer med vækst. En lille virksomhed med 3 medarbejdere kan måske håndtere manuel routing, men med 10-15 medarbejdere og 50+ daglige henvendelser bliver det et egentligt koordineringsproblem. Kunder oplever lange svartider, henvendelser assignes til folk der ikke er specialister i det relevante område, og ingen ved præcis hvem der har ansvar for hvad.</p>
  <p>Der er også et prioriteringsproblem: en potentiel storkunde der ønsker et tilbud bør behandles hurtigere end en generel informationsforespørgsel — men i en fælles indbakke ser alle emails ens ud, og det er svært at prioritere systematisk.</p>
solution: |
  <p>Vi bygger et Make.com-flow der analyserer alle indkommende henvendelser via Gmail, kontaktformular eller chat-integration. En AI-analyse klassificerer henvendelsens type (salg, support, fakturering, reklamation osv.), vurderer dens prioritet, og identificerer hvilken medarbejder eller afdeling der er bedst til at håndtere den.</p>
  <p>Henvendelsen oprettes som ticket i HubSpot eller dit valgte CRM med korrekt kategori, prioritet og assignment. Den ansvarlige medarbejder notificeres øjeblikkeligt i Slack med en sammenfatning og et link til ticketen. Kunden modtager automatisk en bekræftelse med forventet svartid. Intet falder igennem, og svartiden reduceres markant fordi den rigtige person ser henvendelsen med det samme.</p>
tools:
  - "Gmail"
  - "Make.com"
  - "HubSpot"
  - "Slack"
mini_case:
  title: "Homefit.dk: Fra manuel rutine til automatisk flow"
  body: |
    <p>Homefit.dk er en fitnessudstyr-webshop med et supportteam på fem. At håndtere "ny kundehenvendelse modtaget via email eller formular" manuelt hver gang kostede supportchefen 4–6 timer om ugen — tid der ellers kunne bruges på opgaver der rent faktisk kræver menneskelig vurdering. Problemet var ikke mangel på vilje, men at processen simpelthen ikke var bygget til at køre automatisk.</p>
    <p>Efter implementering af automatiseringen ændrede hverdagen sig mærkbart: processen kører nu automatisk og henvendelse routet til rette person med prioritet og kategori sker uden menneskelig indblanding. Det der tidligere krævede opmærksomhed mæltider og aftner er nu et flow der kører i baggrunden — fejlfrit, konsekvent og uden at nogen skal huske at gøre det.</p>
faq_details:
  - q: "Hvor lang tid tager det at sætte automatiseringen op?"
    a: "De fleste flows er klar til brug inden for 1–3 arbejdsdage. Vi starter med en kort afklaringssnak om jeres specifikke opsætning og integrationer, derefter bygger og tester vi flowet i et testmiljø før det går live. Komplekse flows med mange forgreninger eller tilpasninger kan tage op til en uge."
  - q: "Hvad sker der, hvis et trin i flowet fejler?"
    a: "Make.com har indbygget retry-logik og fejlhåndtering. Hvis et trin fejler — for eksempel fordi en API er midlertidigt utilgængelig — forsøger flowet automatisk igen. Hvis fejlen vedvarer, sendes en notifikation til dig med detaljer om, hvad der gik galt. Ingen data går tabt; de sættes i kø og behandles når forbindelsen er genetableret."
  - q: "Hvad kræver flowet af løbende vedligehold?"
    a: "Næsten ingenting i det daglige. Flows byggede i Make.com kører autonomt og sender dig kun notifikationer, hvis noget kræver din opmærksomhed. Vi anbefaler et hurtigt eftersyn hver 2–3 måneder for at sikre, at integrationer og API-forbindelser stadig er opdaterede, særligt når dine systemer får større opdateringer."
pro_tip: "Start små: automatiser ét enkelt, klart afgrænset scenarie først og lad det køre i to uger, før du udvider. Det giver dig trøst med teknologien og et solidt udgangspunkt når du senere vil tilføje mere kompleks logik til flowet."
before_cta: |
  <h2>Byg et solidt fundament for automatiseret support</h2>
  <p>Før vi sætter et kundeservice-flow op, anbefaler vi at lave en simpel analyse af dine indgående henvendelser fra de seneste 30 dage. Kategor isér dem i 5–10 overordnede emner og notér, hvilke der gentager sig oftest. Det er typisk disse 3–5 kategorier, der bør automatiseres først — alt andet kan vente.</p>
  <p>Skriv også de færdige svartekster, du ønsker at bruge til de hyppigste henvendelser. Jo bedre dine svabskabeloner er formuleret fra start, jo mere tilfredse vil dine kunder være. AI kan generere svar, men det er stadig dig der kender din tone of voice og de præcise informationer der er korrekte for netop din virksomhed.</p>
  <p>Planlæg en "human handoff"-strategi på forhånd: hvornår skal en automatiseret henvendelse eskaleres til en medarbejder? Hvilke nøgleord eller signaler er indikationer på, at kunden er frustreret og behøver menneskelig opmærksomhed? At have disse regler defineret inden go-live gør flowet markant mere robust.</p>
related:
  - url: "/automatisering/ai-sammenfatning-af-email-traade/"
    title: "AI-sammenfatning af lange email-tråde til hurtig kontekst"
    category: "Kundeservice"
  - url: "/automatisering/ai-chatbot-til-kundeservice-gentagne-spoergsmaal/"
    title: "AI kundeservice-chatbot der besvarer gentagne spørgsmål automatisk"
    category: "Kundeservice"
  - url: "/automatisering/ai-support-ticket-klassificering/"
    title: "AI klassificerer og prioriterer support-tickets automatisk"
    category: "Kundeservice"
  - url: "/automatisering/ai-udkast-til-kundemails/"
    title: "AI genererer udkast til svar på kundemails"
    category: "Kundeservice"
---
