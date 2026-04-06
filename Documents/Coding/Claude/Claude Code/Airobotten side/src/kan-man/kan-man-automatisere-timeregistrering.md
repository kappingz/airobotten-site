---
title: "Kan man automatisere timeregistrering?"
slug: "kan-man-automatisere-timeregistrering"
process: "timeregistrering"
tools:
  - "Make.com"
  - "Toggl / Harvest / Planday"
  - "HubSpot / Pipedrive"
  - "e-conomic / Dinero"
meta_description: "Ja, du kan automatisere timeregistrering. Se hvordan konsulenter og servicefirmaer tracker tid automatisk og sender fakturaklar data til regnskabet."
layout: kan-man.njk
---

<div class="answer-box">
  <span class="answer-badge">Kort svar</span>
  <p><strong>Ja.</strong> Timeregistrering kan automatiseres fra aktivitetstracking til fakturaklar data — systemet logger timer fra kalender og projektstyring, samler dem og sender dem til regnskabssystemet uden manuel datainput.</p>
</div>

<div class="section-label">Sådan fungerer det</div>
<h2>Fra aktivitet til faktureret tid automatisk</h2>

<div class="flow-diagram">
  <div class="flow-step"><span>Aktivitet</span>Møde, opgave eller kundekommunikation</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><span>Toggl / Kalender</span>Timer logget automatisk</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><span>Make.com</span>Timer samlet og sorteret per projekt</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><span>Godkendelse</span>Ugentlig review (valgfrit)</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step"><span>Regnskab</span>Fakturaklar tidsliste i e-conomic</div>
</div>

<p>Det automatiserede flow starter ved aktiviteten. Bruger du Google Calendar eller Outlook til at booke kundermøder, kan Make.com automatisk oprette en tidsregistrering i Toggl eller Harvest når mødet starter og stoppe den, når det slutter. Bruger du Asana, Notion eller Jira til opgavesyring, kan du trigge registreringen ved at flytte en opgave til "igangværende" og stoppe den ved "færdig".</p>

<p>Ugentligt samles alle registrerede timer per projekt og per kunde. Flowet matcher dem mod dine projekter i CRM eller faktureringssystem og genererer en tidsliste der er klar til at fakturere fra. For kontoret der fakturerer timebaseret, betyder det at ingen fakturerbar tid falder igennem — og at månedslukket ikke kræver dages manuelt arbejde.</p>

<div class="section-label">Forudsætninger</div>
<h2>Hvad kræver det af din virksomhed</h2>

<ul class="req-list">
  <li><strong>Et timeregistreringsværktøj I allerede bruger eller er villige til at bruge:</strong> Toggl Track (gratis op til 5 brugere), Harvest og Planday er alle Make.com-kompatible. Bruger I allerede et timeregistreringssystem, bygger vi flowet oven på det. Bruger I ikke, anbefaler vi Toggl Track som udgangspunkt — let at bruge og gratis til de fleste SMV'er.</li>
  <li><strong>Klare projekt- og kundekategorier:</strong> Automatiseret timeregistrering kræver en logik for hvad der tilhører hvilket projekt. Brug 30 minutter på at definere jeres projektkategorier — det er fundamentet for at timerne kan sorteres korrekt automatisk.</li>
  <li><strong>En beslutning om grad af automatisering:</strong> Fuld automatisering (kalender-synk → tidsliste → faktura) eller semi-automatisering med et manuelt godkendelsestrin? De fleste starter med et godkendelsestrin der fjernes, når I er trygge med nøjagtigheden.</li>
  <li><strong>API-adgang til jeres regnskabssystem:</strong> e-conomic, Dinero, Billy og Uniconta har alle API'er til Make.com-integration. Vi opsætter den korrekte forbindelse og sikrer at timer bogføres på de rigtige projekter og konti.</li>
</ul>

<div class="section-label">Hvad du sparer</div>
<h2>Tid og ressourcer — før og efter</h2>

<div class="before-after">
  <div class="before">
    <span class="ba-label">Før</span>
    <p>2–4 timer per måned på at rekonstruere timer fra hukommelse og indbakke</p>
    <p>Glemte timers registreringer der aldrig faktureres</p>
    <p>Månedsluk der trækker ud fordi timerne ikke er klar</p>
    <p>Estimeret tab på 8–15 % af fakturerbare timer der aldrig registreres</p>
  </div>
  <div class="after">
    <span class="ba-label">Efter</span>
    <p>15 minutter til ugentlig review af automatisk genereret tidsliste</p>
    <p>Alle fakturerbare timer fanget — ingen glemte registreringer</p>
    <p>Månedsluk reduceret til timer frem for dage</p>
    <p>Realistisk overblik over faktureringsgrad og kapacitetsudnyttelse</p>
  </div>
</div>

<div class="section-label">Eksempel</div>

<div class="case-study">
  <span class="case-label">Eksempel — fiktiv case</span>
  <h3>Advokatfirmaet Lund & Pagh: 15 % mere faktureret uden ekstra arbejde</h3>
  <p>Lund & Pagh (fiktivt) er et advokatfirma med 6 advokater der fakturerer på timebasis. Timeregistreringen foregik i et Excel-ark der blev opdateret uregelmæssigt — mange timer endte med at blive rekonstrueret fra indbakken og kalenderen i slutningen af måneden. Gennemsnitligt manglede firmaet at registrere estimeret 12–18 % af de faktiske arbejdstimer, fordi rekonstruktionen var inkomplet.</p>
  <p>Vi implementerede et Make.com-flow koblet til advokaternes Google Calendar. Klientmøder med klient-tags i kalenderaftalen oprettes automatisk som tidsregistreringer i Harvest med korrekt projektkategori. Interne møder og administrative opgaver registreres manuelt men assisteres af et ugentligt reminder-flow hver fredag kl. 15.00 der viser uregistrerede kalenderblokke. Harvest eksporterer ugentligt en tidsliste til e-conomic klar til fakturering.</p>
  <p><strong>Investering:</strong> 8.500 kr. opsætning + 180 kr./md. driftsomkostninger<br>
  <strong>Gevinst:</strong> 15 % mere faktureret tid × gns. månedsomsætning på 450.000 kr. = 67.500 kr./md. ekstra omsætning<br>
  <strong>Tilbagebetalingstid:</strong> Under 1 uge</p>
</div>

<div class="section-label">Næste skridt</div>
<h2>Sådan kommer du i gang</h2>

<ol class="next-steps">
  <li>Kortlæg de tre typer af aktiviteter der udgør 80 % af jeres fakturerbare tid: kundermøder, opgaveudførelse og kommunikation. Det er dem der skal automatiseres først.</li>
  <li>Vælg et timeregistreringsværktøj I er villige til at bruge konsekvent — Toggl Track, Harvest eller Planday. Automatiseringen er kun god som det data den modtager.</li>
  <li>Kontakt os med jeres nuværende registreringsmetode og regnskabssystem — vi estimerer opsætningstid og forventet gevinst uforpligtende. <a href="/#contact">Send din opgave her</a>.</li>
</ol>

<div class="section-label">Typiske spørgsmål</div>

<div class="faq-details">
  <details>
    <summary>Kan systemet registrere timer der spænder over flere dage?</summary>
    <p>Ja. Toggl Track og Harvest understøtter begge manuelle tidsregistreringer med frit valgte start- og sluttidspunkter. Flowet kan håndtere registreringer der spænder over midnat, og månedsluk-logikken samler timer korrekt uanset hvornår de er registreret. Projekter der løber over måneder håndteres ved at splitregistreringer pr. måned eller pr. faktureringsperiode alt efter jeres faktureringsmodel.</p>
  </details>
  <details>
    <summary>Hvad med timer der ikke er fakturerbare — interne møder, administration?</summary>
    <p>Vi skelner i flowet mellem fakturerbare og ikke-fakturerbare kategorier. Interne møder tagges som "intern" i kalenderaftalen og registreres adskilt. Det giver jer et præcist billede af kapacitetsudnyttelsen — dvs. forholdet mellem fakturerbar og ikke-fakturerbar tid — som er et vigtigt ledelsestal for servicevirksomheder.</p>
  </details>
  <details>
    <summary>Kan det integrere med vores eksisterende projektstyringssystem?</summary>
    <p>Make.com integrerer med Asana, Notion, Jira, Monday.com, Trello og de fleste andre projektstyringsplatforme. Vi kan bygge flowet til at starte timeregistreringen når en opgave flyttes til "igangværende" og stoppe den ved "færdig" — så registreringen sker som del af det arbejde I allerede udfører i projektstyringsværktøjet.</p>
  </details>
</div>

<p>Se også: <a href="/automatisering/tidsregistrering-til-faktura/">Automatisk tidsregistrering til faktura</a>, <a href="/automatisering/timeseddel-og-fravaersregistrering/">Automatisk timeseddel og fraværsregistrering</a> og <a href="/pris/hvad-koster-loen-hr-automatisering/">Hvad koster løn og HR-automatisering?</a></p>
