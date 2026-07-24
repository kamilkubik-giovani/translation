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
    "no": "ne"
  };

  const ATTRIBUTES = ['placeholder', 'title', 'aria-label', 'data-title'];
  const SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'IFRAME', 'CODE', 'PRE']);

  function normalize(value) {
    return String(value || '')
      .replace(/\u00a0/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();
  }

  const normalizedTranslations = new Map(
    Object.entries(translations).map(([source, target]) => [normalize(source), target])
  );

  function translateString(value) {
    const key = normalize(value);
    return normalizedTranslations.get(key) || null;
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

    for (const attribute of ATTRIBUTES) {
      if (!element.hasAttribute(attribute)) continue;
      const original = element.getAttribute(attribute);
      const translated = translateString(original);
      if (translated) element.setAttribute(attribute, translated);
    }

    if ((element.tagName === 'INPUT' || element.tagName === 'BUTTON') && element.hasAttribute('value')) {
      const original = element.getAttribute('value');
      const translated = translateString(original);
      if (translated) element.setAttribute('value', translated);
    }
  }

  function translateSubtree(root) {
    if (!root) return;

    if (root.nodeType === Node.TEXT_NODE) {
      translateTextNode(root);
      return;
    }

    if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) return;
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

  function hideUndefined(root) {
    const scope = root?.querySelectorAll ? root : document;
    scope.querySelectorAll('*').forEach((element) => {
      if (element.children.length === 0 && normalize(element.textContent) === 'undefined') {
        element.style.display = 'none';
      }
    });
  }

  function start() {
    translateSubtree(document.body);
    hideUndefined(document.body);

    let scheduled = false;
    const pendingNodes = new Set();

    const flush = () => {
      scheduled = false;
      pendingNodes.forEach((node) => translateSubtree(node));
      pendingNodes.clear();
      hideUndefined(document.body);
    };

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => pendingNodes.add(node));
        if (mutation.type === 'characterData') pendingNodes.add(mutation.target);
        if (mutation.type === 'attributes') pendingNodes.add(mutation.target);
      }

      if (!scheduled) {
        scheduled = true;
        window.requestAnimationFrame(flush);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: [...ATTRIBUTES, 'value']
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();
