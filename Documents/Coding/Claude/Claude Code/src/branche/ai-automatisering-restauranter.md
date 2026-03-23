---
title: "AI-automatisering til restauranter og caféer: Spar 5 timer om ugen på vagtplan og admin"
slug: "ai-automatisering-restauranter"
branche: "restauranter og caféer"
branche_kort: "restauratør"
meta_description: "AI-automatisering til restauranter og caféer — automatiser vagtplan, leverandørordrer, anmeldelsessvar og personalekommunikation. Fokusér på gæsterne."
canonical: "https://airobotten.dk/branche/ai-automatisering-restauranter/"
layout: branche.njk
intro: |
  <p>En restaurant med 15 deltidsansatte og åbent seks dage om ugen lever af detaljer: de rigtige folk på de rigtige vagter, varer der ankommer til tiden, og gæster der går hjem med en god oplevelse. Men bag kulisserne sluger administrationen tid der burde gå til netop disse detaljer. Vagtplanen tager 2–3 timer om ugen at lave, leverandørordrer ringer man ind to gange om ugen, og anmeldelserne på Google og Tripadvisor ligger ubesvaret fordi ingen har tid.</p>
  <p>Restaurationsbranchen er kendetegnet ved højt personaleflow, varierende åbningstider og kompleks vagtplanlægning — præcis den type kompleksitet AI-automatisering er god til at håndtere. Systemerne taler ikke automatisk sammen, og manuelle processer der fungerer for én restaurant, bryder ned ved to lokationer eller sæsonudsving. Her er de processer der koster mest og kan automatiseres hurtigst.</p>
tidssluger:
  - title: "Vagtplanlægning og personalekommunikation"
    body: "Vagtplanen tager 2–3 timer om ugen at lave, fordele og kommunikere. Ændringer kræver opkald, WhatsApp-beskeder og manuelle opdateringer. En medarbejder der ikke dukker op fordi de missede beskeden om vagtændringen, koster direkte service-kapacitet i spidsbelastning."
  - title: "Leverandørordrer og lagerstyring"
    body: "De fleste restauranter ringer eller mailer leverandørordrer ind manuelt — ofte de samme ordrer som forrige uge, bare med smajusteringer. Et køkken med 8–10 leverandører bruger 3–4 timer om ugen på indkøbsadministration der i stor grad er forudsigelig og gentagende."
  - title: "Anmeldelseshåndtering og sociale medier"
    body: "Google-anmeldelser og Tripadvisor-anmeldelser kræver svar — ubehagelige anmeldelser især. De fleste restauranter besvarer under 30% af anmeldelserne fordi ingen ejer opgaven. Et ubesvaret negativt review koster ikke kun én potentiel gæst, men alle der læser det."
fordele:
  - "Vagtplanændringer kommunikeret automatisk til berørte medarbejdere i Slack eller SMS"
  - "Automatisk eskalering til ledelsen hvis en vagt er ubesat 2 timer inden service"
  - "Gentagende leverandørordrer sendt automatisk baseret på ugens bookings og lagerstand"
  - "AI-genererede anmeldelsessvar sendt til godkendelse — aldrig et ubesvaret review igen"
  - "Spar 4–6 timer ugentligt der bruges direkte i gæstemødet frem for back-office"
  - "Personalekommunikation sporbar og dokumenteret — ingen tvister om hvem der fik besked"
automationer:
  - trigger: "Vagtplan opdateret i Planday"
    tool: "Make.com + Slack"
    result: "Berørt medarbejder notificeret øjeblikkeligt"
  - trigger: "Ny anmeldelse på Google"
    tool: "Make.com + OpenAI"
    result: "AI-udkast til svar sendt til godkendelse"
  - trigger: "Lager under minimumsgrænse"
    tool: "Make.com + Email"
    result: "Ordre sendt til leverandør automatisk"
  - trigger: "Mandag morgen kl. 08:00"
    tool: "Make.com + Slack"
    result: "Ugens vagtplan distribueret til alle"
case:
  name: "Café Kastrup: Fra WhatsApp-kaos til struktureret kommunikation"
  body: |
    <p>Café Kastrup (fiktivt eksempel) er en café i Kastrup med 12 deltidsansatte. Lederen kommunikerede vagtændringer via en WhatsApp-gruppe med 12 deltagere — beskeder druknede i privat snak, og det var umuligt at vide hvem der faktisk havde set ændringen. To gange om måneden var der en ubesat vagt fordi kommunikationen fejlede.</p>
    <p>Efter implementering af automatisk vagtnotifikation via Slack (vagtændring i Planday → direkte Slack-besked til berørt medarbejder → svar logget), automatisk ugesopdeling distribueret mandag morgen og AI-anmeldelsessvar (ny Google-anmeldelse → AI-udkast → lederens godkendelse med ét klik), faldt ubesatte vagter fra 2 om måneden til 0. Lederen bruger nu 45 minutter om ugen på vagtadministration mod tidligere 2,5 timer. Anmeldelsessvarsprocenten steg fra 18% til 94%.</p>
impl_steps:
  - title: "Uge 1: Vagtnotifikationer"
    body: " Forbind Planday med Make.com og Slack eller SMS via Twilio. Opsæt direkte notifikation til berørt medarbejder ved vagtoprettelse, ændring og tilbud. Konfigurér eskalering til leder ved manglende svar inden 2 timer."
  - title: "Uge 2: Anmeldelsesflow"
    body: " Forbind Google My Business med Make.com. Opsæt AI-genererede svarsudkast (OpenAI GPT-4) der sendes til lederens email til ét-kliks godkendelse. Opsæt tilsvarende for Tripadvisor og Facebook."
  - title: "Uge 3: Leverandørordrer"
    body: " Kortlæg hvilke varer der bestilles regelmæssigt og i hvilke mængder. Opsæt automatisk ordremail til leverandører baseret på lagerstand eller fast ugentlig schedule."
  - title: "Uge 4: Ugentlig team-kommunikation"
    body: " Opsæt automatisk distribution af ugens vagtplan som Slack-besked eller email mandag morgen. Tilføj eventuelle vigtige informationer (menuændringer, events) fra et simpelt Google Sheets-ark."
faq:
  - q: "Virker det med Planday, eller skal vi skifte vagtplansystem?"
    a: "Det virker direkte med Planday, som er det mest udbredte vagtplanssystem i dansk restaurationsbranche. Planday har en API som Make.com integrerer med native. Bruger I et andet system (Quinyx, Tamigo), undersøger vi API-adgangen inden opsætning."
  - q: "Kan AI skrive anmeldelsessvar der lyder som om det er os der skriver?"
    a: "Ja, med den rette konfiguration. Vi definerer jeres tone og stil — uformel, varm, professionel, humoristisk — og træner prompten på 5–10 eksempler på svar I allerede er tilfredse med. Resultatet lyder konsekvent som jer og ikke som en generisk undskyldning."
  - q: "Vi er en sæsonforretning — kan systemet håndtere store udsving i personalestørrelse?"
    a: "Ja. Systemet skalerer automatisk med antal ansatte i Planday. I sæsonperioder med 20 ekstra sommervikarer fungerer notifikationerne identisk med normalperioden — ingen manuel rekonfiguration er nødvendig."
  - q: "Hvad koster automatiseringerne at drive månedligt?"
    a: "Make.com til en restaurants volumen koster 9–29 USD/md. Twilio SMS koster ca. 0,10 kr. per besked. For en restaurant med 15 ansatte og 200 vagtnotifikationer om måneden er den samlede driftsomkostning under 300 kr. om måneden."
related:
  - url: "/automatisering/planday-vagtplan-notifikation/"
    title: "Automatiske Slack-notifikationer fra Planday"
    category: "HR"
  - url: "/automatisering/google-reviews-automatisk-svar/"
    title: "Automatisk svar på Google-anmeldelser"
    category: "Marketing"
  - url: "/automatisering/automatisk-loenkoersel-forberedelse/"
    title: "Automatisk lønkørsels-forberedelse"
    category: "HR"
  - url: "/automatisering/automatisk-indkoebsordre/"
    title: "Automatisk indkøbsordre til leverandør"
    category: "Operations"
faq_schema: |
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {"@type": "Question", "name": "Virker det med Planday?", "acceptedAnswer": {"@type": "Answer", "text": "Ja, direkte med Planday via native Make.com-integration. Andre systemer som Quinyx og Tamigo undersøges inden opsætning."}},
      {"@type": "Question", "name": "Kan AI skrive anmeldelsessvar der lyder som om det er os?", "acceptedAnswer": {"@type": "Answer", "text": "Ja. Vi definerer jeres tone og træner prompten på eksempler I allerede er tilfredse med."}},
      {"@type": "Question", "name": "Vi er sæsonforretning — kan systemet håndtere store udsving?", "acceptedAnswer": {"@type": "Answer", "text": "Ja. Systemet skalerer automatisk med antal ansatte i Planday. Ingen rekonfiguration ved sæsonudsving."}}
    ]
  }
---
