---
layout: automatisering.njk
title: "Automatisk distribution af jobopslag til LinkedIn og Jobindex"
meta_description: "Publicér nye jobopslag automatisk på LinkedIn, Jobindex og interne kanaler. Opsæt én gang — rekrutteringsprocessen starter af sig selv ved hvert nyt opslag."
canonical: "https://airobotten.dk/automatisering/jobopslag-automatisk-distribution/"
category: "HR"
breadcrumb_label: "Automatisk distribution af jobopslag"
trigger: "Nyt jobopslag godkendt i HR-system eller Google Sheets"
result: "Jobopslag publiceret automatisk på LinkedIn, Jobindex og interne kanaler"
problem: |
  <p>Rekruttering starter med at finde de rigtige kandidater — og det starter med at kandidaterne kan finde jobopslaget. Alligevel er distributionen af jobopslag en af de mest tidskrævende og inkonsekvent udførte dele af rekrutteringsprocessen i danske SMV'er. Et godkendt jobopslag skal manuelt kopieres til LinkedIn, indsættes på Jobindex, deles i relevante Slack-kanaler og sendes til HR-afdelingen til karrieresiden. Det er fire eller fem separate handlinger der alle kræver menneskelig opmærksomhed — og som alligevel ikke altid sker hurtigt nok.</p>
  <p>Forsinkelse i distributionen har en direkte omkostning: de bedste kandidater er aktive i relativt korte perioder. En position der publiceres tre dage efter godkendelse, mister de kandidater der fandt et job i mellemtiden. I et konkurrencepræget marked for specialister er tre dage lang tid.</p>
  <p>Hertil kommer den administrative byrde: opdatering af opslaget på tværs af platforme, fjernelse af det når positionen er besat, og sporbarhed over hvilke kanaler der genererede kandidater. Alt dette sker sjældent systematisk og efterlader HR med et kaotisk billede af rekrutteringsprocessen.</p>
solution: |
  <p>Vi bygger et flow der tager et godkendt jobopslag fra én central kilde — typisk et Google Sheets-ark, Notion-side eller jeres HR-system — og distribuerer det automatisk til de platforme I angiver. LinkedIn-opslaget formateres til LinkedIn's API, Jobindex-opslaget til Jobindex's format, og en intern Slack-besked sendes til den relevante kanal. Alt dette sker inden for to minutter efter godkendelse.</p>
  <p>Flowet håndterer også livscyklussen: når positionen markeres som "besat", trækkes opslaget automatisk på alle platforme, og en afslutningsrapport genereres med statistik over ansøgninger per kanal. Det giver jer konkret data til at prioritere de kanaler der virker bedst for jeres type rekruttering — og skære dem der ikke virker.</p>
tools:
  - "Google Sheets"
  - "Make.com"
  - "LinkedIn API"
  - "Slack"
  - "Gmail"
steps:
  - title: "Jobopslag godkendes i central kilde"
    body: "En rekrutterer markerer jobopslaget som 'Klar til publicering' i Google Sheets eller jeres HR-system. Det er det eneste trin der kræver menneskelig handling."
  - title: "Flowet formaterer opslaget til hvert medie"
    body: "Make.com tilpasser jobopslaget til hvert platforms krav: LinkedIn-format med hashtags og emoji-fri tekst, Jobindex-format med stillingstitel og kompetencekrav, Slack-format med direkte ansøgningslink."
  - title: "Automatisk publicering på alle kanaler"
    body: "Opslaget publiceres simultant: LinkedIn Company Page, Jobindex jobportal, internt Slack og eventuelt karrieresiden via API eller webhook. Tidsstempel og platform-ID logges."
  - title: "Sporbarhed på tværs af kanaler"
    body: "Hvert opslag får UTM-links per platform, så I kan se i Google Analytics præcis hvilken kanal der sender flest ansøgere. Data samles automatisk i et rekrutteringsdashboard."
  - title: "Automatisk afpublicering ved besættelse"
    body: "Markeres stillingen som besat, fjernes opslaget på alle platforme automatisk, og en lukningsmail sendes til de kandidater der er i pipeline men endnu ikke har fået svar."
benefits_label: "Det opnår du"
benefits:
  - "Jobopslag live på alle kanaler inden for 2 minutter efter godkendelse — ikke 2 dage"
  - "Eliminer dobbeltarbejde med at kopiere og tilpasse tekst til hvert platform manuelt"
  - "Fuld sporbarhed: se hvilke kanaler der genererer flest og bedste ansøgere"
  - "Automatisk afpublicering forhindrer forlegne opslag der stadig er live efter besættelse"
  - "Internt Slack-opslag sikrer at medarbejderne er ambassadører for åbne stillinger"
  - "Frigiv 1–2 timer per rekruttering der tidligere gik til manuel distribution"
faq_items:
  - q: "Kan vi publicere til andre jobportaler end Jobindex?"
    a: "Ja. Flowet kan udvides med Ofir, Graduateland, Den Blå Avis, SøgJob og andre portaler der tilbyder API eller automatiseret indsendelse. Vi konfigurerer de kanaler der giver mest mening for jeres kandidatprofil."
  - q: "Hvad med GDPR og opbevaring af ansøgerdata?"
    a: "Selve ansøgningerne modtages via platformenes egne systemer (LinkedIn, Jobindex) og håndteres efter deres GDPR-regler. Flowet håndterer kun distributionen af jobopslaget, ikke ansøgerdata."
  - q: "Virker det med vores eksisterende ATS (Applicant Tracking System)?"
    a: "Mange ATS-systemer som Teamtailor, Personio og SmartRecruiters har API-understøttelse vi kan integrere direkte. Alternativt bruges Google Sheets som mellemled, hvilket virker med alle systemer."
mini_case:
  title: "TechHuset A/S: Fra 3 dages forsinkelse til øjeblikkelig publicering"
  body: |
    <p>TechHuset A/S (fiktivt eksempel) er et softwareudviklingsselskab med 35 ansatte der rekrutterer løbende. Tidligere tog det 2–3 arbejdsdage fra et jobopslag var godkendt til det var publiceret på alle kanaler — HR skulle selv publicere på LinkedIn, en kollega tog Jobindex, og karrieresiden glemtes ofte helt.</p>
    <p>Efter implementeringen publiceres alle jobopslag inden for 4 minutter. I den første måned registrerede de, at LinkedIn genererede 68% af ansøgningerne, Jobindex 24% og den interne Slack-deling 8% — sidstnævnte med den højeste konverteringsrate til ansættelse. Den indsigt ændrede deres rekrutteringsstrategi, og de bruger nu mere tid på medarbejderambassadørkampagner via Slack.</p>
faq_details:
  - q: "Kan AI hjælpe med at skrive selve jobopslaget?"
    a: "Ja — vi kan udvide flowet med et GPT-4-trin der genererer et komplet jobopslag ud fra en kort beskrivelse af rollen, krav og team. Du godkender og tilretter inden publicering. Det sparer typisk 45–60 minutter per stilling."
  - q: "Kan vi sætte en dato for hvornår opslaget skal publiceres?"
    a: "Ja. I stedet for øjeblikkelig publicering kan I sætte en fremtidig dato i Google Sheets, og flowet schedulerer publiceringen automatisk til det angivne tidspunkt — praktisk for opslag der annonceres ved en specifik lejlighed."
  - q: "Hvad sker der hvis LinkedIn API er midlertidigt nede?"
    a: "Make.com har indbygget retry-logik: hvis LinkedIn API ikke svarer, forsøger flowet igen automatisk op til tre gange. Lykkes det ikke, modtager I en notifikation og kan manuelt trigge publiceringen."
pro_tip: "Opret en standardiseret jobopslags-skabelon i Google Sheets med faste felter: stillingsbetegnelse, afdeling, lokation, ansvarsperson, ansøgningsfrist og kompetencekrav. Lad flowet automatisk generere et konsistent SEO-venligt opslag baseret på skabelonen — standardiserede stillingsnavne rangerer bedre på LinkedIn og Jobindex."
related:
  - url: "/automatisering/cv-screening-med-ai/"
    title: "AI-baseret CV-screening og rangering"
    category: "HR"
  - url: "/automatisering/onboarding-ny-medarbejder/"
    title: "Automatisk onboarding-flow til nye medarbejdere"
    category: "HR"
  - url: "/automatisering/automatisk-medarbejder-offboarding/"
    title: "Automatisk medarbejder-offboarding"
    category: "HR"
  - url: "/automatisering/it-adgang-ny-medarbejder/"
    title: "Automatisk it-adgang til nye medarbejdere"
    category: "HR"
faq_schema: |
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {"@type": "Question", "name": "Kan vi publicere til andre jobportaler end Jobindex?", "acceptedAnswer": {"@type": "Answer", "text": "Ja. Flowet kan udvides med Ofir, Graduateland, Den Blå Avis, SøgJob og andre portaler der tilbyder API eller automatiseret indsendelse."}},
      {"@type": "Question", "name": "Hvad med GDPR og opbevaring af ansøgerdata?", "acceptedAnswer": {"@type": "Answer", "text": "Selve ansøgningerne modtages via platformenes egne systemer og håndteres efter deres GDPR-regler. Flowet håndterer kun distributionen af jobopslaget, ikke ansøgerdata."}},
      {"@type": "Question", "name": "Virker det med vores eksisterende ATS?", "acceptedAnswer": {"@type": "Answer", "text": "Mange ATS-systemer som Teamtailor, Personio og SmartRecruiters har API-understøttelse vi kan integrere direkte. Alternativt bruges Google Sheets som mellemled."}}
    ]
  }
---
