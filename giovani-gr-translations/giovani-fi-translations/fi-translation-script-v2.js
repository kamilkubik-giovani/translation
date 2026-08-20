
(function () {
  'use strict';

  const CONFIG = {
  "allowedHosts": [
    "giovani.fi",
    "www.giovani.fi"
  ],
  "translations": {
    "My personal details": "Omat henkilötietoni",
    "My orders": "Omat tilaukseni",
    "I do not consent to receiving requests to review the online store and its products": "En suostu vastaanottamaan pyyntöjä verkkokaupan ja sen tuotteiden arvioimiseksi.",
    "My invoices": "Omat laskuni",
    "736 ratings": "736 arviota",
    "My proforma invoices": "Omat proformalaskuni",
    "Client proforma invoices": "Asiakkaan proformalaskut",
    "My credit notes": "Omat hyvityslaskuni",
    "Client credit notes": "Asiakkaan hyvityslaskut",
    "My delivery notes": "Omat lähetyslistani",
    "Client delivery notes": "Asiakkaan lähetyslistat",
    "My proof of payments received": "Omat vastaanotettujen maksujen tositteeni",
    "Proofs of payment received": "Vastaanotettujen maksujen tositteet",
    "My discounts": "Omat alennukseni",
    "My products ratings": "Omat tuotearvioni",
    "My products discussions": "Omat tuotekeskusteluni",
    "Client Center": "Asiakaskeskus",
    "My account settings": "Tilini asetukset",
    "Tax documents": "Veroasiakirjat",
    "My product discussions": "Omat tuotekeskusteluni",
    "You have no reserved order...": "Sinulla ei ole varattuja tilauksia...",
    "Personal data": "Henkilötiedot",
    "Phone": "Puhelin",
    "Your current password to approve changes": "Nykyinen salasana muutosten hyväksymiseksi",
    "Specify company details": "Anna yrityksen tiedot",
    "Street, House no.": "Katuosoite, talon nro",
    "Shipping addresses": "Toimitusosoitteet",
    "No entries found...": "Tietoja ei löytynyt...",
    "choose a gift": "valitse lahja",
    "choose a sample as a gift": "valitse näyte lahjaksi",
    "Memorized cards": "Tallennetut kortit",
    "You have no documents saved yet.": "Sinulla ei ole vielä tallennettuja asiakirjoja.",
    "Extra discount": "Lisäalennus",
    "No rating was found.": "Arvioita ei löytynyt.",
    "No comments found...": "Kommentteja ei löytynyt...",
    "subscribe to our newsletter": "tilaa uutiskirjeemme",
    "subscribe to newsletter": "tilaa uutiskirje",
    "follow on instagram": "seuraa meitä Instagramissa",
    "continue to blog": "siirry blogiin",
    "store rating": "kaupan arvio",
    "view more": "näytä lisää",
    "details": "lisätiedot",
    "ask a salesman": "kysy asiakaspalvelijalta",
    "i want to know more": "haluan tietää lisää",
    "contact form": "yhteydenottolomake",
    "my cart": "ostoskori",
    "back to shop": "takaisin kauppaan",
    "gift to buy": "lahja ostoksen yhteydessä",
    "do you need help? we are here for you:": "tarvitsetko apua? olemme täällä sinua varten:",
    "the basket is empty. fill it with joy!": "ostoskori on tyhjä. täytä se ilolla!",
    "items have been added to shopping cart": "tuotteet lisättiin ostoskoriin",
    "your cart is empty.": "ostoskori on tyhjä.",
    "fill it with joy!": "täytä se ilolla!",
    "shipping is free!": "toimitus on ilmainen!",
    "personal information and address": "henkilötiedot ja osoite",
    "availability": "saatavuus",
    "price": "hinta",
    "password": "salasana",
    "hide": "piilota",
    "contact us": "ota yhteyttä",
    "variants": "vaihtoehdot",
    "incl. vat:": "sis. ALV:",
    "incl. vat": "sis. ALV",
    "excl. vat": "alv 0 %",
    "i have a discount coupon:": "minulla on alennuskuponki:",
    "apply": "käytä",
    "enter coupon code": "syötä kuponkikoodi",
    "shipping is": "toimitus on",
    "free": "ilmainen",
    "free!": "ilmainen!",
    "vat": "ALV",
    "discount coupon:": "alennuskuponki:",
    "overall rating": "kokonaisarvio",
    "rate product": "arvioi tuote",
    "your rating:": "arviosi:",
    "product description": "tuotekuvaus",
    "quantity": "määrä",
    "price per unit": "yksikköhinta",
    "code": "koodi",
    "total price": "kokonaishinta",
    "rounding": "pyöristys",
    "price excl. vat": "hinta ilman ALV:tä",
    "price incl. vat": "hinta sis. ALV",
    "price to pay": "maksettava summa",
    "proceed to cart": "siirry ostoskoriin",
    "proceed to checkout": "siirry kassalle",
    "product name": "tuotteen nimi",
    "product parameters": "tuotteen ominaisuudet",
    "qr code": "QR-koodi",
    "rate this product": "arvioi tämä tuote",
    "rating": "arvio",
    "read article": "lue artikkeli",
    "shopping cart": "ostoskori",
    "submit": "lähetä",
    "subscribe": "tilaa",
    "vat number": "ALV-tunnus",
    "search": "hae",
    "amount": "määrä",
    "billing address": "laskutusosoite",
    "address": "osoite",
    "addresses": "osoitteet",
    "buy again": "osta uudelleen",
    "cancel": "peruuta",
    "cart": "ostoskori",
    "currency": "valuutta",
    "country": "maa",
    "date": "päivämäärä",
    "discount": "alennus",
    "all rights reserved": "kaikki oikeudet pidätetään",
    "select a pick-up point": "valitse noutopiste",
    "add a new address": "lisää uusi osoite",
    "add a rating": "lisää arvio",
    "create new password": "luo uusi salasana",
    "newsletter unsubscribe": "peruuta uutiskirje",
    "product": "tuote",
    "recapitulation": "yhteenveto",
    "total": "yhteensä",
    "zip": "postinumero",
    "zip code": "postinumero",
    "page not found.": "sivua ei löytynyt.",
    "pcs": "kpl",
    "pcs.": "kpl",
    "with vat": "sis. ALV",
    "without vat": "ilman ALV:tä",
    "customer account": "asiakastili",
    "login to my account": "kirjaudu tililleni",
    "full name": "koko nimi",
    "city": "kaupunki",
    "ship to another address": "toimita toiseen osoitteeseen",
    "enter note for vendor": "kirjoita viesti myyjälle",
    "your receipt": "kuittisi",
    "i want to register": "haluan rekisteröityä",
    "customer data": "asiakastiedot",
    "this field is required": "tämä kenttä on pakollinen",
    "message": "viesti",
    "not rated": "ei arvioitu",
    "email address": "sähköpostiosoite",
    "save": "tallenna",
    "already on stock": "jo varastossa",
    "send rating": "lähetä arvio",
    "name": "nimi",
    "add to cart": "lisää ostoskoriin",
    "checkout": "kassa",
    "in stock": "varastossa",
    "out of stock": "loppu varastosta",
    "delivery time": "toimitusaika",
    "estimated delivery": "arvioitu toimitus",
    "free shipping": "ilmainen toimitus",
    "customer support": "asiakaspalvelu",
    "order summary": "tilauksen yhteenveto",
    "continue shopping": "jatka ostoksia",
    "remove": "poista",
    "edit": "muokkaa",
    "home": "etusivu",
    "category": "tuoteryhmä",
    "categories": "tuoteryhmät",
    "new": "uutuus",
    "sale": "ale",
    "recommended": "suositeltu",
    "bestseller": "suosituin",
    "show more": "näytä lisää",
    "show less": "näytä vähemmän",
    "filter": "suodatin",
    "sort by": "järjestä",
    "lowest price": "halvin hinta",
    "highest price": "korkein hinta",
    "latest": "uusimmat",
    "popularity": "suosio",
    "customer reviews": "asiakasarviot",
    "related products": "liittyvät tuotteet",
    "you may also like": "saatat pitää myös näistä",
    "available": "saatavilla",
    "unavailable": "ei saatavilla",
    "coupon code": "kuponkikoodi",
    "order note": "tilauksen lisätiedot",
    "payment method": "maksutapa",
    "shipping method": "toimitustapa",
    "place order": "vahvista tilaus",
    "continue": "jatka",
    "back": "takaisin",
    "first name": "etunimi",
    "last name": "sukunimi",
    "company": "yritys",
    "company name": "yrityksen nimi",
    "company id": "Y-tunnus",
    "street": "katu",
    "house number": "talon numero",
    "note": "lisätieto",
    "optional": "valinnainen",
    "required": "pakollinen",
    "login": "kirjaudu",
    "register": "rekisteröidy",
    "sign in": "kirjaudu",
    "sign up": "rekisteröidy",
    "log out": "kirjaudu ulos",
    "logout": "kirjaudu ulos",
    "email": "sähköposti",
    "telephone": "puhelin",
    "mobile": "matkapuhelin",
    "order": "tilaus",
    "orders": "tilaukset",
    "invoice": "lasku",
    "payment": "maksu",
    "shipping": "toimitus",
    "delivery": "toimitus",
    "pick-up point": "noutopiste",
    "newsletter": "uutiskirje",
    "terms and conditions": "toimitusehdot",
    "privacy policy": "tietosuojakäytäntö",
    "return policy": "palautusehdot",
    "returns": "palautukset",
    "complaints": "reklamaatiot",
    "compare": "vertaa",
    "wishlist": "toivelista",
    "add to wishlist": "lisää toivelistalle",
    "loading...": "ladataan...",
    "please wait": "odota hetki",
    "success": "onnistui",
    "error": "virhe",
    "thank you for your order": "kiitos tilauksestasi",
    "order confirmation": "tilausvahvistus",
    "discount code": "alennuskoodi",
    "apply coupon": "käytä kuponki",
    "remove item": "poista tuote",
    "empty cart": "tyhjennä ostoskori",
    "subtotal": "välisumma",
    "grand total": "loppusumma",
    "tax": "vero",
    "delivery address": "toimitusosoite",
    "account": "tili",
    "my account": "oma tili",
    "change password": "vaihda salasana",
    "forgot password": "unohtunut salasana",
    "reset password": "nollaa salasana",
    "save changes": "tallenna muutokset",
    "close": "sulje",
    "yes": "kyllä",
    "no": "ei",
    "My order": "Oma tilaukseni",
    "MY ORDER:": "OMA TILAUKSENI:",
    "View order details": "Näytä tilauksen tiedot",
    "To view your order details, enter your order number and the email address used during checkout.": "Voit tarkastella tilauksesi tietoja syöttämällä tilausnumeron ja tilauksen yhteydessä käyttämäsi sähköpostiosoitteen.",
    "Order number": "Tilausnumero",
    "Order number*": "Tilausnumero*",
    "Order number *": "Tilausnumero *",
    "e.g. 123456": "esim. 123456",
    "Your email": "Sähköpostiosoitteesi",
    "Your email*": "Sähköpostiosoitteesi*",
    "Your email *": "Sähköpostiosoitteesi *",
    "e.g. john.doe@example.com": "esim. matti.meikalainen@example.com",
    "This is the email address used for the order.": "Tämä on tilauksen yhteydessä käytetty sähköpostiosoite.",
    "View order": "Näytä tilaus"
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
