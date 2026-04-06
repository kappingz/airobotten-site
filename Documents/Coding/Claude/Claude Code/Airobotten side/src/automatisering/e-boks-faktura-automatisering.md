---
layout: automatisering.njk
title: "Automatisk afsendelse af fakturaer til e-Boks"
meta_description: "Send fakturaer automatisk til kunders e-Boks direkte fra e-conomic eller Dinero. Korrekt leveringsbevis, ingen manuelle uploads, fuld GDPR-compliance."
canonical: "https://airobotten.dk/automatisering/e-boks-faktura-automatisering/"
category: "Regnskab"
breadcrumb_label: "Automatisk faktura til e-Boks"
trigger: "Faktura godkendt og bogført i regnskabssystem"
result: "Faktura leveret til kundens e-Boks med leveringsbevis"
problem: |
  <p>E-Boks er den officielle digitale postboks for danske borgere og virksomheder, og for B2B-handel og fakturering til offentlige institutioner er e-Boks-levering ofte ikke blot praktisk — det er en forventning eller direkte et krav. Alligevel håndterer de fleste SMV'er e-Boks-afsendelse manuelt: eksportér fakturaen som PDF, log ind på e-Boks erhverv, upload filen, bekræft leveringen. Det er fire trin der tager 3–5 minutter per faktura.</p>
  <p>For en virksomhed med 50–100 fakturaer om måneden er det 3–8 timer om måneden brugt på manuelt uploads. Hertil kommer de menneskelige fejl: forkert modtager-CVR, forglemt upload af en bestemt faktura, eller manglende dokumentation for hvornår fakturaen faktisk blev leveret — et problem der bliver akut ved betalingstvister.</p>
  <p>Det særlig kritiske punkt er leveringsbeviset. Sender du en faktura via email, kan du ikke bevise hvornår kunden modtog den. Via e-Boks genereres automatisk et leveringstidsstempel. Det kan gøre forskellen i en inkassosag, og alligevel er leveringsbeviset noget mange virksomheder ikke har styr på fordi den manuelle proces er for tidskrævende til at overholde konsekvent.</p>
solution: |
  <p>Vi bygger et flow der overvåger dit regnskabssystem (e-conomic, Dinero, Billy eller lignende) for nye godkendte fakturaer. Når en faktura skifter status til "godkendt" eller "sendt", henter flowet automatisk faktura-PDF'en via API, slår kundens CVR-nummer op i CVR-registret for at bekræfte modtagerens e-Boks-opsætning, og afsender fakturaen via e-Boks API. Leveringsbeviset gemmes automatisk i et Google Sheets-overblik og vedhæftes sagen i dit CRM.</p>
  <p>For kunder der ikke har e-Boks, falder flowet automatisk tilbage på email-afsendelse og logger det. Du har altid et komplet overblik over hvilke fakturaer der er leveret via e-Boks, hvilke via email, og hvornår. Overblikket er tilgængeligt i realtid og kræver ingen manuel opdatering.</p>
tools:
  - "e-conomic"
  - "Make.com"
  - "e-Boks Erhverv API"
  - "Google Sheets"
steps:
  - title: "Faktura godkendt i regnskabssystem"
    body: "Så snart en faktura godkendes i e-conomic eller Dinero, trigger flowet automatisk via webhook. Fakturanummer, beløb, forfaldsdato og kunde-CVR sendes videre."
  - title: "Kundens e-Boks-status verificeres"
    body: "Flowet slår CVR-nummeret op og bekræfter om kunden er tilmeldt e-Boks erhverv. Er de det, sendes via e-Boks. Er de ikke, sendes via email med automatisk notifikation til dig."
  - title: "Faktura-PDF hentes og afsendes"
    body: "PDF'en hentes fra regnskabssystemet via API og afsendes til kundens e-Boks med korrekt afsender-ID, emnelinjetekst og dokumenttype (faktura/kreditnota)."
  - title: "Leveringsbevis gemmes"
    body: "e-Boks returnerer et leveringstidsstempel der automatisk logges i Google Sheets og gemmes som note på kunden i CRM. Beviset er tilgængeligt med det samme ved eventuelle tvister."
  - title: "Automatisk rykker hvis uåbnet"
    body: "Valgfrit: flowet kan overvåge om fakturaen åbnes inden forfaldsdato og sende en venlig påmindelsesmail 3 dage inden fristen hvis den ikke er åbnet i e-Boks."
benefits_label: "Det opnår du"
benefits:
  - "Spar 3–8 timer om måneden brugt på manuelle e-Boks-uploads"
  - "Automatisk leveringsbevis for alle fakturaer — afgørende dokumentation ved betalingstvister"
  - "Nul glemte fakturaer — alle godkendte fakturaer afsendes automatisk"
  - "Fuld GDPR-compliance: e-Boks er sikker levering, email er det ikke"
  - "Automatisk fallback til email for kunder uden e-Boks med log over leveringsmetode"
  - "Realtidsoverblik over hvilke fakturaer der er leveret, åbnet og forfaldne"
faq_items:
  - q: "Kræver det en særlig e-Boks Erhverv-aftale?"
    a: "Ja, afsendelse via e-Boks Erhverv kræver en aftale med e-Boks A/S. Prisen afhænger af volumen — typisk fra 1–3 kr. per levering. Vi hjælper med opsætning af API-adgangen som del af implementeringen."
  - q: "Virker det med alle danske regnskabssystemer?"
    a: "Vi understøtter e-conomic, Dinero, Billy og Uniconta direkte. Andre systemer der eksporterer PDF-fakturaer og har webhook-understøttelse, kan typisk også integreres. Tag kontakt og beskriv jeres setup."
  - q: "Hvad med EAN-numre til offentlige institutioner?"
    a: "EAN-fakturering til det offentlige er en separat standard (OIOUBL-format) der kræver specifik integration med NemHandel. Vi har erfaring med dette og kan inkludere det i opsætningen."
mini_case:
  title: "Jørgensens Rådgivning ApS: Fra 6 timers månedligt work til fuldt automatiseret"
  body: |
    <p>Jørgensens Rådgivning ApS (fiktivt eksempel) fakturerer 80 klienter månedligt, heraf 60% B2B-kunder med e-Boks. Tidligere brugte administratoren 6 timer om måneden på manuelle uploads, og to gange om året opstod tvister om hvornår en faktura var leveret — umuligt at dokumentere via email.</p>
    <p>Efter implementeringen afsendes alle fakturaer automatisk inden for 5 minutter efter godkendelse. Leveringsbeviserne opbevares automatisk. Tvister om leveringstidspunkt er ophørt. Administratoren bruger nu de 6 frigjorte timer til klientopfølgning — som direkte bidrager til omsætningen fremfor at forringe den.</p>
faq_details:
  - q: "Kan vi sende kreditnotaer og rykkere via samme flow?"
    a: "Ja. Flowet kan konfigureres til at håndtere alle dokumenttyper: fakturaer, kreditnotaer, rykkere og kontoudtog. Hver dokumenttype kan have sin egen e-Boks-kategori og emnelinjetekst."
  - q: "Hvad sker der ved fejl i afsendelsen?"
    a: "Fejler e-Boks-afsendelsen (fx ugyldig CVR eller midlertidig nedetid), notificeres I øjeblikkeligt, og fakturaen markeres i oversigten. Systemet forsøger automatisk igen to gange inden det eskalerer til manuel håndtering."
  - q: "Kan vi sende til både e-Boks og email simultant?"
    a: "Ja. Flowet kan konfigureres til altid at sende en kopi via email som backup — enten til alle kunder, eller kun til kunder der specifikt ønsker dobbelt levering. Email-kopien markeres som 'kopi, original leveret via e-Boks'."
pro_tip: "Sæt flowet op til at generere en månedlig rapport der viser gennemsnitlig åbningstid per kunde i e-Boks. Kunder der konsekvent åbner fakturaer sent (fx dag 25 af en 30-dages betalingsfrist) er kandidater til en kortere betalingsfrist eller forudbetaling — data I aldrig ville have haft uden automatisk e-Boks-integration."
related:
  - url: "/automatisering/digitalt-godkendelsesflow-fakturaer/"
    title: "Digitalt godkendelsesflow til fakturaer"
    category: "Regnskab"
  - url: "/automatisering/automatisk-rykkerprocedure/"
    title: "Automatisk rykkerprocedure for ubetalte fakturaer"
    category: "Regnskab"
  - url: "/automatisering/faktura-fra-email-til-regnskab/"
    title: "Automatiser fakturahåndtering fra email til regnskab"
    category: "Regnskab"
  - url: "/automatisering/multi-kanal-bogfoering-e-conomic/"
    title: "Automatisk multi-kanal bogføring i e-conomic"
    category: "Regnskab"
faq_schema: |
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {"@type": "Question", "name": "Kræver det en særlig e-Boks Erhverv-aftale?", "acceptedAnswer": {"@type": "Answer", "text": "Ja, afsendelse via e-Boks Erhverv kræver en aftale med e-Boks A/S. Prisen afhænger af volumen — typisk fra 1–3 kr. per levering."}},
      {"@type": "Question", "name": "Virker det med alle danske regnskabssystemer?", "acceptedAnswer": {"@type": "Answer", "text": "Vi understøtter e-conomic, Dinero, Billy og Uniconta direkte. Andre systemer der eksporterer PDF-fakturaer og har webhook-understøttelse, kan typisk også integreres."}},
      {"@type": "Question", "name": "Hvad med EAN-numre til offentlige institutioner?", "acceptedAnswer": {"@type": "Answer", "text": "EAN-fakturering til det offentlige kræver specifik integration med NemHandel via OIOUBL-format. Vi har erfaring med dette og kan inkludere det i opsætningen."}}
    ]
  }
---
