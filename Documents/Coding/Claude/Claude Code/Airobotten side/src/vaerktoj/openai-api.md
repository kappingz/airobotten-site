---
title: "OpenAI API til danske virksomheder: AI i praksis"
slug: "openai-api"
tool: "OpenAI API"
category: "AI-integration"
meta_description: "OpenAI API giver din virksomhed direkte adgang til GPT-4 og o1. Byg AI i dine egne systemer med Make.com. Se hvad det koster og hvad du kan automatisere."
layout: vaerktoj.njk
---

<p>OpenAI API er den tekniske adgang til OpenAIs sprogmodeller — GPT-4o, GPT-4 og o1 — direkte i dine egne systemer. I stedet for at bruge ChatGPT manuelt, kan du via API'en integrere AI-intelligens i dine automationsflows, CRM, webshop eller interne værktøjer.</p>

<div class="section-label">Hvad er OpenAI API?</div>
<h2>OpenAI API dansk forklaring</h2>

<p>En API (Application Programming Interface) er en teknisk forbindelse der lader systemer tale med hinanden. OpenAIs API lader dig sende et stykke tekst til GPT-modellen og modtage et svar — programmatisk, automatisk, integreret i dit workflow. Du behøver ikke åbne ChatGPT. Svaret kan bruges direkte: skrives til et felt i dit CRM, sendes som en email, publiceres som en produktbeskrivelse.</p>

<p>For danske SMV'er bruges OpenAI API typisk via Make.com eller n8n — automatiseringsplatforme der har officielle OpenAI-integrationer. Du behøver ikke programmere: Make.com's OpenAI-modul lader dig sende en prompt og modtage et svar som en del af et større automatiseret flow.</p>

<div class="section-label">Use cases</div>
<h2>Hvad kan OpenAI API bruges til i din virksomhed?</h2>

<ul>
  <li><strong>Automatisk kategorisering af kundeemails:</strong> Et forsikringsselskab modtager 80 emails dagligt. OpenAI API læser hver email, bestemmer emnet (skadeanmeldelse, fakturaspørgsmål, ny policeforespørgsel) og router emailen til det rette team — alt automatisk via Make.com.</li>
  <li><strong>Produktbeskrivelser til webshop:</strong> En webshop med 500 produkter bruger OpenAI API til at generere SEO-optimerede produktbeskrivelser fra et simpelt dataark med produktspecifikationer. 500 beskrivelser på to timer i stedet for to uger.</li>
  <li><strong>Lead-kvalificering fra formularbesvarelser:</strong> En konsulent modtager projektforespørgsler via en formular. OpenAI API analyserer besvarelsen og genererer en kort vurdering: sandsynlig projektstørrelse, relevans for konsulentens ekspertise og anbefalede åbningsspørgsmål. Lagt klar i CRM'et inden konsulenten åbner emailen.</li>
  <li><strong>Automatisk mødeoversigt og opgaveliste:</strong> Et bureau optager alle kundemøder. Transskriptionen sendes til OpenAI API der genererer et referat, en liste af beslutninger og en to-do-liste med ansvarlige — sendt til teamet i Slack inden mødet er slut.</li>
</ul>

<div class="section-label">Fordele og ulemper</div>
<h2>OpenAI API pris og kvalitet — en ærlig vurdering</h2>

<div class="before-after">
  <div class="before">
    <h3>Ulemper</h3>
    <ul>
      <li>❌ Kræver teknisk opsætning — ikke plug-and-play</li>
      <li>❌ AI-output er ikke altid korrekt — kræver et kvalitetstjek-lag</li>
      <li>❌ Datafortrolighed: tekst sendes til OpenAIs servere i USA</li>
      <li>❌ Prisen stiger med volumen — kan blive uforudsigelig ved høj brug</li>
    </ul>
  </div>
  <div class="after">
    <h3>Fordele</h3>
    <ul>
      <li>✅ Adgang til verdens stærkeste sprogmodeller</li>
      <li>✅ Betaling per brug — ingen månedlig fast pris</li>
      <li>✅ Nem integration via Make.com og n8n — ingen programmering nødvendig</li>
      <li>✅ Kan automatisere kognitive opgaver der tidligere krævede menneskelig vurdering</li>
    </ul>
  </div>
</div>

<div class="section-label">OpenAI API pris</div>
<h2>Hvad koster OpenAI API for en lille dansk virksomhed?</h2>

<div class="price-box">
  <p><strong>Betaling per token (tekst-enhed):</strong> Prisen afhænger af hvilken model du bruger og mængden af tekst.</p>
  <p><strong>GPT-4o Mini (billigste):</strong> 0,15 USD per million input-tokens + 0,60 USD per million output-tokens. Til de fleste SMV-flows koster én API-kald 0,001–0,01 kr. pr. kald. 1.000 kald koster ca. 1–10 kr.</p>
  <p><strong>GPT-4o (kraftfuld):</strong> 2,50 USD per million input-tokens + 10 USD per million output-tokens. Ca. 10× dyrere end Mini. Bruges til komplekse opgaver der kræver høj nøjagtighed.</p>
  <p><strong>Praktisk estimat:</strong> Et flow der behandler 500 emails om måneden (kategorisering + svar) med GPT-4o Mini koster ca. 5–15 kr./md. i API-forbrug. Selv GPT-4o til 500 emails koster sjældent over 50 kr./md. for SMV'er.</p>
</div>

<div class="section-label">Kom i gang</div>
<h2>Sådan starter du OpenAI API på 30 minutter</h2>

<ol class="steps">
  <li><strong>Opret en OpenAI API-konto</strong> på platform.openai.com. Du får 5 USD i gratis kreditter til test. Ingen kreditkort kræves for at registrere dig, men du skal tilføje betalingsoplysninger for at bruge API'en ud over gratis-kreditterne.</li>
  <li><strong>Generér en API-nøgle.</strong> Gå til API Keys i din konto og opret en ny nøgle. Kopier den — den vises kun én gang. Gem den et sikkert sted (fx i et password-program).</li>
  <li><strong>Åbn Make.com og tilføj OpenAI-modulet.</strong> I Make.com finder du "OpenAI (ChatGPT, Whisper, DALL-E)" i app-biblioteket. Tilslut din konto med API-nøglen og vælg "Create a Completion" som action.</li>
  <li><strong>Skriv din første prompt.</strong> I promptfeltet skriver du din instruktion til AI'en, fx: "Du er en hjælpsom assistent. Kategoriser følgende kundemail som enten 'Klage', 'Forespørgsel' eller 'Rosende'. Svar kun med ét ord. Email: {{email_body}}". Erstat {{email_body}} med et Make.com-variabelfelt.</li>
  <li><strong>Test og finpuds prompten.</strong> Kør scenariet manuelt med et testeksempel. Evaluér outputtet — er det det rigtige? Finpuds prompten til du er tilfreds. God prompting er 80 % af arbejdet med AI-automatisering.</li>
</ol>

<div class="section-label">Eksempel</div>

<div class="case-study">
  <span class="case-label">Eksempel — fiktiv case</span>
  <h3>Logistikfirmaet Nordtrans: 90 % af kundesupport-emails besvaret automatisk</h3>
  <p>Nordtrans håndterer fragtforespørgsler for danske virksomheder. Supportteamet modtog dagligt 60–80 emails om forsendelsesstatus, priser og dokumentation. 80 % af emailene var variationer over de samme ti spørgsmål og krævede et standardsvar med informationer fra deres database.</p>
  <p>Via Make.com og OpenAI API byggede vi et flow: ny email i supportindbakken → OpenAI klassificerer emailtypen → hvis standardspørgsmål, hentes relevant data fra databasen og OpenAI genererer et personligt svar → draft oprettes i Gmail til hurtig godkendelse med ét klik. Komplekse emails sendes til manuel behandling.</p>
  <p><strong>Resultat:</strong> 90 % af emails besvares nu inden for 10 minutter med ét klik. Supportteamet bruger nu tid på de 10 % der kræver menneskelig vurdering. OpenAI API-omkostning: ca. 85 kr./md.</p>
</div>

<div class="pro-tip">
  <p><strong>Pro-tip:</strong> Brug "system prompt" i OpenAI API-kaldet til at definere AI'ens rolle og outputformat præcist. En god system prompt ser sådan ud: "Du er en præcis assistent for [firmanavn]. Du svarer altid på dansk. Du returnerer altid og kun JSON med felterne: kategori, prioritet og anbefalet handling. Forklar aldrig din reasoning." En stram system prompt reducerer uønskede svar med 70–80 % og gør output forudsigeligt nok til at behandles automatisk.</p>
</div>

<div class="section-label">Typiske spørgsmål</div>

<div class="faq-details">
  <details>
    <summary>Er OpenAI API på dansk?</summary>
    <p>OpenAI's API understøtter dansk fuldt ud — du kan sende prompts og modtage svar på dansk. GPT-4o og GPT-4o Mini er særligt stærke til dansk tekst. Selve API-dokumentationen og udviklingsplatformen er på engelsk, men det daglige brug via Make.com kræver ikke engelsk.</p>
  </details>
  <details>
    <summary>Kan OpenAI API bruges uden teknisk erfaring?</summary>
    <p>Direkte API-kald kræver teknisk baggrund. Men via Make.com eller Zapier kan ikke-tekniske brugere bruge OpenAI API i automatiserede flows uden kode. Make.com's OpenAI-modul er plug-and-play: tilslut din API-nøgle, skriv en prompt og brug outputtet i dit flow. Vi hjælper med opsætning.</p>
  </details>
  <details>
    <summary>Hvad sker der med mine data i OpenAI API?</summary>
    <p>Data sendt til OpenAI API bruges ikke til at træne modeller som standard (i modsætning til ChatGPT). OpenAI gemmer API-data i 30 dage til sikkerhedsformål. OpenAI's API-tjeneste er GDPR-compliant og OpenAI tilbyder en databehandleraftale. Følsomme persondata (CPR-numre, sundhedsoplysninger) bør anonymiseres inden de sendes til API'en.</p>
  </details>
  <details>
    <summary>Kan jeg prøve OpenAI API gratis?</summary>
    <p>Ja. Nye konti modtager 5 USD i gratis API-kreditter der gælder i 90 dage. Det er tilstrækkeligt til at teste hundredvis af API-kald og evaluere om AI-automatisering løser dit konkrete problem. Herefter betaler du kun per brug — ingen månedlig fast pris.</p>
  </details>
</div>

<p>Se også: <a href="/ordforklaring/hvad-er-ai-prompt/">Hvad er en AI-prompt?</a>, <a href="/pris/hvad-koster-ai-assistent-virksomhed/">Hvad koster en AI-assistent?</a>, <a href="/pris/hvad-koster-ai-chatbot-webshop/">Hvad koster en AI-chatbot til webshop?</a>, <a href="/pris/hvad-koster-ai-indhold-automatisering/">Hvad koster AI indhold automatisering?</a> , <a href="/kan-man/kan-man-automatisere-seo-og-content/">Kan man automatisere SEO og content?</a> og <a href="/kan-man/kan-man-automatisere-kundeservice/">Kan man automatisere kundeservice?</a></p>
