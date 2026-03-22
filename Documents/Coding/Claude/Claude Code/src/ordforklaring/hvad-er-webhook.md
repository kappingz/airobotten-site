---
title: "Hvad er en webhook? En simpel forklaring til virksomhedsejere"
slug: "hvad-er-webhook"
term: "Webhook"
category: "Tekniske begreber"
meta_description: "Hvad er en webhook? Simpel forklaring uden teknisk jargon — og hvorfor webhooks er nøglen til automatiske integrationer der sparer din virksomhed tid."
canonical: "https://airobotten.dk/ordforklaring/hvad-er-webhook/"
layout: ordforklaring.njk
definition: "En webhook er en automatisk besked som ét system sender til et andet, i det øjeblik noget sker — som en SMS-notifikation, men fra software til software."
explanation: |
  <p>Forestil dig at din webshop er et varehus, og din bogholder sidder i et andet bygning. Hver gang en pakke forlader lageret, skal bogholderen vide det for at registrere salget. Den manuelle løsning: du ringer til bogholderen. Den automatiske løsning: en webhook.</p>
  <p>En webhook er den digitale version af det opkald. Når en kunde betaler i din webshop, sender webshoppen automatisk en besked til dit regnskabssystem: "Ny ordre, 847 kr., ordre #1042, kunde: Mette Hansen." Regnskabssystemet modtager beskeden og bogfører ordren — uden at nogen har rørt en finger.</p>
  <p>Det er fundamentalt forskelligt fra den traditionelle metode, der hedder polling: hvor dit regnskabssystem hvert 15. minut spørger webshoppen "er der sket noget nyt?" En webhook vender det om — systemer fortæller aktivt om nyheder i stedet for at blive spurgt. Det er hurtigere, mere effektivt og bruger langt færre ressourcer.</p>
example: |
  <p>Forestil dig at du driver et rengøringsfirma i Odense. Du bruger Calendly til bookinger og HubSpot som CRM. Problemet: når en ny kunde booker en tid, er der ingen automatisk forbindelse til HubSpot. Du ser bookingen i Calendly, logger manuelt ind i HubSpot og opretter kunden der — to gange om dagen, 10 minutter hver gang, 5 dage om ugen. Det er over 40 timer om året brugt på manuel dataindtastning.</p>
  <p>Med en webhook registrerer Calendly øjeblikkeligt din nye booking og sender alle detaljer — navn, email, tidspunkt, servicevalg — til Make.com, der videresender dem til HubSpot. Kunden er oprettet i HubSpot inden du har nået at se notifikationen på din telefon. Du vender du aldrig behøver at taste det manuelt igen.</p>
  <p>Det er hvad webhooks gør i praksis: de eliminerer det øjeblik hvor information "sidder fast" i ét system og skal kopieres manuelt til et andet.</p>
relevance: |
  <p>Webhooks er den teknologiske infrastruktur bag næsten alle automatiseringer vi bygger. De er ikke et slutprodukt du køber eller sætter op selv — de er mekanismen der gør at Shopify kan fortælle Make.com om en ny ordre, at Stripe kan fortælle dit regnskabssystem om en ny betaling, og at din kontaktformular kan fortælle dit CRM om et nyt lead.</p>
  <p>Som virksomhedsejer behøver du ikke forstå, hvordan webhooks fungerer teknisk. Men det er værd at vide, at de eksisterer — fordi det forklarer, hvorfor visse integrationer er mulige og andre ikke er. Et system der understøtter webhooks (Shopify, Stripe, Typeform, Calendly, HubSpot) kan integreres hurtigt og effektivt. Et system der ikke understøtter webhooks, kræver enten polling (langsommere) eller manuel datahåndtering.</p>
  <p>Bruger du systemer der understøtter webhooks, kan du potentielt automatisere al dataoverførsel mellem dem — og spare de timer om måneden der i dag bruges på at kopiere information fra ét system til et andet.</p>
related_terms:
  - term: "API"
    definition: "En API er det interface systemet tilbyder til omverdenen — den 'menu' af handlinger andre systemer kan udføre. En webhook er én specifik del af en API der håndterer udgående notifikationer."
  - term: "Integration"
    definition: "En integration er en forbindelse mellem to systemer der lader dem dele data automatisk. Webhooks er den tekniske mekanisme mange integrationer bruger."
  - term: "Payload"
    definition: "Payloaden er den data der sendes med i webhook-beskeden — typisk JSON-formaterede detaljer om hændelsen, fx ordrenummer, beløb, kundens email og leveringsadresse."
  - term: "Make.com"
    definition: "En automatiseringsplatform der modtager webhooks fra hundredvis af systemer og lader dig definere hvad der skal ske med dataen — fx opdatere et CRM, sende en email eller oprette en faktura."
next_steps:
  - "Identificér dine manuelle datakopieringsopgaver — noter alle de steder, hvor du kopierer information fra ét system til et andet. Det er potentielle webhook-automatiseringer."
  - "Tjek om dine systemer understøtter webhooks — de fleste moderne SaaS-tools gør det. Se efter 'Webhooks' eller 'Integrationer' i systemernes indstillinger."
  - "Kom i gang med en konkret automatisering — f.eks. <a href='/automatisering/lead-fra-typeform-til-hubspot/'>send Typeform-leads automatisk til HubSpot</a> via webhook og Make.com. Det er typisk den hurtigste vej til at se webhook-automatisering i praksis."
faq_details:
  - q: "Er webhooks sikre? Kan hvem som helst sende en falsk webhook?"
    a: "De fleste systemer sikrer deres webhooks med en hemmeligt signatur — en unik kode der beviser at beskeden faktisk kommer fra det rigtige system. Make.com validerer automatisk disse signaturer. Det er ikke en sikkerhedsrisiko du behøver at bekymre dig om i praksis."
  - q: "Hvad sker der, hvis webhook-modtageren er nede?"
    a: "Moderne systemer genforsøger automatisk at sende webhooks hvis modtageren ikke svarer. Typisk genforsøges 3–10 gange over de første timer. Make.com har et retry-system der sikrer at ingen data mistes selv ved kortvarig nedetid."
  - q: "Kræver webhooks programmering?"
    a: "Nej. Platformen Make.com fungerer som en visuel webhook-modtager — du vælger hvilke systemer der skal tale sammen og definerer hvad der skal ske, uden en linje kode. De fleste simple integrationer er sat op på under en time."
related:
  - url: "/automatisering/data-sync-mellem-systemer/"
    title: "Automatisk data-sync mellem systemer"
    category: "Produktivitet"
  - url: "/automatisering/webhook-monitor-med-alerts/"
    title: "Webhook-monitor med automatiske alerts"
    category: "Produktivitet"
  - url: "/automatisering/lead-fra-typeform-til-hubspot/"
    title: "Send Typeform-leads direkte til HubSpot"
    category: "Lead-håndtering"
  - url: "/automatisering/shopify-ordre-til-economic/"
    title: "Shopify ordrer til e-conomic bogføring"
    category: "Regnskab"
faq_schema: |
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {"@type": "Question", "name": "Er webhooks sikre?", "acceptedAnswer": {"@type": "Answer", "text": "Ja. De fleste systemer sikrer webhooks med en hemmelig signatur der beviser at beskeden kommer fra det rigtige system. Make.com validerer disse automatisk."}},
      {"@type": "Question", "name": "Hvad sker der, hvis webhook-modtageren er nede?", "acceptedAnswer": {"@type": "Answer", "text": "Moderne systemer genforsøger automatisk. Make.com har et retry-system der sikrer at ingen data mistes selv ved kortvarig nedetid."}},
      {"@type": "Question", "name": "Kræver webhooks programmering?", "acceptedAnswer": {"@type": "Answer", "text": "Nej. Make.com fungerer som en visuel webhook-modtager uden kode. De fleste simple integrationer er sat op på under en time."}}
    ]
  }
---
