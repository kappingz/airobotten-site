---
layout: automatisering.njk
title: "Automatiske Slack-notifikationer ved vagtplanændringer i Planday"
meta_description: "Notificér medarbejdere automatisk i Slack og SMS når vagter ændres i Planday. Ingen mistede vagter, ingen manuelle opkald — ændringer kommunikeres øjeblikkeligt."
canonical: "https://airobotten.dk/automatisering/planday-vagtplan-notifikation/"
category: "HR"
breadcrumb_label: "Planday vagtplan-notifikationer"
trigger: "Vagt oprettet, ændret eller tilbudt i Planday"
result: "Berørt medarbejder notificeret øjeblikkeligt i Slack og SMS"
problem: |
  <p>Planday er rygraden i vagtplanlægningen for tusindvis af danske restauranter, butikker, hoteller og klinikker. Men vagtplanen er ikke statisk — vagter byttes, aflyses, flyttes og tilbuds til nye medarbejdere løbende. Og her opstår problemet: Planday sender ganske vist e-mailnotifikationer, men de åbnes ikke altid i tide. Medarbejdere der er på vagt eller ikke tjekker e-mail aktivt, opdager ændringen for sent — eller slet ikke.</p>
  <p>Resultatet er forudsigelige situationer: en medarbejder der ikke møder op fordi vedkommende ikke så at vagten var blevet ændret, en leder der ringer rundt i panik 30 minutter inden service starter, eller en vagt der tilbydes men ikke accepteres fordi beskeden druknede i indbakken. Hvert af disse scenarier koster tid, stress og i restaurationsbranchen direkte omsætningstab.</p>
  <p>Mange ledere løser det ved at sende manuelle beskeder i WhatsApp-grupper — men det skaber uofficielle kommunikationskanaler, retslige gråzoner og total mangel på sporbarhed. Hvem accepterede vagten? Hvornår? Hvem fik besked?</p>
solution: |
  <p>Vi bygger et flow der kobler Planday's API til Slack og eventuelt Twilio SMS. Når en leder opretter en ny vagt, ændrer en eksisterende eller tilbyder en vagt til specifikke medarbejdere, sender Make.com øjeblikkeligt en notifikation til den berørte medarbejders Slack-bruger. Notifikationen indeholder alle relevante detaljer: dato, tid, lokation, rolle og et direkte link til at acceptere eller afvise i Planday.</p>
  <p>Flowet kan konfigureres til at eskalere: accepteres en udbudt vagt ikke inden for to timer, sendes en reminder. Accepteres den stadig ikke, notificeres lederen og vagten markeres i Planday som "ikke besat". Hele kommunikationshistorikken er logget og sporbar — ingen WhatsApp-grupper, ingen diskussion om hvem der fik besked.</p>
tools:
  - "Planday"
  - "Make.com"
  - "Slack"
  - "Twilio"
steps:
  - title: "Vagtændring registreret i Planday"
    body: "Planday API sender en event til Make.com øjeblikkeligt når en vagt oprettes, ændres, byttes eller tilbydes. Al relevant vagt-information inkluderes i notifikationen."
  - title: "Berørt medarbejder identificeres"
    body: "Make.com slår medarbejderens Slack-bruger og mobilnummer op baseret på Planday-ID. Opsætningen vedligeholdes automatisk og synkroniseres med Planday's medarbejderliste."
  - title: "Notifikation sendes i Slack"
    body: "Medarbejderen modtager en direkte Slack-besked med vagtdetaljer og handlingsknapper: 'Acceptér' eller 'Afvis'. Svar logges automatisk i Planday og i dit oversigtsark."
  - title: "SMS-backup for kritiske ændringer"
    body: "For ændringer inden for 4 timer sendes simultant en SMS via Twilio som backup. Det sikrer kommunikation selv for medarbejdere der ikke tjekker Slack aktivt."
  - title: "Eskalering og leder-notifikation"
    body: "Svares der ikke inden for konfigurerede tidsgrænser, eskaleres automatisk til næste niveau: en reminder til medarbejderen og en notifikation til den ansvarlige leder."
benefits_label: "Det opnår du"
benefits:
  - "Nul mistede vagtbeskeder — medarbejdere notificeres på den kanal de faktisk bruger"
  - "Eliminer manuelle opkald og WhatsApp-grupper til vagtændringer"
  - "Fuld sporbarhed: hvem fik besked, hvornår og hvad de svarede"
  - "Automatisk eskalering sikrer at ubesatte vagter opdages i tide til at finde afløser"
  - "Frigiv 30–60 minutter dagligt for ledere der ringer rundt ved vagtændringer"
  - "Professionel kommunikationskanal erstatter uformelle grupper med rod og usikkerhed"
faq_items:
  - q: "Virker det med Planday's gratis plan?"
    a: "Planday API-adgang kræver typisk en betalt Planday-plan. Tjek jeres nuværende plan under Planday's API-indstillinger. De fleste betalte Planday-planer inkluderer API-adgang."
  - q: "Hvad hvis en medarbejder ikke bruger Slack?"
    a: "Flowet kan konfigureres til at sende SMS via Twilio som primær kanal for medarbejdere der ikke er Slack-brugere. Alternativt kan vi integrere med Teams hvis det er jeres foretrukne kommunikationsplatform."
  - q: "Kan vi begrænse notifikationer til bestemte afdelinger?"
    a: "Ja. Flowet kan filtreres på afdeling, lokation, rolle og medarbejdergruppe i Planday. En aften-vagt på køkkenet sender fx kun notifikationer til køkken-medarbejdere, ikke frontpersonale."
mini_case:
  title: "Café Vesterbro: Fra WhatsApp-kaos til struktureret vagtdækning"
  body: |
    <p>Café Vesterbro (fiktivt eksempel) har 18 deltidsansatte og bruger Planday til vagtplanlægning. Tidligere kommunikerede lederen vagtændringer via en WhatsApp-gruppe — beskederne druknede i generel snak, og det var umuligt at vide hvem der faktisk havde set ændringen. Mindst én gang om måneden resulterede det i en ubesat vagt.</p>
    <p>Efter implementeringen modtager relevante medarbejdere en direkte Slack-notifikation inden for 30 sekunder efter en vagtændring. Accepterer ingen inden for to timer, modtager lederen automatisk besked. Siden implementeringen har der ikke været én ubesat vagt på grund af manglende kommunikation — og lederen bruger ikke længere 20 minutter om morgenen på at ringe rundt.</p>
faq_details:
  - q: "Kan vi se en log over alle sendte notifikationer?"
    a: "Ja. Alt logges automatisk i Google Sheets: tidsstempel, medarbejder, vagtdetaljer, kanal og svartype. Det giver både sporbarhed og data til at optimere kommunikationsstrategien."
  - q: "Hvad med medarbejdere der afviser vagten?"
    a: "Afviser en medarbejder en udbudt vagt, notificeres lederen automatisk og vagten markeres som 'ledig'. Flowet kan konfigureres til at tilbyde vagten til de næste kandidater på listen automatisk."
  - q: "Kan systemet håndtere vagtbytte mellem medarbejdere?"
    a: "Ja. Når en medarbejder anmoder om vagtbytte i Planday, sendes en Slack-besked til den ønskede modtager med mulighed for at acceptere eller afvise. Godkendes byttet, opdateres Planday automatisk."
pro_tip: "Sæt flowet op til at sende en ugentlig Slack-sammenfatning til hvert team med deres vagtplan for den kommende uge — ikke kun ændringer. Det reducerer spørgsmål til lederen om 'hvornår er jeg på igen?' og sikrer at alle går ind til ugen med overblik."
related:
  - url: "/automatisering/automatisk-medarbejder-pulsmaling/"
    title: "Automatisk medarbejder-pulsmåling"
    category: "HR"
  - url: "/automatisering/slack-standup-bot/"
    title: "Automatisk Slack standup-bot"
    category: "Produktivitet"
  - url: "/automatisering/timeseddel-og-fravaersregistrering/"
    title: "Automatisk timeseddel og fraværsregistrering"
    category: "HR"
  - url: "/automatisering/automatisk-loenkoersel-forberedelse/"
    title: "Automatisk lønkørsels-forberedelse"
    category: "HR"
faq_schema: |
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {"@type": "Question", "name": "Virker det med Planday's gratis plan?", "acceptedAnswer": {"@type": "Answer", "text": "Planday API-adgang kræver typisk en betalt Planday-plan. Tjek jeres nuværende plan under Planday's API-indstillinger."}},
      {"@type": "Question", "name": "Hvad hvis en medarbejder ikke bruger Slack?", "acceptedAnswer": {"@type": "Answer", "text": "Flowet kan konfigureres til at sende SMS via Twilio som primær kanal for medarbejdere der ikke er Slack-brugere. Alternativt kan vi integrere med Teams."}},
      {"@type": "Question", "name": "Kan vi begrænse notifikationer til bestemte afdelinger?", "acceptedAnswer": {"@type": "Answer", "text": "Ja. Flowet kan filtreres på afdeling, lokation, rolle og medarbejdergruppe i Planday."}}
    ]
  }
---
