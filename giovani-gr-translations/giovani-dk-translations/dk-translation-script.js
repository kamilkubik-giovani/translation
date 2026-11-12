(function () {
  'use strict';

  const ALLOWED_HOSTS = new Set([
    'giovani.dk',
    'www.giovani.dk'
  ]);

  if (!ALLOWED_HOSTS.has(window.location.hostname)) return;

  const translations = {
    'My personal details': 'Mine personlige oplysninger',
    'My orders': 'Mine ordrer',
    'My invoices': 'Mine fakturaer',
    'My proforma invoices': 'Mine proformafakturaer',
    'Client proforma invoices': 'Kundens proformafakturaer',
    'My credit notes': 'Mine kreditnotaer',
    'Client credit notes': 'Kundens kreditnotaer',
    'My delivery notes': 'Mine følgesedler',
    'Client delivery notes': 'Kundens følgesedler',
    'My proof of payments received': 'Mine modtagne betalingskvitteringer',
    'Proofs of payment received': 'Modtagne betalingskvitteringer',
    'My discounts': 'Mine rabatter',
    'My products ratings': 'Mine produktanmeldelser',
    'My products discussions': 'Mine produktdiskussioner',
    'Client Center': 'Kundecenter',
    'My account settings': 'Mine kontoindstillinger',
    'Tax documents': 'Skattedokumenter',
    'My product discussions': 'Mine produktdiskussioner',
    'Personal data': 'Personlige oplysninger',
    'Phone': 'Telefon',
    'Specify company details': 'Angiv virksomhedsoplysninger',
    'Street, House no.': 'Gade, husnr.',
    'Shipping addresses': 'Leveringsadresser',
    'No entries found...': 'Ingen poster fundet...',
    'choose a gift': 'Vælg en gave',
    'choose a sample as a gift': 'Vælg en prøve som gave',
    'Memorized cards': 'Gemte kort',
    'You have no documents saved yet.': 'Du har endnu ingen gemte dokumenter.',
    'Extra discount': 'Ekstra rabat',
    'No rating was found.': 'Ingen anmeldelse blev fundet.',
    'No comments found...': 'Ingen kommentarer fundet...',
    'subscribe to our newsletter': 'Tilmeld dig vores nyhedsbrev',
    'subscribe to newsletter': 'Tilmeld dig nyhedsbrevet',
    'follow on instagram': 'Følg os på Instagram',
    'continue to blog': 'Fortsæt til bloggen',
    'store rating': 'Butiksanmeldelse',
    'view more': 'Se mere',
    'details': 'Detaljer',
    'ask a salesman': 'Spørg en sælger',
    'i want to know more': 'Jeg vil vide mere',
    'contact form': 'Kontaktformular',
    'my cart': 'Min kurv',
    'back to shop': 'Tilbage til butikken',
    'gift to buy': 'Gave ved køb',
    'do you need help? we are here for you:': 'Har du brug for hjælp? Vi er her for dig:',
    'the basket is empty. fill it with joy!': 'Kurven er tom. Fyld den med glæde!',
    'do you have any questions? we\'ll answer them. please fill out your contact details carefully.': 'Har du spørgsmål? Vi svarer gerne. Udfyld venligst dine kontaktoplysninger omhyggeligt.',
    'items have been added to shopping cart': 'Varerne er blevet tilføjet til kurven',
    'your cart is empty.': 'Din kurv er tom.',
    'fill it with joy!': 'Fyld den med glæde!',
    'shipping is free!': 'Fragten er gratis!',
    'personal information and address': 'Personlige oplysninger og adresse',
    'availability': 'Tilgængelighed',
    'price': 'Pris',
    'the page is lost. we will try to find it.': 'Siden blev ikke fundet. Vi prøver at finde den.',
    'amount was successfully updated.': 'Antallet blev opdateret.',
    'password': 'Adgangskode',
    'hide': 'Skjul',
    'contact us': 'Kontakt os',
    'variants': 'Varianter',
    'incl. vat:': 'Inkl. moms:',
    'incl. vat': 'Inkl. moms',
    'excl. vat': 'Ekskl. moms',
    'i have a discount coupon:': 'Jeg har en rabatkupon:',
    'i have a discount coupon': 'Jeg har en rabatkupon',
    'apply': 'Anvend',
    'enter coupon code': 'Indtast rabatkode',
    'shipping is': 'Fragten er',
    'free': 'Gratis',
    'free!': 'Gratis!',
    'vat': 'Moms',
    'items have been added to': 'Varerne er blevet tilføjet til',
    'discount coupon:': 'Rabatkupon:',
    'overall rating': 'Samlet vurdering',
    'rate product': 'Bedøm produkt',
    'your rating:': 'Din vurdering:',
    'product description': 'Produktbeskrivelse',
    'quantity': 'Antal',
    'price per unit': 'Pris pr. enhed',
    'code': 'Kode',
    'total price': 'Samlet pris',
    'rounding': 'Afrunding',
    'price excl. vat': 'Pris ekskl. moms',
    'price incl. vat': 'Pris inkl. moms',
    'in the tax regime oss': 'Under OSS-momsordningen',
    'price to pay': 'Beløb til betaling',
    'prices are excl. vat': 'Priser er ekskl. moms',
    'prices are incl. vat': 'Priser er inkl. moms',
    'proceed to cart': 'Gå til kurven',
    'proceed to checkout': 'Fortsæt til kassen',
    'product name': 'Produktnavn',
    'product parameters': 'Produktparametre',
    'qr code': 'QR-kode',
    'rate this product': 'Bedøm dette produkt',
    'rating': 'Vurdering',
    'read article': 'Læs artikel',
    'shopping cart': 'Indkøbskurv',
    'submit': 'Send',
    'subscribe': 'Tilmeld',
    'vat number': 'CVR-/momsnummer',
    'search': 'Søg',
    'amount': 'Antal',
    'billing address': 'Faktureringsadresse',
    'address': 'Adresse',
    'addresses': 'Adresser',
    'buy again': 'Køb igen',
    'cancel': 'Annuller',
    'cart': 'Kurv',
    'currency': 'Valuta',
    'country': 'Land',
    'date': 'Dato',
    'discount': 'Rabat',
    'all rights reserved': 'Alle rettigheder forbeholdes',
    'select a pick-up point': 'Vælg et afhentningssted',
    'you have already voted': 'Du har allerede stemt',
    'add a new address': 'Tilføj ny adresse',
    'add a rating': 'Tilføj vurdering',
    'create new password': 'Opret ny adgangskode',
    'newsletter unsubscribe': 'Afmeld nyhedsbrev',
    'product': 'Produkt',
    'recapitulation': 'Oversigt',
    'total': 'I alt',
    'zip': 'Postnummer',
    'zip code': 'Postnummer',
    'page not found.': 'Siden blev ikke fundet.',
    'pcs': 'Stk.',
    'pcs.': 'Stk.',
    'with vat': 'Med moms',
    'without vat': 'Uden moms',
    'customer account': 'Kundekonto',
    'login to my account': 'Log ind på min konto',
    'full name': 'Fulde navn',
    'city': 'By',
    ' Lynlås': 'By',
   
    'ship to another address': 'Send til en anden adresse',
    'enter note for vendor': 'Skriv en note til sælgeren',
    'your receipt': 'Din kvittering',
    'i want to register': 'Jeg vil registrere mig',
    'customer data': 'Kundeoplysninger',
    'this field is required': 'Dette felt er påkrævet',
    'message': 'Besked',
    'not rated': 'Ikke bedømt',
    'email address': 'E-mailadresse',
    'save': 'Gem',
    'already on stock': 'Allerede på lager',
    'send rating': 'Send vurdering',
    'how satisfied are you with the product?': 'Hvor tilfreds er du med produktet?',
    'how satisfied are you with the shop?': 'Hvor tilfreds er du med butikken?',
    'name': 'Navn',
    'cart item was successfully deleted.': 'Varen blev fjernet fra kurven.',
    'forgotten password': 'Glemt adgangskode',
    'add to cart': 'Læg i kurv',
    'checkout': 'Kasse',
    'in stock': 'På lager',
    'out of stock': 'Udsolgt',
    'delivery time': 'Leveringstid',
    'estimated delivery': 'Forventet levering',
    'free shipping': 'Gratis fragt',
    'customer support': 'Kundeservice',
    'order summary': 'Ordreoversigt',
    'continue shopping': 'Fortsæt med at handle',
    'remove': 'Fjern',
    'edit': 'Rediger',
    'home': 'Forside',
    'category': 'Kategori',
    'categories': 'Kategorier',
    'new': 'Ny',
    'sale': 'Tilbud',
    'recommended': 'Anbefalet',
    'bestseller': 'Bestseller',
    'show more': 'Vis mere',
    'show less': 'Vis mindre',
    'filter': 'Filtrer',
    'sort by': 'Sorter efter',
    'lowest price': 'Laveste pris',
    'highest price': 'Højeste pris',
    'latest': 'Nyeste',
    'popularity': 'Popularitet',
    'customer reviews': 'Kundeanmeldelser',
    'related products': 'Relaterede produkter',
    'you may also like': 'Du vil måske også kunne lide',
    'available': 'Tilgængelig',
    'unavailable': 'Ikke tilgængelig',
    'coupon code': 'Rabatkode',
    'order note': 'Ordrenote',
    'payment method': 'Betalingsmetode',
    'shipping method': 'Leveringsmetode',
    'place order': 'Afgiv ordre',
    'continue': 'Fortsæt',
    'back': 'Tilbage',
    'first name': 'Fornavn',
    'last name': 'Efternavn',
    'company': 'Virksomhed',
    'company name': 'Virksomhedsnavn',
    'company id': 'CVR-nummer',
    'street': 'Gade',
    'house number': 'Husnummer',
    'note': 'Bemærkning',
    'optional': 'Valgfrit',
    'required': 'Påkrævet',
    'login': 'Log ind',
    'register': 'Registrer',
    'sign in': 'Log ind',
    'sign up': 'Opret konto',
    'log out': 'Log ud',
    'logout': 'Log ud',
    'email': 'E-mail',
    'telephone': 'Telefon',
    'mobile': 'Mobil',
    'order': 'Ordre',
    'orders': 'Ordrer',
    'invoice': 'Faktura',
    'payment': 'Betaling',
    'shipping': 'Fragt',
    'delivery': 'Levering',
    'pick-up point': 'Afhentningssted',
    'newsletter': 'Nyhedsbrev',
    'terms and conditions': 'Handelsbetingelser',
    'privacy policy': 'Privatlivspolitik',
    'return policy': 'Returpolitik',
    'returns': 'Returneringer',
    'complaints': 'Reklamationer',
    'compare': 'Sammenlign',
    'wishlist': 'Ønskeliste',
    'add to wishlist': 'Tilføj til ønskeliste',
    'loading...': 'Indlæser...',
    'please wait': 'Vent venligst',
    'success': 'Succes',
    'error': 'Fejl',
    'thank you for your order': 'Tak for din ordre',
    'order confirmation': 'Ordrebekræftelse',
    'discount code': 'Rabatkode',
    'apply coupon': 'Anvend rabatkupon',
    'remove item': 'Fjern vare',
    'empty cart': 'Tøm kurv',
    'subtotal': 'Subtotal',
    'grand total': 'Samlet beløb',
    'tax': 'Moms',
    'delivery address': 'Leveringsadresse',
    'account': 'Konto',
    'my account': 'Min konto',
    'change password': 'Skift adgangskode',
    'forgot password': 'Glemt adgangskode',
    'reset password': 'Nulstil adgangskode',
    'save changes': 'Gem ændringer',
    'close': 'Luk',
    'yes': 'Ja',
    'no': 'Nej',
     'Lynlås': 'Postnummer',
  

    'My order': 'Min ordre',
    'View order details': 'Se ordreoplysninger',
    'Order number': 'Ordrenummer',
    'Your email': 'Din e-mail',
    'View order': 'Se ordre',
    'I do not consent to receiving request to review the online store and its products': 'Jeg ønsker ikke at modtage anmodninger om at anmelde webshoppen og dens produkter',

    'Buy for': 'Køb for',
    'and get': 'og få',
    'free shipping!': 'gratis fragt!'
  };

  const partialTranslations = [
    [/I do not consent to receiving request to review the online store and its products/gi, 'Jeg ønsker ikke at modtage anmodninger om at anmelde webshoppen og dens produkter'],
    [/I do not consent to receiving request to review online store and its products/gi, 'Jeg ønsker ikke at modtage anmodninger om at anmelde webshoppen og dens produkter'],
    [/Buy for/gi, 'Køb for'],
    [/and get/gi, 'og få'],
    [/free shipping!/gi, 'gratis fragt!']
  ];

  const placeholderTranslations = {
    'e.g. 123456': 'f.eks. 123456',
    'e.g. john.doe@example.com': 'f.eks. john.doe@example.com'
  };

  const SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'IFRAME', 'CODE', 'PRE', 'TEXTAREA']);

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
    partialTranslations.forEach(([pattern, replacement]) => {
      result = result.replace(pattern, replacement);
    });
    return result;
  }

  function translateTextNode(node) {
    if (!node || node.nodeType !== Node.TEXT_NODE || !node.parentElement) return;
    if (SKIP_TAGS.has(node.parentElement.tagName)) return;

    const original = node.nodeValue;
    const exact = getExactTranslation(original);

    if (exact) {
      const leading = original.match(/^\s*/)?.[0] || '';
      const trailing = original.match(/\s*$/)?.[0] || '';
      node.nodeValue = leading + exact + trailing;
      return;
    }

    const partial = applyPartialTranslations(original);
    if (partial !== original) node.nodeValue = partial;
  }

  function translateAttributes(root) {
    if (!root || !root.querySelectorAll) return;

    root.querySelectorAll('[placeholder]').forEach((el) => {
      const key = cleanText(el.getAttribute('placeholder'));
      if (placeholderTranslations[key]) el.setAttribute('placeholder', placeholderTranslations[key]);
    });

    root.querySelectorAll('[title], [aria-label]').forEach((el) => {
      ['title', 'aria-label'].forEach((attr) => {
        if (!el.hasAttribute(attr)) return;
        const original = el.getAttribute(attr);
        const exact = getExactTranslation(original);
        const translated = exact || applyPartialTranslations(original);
        if (translated && translated !== original) el.setAttribute(attr, translated);
      });
    });

    root.querySelectorAll('input, button').forEach((el) => {
      if (!el.value) return;
      const exact = getExactTranslation(el.value);
      const translated = exact || applyPartialTranslations(el.value);
      if (translated && translated !== el.value) {
        el.value = translated;
        el.setAttribute('value', translated);
      }
    });
  }

  function translateRoot(root) {
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) return translateTextNode(root);

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (node.parentElement && SKIP_TAGS.has(node.parentElement.tagName)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    while (walker.nextNode()) translateTextNode(walker.currentNode);
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

  function translateEverything() {
    if (!document.body) return;
    translateRoot(document.body);
    translateAllShadowRoots();
  }

  function start() {
    translateEverything();

    let scheduled = false;
    const observer = new MutationObserver(() => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        translateEverything();
      });
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ['placeholder', 'value', 'title', 'aria-label']
    });

    [250, 750, 1500, 3000].forEach((delay) => setTimeout(translateEverything, delay));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();
