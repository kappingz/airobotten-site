---
title: "Hvad er en API? En simpel forklaring til virksomhedsejere"
slug: "hvad-er-api"
term: "API"
category: "Tekniske begreber"
meta_description: "Hvad er en API? Forklaret uden teknisk jargon — og hvorfor API-integrationer er nøglen til at spare din virksomhed for manuel dataindtastning og fejl."
canonical: "https://airobotten.dk/ordforklaring/hvad-er-api/"
layout: ordforklaring.njk
definition: "En API (Application Programming Interface) er en standardiseret måde for to softwaresystemer at tale sammen og udveksle data på — som en velorganiseret menu der fortæller andre systemer, hvad de må bede om."
explanation: |
  <p>Tænk på et restaurantkøkken. Du som gæst har ikke adgang til køkkenet direkte — du kommunikerer via tjeneren og menukortet. Menukortet specificerer præcist, hvad du kan bestille, i hvilken form og til hvilken pris. Tjeneren tager din ordre til køkkenet og bringer resultatet tilbage.</p>
  <p>En API fungerer præcis sådan. Dit system (gæsten) sender en forespørgsel til et andet systems API (menukortet og tjeneren): "Giv mig alle ubetalte fakturaer fra de seneste 30 dage." API'en returnerer dataen i et standardformat. Dit system kan så vise dataen, beregne noget med den eller videresende den til et tredje system.</p>
  <p>Det afgørende er, at API'en definerer reglerne. Systemet bag API'en bestemmer, hvad man må spørge om, i hvilken form svarene leveres, og hvem der har adgang. Du behøver ikke vide hvad der sker inde i systemet — kun hvad du kan bede om, og hvad du får tilbage.</p>
example: |
  <p>Forestil dig at du driver en lille grossistvirksomhed i Vejle med 200 produkter og 50 faste kunder. Du bruger e-conomic til regnskab og har en ny webshop på Shopify. Problemet: når en kunde bestiller på webshoppen, skal ordren manuelt overføres til e-conomic for at blive faktureret. Det tager 5 minutter per ordre og foregår typisk dagen efter — en forsinkelse der betyder, at fakturaer er forsinket og kunderne ind imellem rykker.</p>
  <p>Løsningen er at forbinde Shopifys API med e-conomics API via Make.com. Når en ordre placeres i Shopify, spørger Make.com Shopifys API: "Giv mig detaljerne på denne ordre." Shopify svarer med produkter, antal, pris og kundeoplysninger. Make.com sender derefter disse oplysninger til e-conomics API: "Opret en faktura med disse data og send den til kunden." Hele processen tager under 30 sekunder og kræver intet manuelt arbejde.</p>
  <p>Det er API-integrationer i praksis: systemer der taler direkte med hinanden via veldefineerede forespørgsler og svar, uden mennesker i midten.</p>
relevance: |
  <p>Enhver gang din virksomhed kopierer data manuelt fra ét system til et andet — ordrer fra webshop til regnskab, leads fra kontaktformular til CRM, bookinger fra kalender til faktureringssystem — er der med stor sandsynlighed en API der kan gøre det automatisk.</p>
  <p>De fleste moderne SaaS-systemer har en API. Det er nu standard-infrastruktur, ikke premium-funktion. E-conomic har en API. Shopify har en API. HubSpot, Stripe, Calendly, Typeform — alle har APIs. Det betyder, at de i princippet kan tale sammen, enten direkte eller via et mellemlag som Make.com.</p>
  <p>Som virksomhedsejer er den vigtigste takeaway: spørg altid "har dette system en API?" inden du vælger et nyt software. Et system med en god, veldokumenteret API er langt mere værdifuldt end et med samme funktioner men ingen API — fordi API'en er det der giver dig mulighed for at automatisere og integrere fremover.</p>
related_terms:
  - term: "Webhook"
    definition: "En webhook er en specifik type API-funktion der sender data aktivt, når noget sker — i stedet for at vente på at blive spurgt. Webhooks er hurtigere og mere effektive til realtids-notifikationer."
  - term: "REST API"
    definition: "Den mest udbredte API-standard. REST (Representational State Transfer) definerer et sæt regler for, hvordan forespørgsler og svar formateres. Næsten alle moderne systemer bruger REST-APIs."
  - term: "API-nøgle"
    definition: "En unik kode der beviser over for et systems API, at du har tilladelse til at tilgå det. Fungerer som et password til API-adgang og bør aldrig deles offentligt."
  - term: "Make.com"
    definition: "En automatiseringsplatform der fungerer som oversætter og koordinator mellem forskellige systemer. Make.com taler med begge systems APIs og sørger for at data flyder korrekt fra A til B."
next_steps:
  - "Kortlæg dine manuelle datatransferprocesser — skriv alle de steder ned, hvor du eller en medarbejder kopierer data fra ét system til et andet. Hvert punkt er en potentiel API-automatisering."
  - "Tjek om dine systemer har APIs — de fleste gør. Søg på '[systemets navn] + API' eller se under Indstillinger → Integrationer i systemet."
  - "Start med den integration der sparer mest tid — for de fleste webshops er det <a href='/automatisering/shopify-ordre-til-economic/'>automatisk bogføring af Shopify-ordrer i e-conomic</a>. Det er typisk 3–8 timer om måneden genvundet fra første dag."
faq_details:
  - q: "Kræver API-integrationer programmering?"
    a: "Ikke nødvendigvis. Platformen Make.com lader dig forbinde systemer via deres APIs uden at skrive kode. Du konfigurerer visuelle flows der specificerer hvilke data der skal flyttes hvornår. For mere komplekse integrationer med custom logik kan det kræve en teknisk ressource, men de fleste standard-integrationer er konfiguration, ikke programmering."
  - q: "Er det sikkert at give et automatiseringsværktøj adgang til vores systemer via API?"
    a: "Ja, forudsat at du bruger etablerede platforme og håndterer API-nøgler korrekt. Make.com er ISO 27001-certificeret og bruges af over 500.000 virksomheder. API-nøgler bør aldrig deles, og du bør kun give den adgang der er nødvendig — de fleste APIs tillader read-only adgang som er tilstrækkeligt for rapportering og overvågning."
  - q: "Hvad koster det at opsætte API-integrationer?"
    a: "Prisen afhænger af kompleksiteten. Simple én-til-én integrationer (Shopify → e-conomic, Typeform → HubSpot) tager typisk 2–4 timers opsætning. Komplekse flows med betingede stier, fejlhåndtering og multiple systemer tager 8–20 timer. Make.com-abonnementet starter ved 9 USD/måned og dækker de fleste SMV-behov."
related:
  - url: "/automatisering/data-sync-mellem-systemer/"
    title: "Automatisk data-sync mellem systemer"
    category: "Produktivitet"
  - url: "/automatisering/shopify-ordre-til-economic/"
    title: "Shopify ordrer til e-conomic via API"
    category: "Regnskab"
  - url: "/automatisering/crm-opdatering-fra-email/"
    title: "Automatisk CRM-opdatering via API"
    category: "Salg"
  - url: "/automatisering/webhook-monitor-med-alerts/"
    title: "Overvåg dine API-integrationer automatisk"
    category: "Produktivitet"
faq_schema: |
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {"@type": "Question", "name": "Kræver API-integrationer programmering?", "acceptedAnswer": {"@type": "Answer", "text": "Ikke nødvendigvis. Make.com lader dig forbinde systemer via API uden kode med visuelle flows. De fleste standard-integrationer er konfiguration, ikke programmering."}},
      {"@type": "Question", "name": "Er det sikkert at give et automatiseringsværktøj adgang via API?", "acceptedAnswer": {"@type": "Answer", "text": "Ja, forudsat at du bruger etablerede platforme og håndterer API-nøgler korrekt. Make.com er ISO 27001-certificeret og bruges af over 500.000 virksomheder."}},
      {"@type": "Question", "name": "Hvad koster det at opsætte API-integrationer?", "acceptedAnswer": {"@type": "Answer", "text": "Simple integrationer tager 2–4 timers opsætning. Komplekse flows tager 8–20 timer. Make.com-abonnement starter ved 9 USD/md."}}
    ]
  }
---
