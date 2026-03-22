---
title: "Hvad er en AI-prompt? En simpel forklaring til virksomhedsejere"
slug: "hvad-er-ai-prompt"
term: "AI-prompt"
category: "Kunstig intelligens"
meta_description: "Hvad er en AI-prompt? Forklaret uden jargon — og hvordan gode prompts er nøglen til at AI faktisk genererer brugbare tekster til din virksomhed."
canonical: "https://airobotten.dk/ordforklaring/hvad-er-ai-prompt/"
layout: ordforklaring.njk
definition: "En AI-prompt er den instruktion eller det spørgsmål du giver til en AI-model — det er din besked til AI'en om, hvad den skal producere, hvem den taler til, og i hvilken tone og format."
explanation: |
  <p>Tænk på en AI-model som et ekstremt kompetent menneske der ikke ved noget om dig, din virksomhed eller hvad du har brug for — medmindre du fortæller det. Giver du en vag instruktion, får du et vagt svar. Giver du en præcis, kontekstrig instruktion, får du et præcist og brugbart svar.</p>
  <p>En dårlig prompt: "Skriv en email til en kunde." Et uafklaret spørgsmål der giver en generisk email ingen ønsker at sende.</p>
  <p>En god prompt: "Du er en kundeservicemedarbejder hos et dansk rengøringsfirma. Skriv en opfølgningsemail til en erhvervskunde der ikke har svaret på vores tilbud i 10 dage. Tonen skal være venlig og ikke-påtrængende. Emailen skal være under 80 ord og slutte med et konkret spørgsmål." Det er en prompt der producerer noget brugbart.</p>
  <p>Prompt engineering — kunsten at skrive gode prompts — er en reel kompetence. Den gode nyhed er, at det ikke kræver teknisk viden. Det kræver klarhed: jo tydeligere du er om hvad du vil have, hvem modtageren er, og i hvilken kontekst teksten skal bruges, jo bedre er outputtet.</p>
example: |
  <p>Forestil dig at du driver en håndværksvirksomhed i Aalborg med specialisering i badeværelsesrenovering. Du modtager 15 forespørgsler om ugen via hjemmesiden og skal skrive et svar til hver — et tilbud der adresserer den specifikke forespørgsel, ikke en generisk tekst.</p>
  <p>Uden AI: 20–30 minutter per tilbud, 15 tilbud = op til 7,5 timer om ugen på at skrive emails.</p>
  <p>Med en veldesignet AI-prompt i et automatiseringsflow: forespørgslen fra hjemmesiden sendes automatisk til GPT-4 med en prompt der specificerer din virksomheds navn, ydelser, prisniveau og tone. AI'en genererer et skræddersyet tilbuddsudkast baseret på den specifikke forespørgsel. Du bruger 3–5 minutter på at gennemse og godkende. Samlet tid: 45 minutter i stedet for 7,5 timer.</p>
  <p>Nøglen er prompts der indeholder nok kontekst om din virksomhed, dine ydelser og den ønskede tone til at AI'en kan producere noget der lyder som dig — ikke som en generisk chatbot.</p>
relevance: |
  <p>For virksomheder der vil bruge AI til at automatisere tekstgenerering — tilbud, emails, produktbeskrivelser, pressemeddelelser, nyhedsbreve — er promptkvaliteten den vigtigste variabel. Et automatiseringsflow med en god prompt kan reducere skrivetid med 70–90%. Et flow med en dårlig prompt producerer tekster der altid skal skrives om, og dermed sparer ingen tid.</p>
  <p>Den gode nyhed: prompts kan forbedres iterativt. Du starter med en prompt der er "god nok", tester den på 10 tekster, noterer hvad der konsekvent mangler eller er forkert, og justerer prompten. Efter tre iterationer har de fleste virksomheder en prompt der producerer 80–90% færdige tekster.</p>
  <p>At investere tid i at bygge gode prompts til de tekster din virksomhed gentagne gange producerer — tilbud, ordrebekræftelser, opfølgningsmails, produktbeskrivelser — er en af de bedste investeringer du kan gøre i AI-automatisering.</p>
related_terms:
  - term: "Systembesked (System prompt)"
    definition: "En skjult prompt der sætter AI'ens persona og grundregler — 'Du er en dansk kundeservicemedarbejder hos [firmanavn]. Svar altid på dansk. Brug ikke fagtermer.' Systemmeddelelsen kører i baggrunden for hvert svar AI'en genererer."
  - term: "Temperature"
    definition: "En teknisk indstilling der styrer, hvor kreativ og varieret AI'ens output er (0 = forudsigelig og konsekvent, 1 = kreativ og varieret). For faktuelle tekster som tilbud bruges lav temperature. For kreativt indhold bruges høj."
  - term: "GPT-4"
    definition: "OpenAIs mest avancerede sprogmodel, tilgængelig via API. Bruges i automatiseringsflows til at generere tekst baseret på prompts. GPT-4 er markant bedre end tidligere modeller til komplekse, nuancerede tekster."
  - term: "Token"
    definition: "AI-modeller beregner pris og kapacitet i tokens — ca. 0,75 ord per token. En email på 100 ord svarer til ca. 133 tokens. GPT-4 koster typisk under 1 øre per genereret email, hvilket gør det meget cost-effektivt."
next_steps:
  - "Skriv din første prompt til det tekstformat du producerer oftest — tilbud, velkomstmail, produktbeskrivelse eller opfølgningsemail. Inkluder: hvem skriver (din virksomheds persona), hvem modtageren er, hvilken tone og længde, og hvad formålet er."
  - "Test prompten på 5–10 forskellige eksempler og notér hvad der konsekvent mangler — tilføj disse oplysninger til prompten og test igen. Tre iterationer giver typisk et meget brugbart resultat."
  - "Byg et automatiseringsflow der bruger prompten — fx <a href='/automatisering/ai-tilbud-fra-kontaktformular/'>AI-genererede tilbud fra kontaktformularen</a> eller <a href='/automatisering/ai-pressemeddelelse-generator/'>automatiske pressemeddelelser fra en kort nyhedsbeskrivelse</a>."
faq_details:
  - q: "Skal vi skrive prompts selv, eller hjælper I med det?"
    a: "Vi skriver prompts som del af alle vores AI-automatiseringsimplementeringer. Vi starter med at forstå jeres tone, ydelser og typiske tekst-output, og bygger prompts der producerer tekster der lyder som jer. I får prompterne udleveret og kan selv justere dem efterhånden."
  - q: "Kan AI-genererede tekster opdages af kunderne?"
    a: "En godt-promptet AI-tekst er i praksis ikke til at skelne fra en menneskeskrevet tekst. Problemet opstår ved dårlige prompts der producerer generiske, formelstyrede tekster. Med prompts der inkluderer jeres specifikke virksomhedsinfo, tone og kundeprofil lyder outputtet som jer — ikke som en robot."
  - q: "Er der etiske overvejelser ved at bruge AI til at skrive til kunder?"
    a: "Nej, i samme forstand som der ikke er etiske overvejelser ved at bruge en skabelon eller et brevpapir-system. I godkender alle tekster inden de sendes — AI genererer et udkast, ikke et endeligt dokument. Transparens over for kunder om AI-brug er et individuelt valg, men de fleste B2B-kunder forventer ikke at vide, hvilke tools I bruger internt."
related:
  - url: "/automatisering/ai-tilbud-fra-kontaktformular/"
    title: "AI-genererede tilbud fra kontaktformular"
    category: "Salg"
  - url: "/automatisering/ai-pressemeddelelse-generator/"
    title: "Automatisk AI-genereret pressemeddelelse"
    category: "Marketing"
  - url: "/automatisering/ai-blogindlaeg-fra-produktdata/"
    title: "AI-blogindlæg fra produktdata"
    category: "Content"
  - url: "/automatisering/ai-email-writer-til-salg/"
    title: "AI email writer til salg"
    category: "Salg"
faq_schema: |
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {"@type": "Question", "name": "Skal vi skrive prompts selv, eller hjælper I med det?", "acceptedAnswer": {"@type": "Answer", "text": "Vi skriver prompts som del af alle vores AI-automatiseringsimplementeringer og udleverer dem til jer så I kan justere dem efterhånden."}},
      {"@type": "Question", "name": "Kan AI-genererede tekster opdages af kunderne?", "acceptedAnswer": {"@type": "Answer", "text": "En godt-promptet AI-tekst er i praksis ikke til at skelne fra en menneskeskrevet tekst. Problemet opstår ved dårlige prompts med generisk output."}},
      {"@type": "Question", "name": "Er der etiske overvejelser ved at bruge AI til at skrive til kunder?", "acceptedAnswer": {"@type": "Answer", "text": "Nej, I godkender alle tekster inden de sendes. AI genererer et udkast, ikke et endeligt dokument. Transparens over for kunder er et individuelt valg."}}
    ]
  }
---
