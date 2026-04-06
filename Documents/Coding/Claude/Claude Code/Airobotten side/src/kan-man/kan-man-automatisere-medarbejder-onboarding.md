---
title: "Kan man automatisere medarbejder onboarding?"
slug: "kan-man-automatisere-medarbejder-onboarding"
process: "medarbejder onboarding"
tools:
  - "Make.com"
  - "Notion / Confluence"
  - "DocuSign / Penneo"
  - "Google Workspace / Microsoft 365"
meta_description: "Ja, du kan automatisere medarbejder onboarding. Se flowet og hvad en fiktiv virksomhed sparede på velkomstprocessen."
layout: kan-man.njk
---

<div class="answer-box">
  <span class="answer-badge">Kort svar</span>
  <p><strong>Ja.</strong> Fra en ny medarbejder ansættes til de er fuldt operationelle — med adgange, kontrakt, velkomstpakke og første uges plan — kan hele processen køre automatisk og konsekvent, uanset hvem der ansætter.</p>
</div>

<div class="section-label">Sådan fungerer det</div>
<h2>Processen fra ansættelse til dag ét</h2>

<div class="flow-diagram">
  <div class="flow-step"><span>HR</span>Ny ansættelse registreres i systemet</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><span>Make.com</span>Starter onboarding-flow automatisk</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><span>Kontrakt</span>Sendes til underskrift via DocuSign</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><span>IT-adgang</span>Accounts oprettes i relevante systemer</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><span>Velkommen</span>Velkomstpakke og første uges plan sendes</div>
</div>

<p>Flowet startes i det øjeblik en ny ansættelse registreres — enten i dit HR-system, i en Google Sheets-oversigt eller ved at en leder markerer status i Notion. Make.com orkestrerer derefter en sekvens af handlinger: ansættelseskontrakten genereres og sendes til underskrift, email- og systemadgange oprettes i Google Workspace eller Microsoft 365, en velkomstemail sendes til den nye medarbejder med praktiske informationer og de første ugers program, og nærmeste leder modtager en tjekliste med de trin der kræver menneskelig opmærksomhed inden dag ét.</p>

<p>Ingen trin glemmes. Ingen kontakt er arkiveret forkert. Ingen ny medarbejder ankommer til et arbejdssted hvor halvdelen af adgangene ikke virker.</p>

<div class="section-label">Forudsætninger</div>
<h2>Hvad kræver det af din virksomhed</h2>

<ul class="req-list">
  <li><strong>En standardiseret onboarding-sekvens:</strong> Automatisering kræver at processen er dokumenteret. Hvad sker der fra ansættelse til dag ét? Hvad er de første ugers program? Hvilke systemer får den nye medarbejder adgang til? Jo mere standardiseret sekvensen er, jo mere kan automatiseres. Det er typisk 60–70 % af alle onboarding-trin der kan standardiseres — resten er afdelingsspecifikt.</li>
  <li><strong>En standardiseret ansættelseskontrakt:</strong> Ligesom ved kundeonboarding kræver automatisk kontraktgenerering en skabelon med definerede felter. Ansættelseskontrakter er generelt mere standardiserede end kundekontrakter — navn, stilling, løn, startdato og arbejdstid er typisk de eneste variable felter.</li>
  <li><strong>Klarhed om IT-adgange:</strong> Hvilke systemer skal en ny medarbejder i en given rolle have adgang til? Definér roller og tilhørende adgangspakker: "Sælger-rolle: HubSpot, Slack, Google Workspace, Zoom, SharePoint Salg." Det er den liste vi automatiserer. For Google Workspace og Microsoft 365 kan brugeroprettelse automatiseres direkte via API.</li>
  <li><strong>En velkomstguide i skabelonform:</strong> En guide til den nye medarbejder — praktiske informationer, introduktion til kultur, første uges program — behøver ikke være lang, men den skal eksistere. Vi sender den automatisk, men indholdet er jeres.</li>
</ul>

<div class="section-label">Hvad du sparer</div>
<h2>Tid og ressourcer — før og efter</h2>

<div class="before-after">
  <div class="before">
    <span class="ba-label">Før</span>
    <p>3–5 timer pr. ny ansættelse på administration og koordinering</p>
    <p>IT-adgange klar dage efter ansættelse — ny medarbejder venter</p>
    <p>Inkonsistent oplevelse afhængig af hvem der håndterer onboarding</p>
    <p>Glemte trin: kontrakt underskrevet, men skatteformular aldrig sendt</p>
  </div>
  <div class="after">
    <span class="ba-label">Efter</span>
    <p>Under 30 minutter pr. ansættelse — kun strategiske trin kræver manuel handling</p>
    <p>IT-adgange klar inden dag ét — ny medarbejder er produktiv fra start</p>
    <p>Konsekvent, professionel oplevelse for alle nye medarbejdere</p>
    <p>Komplet tjekliste og auditrail — intet trin glemmes</p>
  </div>
</div>

<div class="section-label">Eksempel</div>

<div class="case-study">
  <span class="case-label">Eksempel — fiktiv case</span>
  <h3>Logistikvirksomheden Kargo Nord: 45 ansættelser om året automatiseret</h3>
  <p>Kargo Nord ansætter 40–50 medarbejdere om året i tre roller: chauffører, lagermedarbejdere og kontorpersonale. HR-konsulent Maria brugte fire til fem timer pr. ansættelse på at koordinere kontrakt, IT-adgang, uniformsbestilling og velkomstmateriale — og sekvensen var forskellig afhængigt af hvem der huskede hvad. To til tre gange om året ankom en ny medarbejder til en arbejdsdag, hvor halvdelen af adgangene ikke var klar.</p>
  <p>Vi opsatte tre Make.com-flows — ét pr. medarbejdertype — koblet til et simpelt Google Sheets-registreringsskema. Registrering af en ny chauffør trigger automatisk: ansættelseskontrakt via Penneo, oprettelse af email-konto i Google Workspace, notifikation til lagerchefen med adgangslisten og en velkomstemails med uniform-størrelsesformular og dag-ét-program. Maria bruger nu 20 minutter pr. ansættelse på det der kræver personlig vurdering.</p>
  <p><strong>Investering:</strong> 12.500 kr. opsætning + 260 kr./md. driftsomkostninger<br>
  <strong>Besparelse:</strong> 4 timer × 45 ansættelser × 450 kr./time = 81.000 kr./år<br>
  <strong>Tilbagebetalingstid:</strong> Under 9 uger</p>
</div>

<div class="section-label">Næste skridt</div>
<h2>Sådan kommer du i gang</h2>

<ol class="next-steps">
  <li>Kortlæg din nuværende onboarding-sekvens trin for trin — hvad sker der fra en ansættelse bekræftes til den nye medarbejder er fuldt operationel på dag ét? Skriv hvert trin ned og notér hvem der er ansvarlig og hvor lang tid det tager. Det er din dokumentation og grundlaget for automatiseringen.</li>
  <li>Identificér hvilke medarbejdertyper I ansætter og om onboarding-sekvensen er den samme for dem alle, eller om der er rollespecifikke trin. Har I tre tydelige roller med forskellig IT-adgang, bygger vi tre flows — ét pr. rolle.</li>
  <li>Kontakt os med din onboarding-beskrivelse og dit HR-system — vi estimerer præcis hvad der kan automatiseres. <a href="/#contact">Send din opgave her</a>.</li>
</ol>

<div class="section-label">Typiske spørgsmål</div>

<div class="faq-details">
  <details>
    <summary>Kan vi automatisere IT-adgang i Google Workspace og Microsoft 365?</summary>
    <p>Ja. Begge platforme har APIs der understøtter automatisk brugeroprettelse, gruppetildeling og licenstildeling via Make.com. En ny medarbejder kan have sin email-konto og alle relevante applikationsadgange klar inden dag ét — uden at nogen manuelt skal logge ind i administrationspanelet. Det er en af de mest impactfulde dele af onboarding-automatisering fordi IT-forsinkelser er en af de hyppigste klager fra nye medarbejdere.</p>
  </details>
  <details>
    <summary>Hvad med GDPR og håndtering af den nye medarbejders persondata?</summary>
    <p>Ansættelsesprocessen indebærer behandling af personoplysninger — navn, adresse, CPR-nummer i visse tilfælde, løn. Vi dokumenterer dataflowet som en del af leverancen, så I kan inkludere det i fortegnelsen over behandlingsaktiviteter. Vi sender aldrig CPR-numre i klartekst via email og anbefaler Penneo til kontraktunderskrift netop fordi MitID-verifikationen erstatter behovet for at sende følsomme data pr. email.</p>
  </details>
  <details>
    <summary>Hvad med offboarding når en medarbejder stopper?</summary>
    <p>Offboarding er den logiske næste automatisering: tilbagekaldelse af adgange, udsendelse af afgangsformularer og arkivering af medarbejderens filer. Det er et separat flow der kan bygges oven på onboarding-infrastrukturen. Mange virksomheder bygger begge flows i én pakke — det giver 20–30 % reduktion i samlet opsætningspris.</p>
  </details>
</div>

<p>Se også: <a href="/automatisering/automatisk-onboarding-flow-nye-medarbejdere/">Automatisk onboarding-flow for nye medarbejdere</a>, <a href="/automatisering/it-adgang-ny-medarbejder/">Automatisk IT-provisionering ved ansættelse af ny medarbejder</a> og <a href="/automatisering/automatisk-medarbejder-offboarding/">Automatisk offboarding når medarbejdere stopper</a>.</p>
