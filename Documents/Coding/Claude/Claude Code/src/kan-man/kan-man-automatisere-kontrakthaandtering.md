---
title: "Kan man automatisere kontrakthåndtering? Ja — og det er nemmere end du tror"
slug: "kan-man-automatisere-kontrakthaandtering"
process: "kontrakthåndtering"
tools:
  - "Make.com"
  - "DocuSign / Penneo"
  - "HubSpot / Pipedrive"
  - "Google Drive / SharePoint"
meta_description: "Ja, du kan automatisere kontrakthåndtering. Se hvordan det fungerer, hvad det kræver, og hvad en fiktiv virksomhed sparede ved at automatisere generering, underskrift og arkivering."
layout: kan-man.njk
---

<div class="answer-box">
  <span class="answer-badge">Kort svar</span>
  <p><strong>Ja.</strong> Fra et deal lukkes i CRM til kontrakten er genereret, sendt til underskrift og arkiveret korrekt — hele processen kan køre automatisk på få minutter frem for dage.</p>
</div>

<div class="section-label">Sådan fungerer det</div>
<h2>Processen fra deal til underskrevet kontrakt</h2>

<div class="flow-diagram">
  <div class="flow-step"><span>CRM</span>Deal markeres som vundet</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><span>Make.com</span>Genererer kontrakt fra skabelon</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><span>DocuSign</span>Sender til underskrift automatisk</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><span>Notifikation</span>Begge parter orienteres om status</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><span>Arkivering</span>Underskrevet kontrakt gemmes automatisk</div>
</div>

<p>Flowet trigges af en statusændring i dit CRM. Make.com henter alle relevante kundedata — navn, adresse, aftalte ydelser, pris og varighed — og udfylder din kontraktskabelon i Google Docs eller Word. Skabelonen konverteres til PDF og sendes til alle underskrivende parter via DocuSign eller Penneo med en klar deadline.</p>

<p>Undervejs holder flowet alle informeret: kunden modtager en bekræftelse på at kontrakten er sendt, du modtager notifikation når den er underskrevet, og hvis underskriften ikke er på plads inden en defineret frist, sender flowet automatisk en påmindelse. Det underskrevne dokument arkiveres automatisk i den rette kundespecifikke mappe i Google Drive eller SharePoint.</p>

<div class="section-label">Forudsætninger</div>
<h2>Hvad kræver det af din virksomhed</h2>

<ul class="req-list">
  <li><strong>En standardiseret kontraktskabelon:</strong> Det vigtigste fundament. Jo mere din kontrakt følger en fast skabelon med definerede felter, jo mere kan automatiseres. Har du kontrakter der er unikt forhandlet fra bunden for hvert deal, kan vi automatisere underskriften og arkiveringen men ikke genereringen. De fleste virksomheder har 80 % standardiserede kontrakter og 20 % unikke — vi automatiserer standarddelen.</li>
  <li><strong>Et CRM der holder kundedata struktureret:</strong> HubSpot, Pipedrive, Salesforce eller tilsvarende. Jo mere komplet og korrekt kundedataene er i CRM, jo mere præcis kan den automatisk genererede kontrakt være. Et halvfyldt CRM giver halvfærdige kontrakter — det er menneskelig disciplin der bestemmer kvaliteten.</li>
  <li><strong>En DocuSign- eller Penneo-konto:</strong> Begge er juridisk anerkendte i Danmark og understøtter Make.com-integration. Penneo er dansk og ofte foretrukket for sin NemID/MitID-integration — særlig relevant i regulerede brancher. DocuSign er international og bruges bredt. Begge starter fra ca. 100–200 kr./md.</li>
  <li><strong>Klarhed om arkiveringsstruktur:</strong> Kontrakter skal gemmes et sted med en logisk struktur der gør dem søgbare. Vi designner mappestrukturen som en del af opsætningen — en investering der betaler sig ved compliance-gennemgange og kundeopslagsbehov.</li>
</ul>

<div class="section-label">Hvad du sparer</div>
<h2>Tid og ressourcer — før og efter</h2>

<div class="before-after">
  <div class="before">
    <span class="ba-label">Før</span>
    <p>20–45 minutter pr. kontrakt på generering, afsendelse og arkivering</p>
    <p>Ventetid på 1–3 dage fra deal-lukning til underskrevet kontrakt</p>
    <p>Fejl i kontrakter: forkerte beløb, gammel adresse, forglemt felt</p>
    <p>Kontrakter arkiveret tilfældigt — svært at finde når der er brug for dem</p>
  </div>
  <div class="after">
    <span class="ba-label">Efter</span>
    <p>Under 2 minutter pr. kontrakt — kun ekstraordinære tilfælde kræver manuel handling</p>
    <p>Kontrakt sendt inden for minutter efter deal-lukning</p>
    <p>Data trækkes direkte fra CRM — ingen manuelle fejl i feltudfyldning</p>
    <p>Systematisk arkivering med fuld søgbarhed og auditrail</p>
  </div>
</div>

<div class="section-label">Eksempel</div>

<div class="case-study">
  <span class="case-label">Eksempel — fiktiv case</span>
  <h3>Reklamebureauet Frost & Partners: 35 kontrakter om måneden automatiseret fuldstændigt</h3>
  <p>Reklamebureauet Frost &amp; Partners underskriver 30–40 kontrakter om måneden med kunder og freelancere. Inden automatiseringen brugte projektkoordinator Stine 25–35 minutter pr. kontrakt: åbne skabelonen, kopiere kundedata fra Pipedrive, justere beløb og ydelser, generere PDF, sende via email og gemme i den rette mappe. Fejlraten var 8–10 % — forkerte beløb eller forkert navn kopieret fra en tidligere kontrakt.</p>
  <p>Vi opsatte et Make.com-flow der trigges når en deal i Pipedrive skifter status til "Won". Flowet henter alle felter, udfylder kontraktskabelonen i Google Docs, konverterer til PDF og sender via Penneo med MitID-underskrift til begge parter. Stine modtager en Slack-notifikation om status. Det underskrevne dokument gemmes automatisk i kundemappen i Google Drive med et standardiseret filnavn.</p>
  <p>Fejlraten i kontrakter er faldet til nul. Stine bruger den frigjorte tid på projektledelse og kundepleje.</p>
  <p><strong>Investering:</strong> 10.500 kr. opsætning + 220 kr./md. driftsomkostninger<br>
  <strong>Besparelse:</strong> 30 min × 35 kontrakter × 12 md. × 400 kr./time = 84.000 kr./år<br>
  <strong>Tilbagebetalingstid:</strong> Under 8 uger</p>
</div>

<div class="section-label">Næste skridt</div>
<h2>Sådan kommer du i gang</h2>

<ol class="next-steps">
  <li>Tag din nuværende standardkontrakt og identificér de felter der ændrer sig fra kunde til kunde: navn, adresse, ydelser, beløb, varighed, startdato. De felter er dem der trækkes automatisk fra CRM. Alt andet er fast tekst i skabelonen.</li>
  <li>Tjek om dit CRM indeholder disse felter korrekt og konsistent for alle deals. Fejlagtige CRM-data giver fejlagtige kontrakter — et par timers datarydning er en god investering inden vi bygger automatiseringen.</li>
  <li>Kontakt os med din kontraktskabelon og dit CRM-system — vi estimerer opsætningstid og pris konkret. <a href="/#contact">Send din opgave her</a>.</li>
</ol>

<div class="section-label">Typiske spørgsmål</div>

<div class="faq-details">
  <details>
    <summary>Er automatisk genererede kontrakter juridisk bindende i Danmark?</summary>
    <p>Ja. Juridisk gyldighed afhænger af indholdet og underskriftsprocessen — ikke af om dokumentet er genereret automatisk eller manuelt. Penneo med MitID-underskrift og DocuSign med avanceret elektronisk signatur er begge juridisk anerkendte i Danmark og EU under eIDAS-forordningen. Vi anbefaler altid at lade en advokat godkende kontraktskabelonen inden vi automatiserer den.</p>
  </details>
  <details>
    <summary>Hvad hvis en kunde vil ændre i kontrakten inden underskrift?</summary>
    <p>Ønsker en kunde ændringer, stopper det automatiske flow og en salgsperson tager over manuelt. Vi konfigurerer flowet til at markere kontrakter med forhandlingsanmodninger eksplicit i CRM, så ingen sag falder mellem to stole. Standardkontrakter automatiseres fuldt ud — undtagelserne håndteres stadig manuelt, men de udgør typisk under 10 % af alle kontrakter.</p>
  </details>
  <details>
    <summary>Kan vi have kontrakter på flere sprog?</summary>
    <p>Ja. Sproget på kontrakten vælges baseret på et felt i CRM — for eksempel kundens land eller en eksplicit sprogindstilling. Vi bygger flowet til at hente den korrekte sprogversion af skabelonen og generere dokumentet på det rette sprog. Typisk mest relevant for dansk og engelsk, men teknisk muligt for alle sprog.</p>
  </details>
</div>

<p>Se også: <a href="/automatisering/automatisk-kontrakt-udsendelse/">Send kontrakter til underskrift automatisk ved vundet deal</a>, <a href="/automatisering/kontraktudloeb-paamindelse/">Automatisk påmindelser om kontraktudløb</a> og <a href="/automatisering/dokument-generering-fra-skabelon/">Automatisk dokumentgenerering fra skabeloner</a>.</p>
