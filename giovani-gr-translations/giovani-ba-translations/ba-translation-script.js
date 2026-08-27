(function () {
  'use strict';

  if (
    window.location.hostname !== 'giovani.ba' &&
    window.location.hostname !== 'www.giovani.ba'
  ) {
    return;
  }

  const translations = {
    'My personal details': 'Moji lični podaci',
    'My orders': 'Moje narudžbe',
    'My invoices': 'Moje fakture',
    '736 ratings': '736 ocjena',
    'My proforma invoices': 'Moje profakture',
    'Client proforma invoices': 'Profakture klijenta',
    'My credit notes': 'Moje knjižne odobrenice',
    'Client credit notes': 'Knjižne odobrenice klijenta',
    'My delivery notes': 'Moje otpremnice',
    'Client delivery notes': 'Otpremnice klijenta',
    'My proof of payments received': 'Moje potvrde o primljenim uplatama',
    'Proofs of payment received': 'Potvrde o primljenim uplatama',
    'My discounts': 'Moji popusti',
    'My products ratings': 'Moje ocjene proizvoda',
    'My products discussions': 'Moje diskusije o proizvodima',
    'Client Center': 'Korisnički centar',
    'My account settings': 'Postavke mog računa',
    'Tax documents': 'Porezni dokumenti',
    'My product discussions': 'Moje diskusije o proizvodima',
    'You have no reserved order...': 'Nemate rezervisanu narudžbu...',
    'Personal data': 'Lični podaci',
    'Phone': 'Telefon',
    'Your current password to approve changes': 'Vaša trenutna lozinka za potvrdu izmjena',
    'Specify company details': 'Unesite podatke o firmi',
    'Street, House no.': 'Ulica, broj kuće',
    'Shipping addresses': 'Adrese za dostavu',
    'No entries found...': 'Nema pronađenih unosa...',
    'choose a gift': 'Odaberite poklon',
    'choose a sample as a gift': 'Odaberite uzorak kao poklon',
    'Memorized cards': 'Sačuvane kartice',
    'You have no documents saved yet.': 'Još nemate sačuvanih dokumenata.',
    'Extra discount': 'Dodatni popust',
    'No rating was found.': 'Nije pronađena nijedna ocjena.',
    'No comments found...': 'Nema pronađenih komentara...',
    'To complete your order, you need to choose a pickup point from the carrier. Please search for one and select it.': 'Da biste završili narudžbu, potrebno je odabrati mjesto preuzimanja kod dostavljača. Pronađite ga i odaberite.',
    'The final discount can vary depending on the setting of the respective discounts at particular products.': 'Konačni popust može varirati u zavisnosti od postavki popusta za pojedine proizvode.',
    'subscribe to our newsletter': 'Pretplatite se na naš newsletter',
    'subscribe to newsletter': 'Pretplatite se na newsletter',
    'follow on instagram': 'Pratite nas na Instagramu',
    'continue to blog': 'Nastavite na blog',
    'store rating': 'Ocjena trgovine',
    'view more': 'Prikaži više',
    'details': 'Detalji',
    'ask a salesman': 'Pitajte prodavača',
    'i want to know more': 'Želim saznati više',
    'contact form': 'Kontakt obrazac',
    'undefined': 'undefined',
    'my cart': 'Moja korpa',
    'back to shop': 'Nazad u trgovinu',
    'gift to buy': 'Poklon uz kupovinu',
    'do you need help? we are here for you:': 'Trebate pomoć? Tu smo za vas:',
    'the basket is empty. fill it with joy!': 'Korpa je prazna. Ispunite je radošću!',
    "do you have any questions? we'll answer them. please fill out your contact details carefully.": 'Imate pitanja? Rado ćemo odgovoriti. Pažljivo unesite svoje kontakt podatke.',
    'items have been added to shopping cart': 'Proizvodi su dodani u korpu',
    'your cart is empty.': 'Vaša korpa je prazna.',
    'fill it with joy!': 'Ispunite je radošću!',
    'shipping is free!': 'Dostava je besplatna!',
    'personal information and address': 'Lični podaci i adresa',
    'availability': 'Dostupnost',
    'price': 'Cijena',
    'the page is lost. we will try to find it.': 'Stranica je izgubljena. Pokušat ćemo je pronaći.',
    'amount was successfully updated.': 'Količina je uspješno ažurirana.',
    'password': 'Lozinka',
    'hide': 'Sakrij',
    'contact us': 'Kontaktirajte nas',
    'variants': 'Varijante',
    'incl. vat:': 'Sa PDV-om:',
    'incl. vat': 'Sa PDV-om',
    'excl. vat': 'Bez PDV-a',
    'i have a discount coupon:': 'Imam kupon za popust:',
    'apply': 'Primijeni',
    'enter coupon code': 'Unesite kod kupona',
    'shipping is': 'Dostava je',
    'free': 'Besplatno',
    'free!': 'Besplatno!',
    'vat': 'PDV',
    'items have been added to': 'Proizvodi su dodani u',
    'discount coupon:': 'Kupon za popust:',
    'overall rating': 'Ukupna ocjena',
    'rate product': 'Ocijenite proizvod',
    'your rating:': 'Vaša ocjena:',
    'product description': 'Opis proizvoda',
    'quantity': 'Količina',
    'price per unit': 'Cijena po jedinici',
    'code': 'Šifra',
    'total price': 'Ukupna cijena',
    'rounding': 'Zaokruživanje',
    'price excl. vat': 'Cijena bez PDV-a',
    'price incl. vat': 'Cijena sa PDV-om',
    'in the tax regime oss': 'U poreznom režimu OSS',
    'price to pay': 'Iznos za plaćanje',
    'prices are excl. vat': 'Cijene su bez PDV-a',
    'prices are incl. vat': 'Cijene uključuju PDV',
    'proceed to cart': 'Idi u korpu',
    'proceed to checkout': 'Nastavite na naplatu',
    'product name': 'Naziv proizvoda',
    'product parameters': 'Parametri proizvoda',
    'qr code': 'QR kod',
    'rate this product': 'Ocijenite ovaj proizvod',
    'rating': 'Ocjena',
    'read article': 'Pročitaj članak',
    'shopping cart': 'Korpa',
    'submit': 'Pošalji',
    'subscribe': 'Pretplati se',
    'vat number': 'PDV broj',
    'search': 'Pretraži',
    'amount': 'Količina',
    'billing address': 'Adresa za naplatu',
    'address': 'Adresa',
    'addresses': 'Adrese',
    'buy again': 'Kupi ponovo',
    'cancel': 'Otkaži',
    'cart': 'Korpa',
    'currency': 'Valuta',
    'country': 'Država',
    'date': 'Datum',
    'discount': 'Popust',
    'all rights reserved': 'Sva prava zadržana',
    'select a pick-up point': 'Odaberite mjesto preuzimanja',
    'you have already voted': 'Već ste glasali',
    'add a new address': 'Dodaj novu adresu',
    'add a rating': 'Dodaj ocjenu',
    'create new password': 'Kreiraj novu lozinku',
    'newsletter unsubscribe': 'Odjava s newslettera',
    'product': 'Proizvod',
    'recapitulation': 'Pregled',
    'total': 'Ukupno',
    'zip': 'Poštanski broj',
    'zip code': 'Poštanski broj',
    'page not found.': 'Stranica nije pronađena.',
    'pcs': 'Kom.',
    'pcs.': 'Kom.',
    'with vat': 'Sa PDV-om',
    'without vat': 'Bez PDV-a',
    'customer account': 'Korisnički račun',
    'login to my account': 'Prijavi se na moj račun',
    'full name': 'Ime i prezime',
    'city': 'Grad',
    'ship to another address': 'Dostavi na drugu adresu',
    'enter note for vendor': 'Unesite napomenu za prodavača',
    'your receipt': 'Vaš račun',
    'i want to register': 'Želim se registrovati',
    'customer data': 'Podaci kupca',
    'this field is required': 'Ovo polje je obavezno',
    'message': 'Poruka',
    'not rated': 'Nije ocijenjeno',
    'email address': 'E-mail adresa',
    'save': 'Sačuvaj',
    'already on stock': 'Već na stanju',
    'send rating': 'Pošalji ocjenu',
    'how satisfied are you with the product?': 'Koliko ste zadovoljni proizvodom?',
    'how satisfied are you with the shop?': 'Koliko ste zadovoljni trgovinom?',
    'name': 'Ime',
    'cart item was successfully deleted.': 'Proizvod je uspješno uklonjen iz korpe.',
    'forgotten password': 'Zaboravljena lozinka',
    'please enter the email address, which you used in the registration details. we will send you a link to set your password.': 'Unesite e-mail adresu koju ste koristili pri registraciji. Poslat ćemo vam link za postavljanje lozinke.',
    'add to cart': 'Dodaj u korpu',
    'checkout': 'Naplata',
    'in stock': 'Na stanju',
    'out of stock': 'Rasprodano',
    'delivery time': 'Vrijeme dostave',
    'estimated delivery': 'Procijenjena dostava',
    'free shipping': 'Besplatna dostava',
    'customer support': 'Korisnička podrška',
    'order summary': 'Pregled narudžbe',
    'continue shopping': 'Nastavite kupovinu',
    'remove': 'Ukloni',
    'edit': 'Uredi',
    'home': 'Početna',
    'category': 'Kategorija',
    'categories': 'Kategorije',
    'new': 'Novo',
    'sale': 'Akcija',
    'recommended': 'Preporučeno',
    'bestseller': 'Najprodavanije',
    'show more': 'Prikaži više',
    'show less': 'Prikaži manje',
    'filter': 'Filter',
    'sort by': 'Sortiraj po',
    'lowest price': 'Najniža cijena',
    'highest price': 'Najviša cijena',
    'latest': 'Najnovije',
    'popularity': 'Popularnost',
    'customer reviews': 'Recenzije kupaca',
    'related products': 'Povezani proizvodi',
    'you may also like': 'Možda će vam se svidjeti',
    'available': 'Dostupno',
    'unavailable': 'Nedostupno',
    'coupon code': 'Kod kupona',
    'order note': 'Napomena uz narudžbu',
    'payment method': 'Način plaćanja',
    'shipping method': 'Način dostave',
    'place order': 'Završi narudžbu',
    'continue': 'Nastavi',
    'back': 'Nazad',
    'first name': 'Ime',
    'last name': 'Prezime',
    'company': 'Firma',
    'company name': 'Naziv firme',
    'company id': 'ID firme',
    'street': 'Ulica',
    'house number': 'Broj kuće',
    'note': 'Napomena',
    'optional': 'Opcionalno',
    'required': 'Obavezno',
    'login': 'Prijava',
    'register': 'Registracija',
    'sign in': 'Prijavi se',
    'sign up': 'Registruj se',
    'log out': 'Odjavi se',
    'logout': 'Odjava',
    'email': 'E-mail',
    'telephone': 'Telefon',
    'mobile': 'Mobilni telefon',
    'order': 'Narudžba',
    'orders': 'Narudžbe',
    'invoice': 'Faktura',
    'payment': 'Plaćanje',
    'shipping': 'Dostava',
    'delivery': 'Isporuka',
    'pick-up point': 'Mjesto preuzimanja',
    'newsletter': 'Newsletter',
    'terms and conditions': 'Uslovi poslovanja',
    'privacy policy': 'Politika privatnosti',
    'return policy': 'Politika povrata',
    'returns': 'Povrati',
    'complaints': 'Reklamacije',
    'compare': 'Uporedi',
    'wishlist': 'Lista želja',
    'add to wishlist': 'Dodaj na listu želja',
    'loading...': 'Učitavanje...',
    'please wait': 'Molimo pričekajte',
    'success': 'Uspješno',
    'error': 'Greška',
    'thank you for your order': 'Hvala vam na narudžbi',
    'order confirmation': 'Potvrda narudžbe',
    'discount code': 'Kod za popust',
    'apply coupon': 'Primijeni kupon',
    'remove item': 'Ukloni proizvod',
    'empty cart': 'Isprazni korpu',
    'subtotal': 'Međuzbir',
    'grand total': 'Ukupno',
    'tax': 'Porez',
    'delivery address': 'Adresa za dostavu',
    'account': 'Račun',
    'my account': 'Moj račun',
    'change password': 'Promijeni lozinku',
    'forgot password': 'Zaboravio/la sam lozinku',
    'reset password': 'Resetuj lozinku',
    'save changes': 'Sačuvaj izmjene',
    'close': 'Zatvori',
    'yes': 'Da',
    'no': 'Ne',
    'My order': 'Moja narudžba',
    'View order details': 'Pogledajte detalje narudžbe',
    'To view your order details, enter your order number and the email address used during checkout.': 'Da biste pogledali detalje svoje narudžbe, unesite broj narudžbe i e-mail adresu koju ste koristili prilikom naručivanja.',
    'Order number': 'Broj narudžbe',
    'Your email': 'Vaš e-mail',
    'This is the email address used for the order.': 'Ovo je e-mail adresa koja je korištena prilikom naručivanja.',
    'View order': 'Pogledajte narudžbu',
    'I do not consent to receiving request to review the online store and its products': 'Ne pristajem na primanje zahtjeva za ocjenjivanje online trgovine i njenih proizvoda'
  };

  const placeholderTranslations = {
    'e.g. 123456': 'npr. 123456',
    'e.g. john.doe@example.com': 'npr. john.doe@example.com'
  };

  const partialTranslations = [
    [/I have a/gi, 'Imam'],
    [/I do not consent to receiving request to review the online store and its products/gi, 'Ne pristajem na primanje zahtjeva za ocjenjivanje online trgovine i njenih proizvoda'],
    [/I do not consent to receiving request to review online store and its products/gi, 'Ne pristajem na primanje zahtjeva za ocjenjivanje online trgovine i njenih proizvoda']
  ];

  const SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'IFRAME', 'CODE', 'PRE', 'TEXTAREA']);

  function cleanText(value) {
    return String(value || '').replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();
  }

  const normalizedTranslations = new Map(
    Object.entries(translations).map(([source, target]) => [cleanText(source).toLowerCase(), target])
  );

  function exactTranslation(value) {
    return normalizedTranslations.get(cleanText(value).toLowerCase()) || null;
  }

  function partialTranslation(value) {
    let result = String(value || '');
    partialTranslations.forEach(([pattern, replacement]) => {
      result = result.replace(pattern, replacement);
    });
    return result;
  }

  function translateTextNode(node) {
    if (!node || node.nodeType !== Node.TEXT_NODE) return;
    if (!node.parentElement || SKIP_TAGS.has(node.parentElement.tagName)) return;

    const original = node.nodeValue;
    const exact = exactTranslation(original);

    if (exact) {
      const leading = original.match(/^\s*/)?.[0] || '';
      const trailing = original.match(/\s*$/)?.[0] || '';
      node.nodeValue = leading + exact + trailing;
      return;
    }

    const partial = partialTranslation(original);
    if (partial !== original) node.nodeValue = partial;
  }

  function translateAttributes(root) {
    if (!root || !root.querySelectorAll) return;

    root.querySelectorAll('[placeholder]').forEach((element) => {
      const key = cleanText(element.getAttribute('placeholder'));
      const translated = placeholderTranslations[key];
      if (translated) element.setAttribute('placeholder', translated);
    });

    root.querySelectorAll('[title], [aria-label]').forEach((element) => {
      ['title', 'aria-label'].forEach((attr) => {
        if (!element.hasAttribute(attr)) return;
        const original = element.getAttribute(attr);
        const exact = exactTranslation(original);
        if (exact) element.setAttribute(attr, exact);
        else {
          const partial = partialTranslation(original);
          if (partial !== original) element.setAttribute(attr, partial);
        }
      });
    });

    root.querySelectorAll('input, button').forEach((element) => {
      const original = element.value;
      if (!original) return;
      const exact = exactTranslation(original);
      if (exact) {
        element.value = exact;
        element.setAttribute('value', exact);
      } else {
        const partial = partialTranslation(original);
        if (partial !== original) {
          element.value = partial;
          element.setAttribute('value', partial);
        }
      }
    });
  }

  function translateRoot(root) {
    if (!root) return;

    if (root.nodeType === Node.TEXT_NODE) {
      translateTextNode(root);
      return;
    }

    if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) return;
    if (root.nodeType === Node.ELEMENT_NODE && SKIP_TAGS.has(root.tagName)) return;

    if (root.nodeType === Node.ELEMENT_NODE) translateAttributes(root);

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (node.nodeType === Node.ELEMENT_NODE && SKIP_TAGS.has(node.tagName)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeType === Node.TEXT_NODE) translateTextNode(node);
      else translateAttributes(node);
    }
  }

  function translateShadowRoots() {
    document.querySelectorAll('*').forEach((host) => {
      if (host.shadowRoot) translateRoot(host.shadowRoot);
    });
  }

  function updateMetadata() {
    const path = window.location.pathname;
    if (path !== '/my-order/' && path !== '/my-order') return;

    document.title = 'Podaci o mojoj narudžbi | Giovani';

    const description = 'Pogledajte detalje svoje Giovani narudžbe unosom broja narudžbe i e-mail adrese korištene prilikom naručivanja.';

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }

  function hideUndefined() {
    document.querySelectorAll('*').forEach((element) => {
      if (element.children.length === 0 && cleanText(element.textContent).toLowerCase() === 'undefined') {
        element.style.display = 'none';
      }
    });
  }

  function translateEverything() {
    if (!document.body) return;
    translateRoot(document.body);
    translateShadowRoots();
    updateMetadata();
    hideUndefined();
  }

  function start() {
    translateEverything();

    let scheduled = false;
    const observer = new MutationObserver(() => {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(() => {
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

    [250, 750, 1500, 3000].forEach((delay) => {
      window.setTimeout(translateEverything, delay);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();
