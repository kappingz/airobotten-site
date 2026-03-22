---
layout: automatisering.njk
title: "Automatiske SMS-påmindelser til klienter om kommende aftaler"
meta_description: "Reducer no-shows med op til 60% med automatiske SMS-påmindelser. Opsæt én gang — klienter modtager påmindelser automatisk 24 timer før aftalen."
canonical: "https://airobotten.dk/automatisering/automatisk-sms-paamindelse-aftaler/"
category: "Booking"
breadcrumb_label: "Automatiske SMS-påmindelser til aftaler"
trigger: "Ny aftale oprettet i bookingsystem"
result: "Klient modtager SMS-påmindelse automatisk 24 timer før aftalen"
problem: |
  <p>En tom behandlingsstol, et ubrugt mødelokale eller en ledig konsultationstid koster penge — ikke kun den tabte omsætning fra den specifikke aftale, men også den tabte mulighed for at fylde pladsen med en anden klient. No-shows og afbud i sidste øjeblik er en af de mest konkrete og målbare udfordringer for klinikker, frisører, terapeuter, konsulenter og alle andre der arbejder med tidsbestilling. Brancheundersøgelser viser, at 10–20% af alle bookede aftaler enten udebliver eller aflyses med under 24 timers varsel.</p>
  <p>Den typiske løsning er manuel opfølgning: en medarbejder ringer rundt dagen før eller sender individuelle SMS'er. Det er tidskrævende, inkonsekvent og sker ofte slet ikke i travle perioder — præcis de perioder hvor det ville gøre størst forskel. Eller man sender påmindelser via bookingsystemet, men kun som e-mail, som halvdelen af klienterne aldrig åbner i tide.</p>
  <p>SMS har en åbningsrate på over 95% inden for tre minutter. E-mail har under 25%. Alligevel sender langt de fleste virksomheder stadig påmindelser via e-mail — fordi det er det bookingsystemet tilbyder. Resultatet er forudsigelige no-shows der nemt kunne have været forhindret.</p>
solution: |
  <p>Vi bygger et flow der overvåger dit bookingsystem i realtid. Når en ny aftale oprettes — uanset om det er via din hjemmeside, telefonisk eller direkte i systemet — registrerer flowet tidspunktet og schedulerer automatisk en SMS til klientens mobilnummer præcis 24 timer i forvejen. SMS'en indeholder dato, tidspunkt, din adresse og en svarfunktion, så klienten kan bekræfte eller aflyse med et enkelt svar.</p>
  <p>Flowet kan konfigureres med yderligere påmindelser: én uges varsel for lange behandlinger, én times varsel for konsultationer, eller en opfølgnings-SMS efter besøget med et link til at bestille næste tid. Du bestemmer indholdet, timingen og hvornår den automatiske aflysningslink aktiveres. Hele opsætningen sker én gang — derefter kører det autonomt uden din indblanding.</p>
  <p>Integration understøttes med Calendly, Acuity Scheduling, Cliniko, Timely, Google Calendar og de fleste andre bookingsystemer med webhook- eller API-understøttelse. Virker både for enkeltpersonvirksomheder og klinikker med flere behandlere, hvor systemet sender påmindelser for den specifikke behandler klienten er booket hos.</p>
tools:
  - "Calendly"
  - "Make.com"
  - "Twilio"
  - "Google Calendar"
steps:
  - title: "Ny aftale registreret i bookingsystemet"
    body: "Så snart en booking oprettes, sender dit bookingsystem en notifikation til Make.com. Det gælder uanset om bookingen kommer fra din hjemmeside, telefonen eller receptionen."
  - title: "SMS scheduleres automatisk"
    body: "Make.com beregner tidspunktet 24 timer før aftalen og sætter SMS'en i kø. Twilio afsendes præcist til det beregnede tidspunkt — ingen manuel handling kræves."
  - title: "Klient modtager personlig SMS"
    body: "SMS'en indeholder klientens navn, dato, tid og adresse. En svarfunktion lader klienten bekræfte med 'JA' eller aflyse med 'NEJ' — svaret logges automatisk."
  - title: "Aflyser klienten, opdateres kalenderen"
    body: "Svarer klienten 'NEJ' eller aflysningslinket klikkes, frigives tidsslottet automatisk i dit bookingsystem, og du modtager en notifikation om den ledige tid."
  - title: "Opfølgnings-SMS efter besøget"
    body: "Valgfrit: flowet sender en takke-SMS efter aftalen med et direkte link til at bestille næste tid eller efterlade en anmeldelse — mens oplevelsen stadig er frisk."
benefits_label: "Det opnår du"
benefits:
  - "Reducer no-shows med 40–60% — dokumenteret effekt fra klinikker der bruger SMS-påmindelser"
  - "Fri din reception fra manuelle opkald dagen før — sparer 30–60 minutter dagligt"
  - "Klienter kan bekræfte eller aflyse via SMS — frigiver tider i tide til genbestilling"
  - "Konsekvent kommunikation uanset travlhed — påmindelser sendes altid, ikke kun når nogen husker det"
  - "Øg rebooking-raten med automatisk opfølgnings-SMS efter besøget"
  - "Virker på tværs af alle behandlere i klinikken uden ekstra opsætning per person"
faq_items:
  - q: "Virker det med vores nuværende bookingsystem?"
    a: "Vi integrerer med de fleste bookingsystemer der har webhook- eller API-understøttelse: Calendly, Acuity, Cliniko, Timely, Google Calendar, Simplybook.me og flere. Tag kontakt og fortæl os hvilket system I bruger, så undersøger vi integrationsmulighederne."
  - q: "Hvad koster en SMS at sende via Twilio?"
    a: "Twilio-priser for SMS til danske numre er typisk 0,05–0,07 kr. per besked. For en klinik med 50 aftaler om ugen er den månedlige SMS-udgift under 200 kr. — langt under værdien af én enkelt undgået no-show."
  - q: "Kan klienter afmelde sig SMS-påmindelser?"
    a: "Ja. Flowet håndterer automatisk afmeldinger: svarer en klient STOP, tilføjes nummeret til en ekskluderingsliste og modtager ingen fremtidige SMS'er. Det er i overensstemmelse med markedsføringsloven."
mini_case:
  title: "Fysioterapi Østerbro: 47% færre no-shows på tre måneder"
  body: |
    <p>Fysioterapi Østerbro (fiktivt eksempel) havde en no-show-rate på 14% — svarende til ca. 28 mistede behandlingstimer om måneden til en gennemsnitspris på 650 kr. Det udgjorde et månedligt tab på over 18.000 kr. i tabt omsætning.</p>
    <p>Efter implementering af automatiske SMS-påmindelser 24 og 2 timer før aftalen faldt no-show-raten til 7,4% — en reduktion på 47%. De frigjorte pladser genbestilles nu oftere, og receptionen bruger ikke længere 45 minutter om morgenen på at ringe bekræftelsesopkald. Den samlede effekt estimeres til 10.000–12.000 kr. ekstra omsætning per måned.</p>
faq_details:
  - q: "Kan vi tilpasse SMS-teksten til vores brand?"
    a: "Ja, teksten er fuldt konfigurerbar. I bestemmer tone, indhold og hvilke informationer der inkluderes. Vi kan også opsætte forskellige skabeloner per behandlertype eller ydelse, så en tandlægetid får en anden SMS end en massagebehandling."
  - q: "Fungerer det hvis klienter ringer ind for at booke — ikke kun online?"
    a: "Ja. Flowet henter bookingen fra systemet, ikke fra kilden. Uanset om receptionisten registrerer bookingen, klienten booker online, eller det sker via app, aktiveres flowet på samme måde."
  - q: "Hvad sker der med aflysninger der sker med meget kort varsel?"
    a: "Flowet kan konfigureres til at sende en notifikation til dig eller receptionen, hvis en aftale aflyses inden for fx 4 timer. Så kan I hurtigt tilbyde pladsen til en anden — enten via en venteliste eller ved at kontakte tilbagevendende klienter."
pro_tip: "Sæt flowet op til at tjekke om klienten er førstegangsgæst eller returnerende. Førstegangsgæster kan modtage en ekstra SMS med praktisk info: 'Husk at medbringe eventuelle tidligere journaler og ankom 5 min. tidligt.' Det reducerer spildt tid ved ankomst og giver et professionelt første indtryk."
related:
  - url: "/automatisering/booking-bekraeftelse-og-paammindelse/"
    title: "Automatisk bookingbekræftelse og påmindelse"
    category: "Booking"
  - url: "/automatisering/automatisk-ordrebekraeftelse-sms/"
    title: "Automatisk SMS-ordrebekræftelse"
    category: "E-commerce"
  - url: "/automatisering/automatisk-moedebooking-fra-website/"
    title: "Automatisk møde­booking fra hjemmesiden"
    category: "Booking"
  - url: "/automatisering/ny-kunde-velkomst-flow/"
    title: "Automatisk velkomstflow til nye kunder"
    category: "E-commerce"
faq_schema: |
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {"@type": "Question", "name": "Virker det med vores nuværende bookingsystem?", "acceptedAnswer": {"@type": "Answer", "text": "Vi integrerer med de fleste bookingsystemer der har webhook- eller API-understøttelse: Calendly, Acuity, Cliniko, Timely, Google Calendar, Simplybook.me og flere."}},
      {"@type": "Question", "name": "Hvad koster en SMS at sende via Twilio?", "acceptedAnswer": {"@type": "Answer", "text": "Twilio-priser for SMS til danske numre er typisk 0,05–0,07 kr. per besked. For en klinik med 50 aftaler om ugen er den månedlige SMS-udgift under 200 kr."}},
      {"@type": "Question", "name": "Kan klienter afmelde sig SMS-påmindelser?", "acceptedAnswer": {"@type": "Answer", "text": "Ja. Svarer en klient STOP, tilføjes nummeret til en ekskluderingsliste og modtager ingen fremtidige SMS'er — i overensstemmelse med markedsføringsloven."}}
    ]
  }
---
