(function () {
  'use strict';

  const ALLOWED_HOSTS = new Set(['giovani.rs', 'www.giovani.rs']);
  if (!ALLOWED_HOSTS.has(window.location.hostname)) return;

  const translations = {
    "My personal details": "Moji lični podaci",
    "My orders": "Moje porudžbine",
    "My invoices": "Moje fakture",
    "736 ratings": "736 ocena",
    "My proforma invoices": "Moje profakture",
    "Client proforma invoices": "Profakture kupca",
    "My credit notes": "Moja knjižna odobrenja",
    "Client credit notes": "Knjižna odobrenja kupca",
    "My delivery notes": "Moje otpremnice",
    "Client delivery notes": "Otpremnice kupca",
    "My proof of payments received": "Moje potvrde o primljenim uplatama",
    "Proofs of payment received": "Potvrde o primljenim uplatama",
    "My discounts": "Moji popusti",
    "My products ratings": "Moje ocene proizvoda",
    "My products discussions": "Moje diskusije o proizvodima",
    "Client Center": "Korisnički centar",
    "My account settings": "Podešavanja mog naloga",
    "Tax documents": "Poreska dokumenta",
    "My product discussions": "Moje diskusije o proizvodima",
    "You have no reserved order...": "Nemate rezervisanu porudžbinu...",
    "Personal data": "Lični podaci",
    "Phone": "Telefon",
    "Your current password to approve changes": "Vaša trenutna lozinka za potvrdu izmena",
    "Specify company details": "Unesite podatke o firmi",
    "Street, House no.": "Ulica i broj",
    "Shipping addresses": "Adrese za dostavu",
    "No entries found...": "Nema pronađenih stavki...",
    "choose a gift": "Izaberite poklon",
    "choose a sample as a gift": "Izaberite uzorak na poklon",
    "Memorized cards": "Sačuvane kartice",
    "You have no documents saved yet.": "Još nemate sačuvana dokumenta.",
    "Extra discount": "Dodatni popust",
    "No rating was found.": "Nije pronađena nijedna ocena.",
    "No comments found...": "Nema pronađenih komentara...",
    "To complete your order, you need to choose a pickup point from the carrier. Please search for one and select it.": "Da biste završili porudžbinu, potrebno je da izaberete mesto za preuzimanje pošiljke. Pronađite ga i označite.",
    "The final discount can vary depending on the setting of the respective discounts at particular products.": "Konačni popust može da se razlikuje u zavisnosti od podešavanja popusta za pojedinačne proizvode.",
    "subscribe to our newsletter": "Prijavite se na naš newsletter",
    "subscribe to newsletter": "Prijavite se na newsletter",
    "follow on instagram": "Pratite nas na Instagramu",
    "continue to blog": "Nastavite na blog",
    "store rating": "Ocena prodavnice",
    "view more": "Prikaži više",
    "details": "Detalji",
    "ask a salesman": "Pitajte prodavca",
    "i want to know more": "Želim da saznam više",
    "contact form": "Kontakt forma",
    "undefined": "",
    "my cart": "Moja korpa",
    "back to shop": "Nazad u prodavnicu",
    "gift to buy": "Poklon uz kupovinu",
    "do you need help? we are here for you:": "Potrebna vam je pomoć? Tu smo za vas:",
    "the basket is empty. fill it with joy!": "Korpa je prazna. Napunite je radošću!",
    "do you have any questions? we'll answer them. please fill out your contact details carefully.": "Imate pitanje? Rado ćemo odgovoriti. Pažljivo unesite svoje kontakt podatke.",
    "items have been added to shopping cart": "Proizvodi su dodati u korpu",
    "your cart is empty.": "Vaša korpa je prazna.",
    "fill it with joy!": "Napunite je radošću!",
    "shipping is free!": "Dostava je besplatna!",
    "personal information and address": "Lični podaci i adresa",
    "availability": "Dostupnost",
    "price": "Cena",
    "the page is lost. we will try to find it.": "Stranica nije pronađena. Pokušaćemo da je pronađemo.",
    "amount was successfully updated.": "Količina je uspešno ažurirana.",
    "password": "Lozinka",
    "hide": "Sakrij",
    "contact us": "Kontaktirajte nas",
    "variants": "Varijante",
    "incl. vat:": "Sa PDV-om:",
    "incl. vat": "Sa PDV-om",
    "excl. vat": "Bez PDV-a",
    "i have a discount coupon:": "Imam kupon za popust:",
    "i have a discount coupon": "Imam kupon za popust",
    "i have a": "Imam",
    "apply": "Primeni",
    "enter coupon code": "Unesite kod kupona",
    "shipping is": "Dostava je",
    "free": "Besplatno",
    "free!": "Besplatno!",
    "vat": "PDV",
    "items have been added to": "Proizvodi su dodati u",
    "discount coupon:": "Kupon za popust:",
    "overall rating": "Ukupna ocena",
    "rate product": "Ocenite proizvod",
    "your rating:": "Vaša ocena:",
    "product description": "Opis proizvoda",
    "quantity": "Količina",
    "price per unit": "Cena po jedinici",
    "code": "Šifra",
    "total price": "Ukupna cena",
    "rounding": "Zaokruživanje",
    "price excl. vat": "Cena bez PDV-a",
    "price incl. vat": "Cena sa PDV-om",
    "in the tax regime oss": "U poreskom režimu OSS",
    "price to pay": "Iznos za plaćanje",
    "prices are excl. vat": "Cene su bez PDV-a",
    "prices are incl. vat": "Cene su sa PDV-om",
    "proceed to cart": "Idi u korpu",
    "proceed to checkout": "Nastavi na plaćanje",
    "product name": "Naziv proizvoda",
    "product parameters": "Parametri proizvoda",
    "qr code": "QR kod",
    "rate this product": "Ocenite ovaj proizvod",
    "rating": "Ocena",
    "read article": "Pročitajte članak",
    "shopping cart": "Korpa",
    "submit": "Pošalji",
    "subscribe": "Prijavi se",
    "vat number": "PIB",
    "search": "Pretraga",
    "amount": "Količina",
    "billing address": "Adresa za račun",
    "address": "Adresa",
    "addresses": "Adrese",
    "buy again": "Kupite ponovo",
    "cancel": "Otkaži",
    "cart": "Korpa",
    "currency": "Valuta",
    "country": "Država",
    "date": "Datum",
    "discount": "Popust",
    "all rights reserved": "Sva prava zadržana",
    "select a pick-up point": "Izaberite mesto preuzimanja",
    "you have already voted": "Već ste glasali",
    "add a new address": "Dodajte novu adresu",
    "add a rating": "Dodajte ocenu",
    "create new password": "Kreirajte novu lozinku",
    "newsletter unsubscribe": "Odjava sa newslettera",
    "product": "Proizvod",
    "recapitulation": "Pregled",
    "total": "Ukupno",
    "zip": "Poštanski broj",
    "zip code": "Poštanski broj",
    "page not found.": "Stranica nije pronađena.",
    "pcs": "kom",
    "pcs.": "kom.",
    "with vat": "Sa PDV-om",
    "without vat": "Bez PDV-a",
    "customer account": "Korisnički nalog",
    "login to my account": "Prijava na moj nalog",
    "full name": "Ime i prezime",
    "city": "Grad",
    "ship to another address": "Dostavi na drugu adresu",
    "enter note for vendor": "Unesite napomenu za prodavca",
    "your receipt": "Vaš račun",
    "i want to register": "Želim da se registrujem",
    "customer data": "Podaci kupca",
    "this field is required": "Ovo polje je obavezno",
    "message": "Poruka",
    "not rated": "Nije ocenjeno",
    "email address": "E-mail adresa",
    "save": "Sačuvaj",
    "already on stock": "Već na stanju",
    "send rating": "Pošaljite ocenu",
    "how satisfied are you with the product?": "Koliko ste zadovoljni proizvodom?",
    "how satisfied are you with the shop?": "Koliko ste zadovoljni prodavnicom?",
    "name": "Ime",
    "cart item was successfully deleted.": "Proizvod je uspešno uklonjen iz korpe.",
    "forgotten password": "Zaboravljena lozinka",
    "please enter the email address, which you used in the registration details. we will send you a link to set your password.": "Unesite e-mail adresu koju ste koristili prilikom registracije. Poslaćemo vam link za postavljanje lozinke.",
    "add to cart": "Dodaj u korpu",
    "checkout": "Plaćanje",
    "in stock": "Na stanju",
    "out of stock": "Rasprodato",
    "delivery time": "Rok isporuke",
    "estimated delivery": "Očekivana isporuka",
    "free shipping": "Besplatna dostava",
    "customer support": "Korisnička podrška",
    "order summary": "Pregled porudžbine",
    "continue shopping": "Nastavite kupovinu",
    "remove": "Ukloni",
    "edit": "Izmeni",
    "home": "Početna",
    "category": "Kategorija",
    "categories": "Kategorije",
    "new": "Novo",
    "sale": "Akcija",
    "recommended": "Preporučeno",
    "bestseller": "Najprodavanije",
    "show more": "Prikaži više",
    "show less": "Prikaži manje",
    "filter": "Filter",
    "sort by": "Sortiraj po",
    "lowest price": "Najnižoj ceni",
    "highest price": "Najvišoj ceni",
    "latest": "Najnovije",
    "popularity": "Popularnosti",
    "customer reviews": "Recenzije kupaca",
    "related products": "Povezani proizvodi",
    "you may also like": "Možda će vam se dopasti",
    "available": "Dostupno",
    "unavailable": "Nedostupno",
    "coupon code": "Kod kupona",
    "order note": "Napomena uz porudžbinu",
    "payment method": "Način plaćanja",
    "shipping method": "Način dostave",
    "place order": "Pošalji porudžbinu",
    "continue": "Nastavi",
    "back": "Nazad",
    "first name": "Ime",
    "last name": "Prezime",
    "company": "Firma",
    "company name": "Naziv firme",
    "company id": "Matični broj firme",
    "street": "Ulica",
    "house number": "Broj",
    "note": "Napomena",
    "optional": "Opciono",
    "required": "Obavezno",
    "login": "Prijava",
    "register": "Registracija",
    "sign in": "Prijavite se",
    "sign up": "Registrujte se",
    "log out": "Odjavite se",
    "logout": "Odjava",
    "email": "E-mail",
    "telephone": "Telefon",
    "mobile": "Mobilni telefon",
    "order": "Porudžbina",
    "orders": "Porudžbine",
    "invoice": "Faktura",
    "payment": "Plaćanje",
    "shipping": "Dostava",
    "delivery": "Isporuka",
    "pick-up point": "Mesto preuzimanja",
    "newsletter": "Newsletter",
    "terms and conditions": "Uslovi poslovanja",
    "privacy policy": "Politika privatnosti",
    "return policy": "Politika povraćaja",
    "returns": "Povraćaj robe",
    "complaints": "Reklamacije",
    "compare": "Uporedi",
    "wishlist": "Lista želja",
    "add to wishlist": "Dodaj na listu želja",
    "loading...": "Učitavanje...",
    "please wait": "Molimo sačekajte",
    "success": "Uspešno",
    "error": "Greška",
    "thank you for your order": "Hvala vam na porudžbini",
    "order confirmation": "Potvrda porudžbine",
    "discount code": "Kod za popust",
    "apply coupon": "Primeni kupon",
    "remove item": "Ukloni proizvod",
    "empty cart": "Isprazni korpu",
    "subtotal": "Međuzbir",
    "grand total": "Ukupno",
    "tax": "Porez",
    "delivery address": "Adresa za dostavu",
    "account": "Nalog",
    "my account": "Moj nalog",
    "change password": "Promeni lozinku",
    "forgot password": "Zaboravili ste lozinku",
    "reset password": "Resetuj lozinku",
    "save changes": "Sačuvaj izmene",
    "close": "Zatvori",
    "yes": "Da",
    "no": "Ne"
  };

  const ATTRIBUTES = ['placeholder', 'title', 'aria-label', 'data-title'];
  const SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'IFRAME', 'CODE', 'PRE']);

  function normalize(value) {
    return String(value || '').replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
  }

  const exactMap = new Map(Object.entries(translations).map(([source, target]) => [normalize(source), target]));
  const partials = [
    [/\bI have a\b/gi, 'Imam'],
    [/\bmy cart\b/gi, 'Moja korpa'],
    [/\bpersonal information and address\b/gi, 'Lični podaci i adresa']
  ];

  function replacePartial(value) {
    let result = String(value || '');
    for (const [pattern, replacement] of partials) result = result.replace(pattern, replacement);
    return result;
  }

  function translateString(value) {
    const exact = exactMap.get(normalize(value));
    if (exact !== undefined) return exact;
    const partial = replacePartial(value);
    return partial !== value ? partial : null;
  }

  function translateTextNode(node) {
    if (!node || node.nodeType !== Node.TEXT_NODE || !node.parentElement) return;
    if (SKIP_TAGS.has(node.parentElement.tagName)) return;
    const original = node.nodeValue;
    const translated = translateString(original);
    if (translated === null) return;
    const leading = original.match(/^\s*/)?.[0] || '';
    const trailing = original.match(/\s*$/)?.[0] || '';
    node.nodeValue = leading + translated.trim() + trailing;
    node.parentElement.style.setProperty('text-transform', 'none', 'important');
  }

  function translateElementAttributes(element) {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) return;
    for (const attribute of ATTRIBUTES) {
      if (!element.hasAttribute(attribute)) continue;
      const translated = translateString(element.getAttribute(attribute));
      if (translated !== null) element.setAttribute(attribute, translated);
    }
    if ((element.tagName === 'INPUT' || element.tagName === 'BUTTON') && element.hasAttribute('value')) {
      const translated = translateString(element.getAttribute('value'));
      if (translated !== null) element.setAttribute('value', translated);
    }
  }

  function translateSubtree(root) {
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) return translateTextNode(root);
    if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) return;
    if (root.nodeType === Node.ELEMENT_NODE && SKIP_TAGS.has(root.tagName)) return;
    if (root.nodeType === Node.ELEMENT_NODE) translateElementAttributes(root);

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (node.nodeType === Node.ELEMENT_NODE && SKIP_TAGS.has(node.tagName)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeType === Node.TEXT_NODE) translateTextNode(node);
      else translateElementAttributes(node);
    }
  }

  function start() {
    const run = () => translateSubtree(document.body);
    run();

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'characterData') translateTextNode(mutation.target);
        mutation.addedNodes.forEach((node) => translateSubtree(node));
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: [...ATTRIBUTES, 'value']
    });

    [250, 750, 1500, 3000].forEach((delay) => window.setTimeout(run, delay));
    document.addEventListener('click', () => window.setTimeout(run, 100), true);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
