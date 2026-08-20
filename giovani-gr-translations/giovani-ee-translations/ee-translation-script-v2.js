
(function () {
  'use strict';

  const CONFIG = {
  "allowedHosts": [
    "giovaniparfuumid.ee",
    "www.giovaniparfuumid.ee"
  ],
  "translations": {
    "My personal details": "Minu isikuandmed",
    "My orders": "Minu tellimused",
    "I do not consent to receiving requests to review the online store and its products": "Ma ei nõustu saama palveid veebipoe ja selle toodete hindamiseks.",
    "My invoices": "Minu arved",
    "736 ratings": "736 hinnangut",
    "My proforma invoices": "Minu ettemaksuarved",
    "Client proforma invoices": "Kliendi ettemaksuarved",
    "My credit notes": "Minu kreeditarved",
    "Client credit notes": "Kliendi kreeditarved",
    "My delivery notes": "Minu saatelehed",
    "Client delivery notes": "Kliendi saatelehed",
    "My proof of payments received": "Minu laekunud maksete tõendid",
    "Proofs of payment received": "Laekunud maksete tõendid",
    "My discounts": "Minu allahindlused",
    "My products ratings": "Minu tootehinnangud",
    "My products discussions": "Minu tootearutelud",
    "Client Center": "Kliendikeskus",
    "My account settings": "Minu konto seaded",
    "Tax documents": "Maksudokumendid",
    "My product discussions": "Minu tootearutelud",
    "You have no reserved order...": "Teil ei ole reserveeritud tellimusi...",
    "Personal data": "Isikuandmed",
    "Phone": "Telefon",
    "Your current password to approve changes": "Muudatuste kinnitamiseks sisestage praegune parool",
    "Specify company details": "Sisestage ettevõtte andmed",
    "Street, House no.": "Tänav, maja nr",
    "Shipping addresses": "Tarneaadressid",
    "No entries found...": "Kirjeid ei leitud...",
    "choose a gift": "vali kingitus",
    "choose a sample as a gift": "vali näidis kingituseks",
    "Memorized cards": "Salvestatud kaardid",
    "You have no documents saved yet.": "Teil pole veel salvestatud dokumente.",
    "Extra discount": "Lisaallahindlus",
    "No rating was found.": "Hinnanguid ei leitud.",
    "No comments found...": "Kommentaare ei leitud...",
    "subscribe to our newsletter": "tellige meie uudiskiri",
    "subscribe to newsletter": "telli uudiskiri",
    "follow on instagram": "jälgi meid Instagramis",
    "continue to blog": "mine blogisse",
    "store rating": "poe hinnang",
    "view more": "vaata rohkem",
    "details": "üksikasjad",
    "ask a salesman": "küsi konsultandilt",
    "i want to know more": "soovin rohkem teada",
    "contact form": "kontaktvorm",
    "my cart": "minu ostukorv",
    "back to shop": "tagasi poodi",
    "gift to buy": "kingitus ostuga",
    "do you need help? we are here for you:": "vajate abi? oleme teie jaoks olemas:",
    "the basket is empty. fill it with joy!": "ostukorv on tühi. täitke see rõõmuga!",
    "items have been added to shopping cart": "tooted lisati ostukorvi",
    "your cart is empty.": "teie ostukorv on tühi.",
    "fill it with joy!": "täitke see rõõmuga!",
    "shipping is free!": "tarne on tasuta!",
    "personal information and address": "isikuandmed ja aadress",
    "availability": "saadavus",
    "price": "hind",
    "password": "parool",
    "hide": "peida",
    "contact us": "võtke meiega ühendust",
    "variants": "variandid",
    "incl. vat:": "koos käibemaksuga:",
    "incl. vat": "koos käibemaksuga",
    "excl. vat": "ilma käibemaksuta",
    "i have a discount coupon:": "mul on sooduskupong:",
    "apply": "rakenda",
    "enter coupon code": "sisestage kupongikood",
    "shipping is": "tarne on",
    "free": "tasuta",
    "free!": "tasuta!",
    "vat": "KM",
    "discount coupon:": "sooduskupong:",
    "overall rating": "üldhinnang",
    "rate product": "hinda toodet",
    "your rating:": "teie hinnang:",
    "product description": "tootekirjeldus",
    "quantity": "kogus",
    "price per unit": "ühikuhind",
    "code": "kood",
    "total price": "koguhind",
    "rounding": "ümardamine",
    "price excl. vat": "hind ilma käibemaksuta",
    "price incl. vat": "hind koos käibemaksuga",
    "price to pay": "tasumisele kuuluv summa",
    "proceed to cart": "mine ostukorvi",
    "proceed to checkout": "mine kassasse",
    "product name": "toote nimi",
    "product parameters": "toote parameetrid",
    "qr code": "QR-kood",
    "rate this product": "hinda seda toodet",
    "rating": "hinnang",
    "read article": "loe artiklit",
    "shopping cart": "ostukorv",
    "submit": "esita",
    "subscribe": "telli",
    "vat number": "KMKR number",
    "search": "otsi",
    "amount": "kogus",
    "billing address": "arveldusaadress",
    "address": "aadress",
    "addresses": "aadressid",
    "buy again": "osta uuesti",
    "cancel": "tühista",
    "cart": "ostukorv",
    "currency": "valuuta",
    "country": "riik",
    "date": "kuupäev",
    "discount": "allahindlus",
    "all rights reserved": "kõik õigused kaitstud",
    "select a pick-up point": "valige väljastuspunkt",
    "add a new address": "lisa uus aadress",
    "add a rating": "lisa hinnang",
    "create new password": "loo uus parool",
    "newsletter unsubscribe": "loobu uudiskirjast",
    "product": "toode",
    "recapitulation": "kokkuvõte",
    "total": "kokku",
    "zip": "postiindeks",
    "zip code": "postiindeks",
    "page not found.": "lehte ei leitud.",
    "pcs": "tk",
    "pcs.": "tk",
    "with vat": "koos käibemaksuga",
    "without vat": "ilma käibemaksuta",
    "customer account": "kliendikonto",
    "login to my account": "logi minu kontole sisse",
    "full name": "ees- ja perekonnanimi",
    "city": "linn",
    "ship to another address": "saada teisele aadressile",
    "enter note for vendor": "sisestage müüjale märkus",
    "your receipt": "teie kviitung",
    "i want to register": "soovin registreeruda",
    "customer data": "kliendiandmed",
    "this field is required": "see väli on kohustuslik",
    "message": "sõnum",
    "not rated": "hindamata",
    "email address": "e-posti aadress",
    "save": "salvesta",
    "already on stock": "juba laos",
    "send rating": "saada hinnang",
    "name": "nimi",
    "add to cart": "lisa ostukorvi",
    "checkout": "kassa",
    "in stock": "laos",
    "out of stock": "laost otsas",
    "delivery time": "tarneaeg",
    "estimated delivery": "eeldatav tarne",
    "free shipping": "tasuta tarne",
    "customer support": "klienditugi",
    "order summary": "tellimuse kokkuvõte",
    "continue shopping": "jätka ostlemist",
    "remove": "eemalda",
    "edit": "muuda",
    "home": "avaleht",
    "category": "kategooria",
    "categories": "kategooriad",
    "new": "uus",
    "sale": "allahindlus",
    "recommended": "soovitatud",
    "bestseller": "bestseller",
    "show more": "näita rohkem",
    "show less": "näita vähem",
    "filter": "filter",
    "sort by": "sorteeri",
    "lowest price": "madalaim hind",
    "highest price": "kõrgeim hind",
    "latest": "uusimad",
    "popularity": "populaarsus",
    "customer reviews": "klientide arvustused",
    "related products": "seotud tooted",
    "you may also like": "teile võib samuti meeldida",
    "available": "saadaval",
    "unavailable": "pole saadaval",
    "coupon code": "kupongikood",
    "order note": "tellimuse märkus",
    "payment method": "makseviis",
    "shipping method": "tarneviis",
    "place order": "esita tellimus",
    "continue": "jätka",
    "back": "tagasi",
    "first name": "eesnimi",
    "last name": "perekonnanimi",
    "company": "ettevõte",
    "company name": "ettevõtte nimi",
    "company id": "registrikood",
    "street": "tänav",
    "house number": "maja number",
    "note": "märkus",
    "optional": "valikuline",
    "required": "kohustuslik",
    "login": "logi sisse",
    "register": "registreeru",
    "sign in": "logi sisse",
    "sign up": "registreeru",
    "log out": "logi välja",
    "logout": "logi välja",
    "email": "e-post",
    "telephone": "telefon",
    "mobile": "mobiiltelefon",
    "order": "tellimus",
    "orders": "tellimused",
    "invoice": "arve",
    "payment": "makse",
    "shipping": "tarne",
    "delivery": "kohaletoimetamine",
    "pick-up point": "väljastuspunkt",
    "newsletter": "uudiskiri",
    "terms and conditions": "tingimused",
    "privacy policy": "privaatsuspoliitika",
    "return policy": "tagastuspoliitika",
    "returns": "tagastused",
    "complaints": "kaebused ja pretensioonid",
    "compare": "võrdle",
    "wishlist": "soovinimekiri",
    "add to wishlist": "lisa soovinimekirja",
    "loading...": "laadimine...",
    "please wait": "palun oodake",
    "success": "õnnestus",
    "error": "viga",
    "thank you for your order": "täname tellimuse eest",
    "order confirmation": "tellimuse kinnitus",
    "discount code": "sooduskood",
    "apply coupon": "rakenda kupong",
    "remove item": "eemalda toode",
    "empty cart": "tühjenda ostukorv",
    "subtotal": "vahesumma",
    "grand total": "lõppsumma",
    "tax": "maks",
    "delivery address": "tarneaadress",
    "account": "konto",
    "my account": "minu konto",
    "change password": "muuda parooli",
    "forgot password": "unustasin parooli",
    "reset password": "lähtesta parool",
    "save changes": "salvesta muudatused",
    "close": "sulge",
    "yes": "jah",
    "no": "ei",
    "My order": "Minu tellimus",
    "MY ORDER:": "MINU TELLIMUS:",
    "View order details": "Vaata tellimuse üksikasju",
    "To view your order details, enter your order number and the email address used during checkout.": "Tellimuse üksikasjade vaatamiseks sisestage tellimuse number ja tellimuse vormistamisel kasutatud e-posti aadress.",
    "Order number": "Tellimuse number",
    "Order number*": "Tellimuse number*",
    "Order number *": "Tellimuse number *",
    "e.g. 123456": "nt 123456",
    "Your email": "Teie e-posti aadress",
    "Your email*": "Teie e-posti aadress*",
    "Your email *": "Teie e-posti aadress *",
    "e.g. john.doe@example.com": "nt mari.tamm@example.com",
    "This is the email address used for the order.": "See on tellimuse vormistamisel kasutatud e-posti aadress.",
    "View order": "Vaata tellimust"
  }
};

  if (!CONFIG.allowedHosts.includes(window.location.hostname)) return;

  const ATTRIBUTES = ['placeholder', 'title', 'aria-label', 'data-title', 'data-label', 'alt'];
  const SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'IFRAME', 'CODE', 'PRE']);
  const observedRoots = new WeakSet();

  function normalize(value) {
    return String(value || '')
      .replace(/\u00a0/g, ' ')
      .replace(/[\r\n\t]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();
  }

  const normalizedTranslations = new Map(
    Object.entries(CONFIG.translations).map(([source, target]) => [normalize(source), target])
  );

  function translateString(value) {
    const key = normalize(value);
    return key ? (normalizedTranslations.get(key) || null) : null;
  }

  function translateTextNode(node) {
    if (!node || node.nodeType !== Node.TEXT_NODE) return;
    if (!node.parentElement || SKIP_TAGS.has(node.parentElement.tagName)) return;

    const original = node.nodeValue;
    const translated = translateString(original);
    if (!translated) return;

    const leading = original.match(/^\s*/)?.[0] || '';
    const trailing = original.match(/\s*$/)?.[0] || '';
    node.nodeValue = leading + translated + trailing;
  }

  function translateElementAttributes(element) {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) return;
    if (SKIP_TAGS.has(element.tagName)) return;

    for (const attribute of ATTRIBUTES) {
      if (!element.hasAttribute(attribute)) continue;
      const original = element.getAttribute(attribute);
      const translated = translateString(original);
      if (translated) element.setAttribute(attribute, translated);
    }

    if (element.hasAttribute('value')) {
      const original = element.getAttribute('value');
      const translated = translateString(original);
      if (translated) {
        element.setAttribute('value', translated);
        if (element.tagName === 'INPUT' || element.tagName === 'BUTTON') {
          element.value = translated;
        }
      }
    }
  }

  function translateSubtree(root) {
    if (!root) return;

    if (root.nodeType === Node.TEXT_NODE) {
      translateTextNode(root);
      return;
    }

    if (
      root.nodeType !== Node.ELEMENT_NODE &&
      root.nodeType !== Node.DOCUMENT_FRAGMENT_NODE &&
      root.nodeType !== Node.DOCUMENT_NODE
    ) return;

    if (root.nodeType === Node.ELEMENT_NODE && SKIP_TAGS.has(root.tagName)) return;
    if (root.nodeType === Node.ELEMENT_NODE) translateElementAttributes(root);

    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          if (node.nodeType === Node.ELEMENT_NODE && SKIP_TAGS.has(node.tagName)) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeType === Node.TEXT_NODE) translateTextNode(node);
      else translateElementAttributes(node);
    }
  }

  function translateAllShadowRoots(scope = document) {
    if (!scope?.querySelectorAll) return;

    scope.querySelectorAll('*').forEach((element) => {
      if (!element.shadowRoot) return;

      translateSubtree(element.shadowRoot);
      observeRoot(element.shadowRoot);
      translateAllShadowRoots(element.shadowRoot);
    });
  }

  function observeRoot(root) {
    if (!root || observedRoots.has(root)) return;
    observedRoots.add(root);

    let scheduled = false;
    const observer = new MutationObserver(() => {
      if (scheduled) return;
      scheduled = true;

      window.requestAnimationFrame(() => {
        scheduled = false;
        translateSubtree(root);
        translateAllShadowRoots(root);
      });
    });

    observer.observe(root, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: [...ATTRIBUTES, 'value']
    });
  }

  function patchAttachShadow() {
    if (
      !window.Element ||
      !Element.prototype.attachShadow ||
      Element.prototype.attachShadow.__giovaniTranslationPatched
    ) return;

    const originalAttachShadow = Element.prototype.attachShadow;

    function patchedAttachShadow(options) {
      const shadowRoot = originalAttachShadow.call(this, options);

      window.setTimeout(() => {
        translateSubtree(shadowRoot);
        observeRoot(shadowRoot);
      }, 0);

      return shadowRoot;
    }

    patchedAttachShadow.__giovaniTranslationPatched = true;
    Element.prototype.attachShadow = patchedAttachShadow;
  }

  function translatePage() {
    if (!document.body) return;
    translateSubtree(document.body);
    translateAllShadowRoots(document);
    observeRoot(document.body);
  }

  function start() {
    patchAttachShadow();
    translatePage();

    [100, 300, 500, 1000, 1500, 2500, 4000, 7000, 12000].forEach((delay) => {
      window.setTimeout(translatePage, delay);
    });

    window.setInterval(translatePage, 1000);
    window.addEventListener('load', translatePage);
    window.addEventListener('pageshow', translatePage);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();
