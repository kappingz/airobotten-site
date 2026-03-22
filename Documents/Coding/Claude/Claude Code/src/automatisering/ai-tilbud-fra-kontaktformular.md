---
layout: automatisering.njk
title: "Automatisk AI-genereret tilbud fra kontaktformular"
meta_description: "Send personlige tilbud inden for 5 minutter fra kunden udfylder formularen. AI genererer tilbuddet automatisk — du godkender og sender med ét klik."
canonical: "https://airobotten.dk/automatisering/ai-tilbud-fra-kontaktformular/"
category: "Salg"
breadcrumb_label: "AI-genereret tilbud fra kontaktformular"
trigger: "Kontaktformular udfyldt på hjemmesiden"
result: "Personligt tilbud sendt til kunden inden for 5 minutter"
problem: |
  <p>Gennemsnitlig svartid på en forespørgsel fra en hjemmeside er 47 timer i Danmark. Den virksomhed der svarer inden for 5 minutter, har 100 gange højere chance for at kvalificere leadet end den der svarer inden for 30 minutter. Og alligevel sidder de fleste SMV-ejere med en indbakke fuld af forespørgsler der venter på at blive besvaret — fordi det tager tid at skrive et gennemtænkt, personligt tilbud der er tilpasset den specifikke forespørgsel.</p>
  <p>Det er ikke lat. Et godt tilbud kræver, at du har læst forespørgslen grundigt, forstår kundens behov, formulerer en relevant løsning, prissætter den korrekt og pakker det hele ind i en professionel skabelon. For en travl ejer eller salgschef er det 20–40 minutters arbejde per forespørgsel — arbejde der ophober sig til et bjerg af ufærdige tilbud i slutningen af ugen.</p>
  <p>Resultatet er, at leads køler ned. Kunden der var interesseret mandag morgen, er halvvejs inde i en konkurrents proces tirsdag eftermiddag. Ikke fordi dit tilbud er dårligt, men fordi det kom for sent.</p>
solution: |
  <p>Vi bygger et flow der fanger forespørgslerne fra din kontaktformular (Typeform, Gravity Forms, Contact Form 7, HubSpot Forms eller lignende), sender alle relevante detaljer til GPT-4, og genererer et komplet, personligt tilbud inden for 60 sekunder. Tilbuddet baseres på din prisskabelon, dine standardydelser og den specifikke forespørgsel — det er ikke en generisk tekst, men et dokument der adresserer kundens konkrete behov som de har beskrevet dem.</p>
  <p>Tilbuddet sendes til dig til godkendelse med ét klik: du gennemser, justerer eventuelt prisen, og trykker send. Kunden modtager tilbuddet som en pæn HTML-email eller PDF inden for 5 minutter efter forespørgslen. Parallelt oprettes leadet i dit CRM, og en opgave scheduleres til opfølgning om tre dage hvis der ikke er kommet svar.</p>
tools:
  - "Typeform"
  - "Make.com"
  - "OpenAI"
  - "Gmail"
  - "HubSpot"
steps:
  - title: "Formular udfyldt og indsendt"
    body: "Kunden udfylder din kontaktformular med navn, virksomhed, behov og ønsket løsning. Make.com modtager dataene øjeblikkeligt via webhook."
  - title: "AI analyserer forespørgslen"
    body: "GPT-4 læser forespørgslen og matcher den mod din ydelsesportefølje og prisskabelon. AI identificerer den relevante pakke og formulerer en begrundelse der adresserer kundens specifikke behov."
  - title: "Tilbud genereres og sendes til godkendelse"
    body: "Et komplet tilbud genereres som HTML-email med din logo, priser og vilkår. Du modtager en notifikation med tilbuddet og ét godkendelsesklik — ingen redigering nødvendig, men altid mulig."
  - title: "Tilbud afsendes til kunden"
    body: "Godkender du med ét klik, sendes tilbuddet øjeblikkeligt til kunden. Tidsstemplet viser, at de modtog et personligt tilbud inden for minutter — et stærkt signal om professionalisme."
  - title: "CRM-opdatering og opfølgning scheduleres"
    body: "Leadet oprettes i HubSpot med alle detaljer, tilbuds-PDF vedhæftes, og en opfølgningsopgave scheduleres automatisk om tre dage hvis tilbuddet ikke er accepteret."
benefits_label: "Det opnår du"
benefits:
  - "Svar på forespørgsler inden for 5 minutter — 100x bedre end branchens gennemsnit på 47 timer"
  - "Eliminer 20–40 minutters tilbudsarbejde per forespørgsel"
  - "Leads køler aldrig ned — tilbud sendes mens interessen er på toppen"
  - "Konsekvent, professionel tilbudsstruktur på tværs af alle forespørgsler"
  - "Automatisk CRM-oprettelse og opfølgningsschedulering — ingen leads glemmes"
  - "Frigør tid til de salgsamtaler der rent faktisk kræver menneskelig vurdering"
faq_items:
  - q: "Kan AI virkelig generere et tilbud der er godt nok til at sende?"
    a: "Ja, forudsat at ydelserne og priserne er veldefinerede i skabelonen. For standardydelser genererer AI tilbud der typisk kræver ingen eller minimal redigering. For komplekse, skræddersyede opgaver fungerer det bedst som et udkast der sparer 70–80% af skrivearbejdet."
  - q: "Hvad hvis forespørgslen er for vag til at prissætte?"
    a: "Flowet kan konfigureres til at sende en afklarende email til kunden ved vage forespørgsler, inden tilbuddet genereres. AI stiller de to eller tre spørgsmål der er nødvendige for at give en præcis pris."
  - q: "Kan vi bruge vores eksisterende tilbudsskabelon?"
    a: "Ja. Vi bruger jeres eksisterende Word- eller HTML-skabelon som base og integrerer AI-genereret tekst i de relevante felter. Layout, farver og logo bevares."
mini_case:
  title: "Rengøringsservice Horsens: Responstid ned fra 2 dage til 8 minutter"
  body: |
    <p>Rengøringsservice Horsens (fiktivt eksempel) modtager 15–20 forespørgsler om ugen via hjemmesiden. Tidligere tog det ejeren 30–45 minutter at skrive hvert tilbud, og der gik typisk 1–2 dage fra forespørgsel til tilbud. Konverteringsraten fra forespørgsel til aftale var 18%.</p>
    <p>Efter implementeringen genererer AI et komplet tilbud inden for 60 sekunder. Ejeren bruger 2–3 minutter på at gennemse og godkende. Gennemsnitlig responstid er nu 8 minutter. Konverteringsraten er steget til 31% — primært fordi tilbuddene ankommer mens kunden stadig aktivt sammenligner leverandører. Den sparede tid bruges nu på at ringe opfølgningsopkald, som yderligere øger konverteringen.</p>
faq_details:
  - q: "Hvilke formularplatforme understøttes?"
    a: "Typeform, Gravity Forms, WPForms, Contact Form 7, HubSpot Forms, Tally, JotForm og de fleste andre platforme der tilbyder webhook eller Zapier/Make.com-integration. Kontakt os med jeres formularplatform, så bekræfter vi kompatibilitet."
  - q: "Kan vi sætte et loft over, hvilke forespørgsler der behandles automatisk?"
    a: "Ja. Flowet kan filtreres på beløbsgrænse: forespørgsler under et bestemt beløb håndteres automatisk, store projekter over tærsklen sendes til manuel behandling med et AI-genereret udkast som udgangspunkt."
  - q: "Hvad med ophavsret til AI-genereret tekst i tilbud?"
    a: "Tekst genereret af OpenAI er ophavsretsmæssigt jeres, når I bruger den kommercielt. I er frit stillet til at sende, modificere og genbruge de genererede tilbud."
pro_tip: "Inkluder 3–5 kundeanmeldelser eller case-referencer i AI-prompten og bed modellen om at inkludere den mest relevante i tilbuddet baseret på forespørgslens branche. Et tilbud til en restaurant der inkluderer en reference fra en anden restaurant er langt mere overbevisende end et generisk tilbud."
related:
  - url: "/automatisering/automatisk-tilbudsberegning/"
    title: "Automatisk tilbudsberegning og prisgenerering"
    category: "Salg"
  - url: "/automatisering/automatisk-opfoelgning-paa-tilbud/"
    title: "Automatisk opfølgning på sendte tilbud"
    category: "Salg"
  - url: "/automatisering/email-lead-nurturing-sekvens/"
    title: "Automatisk e-mail lead nurturing-sekvens"
    category: "Salg"
  - url: "/automatisering/lead-fra-typeform-til-hubspot/"
    title: "Send Typeform-leads direkte til HubSpot"
    category: "Lead-håndtering"
faq_schema: |
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {"@type": "Question", "name": "Kan AI virkelig generere et tilbud der er godt nok til at sende?", "acceptedAnswer": {"@type": "Answer", "text": "Ja, forudsat at ydelserne og priserne er veldefinerede i skabelonen. For standardydelser genererer AI tilbud der typisk kræver ingen eller minimal redigering."}},
      {"@type": "Question", "name": "Hvad hvis forespørgslen er for vag til at prissætte?", "acceptedAnswer": {"@type": "Answer", "text": "Flowet kan konfigureres til at sende en afklarende email til kunden ved vage forespørgsler, inden tilbuddet genereres."}},
      {"@type": "Question", "name": "Kan vi bruge vores eksisterende tilbudsskabelon?", "acceptedAnswer": {"@type": "Answer", "text": "Ja. Vi bruger jeres eksisterende Word- eller HTML-skabelon som base og integrerer AI-genereret tekst i de relevante felter."}}
    ]
  }
---
