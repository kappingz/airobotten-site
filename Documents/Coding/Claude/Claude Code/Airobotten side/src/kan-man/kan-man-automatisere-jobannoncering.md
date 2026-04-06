---
title: "Kan man automatisere jobannoncering?"
slug: "kan-man-automatisere-jobannoncering"
process: "jobannoncering og rekruttering"
tools:
  - "Make.com"
  - "OpenAI"
  - "LinkedIn Jobs"
  - "Notion / Airtable"
meta_description: "Ja, du kan automatisere jobannoncering. Se hvordan AI skriver annoncerne og hvad en virksomhed sparede i tid og gebyrer."
layout: kan-man.njk
---

<div class="answer-box">
  <span class="answer-badge">Kort svar</span>
  <p><strong>Ja.</strong> Fra en ledig stilling oprettes i dit system til jobannoncen er skrevet, godkendt og publiceret på LinkedIn og Jobindex — det kan køre automatisk med AI der skriver første udkast ud fra din stillingsbeskrivelse.</p>
</div>

<div class="section-label">Sådan fungerer det</div>
<h2>Processen fra ledig stilling til publiceret annonce</h2>

<div class="flow-diagram">
  <div class="flow-step"><span>Kilde</span>Ny stilling oprettes i Notion eller Airtable</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><span>Make.com</span>Henter stillingsbeskrivelse og krav</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><span>OpenAI</span>Genererer jobannonce i jeres tone</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><span>Godkendelse</span>HR reviewer og godkender annoncen</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><span>Publicering</span>Annonce publiceres på definerede platforme</div>
</div>

<p>Flowet starter, når en ny stilling oprettes i jeres rekrutteringsoversigt — det kan være Notion, Airtable, et Google Sheets-ark eller et ATS-system. Make.com henter de relevante informationer: stillingsbetegnelse, ansvarsområder, kvalifikationskrav og arbejdssted. OpenAI genererer på baggrund heraf et fuldt udkast til jobannoncen i jeres virksomhedstale og med den struktur der konverterer bedst til ansøgninger.</p>

<p>Udkastet sendes til HR eller den rekrutteringsansvarlige til review. Efter godkendelse publiceres annoncen automatisk på de platforme I bruger — LinkedIn, Jobindex eller jeres eget karrieresite. Annoncen trackes og I modtager notifikation når fristen nærmer sig eller ansøgere begynder at komme ind.</p>

<div class="section-label">Forudsætninger</div>
<h2>Hvad kræver det af din virksomhed</h2>

<ul class="req-list">
  <li><strong>Et sted at registrere ledige stillinger struktureret:</strong> En simpel Notion-database eller et Google Sheets-ark med faste felter — stillingsbetegnelse, afdeling, krav, arbejdssted og ansøgningsfrist — er tilstrækkeligt. Jo mere struktureret input, jo bedre output fra AI. Vi hjælper med at designe skabelonen.</li>
  <li><strong>En klar virksomhedstone for jobopslag:</strong> Skriver I formelt eller uformelt? Lægger I vægt på kultur eller opgaver? Vi konfigurerer OpenAI med tre til fem eksempler på annonces I godt kan lide — egne eller andres — og en liste over formuleringsregler I vil undgå. Det er det vigtigste skridt for at outputtet lyder som jer.</li>
  <li><strong>API-adgang til jeres publiceringsplatforme:</strong> LinkedIn Jobs og Jobindex understøtter API-publicering. Har I et karrieresite på WordPress, Webflow eller tilsvarende, kan vi publicere direkte der. Bruger I et ATS-system som Teamtailor eller Personio, er der typisk direkte Make.com-integration.</li>
  <li><strong>Et godkendelsestrin:</strong> Vi anbefaler altid at en person reviewer annoncen inden publicering. AI kan generere 90 % af arbejdet — men den endelige godkendelse bør altid være menneskelig. Flowet holder ikke annoncen i kø, og godkendelse tager typisk under fem minutter.</li>
</ul>

<div class="section-label">Hvad du sparer</div>
<h2>Tid og ressourcer — før og efter</h2>

<div class="before-after">
  <div class="before">
    <span class="ba-label">Før</span>
    <p>1–3 timer pr. annonce på at skrive, formatere og publicere manuelt</p>
    <p>Inkonsistent tone og struktur på tværs af stillinger og afdelinger</p>
    <p>Annoncen publiceres langsomt — stilling ledig i dage inden annoncen er live</p>
    <p>Ingen systematisk tracking af publicerede annoncer og ansøgningsfrister</p>
  </div>
  <div class="after">
    <span class="ba-label">Efter</span>
    <p>15–20 minutter pr. annonce til review og godkendelse</p>
    <p>Konsekvent tone, struktur og kvalitet på tværs af alle stillinger</p>
    <p>Annoncen er live inden for timer efter at stillingen er registreret</p>
    <p>Automatisk tracking og notifikationer ved ansøgningsfrist</p>
  </div>
</div>

<div class="section-label">Eksempel</div>

<div class="case-study">
  <span class="case-label">Eksempel — fiktiv case</span>
  <h3>IT-firmaet Nexus Data: 40 jobopslag om året automatiseret — skrivetid reduceret med 80 %</h3>
  <p>IT-firmaet Nexus Data med 35 ansatte rekrutterer løbende og publicerer 35–45 jobopslag om året. HR-ansvarlig Mia brugte 2–3 timer pr. annonce på at tilpasse skabeloner, justere tone og manuelt publicere på LinkedIn, Jobindex og karrieresitet. For tekniske stillinger krævede det desuden input fra den tekniske leder — og koordineringen tog yderligere tid.</p>
  <p>Vi opsatte et Make.com-flow koblet til Nexus Datas Notion-rekrutteringsdatabase. Når en ny stilling registreres, henter flowet alle felter og sender dem til OpenAI med en konfigureret prompt der kender Nexus Datas tone og typiske stillingsprofiler. Udkastet sendes til Mia og den relevante afdelingsleder via email til godkendelse med ét klik. Godkendelse publicerer automatisk på LinkedIn og karrieresitet.</p>
  <p>Mias tid pr. annonce faldt fra 2,5 timer til 20 minutter. De tekniske ledere bruger nu 10 minutter på review frem for 45 minutter på at skrive fra bunden.</p>
  <p><strong>Investering:</strong> 8.500 kr. opsætning + 160 kr./md. driftsomkostninger<br>
  <strong>Frigjort tid:</strong> 2 timer × 40 annoncer × 450 kr./time = 36.000 kr./år<br>
  <strong>Tilbagebetalingstid:</strong> Under 3 måneder</p>
</div>

<div class="section-label">Næste skridt</div>
<h2>Sådan kommer du i gang</h2>

<ol class="next-steps">
  <li>Saml tre til fem eksempler på jobopslag I er stolte af — fra jer selv eller andre virksomheder I beundrer. Note hvad I kan lide ved dem: struktur, tone, hvad der fremhæves. Det er den vigtigste forberedelse til AI-konfigurationen.</li>
  <li>Design en simpel tabel med de felter en stilling altid har: stillingsbetegnelse, afdeling, primære ansvarsområder, nødvendige kompetencer, ønskede kompetencer, arbejdssted og ansøgningsfrist. Det kan starte som et Google Sheets-ark og udvides til et mere avanceret system senere.</li>
  <li>Kontakt os med et eksempel på en stilling og jeres nuværende publiceringsplatforme — vi estimerer opsætningstid og pris konkret. <a href="/#contact">Send din opgave her</a>.</li>
</ol>

<div class="section-label">Typiske spørgsmål</div>

<div class="faq-details">
  <details>
    <summary>Kan AI skrive tekniske jobopslag korrekt?</summary>
    <p>Ja, med den rette konfiguration. AI-modellen har bred viden om tekniske roller og kompetencer. Den vigtigste faktor er at du specificerer kravene præcist i stillingsdatabasen: skriv "erfaring med Python, SQL og cloud-deployment (AWS eller Azure)" frem for "teknisk baggrund". Jo mere præcist input, jo mere korrekt output. Vi konfigurerer flowet til at sende tekniske stillingers udkast til den tekniske leder til faglig godkendelse inden publicering.</p>
  </details>
  <details>
    <summary>Hvad med GDPR og ansøgerdata?</summary>
    <p>Automatiseringen håndterer kun annonceoprettelse og -publicering — ikke behandling af ansøgerdata. Ansøgninger modtages og behandles i jeres eksisterende ATS eller email, og GDPR-overholdelse for ansøgerdata er dit ansvar som dataansvarlig. Vi kan hjælpe med at sætte et automatiseret flow op der sender kvitterings-email til ansøgere og notificerer den ansvarlige ved nye ansøgninger, men vi behandler ikke persondata fra ansøgere i automatiseringsflowet.</p>
  </details>
  <details>
    <summary>Hvad koster publicering på LinkedIn og Jobindex?</summary>
    <p>Det koster ikke noget ekstra at publicere via API frem for manuelt. Betalingen til LinkedIn og Jobindex er den samme — det er kun den manuelle arbejdstid der spares. LinkedIn kræver et LinkedIn-rekrutteringsskema eller en Company Page-administrator for API-adgang. Jobindex kræver en erhvervskonto. Begge dele kan du allerede have — eller vi hjælper med at oprette dem.</p>
  </details>
</div>

<p>Se også: <a href="/automatisering/cv-screening-med-ai/">Automatisk CV-screening med AI</a>, <a href="/automatisering/automatisk-onboarding-flow-nye-medarbejdere/">Automatisk onboarding-flow for nye medarbejdere</a> og <a href="/automatisering/it-adgang-ny-medarbejder/">Automatisk IT-provisionering ved ansættelse af ny medarbejder</a>.</p>
