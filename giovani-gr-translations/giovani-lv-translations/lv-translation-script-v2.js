
(function () {
  'use strict';

  const CONFIG = {
  "allowedHosts": [
    "giovani.lv",
    "www.giovani.lv"
  ],
  "translations": {
    "My personal details": "Mani personas dati",
    "My orders": "Mani pasūtījumi",
    "I do not consent to receiving requests to review the online store and its products": "Es nepiekrītu saņemt lūgumus novērtēt interneta veikalu un tā produktus.",
    "My invoices": "Mani rēķini",
    "736 ratings": "736 vērtējumi",
    "My proforma invoices": "Mani priekšapmaksas rēķini",
    "Client proforma invoices": "Klienta priekšapmaksas rēķini",
    "My credit notes": "Manas kredītrēķinu korekcijas",
    "Client credit notes": "Klienta kredītrēķinu korekcijas",
    "My delivery notes": "Manas pavadzīmes",
    "Client delivery notes": "Klienta pavadzīmes",
    "My proof of payments received": "Mani saņemto maksājumu apliecinājumi",
    "Proofs of payment received": "Saņemto maksājumu apliecinājumi",
    "My discounts": "Manas atlaides",
    "My products ratings": "Mani produktu vērtējumi",
    "My products discussions": "Manas produktu diskusijas",
    "Client Center": "Klientu centrs",
    "My account settings": "Mana konta iestatījumi",
    "Tax documents": "Nodokļu dokumenti",
    "My product discussions": "Manas produktu diskusijas",
    "You have no reserved order...": "Jums nav rezervētu pasūtījumu...",
    "Personal data": "Personas dati",
    "Phone": "Tālrunis",
    "Your current password to approve changes": "Pašreizējā parole izmaiņu apstiprināšanai",
    "Specify company details": "Norādiet uzņēmuma datus",
    "Street, House no.": "Iela, mājas nr.",
    "Shipping addresses": "Piegādes adreses",
    "No entries found...": "Ieraksti nav atrasti...",
    "choose a gift": "izvēlieties dāvanu",
    "choose a sample as a gift": "izvēlieties paraugu dāvanā",
    "Memorized cards": "Saglabātās kartes",
    "You have no documents saved yet.": "Jums vēl nav saglabātu dokumentu.",
    "Extra discount": "Papildu atlaide",
    "No rating was found.": "Vērtējumi nav atrasti.",
    "No comments found...": "Komentāri nav atrasti...",
    "subscribe to our newsletter": "abonējiet mūsu jaunumu vēstuli",
    "subscribe to newsletter": "abonēt jaunumu vēstuli",
    "follow on instagram": "sekojiet mums Instagram",
    "continue to blog": "doties uz emuāru",
    "store rating": "veikala vērtējums",
    "view more": "skatīt vairāk",
    "details": "sīkāk",
    "ask a salesman": "jautāt konsultantam",
    "i want to know more": "vēlos uzzināt vairāk",
    "contact form": "saziņas forma",
    "my cart": "mans grozs",
    "back to shop": "atgriezties veikalā",
    "gift to buy": "dāvana par pirkumu",
    "do you need help? we are here for you:": "nepieciešama palīdzība? mēs esam šeit jums:",
    "the basket is empty. fill it with joy!": "grozs ir tukšs. piepildiet to ar prieku!",
    "items have been added to shopping cart": "preces ir pievienotas grozam",
    "your cart is empty.": "jūsu grozs ir tukšs.",
    "fill it with joy!": "piepildiet to ar prieku!",
    "shipping is free!": "piegāde ir bez maksas!",
    "personal information and address": "personas dati un adrese",
    "availability": "pieejamība",
    "price": "cena",
    "password": "parole",
    "hide": "paslēpt",
    "contact us": "sazinieties ar mums",
    "variants": "varianti",
    "incl. vat:": "ar PVN:",
    "incl. vat": "ar PVN",
    "excl. vat": "bez PVN",
    "i have a discount coupon:": "man ir atlaižu kupons:",
    "apply": "piemērot",
    "enter coupon code": "ievadiet kupona kodu",
    "shipping is": "piegāde ir",
    "free": "bez maksas",
    "free!": "bez maksas!",
    "vat": "PVN",
    "discount coupon:": "atlaižu kupons:",
    "overall rating": "kopējais vērtējums",
    "rate product": "novērtēt produktu",
    "your rating:": "jūsu vērtējums:",
    "product description": "produkta apraksts",
    "quantity": "daudzums",
    "price per unit": "cena par vienību",
    "code": "kods",
    "total price": "kopējā cena",
    "rounding": "noapaļošana",
    "price excl. vat": "cena bez PVN",
    "price incl. vat": "cena ar PVN",
    "price to pay": "maksājamā summa",
    "proceed to cart": "doties uz grozu",
    "proceed to checkout": "doties uz apmaksu",
    "product name": "produkta nosaukums",
    "product parameters": "produkta parametri",
    "qr code": "QR kods",
    "rate this product": "novērtēt šo produktu",
    "rating": "vērtējums",
    "read article": "lasīt rakstu",
    "shopping cart": "iepirkumu grozs",
    "submit": "iesniegt",
    "subscribe": "abonēt",
    "vat number": "PVN maksātāja numurs",
    "search": "meklēt",
    "amount": "daudzums",
    "billing address": "rēķina adrese",
    "address": "adrese",
    "addresses": "adreses",
    "buy again": "pirkt vēlreiz",
    "cancel": "atcelt",
    "cart": "grozs",
    "currency": "valūta",
    "country": "valsts",
    "date": "datums",
    "discount": "atlaide",
    "all rights reserved": "visas tiesības aizsargātas",
    "select a pick-up point": "izvēlieties saņemšanas punktu",
    "add a new address": "pievienot jaunu adresi",
    "add a rating": "pievienot vērtējumu",
    "create new password": "izveidot jaunu paroli",
    "newsletter unsubscribe": "atteikties no jaunumu vēstules",
    "product": "produkts",
    "recapitulation": "kopsavilkums",
    "total": "kopā",
    "zip": "pasta indekss",
    "zip code": "pasta indekss",
    "page not found.": "lapa nav atrasta.",
    "pcs": "gab.",
    "pcs.": "gab.",
    "with vat": "ar PVN",
    "without vat": "bez PVN",
    "customer account": "klienta konts",
    "login to my account": "pieslēgties manam kontam",
    "full name": "vārds un uzvārds",
    "city": "pilsēta",
    "ship to another address": "piegādāt uz citu adresi",
    "enter note for vendor": "ievadiet piezīmi pārdevējam",
    "your receipt": "jūsu kvīts",
    "i want to register": "vēlos reģistrēties",
    "customer data": "klienta dati",
    "this field is required": "šis lauks ir obligāts",
    "message": "ziņa",
    "not rated": "nav novērtēts",
    "email address": "e-pasta adrese",
    "save": "saglabāt",
    "already on stock": "jau noliktavā",
    "send rating": "nosūtīt vērtējumu",
    "name": "vārds",
    "add to cart": "pievienot grozam",
    "checkout": "apmaksa",
    "in stock": "ir noliktavā",
    "out of stock": "nav noliktavā",
    "delivery time": "piegādes laiks",
    "estimated delivery": "paredzamā piegāde",
    "free shipping": "bezmaksas piegāde",
    "customer support": "klientu atbalsts",
    "order summary": "pasūtījuma kopsavilkums",
    "continue shopping": "turpināt iepirkties",
    "remove": "noņemt",
    "edit": "rediģēt",
    "home": "sākumlapa",
    "category": "kategorija",
    "categories": "kategorijas",
    "new": "jaunums",
    "sale": "izpārdošana",
    "recommended": "ieteicams",
    "bestseller": "bestsellers",
    "show more": "rādīt vairāk",
    "show less": "rādīt mazāk",
    "filter": "filtrs",
    "sort by": "kārtot pēc",
    "lowest price": "zemākā cena",
    "highest price": "augstākā cena",
    "latest": "jaunākie",
    "popularity": "popularitāte",
    "customer reviews": "klientu atsauksmes",
    "related products": "saistītie produkti",
    "you may also like": "jums varētu patikt",
    "available": "pieejams",
    "unavailable": "nav pieejams",
    "coupon code": "kupona kods",
    "order note": "pasūtījuma piezīme",
    "payment method": "maksājuma veids",
    "shipping method": "piegādes veids",
    "place order": "veikt pasūtījumu",
    "continue": "turpināt",
    "back": "atpakaļ",
    "first name": "vārds",
    "last name": "uzvārds",
    "company": "uzņēmums",
    "company name": "uzņēmuma nosaukums",
    "company id": "uzņēmuma reģistrācijas numurs",
    "street": "iela",
    "house number": "mājas numurs",
    "note": "piezīme",
    "optional": "nav obligāti",
    "required": "obligāts",
    "login": "pieslēgties",
    "register": "reģistrēties",
    "sign in": "pieslēgties",
    "sign up": "reģistrēties",
    "log out": "izrakstīties",
    "logout": "izrakstīties",
    "email": "e-pasts",
    "telephone": "tālrunis",
    "mobile": "mobilais tālrunis",
    "order": "pasūtījums",
    "orders": "pasūtījumi",
    "invoice": "rēķins",
    "payment": "maksājums",
    "shipping": "piegāde",
    "delivery": "piegāde",
    "pick-up point": "saņemšanas punkts",
    "newsletter": "jaunumu vēstule",
    "terms and conditions": "noteikumi un nosacījumi",
    "privacy policy": "privātuma politika",
    "return policy": "atgriešanas politika",
    "returns": "atgriešana",
    "complaints": "sūdzības un pretenzijas",
    "compare": "salīdzināt",
    "wishlist": "vēlmju saraksts",
    "add to wishlist": "pievienot vēlmju sarakstam",
    "loading...": "ielādē...",
    "please wait": "lūdzu, uzgaidiet",
    "success": "veiksmīgi",
    "error": "kļūda",
    "thank you for your order": "paldies par jūsu pasūtījumu",
    "order confirmation": "pasūtījuma apstiprinājums",
    "discount code": "atlaižu kods",
    "apply coupon": "piemērot kuponu",
    "remove item": "noņemt preci",
    "empty cart": "iztukšot grozu",
    "subtotal": "starpsumma",
    "grand total": "kopējā summa",
    "tax": "nodoklis",
    "delivery address": "piegādes adrese",
    "account": "konts",
    "my account": "mans konts",
    "change password": "mainīt paroli",
    "forgot password": "aizmirsāt paroli",
    "reset password": "atiestatīt paroli",
    "save changes": "saglabāt izmaiņas",
    "close": "aizvērt",
    "yes": "jā",
    "no": "nē",
    "My order": "Mans pasūtījums",
    "MY ORDER:": "MANS PASŪTĪJUMS:",
    "View order details": "Skatīt pasūtījuma informāciju",
    "To view your order details, enter your order number and the email address used during checkout.": "Lai skatītu pasūtījuma informāciju, ievadiet pasūtījuma numuru un e-pasta adresi, ko izmantojāt pasūtījuma noformēšanas laikā.",
    "Order number": "Pasūtījuma numurs",
    "Order number*": "Pasūtījuma numurs*",
    "Order number *": "Pasūtījuma numurs *",
    "e.g. 123456": "piem., 123456",
    "Your email": "Jūsu e-pasta adrese",
    "Your email*": "Jūsu e-pasta adrese*",
    "Your email *": "Jūsu e-pasta adrese *",
    "e.g. john.doe@example.com": "piem., janis.berzins@example.com",
    "This is the email address used for the order.": "Šī ir e-pasta adrese, kas tika izmantota pasūtījuma noformēšanai.",
    "View order": "Skatīt pasūtījumu"
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
