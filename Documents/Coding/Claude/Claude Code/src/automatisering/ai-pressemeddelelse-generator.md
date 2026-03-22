---
layout: automatisering.njk
title: "Automatisk AI-genereret pressemeddelelse fra virksomhedsnyheder"
meta_description: "Generer professionelle pressemeddelelser automatisk med AI. Fra produktlancering til milestone — klar til udsendelse inden for 10 minutter."
canonical: "https://airobotten.dk/automatisering/ai-pressemeddelelse-generator/"
category: "Marketing"
breadcrumb_label: "AI-genereret pressemeddelelse"
trigger: "Nyhed, lancering eller milestone registreret i system"
result: "Færdig pressemeddelelse klar til distribution på under 10 minutter"
problem: |
  <p>En pressemeddelelse kan lande et stykke dækning i Berlingske, Børsen eller en branchespecifik niche-portal — og det kan være den mest cost-effektive markedsføring en SMV kan lave. Men de fleste SMV'er udnytter ikke denne mulighed, fordi en professionel pressemeddelelse kræver tid og kompetencer de sjældent har: den rigtige format med indlejret nyhedskrog, korrekt citat-struktur, boilerplate, mediainfo og pressekontakt. At skrive én fra bunden tager 2–4 timer for nogen der ikke gør det dagligt.</p>
  <p>Resultatet er, at virksomheder sidder på historier der faktisk er interessante — en ny produktlancering, en stor kundekontrakt, en brancheudmærkelse, en expansion til nyt marked — men aldrig får dem ud. Og historier der ikke fortælles, eksisterer ikke for pressen. Konkurrenterne der konsekvent udsender pressemeddelelser, opbygger en medierelation og et omdømme over tid. I sidder med de samme historier og fortæller dem kun internt.</p>
  <p>Det er et klassisk "godt nok gøres ikke fordi perfekt er fjenden" problem — og det er præcis den type problem AI løser effektivt.</p>
solution: |
  <p>Vi bygger et flow der tager en kort beskrivelse af nyheden fra en Notion-side, Google Forms-formular eller Slack-besked, og beder GPT-4 om at generere en komplet pressemeddelelse i korrekt journalistisk format. Modellen er instrueret i dansk pressemetodologi: nyhedskrog i første afsnit, 5-W-struktur, citat fra direktion, supporting points, boilerplate og pressekontaktoplysninger. Resultatet er et udkast du kan godkende og sende på 10 minutter frem for 3 timer.</p>
  <p>Pressemeddelelsen distribueres automatisk: den formateres som HTML-email og sendes til din journalistliste via dit email-system, den gemmes i Google Drive med korrekt navngivning, og et Slack-link sendes til det relevante team til orientering. Al distributionshistorik logges med åbningsrate per journalist — data der hjælper dig med at opbygge stærkere medierelationer over tid.</p>
tools:
  - "Notion"
  - "Make.com"
  - "OpenAI"
  - "Gmail"
  - "Google Drive"
steps:
  - title: "Nyhed registreres i Notion eller formular"
    body: "En medarbejder eller direktøren udfylder en kort nyhedsformular: hvad er nyheden, hvad er konteksten, hvem er talspersonen, og hvad er det vigtigste budskab. Det tager 5–10 minutter."
  - title: "AI genererer pressemeddelelsen"
    body: "GPT-4 instrueres i dansk pressemeddelelsesformat og genererer et komplet udkast med overskrift, ingress, brødtekst, citat, boilerplate og pressekontakt. Processen tager under 60 sekunder."
  - title: "Udkast sendes til godkendelse"
    body: "Du modtager udkastet via email og Slack med et redigeringslink. Typisk kræver det 5–15 minutters justering af formuleringer og validering af fakta inden godkendelse."
  - title: "Distribution til journalistliste"
    body: "Godkendelse sender automatisk pressemeddelelsen som HTML-email til din segmenterede journalistliste — national presse, branchemedier og lokale medier i separate segmenter."
  - title: "Log og opfølgning"
    body: "Åbningsrater logges per journalist i Google Sheets. Journalister der åbner men ikke reagerer, kan følges op med en personlig henvendelse om et specifikt vinkel-tilbud."
benefits_label: "Det opnår du"
benefits:
  - "Reducer skrivetid fra 3 timer til 10 minutter per pressemeddelelse"
  - "Konsistent, professionelt format der øger sandsynligheden for presseomtale"
  - "Automatisk distribution til segmenteret journalistliste ved godkendelse"
  - "Log over åbningsrater per journalist — data til at opbygge medierelationer"
  - "Ingen historier der forbliver ufortalte fordi processen er for tung"
  - "Skalér PR-indsatsen uden at ansætte et PR-bureau"
faq_items:
  - q: "Kan AI virkelig skrive en pressemeddelelse der er god nok til pressen?"
    a: "GPT-4 genererer udkast i korrekt pressemeddelelseformat med journalistisk struktur. Resultatet er typisk 80–90% klar — du skal validere fakta, tilpasse citater og eventuelt justere tonen. Det er markant bedre end et blankt dokument, og bedre end det de fleste ikke-PR-specialister skriver fra bunden."
  - q: "Hvem skal stå som pressekontakt?"
    a: "Du angiver pressekontaktoplysningerne i systemet én gang, og de indsættes automatisk i alle pressemeddelelser. Du kan have forskellige pressekontakter per emneområde — en teknisk kontakt til produktnyheder og en direktør-kontakt til selskabsnyheder."
  - q: "Virker det på dansk og engelsk?"
    a: "Ja. Flowet kan konfigureres til at generere pressemeddelelser på dansk og/eller engelsk simultant. Engelske pressemeddelelser distribueres til internationale medier og wire-tjenester."
mini_case:
  title: "Medtech Aarhus ApS: Fra nul til 12 presseomtaler på seks måneder"
  body: |
    <p>Medtech Aarhus ApS (fiktivt eksempel) udviklede medicinsk udstyr og havde mange interessante historier — nye partnerskaber, kliniske resultater, CE-godkendelser — men fortalte ingen af dem til pressen fordi ingen i teamet vidste hvordan man skriver en pressemeddelelse og ingen havde tid til at lære det.</p>
    <p>Efter implementeringen begyndte de at udsende to pressemeddelelser om måneden. Hver tog under 15 minutter at producere og godkende. På seks måneder genererede de 12 presseomtaler i branchemedier som Medwatch og Ingeniøren, plus én artikel i Børsen. Trafikken til hjemmesiden steg 34%, og tre investor-henvendelser nævnte specifikt, at de havde set dem i pressen.</p>
faq_details:
  - q: "Kan vi vedligeholde en journalistdatabase i systemet?"
    a: "Ja. Vi opsætter en Google Sheets-journalistdatabase med navn, medie, emnespeciale og kontaktoplysninger. Flowet segmenterer automatisk distributionen baseret på pressemeddelelsens kategori — lokal nyhed til lokale medier, produktnyhed til branchejournalister."
  - q: "Hvad med billeder og bilag til pressemeddelelsen?"
    a: "Flowet kan vedhæfte billeder og PDF-bilag fra Google Drive automatisk. Du linker til de relevante filer i Notion-formularen, og de inkluderes i distribuerings-emailen."
  - q: "Kan vi bruge flowet til at sende til Ritzaus Bureau eller andre wire-tjenester?"
    a: "Ritzau og lignende wire-tjenester kræver typisk akkreditering og et abonnement. Vi kan inkludere en formatering til Ritzaus indsendelsesformat, men selve indsendelsen sker via jeres Ritzau-konto."
pro_tip: "Brug flowet til at generere to versioner af samme nyhed: en lang version (400+ ord) til nationale medier og en kort version (150 ord) til branchemedier og sociale medier. Angiv begge i formularen, og lad AI generere begge simultant. Det fordobler distributionsmulighederne uden ekstra arbejde."
related:
  - url: "/automatisering/linkedin-opslag-ai-fra-nyheder/"
    title: "Automatiske LinkedIn-opslag fra virksomhedsnyheder"
    category: "Content"
  - url: "/automatisering/automatisk-blog-distribution/"
    title: "Automatisk blogdistribution til sociale medier"
    category: "Content"
  - url: "/automatisering/social-media-content-med-ai/"
    title: "Ugentlige social media-opslag genereret med AI"
    category: "Content"
  - url: "/automatisering/automatisk-nyhedsovervagning/"
    title: "Automatisk overvågning af branchenyheder"
    category: "Marketing"
faq_schema: |
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {"@type": "Question", "name": "Kan AI virkelig skrive en pressemeddelelse der er god nok til pressen?", "acceptedAnswer": {"@type": "Answer", "text": "GPT-4 genererer udkast i korrekt pressemeddelelseformat med journalistisk struktur. Resultatet er typisk 80–90% klar — du skal validere fakta og eventuelt justere tonen."}},
      {"@type": "Question", "name": "Hvem skal stå som pressekontakt?", "acceptedAnswer": {"@type": "Answer", "text": "Du angiver pressekontaktoplysningerne i systemet én gang, og de indsættes automatisk i alle pressemeddelelser."}},
      {"@type": "Question", "name": "Virker det på dansk og engelsk?", "acceptedAnswer": {"@type": "Answer", "text": "Ja. Flowet kan konfigureres til at generere pressemeddelelser på dansk og/eller engelsk simultant."}}
    ]
  }
---
