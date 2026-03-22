---
layout: automatisering.njk
title: "Automatisk rapportering fra e-conomic til Google Sheets"
meta_description: "Hent nøgletal fra e-conomic og opbyg automatiske rapporter i Google Sheets. Omsætning, likviditet og nøgletal opdateres dagligt uden manuelt arbejde."
canonical: "https://airobotten.dk/automatisering/e-conomic-google-sheets-rapport/"
category: "Regnskab"
breadcrumb_label: "e-conomic til Google Sheets rapport"
trigger: "Planlagt kørsel (dagligt/ugentligt)"
result: "Opdateret rapport i Google Sheets med aktuelle nøgletal"
problem: |
  <p>e-conomic er et stærkt bogføringssystem, men dets interne rapporteringsmodul er begrænset, når det kommer til skræddersyede visninger. Vil du have en rapport der kombinerer omsætning, vareforbrug, faste omkostninger og likviditet i ét overbliksbillede — tilpasset præcis den måde din virksomhed er opbygget på — ender du med at kopiere tal manuelt fra e-conomic til Excel eller Google Sheets. Det tager tid og er fejlbehæftet.</p>
  <p>Mange virksomhedsejere og CFO'er bruger 1-2 timer om ugen på at samle tal fra e-conomic, opdatere regneark og sende rapporter til bestyrelse, investorer eller ledelse. Det er monotont arbejde, der ikke tilføjer analytisk værdi — det er bare dataoverflytning. Og hvis man glemmer at opdatere regnearket, baserer man beslutninger på forældet information.</p>
  <p>Problemet vokser med virksomheden. Jo flere konti, afdelinger og projekter, jo mere kompleks bliver den manuelle rapporteringsproces. Hvad der tog 30 minutter som et lille firma, tager pludselig 3 timer i en mellemstor virksomhed.</p>
solution: |
  <p>Vi bygger et Make.com-flow der dagligt eller ugentligt — efter din tidsplan — henter nøgletal direkte fra e-conomic API og skriver dem ind i et Google Sheets-dashboard du selv ejer og kan designe frit. Omsætning, udgifter, debitorsaldo, likviditetsstatus, igangværende projekter og budgetafvigelser opdateres automatisk med de seneste data.</p>
  <p>Google Sheets er konfigureret som et levende dashboard: diagrammer og nøgletal opdateres automatisk når nye data skrives ind. Du — eller din bestyrelse, partner eller CFO — åbner altid et regneark med aktuelle tal. Vil du dele rapporten, sender flowet automatisk et link eller PDF til definerede modtagere på et defineret tidspunkt, f.eks. hver mandag morgen kl. 8.</p>
tools:
  - "e-conomic"
  - "Make.com"
  - "Google Sheets"
  - "Gmail"
mini_case:
  title: "Dansk Drift ApS: Fra manuel rutine til automatisk flow"
  body: |
    <p>Dansk er en mellemstor servicevirksomhed med ti ansatte. Manuelt at trække data fra tre platforme og samle det i et præsentationsdokument kostede den daglige leder 3–5 timer per rapport — tid der ellers kunne bruges på opgaver der rent faktisk kræver menneskelig vurdering. Problemet var ikke mangel på vilje, men at processen simpelthen ikke var bygget til at køre automatisk.</p>
    <p>Efter implementering af automatiseringen ændrede hverdagen sig mærkbart: rapporten genereres og sendes automatisk mandag morgen, og kunden kan se resultater i realtid. Det der tidligere krævede opmærksomhed mæltider og aftner er nu et flow der kører i baggrunden — fejlfrit, konsekvent og uden at nogen skal huske at gøre det.</p>
faq_details:
  - q: "Hvor lang tid tager det at sætte automatiseringen op?"
    a: "De fleste flows er klar til brug inden for 1–3 arbejdsdage. Vi starter med en kort afklaringssnak om jeres specifikke opsætning og integrationer, derefter bygger og tester vi flowet i et testmiljø før det går live. Komplekse flows med mange forgreninger eller tilpasninger kan tage op til en uge."
  - q: "Hvad sker der, hvis et trin i flowet fejler?"
    a: "Make.com har indbygget retry-logik og fejlhåndtering. Hvis et trin fejler — for eksempel fordi en API er midlertidigt utilgængelig — forsøger flowet automatisk igen. Hvis fejlen vedvarer, sendes en notifikation til dig med detaljer om, hvad der gik galt. Ingen data går tabt; de sættes i kø og behandles når forbindelsen er genetableret."
  - q: "Hvad kræver flowet af løbende vedligehold?"
    a: "Næsten ingenting i det daglige. Flows byggede i Make.com kører autonomt og sender dig kun notifikationer, hvis noget kræver din opmærksomhed. Vi anbefaler et hurtigt eftersyn hver 2–3 måneder for at sikre, at integrationer og API-forbindelser stadig er opdaterede, særligt når dine systemer får større opdateringer."
pro_tip: "Inkluder altid en \"anomaly-detektion\" i dine rapport-flows: sæt flowet op til at fremhæve tal der afviger mere end 20% fra forrige periode med en farvet celle eller et flag. Så bruger du rapporttiden på at forstå udsving i stedet for blot at læse rækker af tal."
before_cta: |
  <h2>Byg en rapport der faktisk bruges</h2>
  <p>Den største fejl i rapport-automatisering er at bygge en rapport der indeholder ALT — og så ender ingen med at læse den. Inden vi bygger flowet, bruger vi tid på at afklare: hvad er de tre beslutninger du træffer på baggrund af denne rapport? De tal der understøtter dem, er de eneste tal der behøver være i rapporten.</p>
  <p>Definér også dine KPIer på forhånd og hvad "godt", "acceptabelt" og "kritisk" ser ud for hvert mål. Når rapporten er automatiseret, er det oplagt også at bygge farvekodning og tær skel-markering ind — så er rapporten en beslutn ingshjælp, ikke blot et talsæt.</p>
  <p>Endelig: afklar hvem der modtager rapporten og på hvilken kanal. En tung PDF til ledergruppen og en kort Slack-notifikation til den operationelle teamleder kan sagtens sendes fra samme flow — men de kræver lidt forskellig formatering. Det er værd at tænke over fra start.</p>
related:
  - url: "/automatisering/tidsregistrering-til-faktura/"
    title: "Automatisk fakturering baseret på tidsregistrering"
    category: "Regnskab"
  - url: "/automatisering/automatisk-bankafstemning-bogfoering/"
    title: "Automatisk bankafstemning med bogføring i Dinero"
    category: "Regnskab"
  - url: "/automatisering/automatisk-bogfoering-stripe/"
    title: "Automatisk bogføring af Stripe-betalinger"
    category: "Regnskab"
  - url: "/automatisering/multi-kanal-bogfoering-e-conomic/"
    title: "Automatisk multi-kanal bogføring i e-conomic"
    category: "Regnskab"
---
