(function () {
  'use strict';

  const ALLOWED_HOSTS = new Set(['giovani.se', 'www.giovani.se']);
  if (!ALLOWED_HOSTS.has(window.location.hostname)) return;

  const translations = {
    "My personal details": "Mina personuppgifter",
    "My orders": "Mina beställningar",
    "My invoices": "Mina fakturor",
    "736 ratings": "736 Omdömen",
    "My proforma invoices": "Mina proformafakturor",
    "Client proforma invoices": "Kundens proformafakturor",
    "My credit notes": "Mina kreditfakturor",
    "Client credit notes": "Kundens kreditfakturor",
    "My delivery notes": "Mina följesedlar",
    "Client delivery notes": "Kundens följesedlar",
    "My proof of payments received": "Mina betalningsbekräftelser",
    "Proofs of payment received": "Betalningsbekräftelser",
    "My discounts": "Mina rabatter",
    "My products ratings": "Mina produktomdömen",
    "My products discussions": "Mina produktdiskussioner",
    "Client Center": "Kundcenter",
    "My account settings": "Mina kontoinställningar",
    "Tax documents": "Skattedokument",
    "My product discussions": "Mina produktdiskussioner",
    "You have no reserved order...": "Du har ingen reserverad beställning...",
    "Personal data": "Personuppgifter",
    "Phone": "Telefon",
    "Your current password to approve changes": "Ditt nuvarande lösenord för att godkänna ändringarna",
    "Specify company details": "Ange företagsuppgifter",
    "Street, House no.": "Gata, husnummer",
    "Shipping addresses": "Leveransadresser",
    "No entries found...": "Inga poster hittades...",
    "choose a gift": "Välj en gåva",
    "choose a sample as a gift": "Välj ett prov som gåva",
    "Memorized cards": "Sparade kort",
    "You have no documents saved yet.": "Du har inga sparade dokument ännu.",
    "Extra discount": "Extra rabatt",
    "No rating was found.": "Inget omdöme hittades.",
    "No comments found...": "Inga kommentarer hittades...",
    "To complete your order, you need to choose a pickup point from the carrier. Please search for one and select it.": "För att slutföra din beställning måste du välja ett utlämningsställe hos transportören. Sök efter ett och välj det.",
    "The final discount can vary depending on the setting of the respective discounts at particular products.": "Den slutliga rabatten kan variera beroende på hur rabatterna är inställda för respektive produkt.",
    "subscribe to our newsletter": "Prenumerera på vårt nyhetsbrev",
    "subscribe to newsletter": "Prenumerera på nyhetsbrevet",
    "follow on instagram": "Följ oss på Instagram",
    "continue to blog": "Fortsätt till bloggen",
    "store rating": "Butiksomdöme",
    "view more": "Visa mer",
    "details": "Detaljer",
    "ask a salesman": "Fråga en säljare",
    "i want to know more": "Jag vill veta mer",
    "contact form": "Kontaktformulär",
    "undefined": "",
    "my cart": "Min varukorg",
    "back to shop": "Tillbaka till butiken",
    "gift to buy": "Gåva på köpet",
    "do you need help? we are here for you:": "Behöver du hjälp? Vi finns här för dig:",
    "the basket is empty. fill it with joy!": "Varukorgen är tom. Fyll den med glädje!",
    "do you have any questions? we'll answer them. please fill out your contact details carefully.": "Har du några frågor? Vi svarar gärna. Fyll i dina kontaktuppgifter noggrant.",
    "items have been added to shopping cart": "Artiklarna har lagts till i varukorgen",
    "your cart is empty.": "Din varukorg är tom.",
    "fill it with joy!": "Fyll den med glädje!",
    "shipping is free!": "Frakten är gratis!",
    "personal information and address": "Personuppgifter och adress",
    "availability": "Tillgänglighet",
    "price": "Pris",
    "the page is lost. we will try to find it.": "Sidan kunde inte hittas. Vi försöker hjälpa dig vidare.",
    "amount was successfully updated.": "Antalet uppdaterades.",
    "password": "Lösenord",
    "hide": "Dölj",
    "contact us": "Kontakta oss",
    "variants": "Varianter",
    "incl. vat:": "Inkl. moms:",
    "incl. vat": "Inkl. moms",
    "excl. vat": "Exkl. moms",
    "i have a discount coupon:": "Jag har en rabattkod:",
    "apply": "Använd",
    "enter coupon code": "Ange rabattkod",
    "shipping is": "Frakten är",
    "free": "Gratis",
    "free!": "Gratis!",
    "vat": "Moms",
    "items have been added to": "Artiklarna har lagts till i",
    "discount coupon:": "Rabattkod:",
    "overall rating": "Totalbetyg",
    "rate product": "Betygsätt produkten",
    "your rating:": "Ditt betyg:",
    "product description": "Produktbeskrivning",
    "quantity": "Antal",
    "price per unit": "Pris per enhet",
    "code": "Kod",
    "total price": "Totalpris",
    "rounding": "Avrundning",
    "price excl. vat": "Pris exkl. moms",
    "price incl. vat": "Pris inkl. moms",
    "in the tax regime oss": "Enligt OSS-momsreglerna",
    "price to pay": "Att betala",
    "prices are excl. vat": "Priserna är exkl. moms",
    "prices are incl. vat": "Priserna är inkl. moms",
    "proceed to cart": "Gå till varukorgen",
    "proceed to checkout": "Fortsätt till kassan",
    "product name": "Produktnamn",
    "product parameters": "Produktparametrar",
    "qr code": "QR-kod",
    "rate this product": "Betygsätt denna produkt",
    "rating": "Betyg",
    "read article": "Läs artikeln",
    "shopping cart": "Varukorg",
    "submit": "Skicka",
    "subscribe": "Prenumerera",
    "vat number": "Momsregistreringsnummer",
    "search": "Sök",
    "amount": "Antal",
    "billing address": "Faktureringsadress",
    "address": "Adress",
    "addresses": "Adresser",
    "buy again": "Köp igen",
    "cancel": "Avbryt",
    "cart": "Varukorg",
    "currency": "Valuta",
    "country": "Land",
    "date": "Datum",
    "discount": "Rabatt",
    "all rights reserved": "Alla rättigheter förbehållna",
    "select a pick-up point": "Välj ett utlämningsställe",
    "you have already voted": "Du har redan röstat",
    "add a new address": "Lägg till en ny adress",
    "add a rating": "Lägg till ett omdöme",
    "create new password": "Skapa nytt lösenord",
    "newsletter unsubscribe": "Avsluta prenumerationen på nyhetsbrevet",
    "product": "Produkt",
    "recapitulation": "Sammanfattning",
    "total": "Totalt",
    "zip": "Postnummer",
    "zip code": "Postnummer",
    "page not found.": "Sidan hittades inte.",
    "pcs": "St.",
    "pcs.": "St.",
    "with vat": "Med moms",
    "without vat": "Utan moms",
    "customer account": "Kundkonto",
    "login to my account": "Logga in på mitt konto",
    "full name": "Fullständigt namn",
    "city": "Ort",
    "ship to another address": "Leverera till en annan adress",
    "enter note for vendor": "Ange ett meddelande till säljaren",
    "your receipt": "Ditt kvitto",
    "i want to register": "Jag vill registrera mig",
    "customer data": "Kunduppgifter",
    "this field is required": "Detta fält är obligatoriskt",
    "message": "Meddelande",
    "not rated": "Inte betygsatt",
    "email address": "E-postadress",
    "save": "Spara",
    "already on stock": "Finns redan i lager",
    "send rating": "Skicka omdöme",
    "how satisfied are you with the product?": "Hur nöjd är du med produkten?",
    "how satisfied are you with the shop?": "Hur nöjd är du med butiken?",
    "name": "Namn",
    "cart item was successfully deleted.": "Artikeln togs bort från varukorgen.",
    "forgotten password": "Glömt lösenord",
    "please enter the email address, which you used in the registration details. we will send you a link to set your password.": "Ange den e-postadress du använde vid registreringen. Vi skickar en länk för att skapa ett nytt lösenord.",
    "add to cart": "Lägg i varukorgen",
    "checkout": "Kassa",
    "in stock": "I lager",
    "out of stock": "Slut i lager",
    "delivery time": "Leveranstid",
    "estimated delivery": "Beräknad leverans",
    "free shipping": "Fri frakt",
    "customer support": "Kundsupport",
    "order summary": "Beställningsöversikt",
    "continue shopping": "Fortsätt handla",
    "remove": "Ta bort",
    "edit": "Redigera",
    "home": "Hem",
    "category": "Kategori",
    "categories": "Kategorier",
    "new": "Nyhet",
    "sale": "Rea",
    "recommended": "Rekommenderad",
    "bestseller": "Bästsäljare",
    "show more": "Visa mer",
    "show less": "Visa mindre",
    "filter": "Filtrera",
    "sort by": "Sortera efter",
    "lowest price": "Lägsta pris",
    "highest price": "Högsta pris",
    "latest": "Senaste",
    "popularity": "Popularitet",
    "customer reviews": "Kundomdömen",
    "related products": "Relaterade produkter",
    "you may also like": "Du kanske också gillar",
    "available": "Tillgänglig",
    "unavailable": "Ej tillgänglig",
    "coupon code": "Rabattkod",
    "order note": "Beställningsmeddelande",
    "payment method": "Betalningsmetod",
    "shipping method": "Leveransmetod",
    "place order": "Slutför beställning",
    "continue": "Fortsätt",
    "back": "Tillbaka",
    "first name": "Förnamn",
    "last name": "Efternamn",
    "company": "Företag",
    "company name": "Företagsnamn",
    "company id": "Organisationsnummer",
    "street": "Gata",
    "house number": "Husnummer",
    "note": "Meddelande",
    "optional": "Valfritt",
    "required": "Obligatoriskt",
    "login": "Logga in",
    "register": "Registrera",
    "sign in": "Logga in",
    "sign up": "Registrera dig",
    "log out": "Logga ut",
    "logout": "Logga ut",
    "email": "E-post",
    "telephone": "Telefon",
    "mobile": "Mobiltelefon",
    "order": "Beställning",
    "orders": "Beställningar",
    "invoice": "Faktura",
    "payment": "Betalning",
    "shipping": "Frakt",
    "delivery": "Leverans",
    "pick-up point": "Utlämningsställe",
    "newsletter": "Nyhetsbrev",
    "terms and conditions": "Allmänna villkor",
    "privacy policy": "Integritetspolicy",
    "return policy": "Returpolicy",
    "returns": "Returer",
    "complaints": "Reklamationer",
    "compare": "Jämför",
    "wishlist": "Önskelista",
    "add to wishlist": "Lägg till i önskelistan",
    "loading...": "Laddar...",
    "please wait": "Vänta...",
    "success": "Klart",
    "error": "Fel",
    "thank you for your order": "Tack för din beställning",
    "order confirmation": "Beställningsbekräftelse",
    "discount code": "Rabattkod",
    "apply coupon": "Använd rabattkod",
    "remove item": "Ta bort artikel",
    "empty cart": "Töm varukorgen",
    "subtotal": "Delsumma",
    "grand total": "Totalsumma",
    "tax": "Skatt",
    "delivery address": "Leveransadress",
    "account": "Konto",
    "my account": "Mitt konto",
    "change password": "Ändra lösenord",
    "forgot password": "Glömt lösenord",
    "reset password": "Återställ lösenord",
    "save changes": "Spara ändringar",
    "close": "Stäng",
    "yes": "Ja",
    "no": "Nej",
    "My order": "Min beställning",
    "View order details": "Visa beställningsdetaljer",
    "To view your order details, enter your order number and the email address used during checkout.": "För att se dina beställningsdetaljer anger du beställningsnumret och e-postadressen som användes vid köpet.",
    "Order number": "Beställningsnummer",
    "Your email": "Din e-postadress",
    "This is the email address used for the order.": "Detta är e-postadressen som användes för beställningen.",
    "View order": "Visa beställning",
    "I do not consent to receiving request to review the online store and its products": "Jag samtycker inte till att få förfrågningar om att recensera webbutiken och dess produkter",
  };

  const placeholderTranslations = {
    "e.g. 123456": "t.ex. 123456",
    "e.g. john.doe@example.com": "t.ex. john.doe@example.com",
  };

  const partialTranslations = [
    {
      pattern: /I do not consent to receiving request to review the online store and its products/gi,
      replacement: 'Jag samtycker inte till att få förfrågningar om att recensera webbutiken och dess produkter'
    },
    {
      pattern: /I do not consent to receiving request to review online store and its products/gi,
      replacement: 'Jag samtycker inte till att få förfrågningar om att recensera webbutiken och dess produkter'
    },
    { pattern: /I have a/gi, replacement: 'Jag har en' }
  ];

  const SKIP_TAGS = new Set(['SCRIPT','STYLE','NOSCRIPT','IFRAME','CODE','PRE','TEXTAREA']);

  function cleanText(value) {
    return String(value || '').replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();
  }

  const normalizedTranslations = new Map(
    Object.entries(translations).map(([source, target]) => [cleanText(source).toLowerCase(), target])
  );

  function getExactTranslation(value) {
    return normalizedTranslations.get(cleanText(value).toLowerCase()) || null;
  }

  function applyPartialTranslations(value) {
    let result = String(value || '');
    partialTranslations.forEach((item) => { result = result.replace(item.pattern, item.replacement); });
    return result;
  }

  function translateTextNode(node) {
    if (!node || node.nodeType !== Node.TEXT_NODE || !node.parentElement) return;
    if (SKIP_TAGS.has(node.parentElement.tagName)) return;
    const original = node.nodeValue;
    if (!original) return;
    const exact = getExactTranslation(original);
    if (exact !== null) {
      if (exact === '') { node.nodeValue = ''; return; }
      const leading = original.match(/^\s*/)?.[0] || '';
      const trailing = original.match(/\s*$/)?.[0] || '';
      node.nodeValue = leading + exact + trailing;
      return;
    }
    const changed = applyPartialTranslations(original);
    if (changed !== original) node.nodeValue = changed;
  }

  function translateTextNodes(root) {
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) return translateTextNode(root);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (node.parentElement && SKIP_TAGS.has(node.parentElement.tagName)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(translateTextNode);
  }

  function translateAttributes(root) {
    if (!root || !root.querySelectorAll) return;
    root.querySelectorAll('[placeholder]').forEach((el) => {
      const original = cleanText(el.getAttribute('placeholder'));
      const translated = placeholderTranslations[original];
      if (translated) el.setAttribute('placeholder', translated);
    });
    root.querySelectorAll('[title], [aria-label], [data-title]').forEach((el) => {
      ['title','aria-label','data-title'].forEach((attr) => {
        if (!el.hasAttribute(attr)) return;
        const original = el.getAttribute(attr);
        const exact = getExactTranslation(original);
        const translated = exact !== null ? exact : applyPartialTranslations(original);
        if (translated !== original) el.setAttribute(attr, translated);
      });
    });
    root.querySelectorAll('input, button').forEach((el) => {
      if (!el.value) return;
      const original = el.value;
      const exact = getExactTranslation(original);
      const translated = exact !== null ? exact : applyPartialTranslations(original);
      if (translated !== original) { el.value = translated; el.setAttribute('value', translated); }
    });
  }

  function translateRoot(root) {
    translateTextNodes(root);
    translateAttributes(root);
  }

  function translateAllShadowRoots() {
    document.querySelectorAll('*').forEach((host) => {
      if (!host.shadowRoot) return;
      translateRoot(host.shadowRoot);
      host.shadowRoot.querySelectorAll('*').forEach((nested) => {
        if (nested.shadowRoot) translateRoot(nested.shadowRoot);
      });
    });
  }

  function updatePageMetadata() {
    if (!['/my-order','/my-order/'].includes(window.location.pathname)) return;
    const title = 'Min beställningsinformation | Giovani';
    const description = 'Visa information om din Giovani-beställning genom att ange beställningsnummer och e-postadressen som användes vid köpet.';
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = description;
  }

  function translateEverything() {
    if (!document.body) return;
    translateRoot(document.body);
    translateAllShadowRoots();
    updatePageMetadata();
  }

  function start() {
    translateEverything();
    let scheduled = false;
    const observer = new MutationObserver(() => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => { scheduled = false; translateEverything(); });
    });
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ['placeholder','value','title','aria-label','data-title']
    });
    [250,750,1500,3000].forEach((delay) => setTimeout(translateEverything, delay));
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
