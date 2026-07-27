(function () {
  'use strict';

  const ALLOWED_HOSTS = new Set([
    'giovani.lt',
    'www.giovani.lt'
  ]);

  if (!ALLOWED_HOSTS.has(window.location.hostname)) return;

  const translations = {
    "My personal details": "Mano asmeniniai duomenys",
    "My orders": "Mano užsakymai",
    "I do not consent to receiving request to review the online store and its products": "Nesutinku gauti prašymų įvertinti internetinę parduotuvę ir jos produktus.",
    "My invoices": "Mano sąskaitos faktūros",
    "736 ratings": "736 įvertinimai",
    "My proforma invoices": "Mano išankstinės sąskaitos",
    "Client proforma invoices": "Kliento išankstinės sąskaitos",
    "My credit notes": "Mano kreditinės sąskaitos",
    "Client credit notes": "Kliento kreditinės sąskaitos",
    "My delivery notes": "Mano važtaraščiai",
    "Client delivery notes": "Kliento važtaraščiai",
    "My proof of payments received": "Mano gautų mokėjimų patvirtinimai",
    "Proofs of payment received": "Gautų mokėjimų patvirtinimai",
    "My discounts": "Mano nuolaidos",
    "My products ratings": "Mano produktų įvertinimai",
    "My products discussions": "Mano produktų diskusijos",
    "Client Center": "Klientų centras",
    "My account settings": "Mano paskyros nustatymai",
    "Tax documents": "Mokesčių dokumentai",
    "My product discussions": "Mano produktų diskusijos",
    "You have no reserved order...": "Neturite rezervuotų užsakymų...",
    "Personal data": "Asmens duomenys",
    "Phone": "Telefonas",
    "Your current password to approve changes": "Dabartinis slaptažodis pakeitimams patvirtinti",
    "Specify company details": "Nurodykite įmonės duomenis",
    "Street, House no.": "Gatvė, namo nr.",
    "Shipping addresses": "Pristatymo adresai",
    "No entries found...": "Įrašų nerasta...",
    "choose a gift": "pasirinkite dovaną",
    "choose a sample as a gift": "pasirinkite mėginį dovanų",
    "Memorized cards": "Išsaugotos kortelės",
    "You have no documents saved yet.": "Dar neturite išsaugotų dokumentų.",
    "Extra discount": "Papildoma nuolaida",
    "No rating was found.": "Įvertinimų nerasta.",
    "No comments found...": "Komentarų nerasta...",
    "To complete your order, you need to choose a pickup point from the carrier. Please search for one and select it.": "Norėdami užbaigti užsakymą, pasirinkite vežėjo atsiėmimo punktą. Suraskite jį ir pažymėkite.",
    "The final discount can vary depending on the setting of the respective discounts at particular products.": "Galutinė nuolaida gali skirtis priklausomai nuo atskiriems produktams nustatytų nuolaidų.",
    "subscribe to our newsletter": "prenumeruokite mūsų naujienlaiškį",
    "subscribe to newsletter": "prenumeruoti naujienlaiškį",
    "follow on instagram": "sekite mus „Instagram“",
    "continue to blog": "eiti į tinklaraštį",
    "store rating": "parduotuvės įvertinimas",
    "view more": "rodyti daugiau",
    "details": "išsamiau",
    "ask a salesman": "paklausti konsultanto",
    "i want to know more": "noriu sužinoti daugiau",
    "contact form": "kontaktinė forma",
    "my cart": "mano krepšelis",
    "back to shop": "grįžti į parduotuvę",
    "gift to buy": "dovana perkant",
    "do you need help? we are here for you:": "reikia pagalbos? esame čia dėl jūsų:",
    "the basket is empty. fill it with joy!": "krepšelis tuščias. pripildykite jį džiaugsmo!",
    "do you have any questions? we'll answer them. please fill out your contact details carefully.": "turite klausimų? mes atsakysime. atidžiai užpildykite savo kontaktinius duomenis.",
    "items have been added to shopping cart": "prekės įdėtos į krepšelį",
    "your cart is empty.": "jūsų krepšelis tuščias.",
    "fill it with joy!": "pripildykite jį džiaugsmo!",
    "shipping is free!": "pristatymas nemokamas!",
    "personal information and address": "asmeniniai duomenys ir adresas",
    "availability": "prieinamumas",
    "price": "kaina",
    "the page is lost. we will try to find it.": "puslapis nerastas. pabandysime jį surasti.",
    "amount was successfully updated.": "kiekis sėkmingai atnaujintas.",
    "password": "slaptažodis",
    "hide": "slėpti",
    "contact us": "susisiekite su mumis",
    "variants": "variantai",
    "incl. vat:": "su PVM:",
    "incl. vat": "su PVM",
    "excl. vat": "be PVM",
    "i have a discount coupon:": "turiu nuolaidos kuponą:",
    "apply": "pritaikyti",
    "enter coupon code": "įveskite kupono kodą",
    "shipping is": "pristatymas yra",
    "free": "nemokamai",
    "free!": "nemokamai!",
    "vat": "PVM",
    "items have been added to": "prekės įdėtos į",
    "discount coupon:": "nuolaidos kuponas:",
    "overall rating": "bendras įvertinimas",
    "rate product": "įvertinti produktą",
    "your rating:": "jūsų įvertinimas:",
    "product description": "produkto aprašymas",
    "quantity": "kiekis",
    "price per unit": "vieneto kaina",
    "code": "kodas",
    "total price": "bendra kaina",
    "rounding": "apvalinimas",
    "price excl. vat": "kaina be PVM",
    "price incl. vat": "kaina su PVM",
    "in the tax regime oss": "pagal OSS mokesčių režimą",
    "price to pay": "mokėtina suma",
    "prices are excl. vat": "kainos nurodytos be PVM",
    "prices are incl. vat": "kainos nurodytos su PVM",
    "proceed to cart": "eiti į krepšelį",
    "proceed to checkout": "eiti į atsiskaitymą",
    "product name": "produkto pavadinimas",
    "product parameters": "produkto parametrai",
    "qr code": "QR kodas",
    "rate this product": "įvertinti šį produktą",
    "rating": "įvertinimas",
    "read article": "skaityti straipsnį",
    "shopping cart": "pirkinių krepšelis",
    "submit": "pateikti",
    "subscribe": "prenumeruoti",
    "vat number": "PVM mokėtojo kodas",
    "search": "ieškoti",
    "amount": "kiekis",
    "billing address": "sąskaitos adresas",
    "address": "adresas",
    "addresses": "adresai",
    "buy again": "pirkti dar kartą",
    "cancel": "atšaukti",
    "cart": "krepšelis",
    "currency": "valiuta",
    "country": "šalis",
    "date": "data",
    "discount": "nuolaida",
    "all rights reserved": "visos teisės saugomos",
    "select a pick-up point": "pasirinkite atsiėmimo punktą",
    "you have already voted": "jūs jau balsavote",
    "add a new address": "pridėti naują adresą",
    "add a rating": "pridėti įvertinimą",
    "create new password": "sukurti naują slaptažodį",
    "newsletter unsubscribe": "atsisakyti naujienlaiškio",
    "product": "produktas",
    "recapitulation": "suvestinė",
    "total": "iš viso",
    "zip": "pašto kodas",
    "zip code": "pašto kodas",
    "page not found.": "puslapis nerastas.",
    "pcs": "vnt.",
    "pcs.": "vnt.",
    "with vat": "su PVM",
    "without vat": "be PVM",
    "customer account": "kliento paskyra",
    "login to my account": "prisijungti prie mano paskyros",
    "full name": "vardas ir pavardė",
    "city": "miestas",
    "ship to another address": "pristatyti kitu adresu",
    "enter note for vendor": "įveskite pastabą pardavėjui",
    "your receipt": "jūsų kvitas",
    "i want to register": "noriu užsiregistruoti",
    "customer data": "kliento duomenys",
    "this field is required": "šį lauką būtina užpildyti",
    "message": "žinutė",
    "not rated": "neįvertinta",
    "email address": "el. pašto adresas",
    "save": "išsaugoti",
    "already on stock": "jau sandėlyje",
    "send rating": "siųsti įvertinimą",
    "how satisfied are you with the product?": "ar esate patenkinti produktu?",
    "how satisfied are you with the shop?": "ar esate patenkinti parduotuve?",
    "name": "vardas",
    "cart item was successfully deleted.": "prekė sėkmingai pašalinta iš krepšelio.",
    "forgotten password": "pamirštas slaptažodis",
    "please enter the email address, which you used in the registration details. we will send you a link to set your password.": "įveskite el. pašto adresą, kurį naudojote registruodamiesi. atsiųsime nuorodą slaptažodžiui nustatyti.",
    "add to cart": "į krepšelį",
    "checkout": "atsiskaitymas",
    "in stock": "turime sandėlyje",
    "out of stock": "neturime sandėlyje",
    "delivery time": "pristatymo laikas",
    "estimated delivery": "numatomas pristatymas",
    "free shipping": "nemokamas pristatymas",
    "customer support": "klientų aptarnavimas",
    "order summary": "užsakymo suvestinė",
    "continue shopping": "tęsti apsipirkimą",
    "remove": "pašalinti",
    "edit": "redaguoti",
    "home": "pagrindinis",
    "category": "kategorija",
    "categories": "kategorijos",
    "new": "naujiena",
    "sale": "išpardavimas",
    "recommended": "rekomenduojama",
    "bestseller": "perkamiausia",
    "show more": "rodyti daugiau",
    "show less": "rodyti mažiau",
    "filter": "filtras",
    "sort by": "rūšiuoti pagal",
    "lowest price": "mažiausia kaina",
    "highest price": "didžiausia kaina",
    "latest": "naujausi",
    "popularity": "populiarumas",
    "customer reviews": "klientų atsiliepimai",
    "related products": "susiję produktai",
    "you may also like": "jums taip pat gali patikti",
    "available": "prieinama",
    "unavailable": "neprieinama",
    "coupon code": "kupono kodas",
    "order note": "užsakymo pastaba",
    "payment method": "mokėjimo būdas",
    "shipping method": "pristatymo būdas",
    "place order": "pateikti užsakymą",
    "continue": "tęsti",
    "back": "atgal",
    "first name": "vardas",
    "last name": "pavardė",
    "company": "įmonė",
    "company name": "įmonės pavadinimas",
    "company id": "įmonės kodas",
    "street": "gatvė",
    "house number": "namo numeris",
    "note": "pastaba",
    "optional": "neprivaloma",
    "required": "privaloma",
    "login": "prisijungti",
    "register": "registruotis",
    "sign in": "prisijungti",
    "sign up": "registruotis",
    "log out": "atsijungti",
    "logout": "atsijungti",
    "email": "el. paštas",
    "telephone": "telefonas",
    "mobile": "mobilusis telefonas",
    "order": "užsakymas",
    "orders": "užsakymai",
    "invoice": "sąskaita faktūra",
    "payment": "mokėjimas",
    "shipping": "siuntimas",
    "delivery": "pristatymas",
    "pick-up point": "atsiėmimo punktas",
    "newsletter": "naujienlaiškis",
    "terms and conditions": "taisyklės ir sąlygos",
    "privacy policy": "privatumo politika",
    "return policy": "grąžinimo politika",
    "returns": "grąžinimai",
    "complaints": "skundai ir pretenzijos",
    "compare": "palyginti",
    "wishlist": "norų sąrašas",
    "add to wishlist": "pridėti į norų sąrašą",
    "loading...": "kraunama...",
    "please wait": "prašome palaukti",
    "success": "sėkmingai",
    "error": "klaida",
    "thank you for your order": "dėkojame už jūsų užsakymą",
    "order confirmation": "užsakymo patvirtinimas",
    "discount code": "nuolaidos kodas",
    "apply coupon": "pritaikyti kuponą",
    "remove item": "pašalinti prekę",
    "empty cart": "ištuštinti krepšelį",
    "subtotal": "tarpinė suma",
    "grand total": "galutinė suma",
    "tax": "mokestis",
    "delivery address": "pristatymo adresas",
    "account": "paskyra",
    "my account": "mano paskyra",
    "change password": "keisti slaptažodį",
    "forgot password": "pamiršau slaptažodį",
    "reset password": "atkurti slaptažodį",
    "save changes": "išsaugoti pakeitimus",
    "close": "uždaryti",
    "yes": "taip",
    "no": "ne",

    "MY ORDER:": "MANO UŽSAKYMAS:",
    "My order": "Mano užsakymas",
    "View order details": "Peržiūrėti užsakymo informaciją",
    "To view your order details, enter your order number and the email address used during checkout.": "Norėdami peržiūrėti užsakymo informaciją, įveskite užsakymo numerį ir el. pašto adresą, kurį naudojote pateikdami užsakymą.",
    "Order number": "Užsakymo numeris",
    "Order number*": "Užsakymo numeris*",
    "Order number *": "Užsakymo numeris *",
    "e.g. 123456": "pvz., 123456",
    "Your email": "Jūsų el. paštas",
    "Your email*": "Jūsų el. paštas*",
    "Your email *": "Jūsų el. paštas *",
    "e.g. john.doe@example.com": "pvz., john.doe@example.com",
    "This is the email address used for the order.": "Tai el. pašto adresas, kuris buvo naudojamas pateikiant užsakymą.",
    "View order": "Peržiūrėti užsakymą"
  };

  const ATTRIBUTES = [
    'placeholder',
    'title',
    'aria-label',
    'data-title',
    'data-label',
    'alt'
  ];

  const SKIP_TAGS = new Set([
    'SCRIPT',
    'STYLE',
    'NOSCRIPT',
    'IFRAME',
    'CODE',
    'PRE'
  ]);

  const observedShadowRoots = new WeakSet();

  function normalize(value) {
    return String(value || '')
      .replace(/\u00a0/g, ' ')
      .replace(/[\r\n\t]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();
  }

  const normalizedTranslations = new Map(
    Object.entries(translations).map(([source, target]) => [
      normalize(source),
      target
    ])
  );

  function translateString(value) {
    const key = normalize(value);

    if (!key) return null;

    return normalizedTranslations.get(key) || null;
  }

  function translateTextNode(node) {
    if (!node || node.nodeType !== Node.TEXT_NODE) return;
    if (!node.parentElement) return;
    if (SKIP_TAGS.has(node.parentElement.tagName)) return;

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

      if (translated) {
        element.setAttribute(attribute, translated);
      }
    }

    if (element.hasAttribute('value')) {
      const original = element.getAttribute('value');
      const translated = translateString(original);

      if (translated) {
        element.setAttribute('value', translated);

        if (
          element.tagName === 'INPUT' ||
          element.tagName === 'BUTTON'
        ) {
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
    ) {
      return;
    }

    if (
      root.nodeType === Node.ELEMENT_NODE &&
      SKIP_TAGS.has(root.tagName)
    ) {
      return;
    }

    if (root.nodeType === Node.ELEMENT_NODE) {
      translateElementAttributes(root);
    }

    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          if (
            node.nodeType === Node.ELEMENT_NODE &&
            SKIP_TAGS.has(node.tagName)
          ) {
            return NodeFilter.FILTER_REJECT;
          }

          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    let node;

    while ((node = walker.nextNode())) {
      if (node.nodeType === Node.TEXT_NODE) {
        translateTextNode(node);
      } else {
        translateElementAttributes(node);
      }
    }
  }

  function translateShadowRoot(root) {
    if (!root) return;

    translateSubtree(root);

    root.querySelectorAll('[placeholder]').forEach((element) => {
      const placeholder = normalize(
        element.getAttribute('placeholder')
      );

      if (placeholder === normalize('e.g. 123456')) {
        element.setAttribute(
          'placeholder',
          'pvz., 123456'
        );
      }

      if (
        placeholder ===
        normalize('e.g. john.doe@example.com')
      ) {
        element.setAttribute(
          'placeholder',
          'pvz., john.doe@example.com'
        );
      }
    });
  }

  function observeShadowRoot(root) {
    if (!root || observedShadowRoots.has(root)) return;

    observedShadowRoots.add(root);

    const observer = new MutationObserver(() => {
      translateShadowRoot(root);
      findAndTranslateShadowRoots(root);
    });

    observer.observe(root, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: [
        ...ATTRIBUTES,
        'value'
      ]
    });
  }

  function findAndTranslateShadowRoots(scope = document) {
    if (!scope?.querySelectorAll) return;

    scope.querySelectorAll('*').forEach((element) => {
      if (!element.shadowRoot) return;

      translateShadowRoot(element.shadowRoot);
      observeShadowRoot(element.shadowRoot);

      findAndTranslateShadowRoots(element.shadowRoot);
    });
  }

  function hideUndefined(root = document) {
    if (!root?.querySelectorAll) return;

    root.querySelectorAll('*').forEach((element) => {
      if (
        element.children.length === 0 &&
        normalize(element.textContent) === 'undefined'
      ) {
        element.style.display = 'none';
      }
    });
  }

  function translatePage() {
    if (!document.body) return;

    translateSubtree(document.body);
    findAndTranslateShadowRoots(document);
    hideUndefined(document);
  }

  function observeDocument() {
    if (!document.body) return;

    let scheduled = false;

    const observer = new MutationObserver(() => {
      if (scheduled) return;

      scheduled = true;

      window.requestAnimationFrame(() => {
        scheduled = false;
        translatePage();
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: [
        ...ATTRIBUTES,
        'value'
      ]
    });
  }

  function patchAttachShadow() {
    if (
      !window.Element ||
      !Element.prototype.attachShadow ||
      Element.prototype.attachShadow.__giovaniLtPatched
    ) {
      return;
    }

    const originalAttachShadow =
      Element.prototype.attachShadow;

    function patchedAttachShadow(options) {
      const shadowRoot =
        originalAttachShadow.call(this, options);

      window.setTimeout(() => {
        translateShadowRoot(shadowRoot);
        observeShadowRoot(shadowRoot);
      }, 0);

      return shadowRoot;
    }

    patchedAttachShadow.__giovaniLtPatched = true;

    Element.prototype.attachShadow =
      patchedAttachShadow;
  }


  function translateMyOrderForm() {
    const replacements = {
      "View order details": "Peržiūrėti užsakymo informaciją",
      "To view your order details, enter your order number and the email address used during checkout.":
        "Norėdami peržiūrėti užsakymo informaciją, įveskite užsakymo numerį ir el. pašto adresą, kurį naudojote pateikdami užsakymą.",
      "Order number": "Užsakymo numeris",
      "Your email": "Jūsų el. paštas",
      "This is the email address used for the order.":
        "Tai el. pašto adresas, kuris buvo naudojamas pateikiant užsakymą.",
      "View order": "Peržiūrėti užsakymą"
    };

    const placeholderReplacements = {
      "e.g. 123456": "pvz., 123456",
      "e.g. john.doe@example.com": "pvz., john.doe@example.com"
    };

    document.querySelectorAll('*').forEach((host) => {
      const root = host.shadowRoot;
      if (!root) return;

      const walker = document.createTreeWalker(
        root,
        NodeFilter.SHOW_TEXT
      );

      const textNodes = [];
      while (walker.nextNode()) {
        textNodes.push(walker.currentNode);
      }

      textNodes.forEach((node) => {
        const original = node.nodeValue || '';
        const clean = original
          .replace(/\u00a0/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();

        const translated = replacements[clean];
        if (!translated) return;

        const leading = original.match(/^\s*/)?.[0] || '';
        const trailing = original.match(/\s*$/)?.[0] || '';
        node.nodeValue = leading + translated + trailing;
      });

      root.querySelectorAll('[placeholder]').forEach((element) => {
        const original = String(element.getAttribute('placeholder') || '')
          .replace(/\u00a0/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();

        const translated = placeholderReplacements[original];
        if (translated) {
          element.setAttribute('placeholder', translated);
        }
      });

      if (!root.__giovaniMyOrderObserver) {
        let scheduled = false;

        const observer = new MutationObserver(() => {
          if (scheduled) return;
          scheduled = true;

          window.requestAnimationFrame(() => {
            scheduled = false;
            translateMyOrderForm();
          });
        });

        observer.observe(root, {
          childList: true,
          subtree: true,
          characterData: true,
          attributes: true,
          attributeFilter: ['placeholder', 'value']
        });

        root.__giovaniMyOrderObserver = observer;
      }
    });
  }

  function start() {
    patchAttachShadow();
    translatePage();
    translateMyOrderForm();
    observeDocument();

    const delays = [
      100,
      250,
      500,
      750,
      1000,
      1500,
      2000,
      3000,
      5000,
      8000,
      12000
    ];

    delays.forEach((delay) => {
      window.setTimeout(() => {
        translatePage();
        translateMyOrderForm();
      }, delay);
    });

    window.setInterval(() => {
      findAndTranslateShadowRoots(document);
      translateMyOrderForm();
    }, 1000);

    window.addEventListener(
      'load',
      translatePage
    );

    window.addEventListener(
      'pageshow',
      translatePage
    );

    document.addEventListener(
      'visibilitychange',
      () => {
        if (!document.hidden) {
          translatePage();
        }
      }
    );
  }

  if (document.readyState === 'loading') {
    document.addEventListener(
      'DOMContentLoaded',
      start,
      { once: true }
    );
  } else {
    start();
  }
})();
