(function () {
  'use strict';

  const ALLOWED_HOSTS = new Set([
    'aromatagiovani.gr',
    'www.aromatagiovani.gr'
  ]);

  if (!ALLOWED_HOSTS.has(window.location.hostname)) return;

  const translations = {
    "My personal details": "Τα προσωπικά μου στοιχεία",
    "Doporučené produkty": "Προτεινόμενα προϊόντα",
    "My orders": "Οι παραγγελίες μου",
    "My invoices": "Τα τιμολόγιά μου",
    "736 ratings": "736 αξιολογήσεις",
    "My proforma invoices": "Τα προτιμολόγιά μου",
    "Client proforma invoices": "Προτιμολόγια πελάτη",
    "My credit notes": "Τα πιστωτικά μου τιμολόγια",
    "Client credit notes": "Πιστωτικά τιμολόγια πελάτη",
    "My delivery notes": "Τα δελτία αποστολής μου",
    "Client delivery notes": "Δελτία αποστολής πελάτη",
    "My proof of payments received": "Οι αποδείξεις πληρωμών μου",
    "Proofs of payment received": "Αποδείξεις πληρωμών",
    "My discounts": "Οι εκπτώσεις μου",
    "My products ratings": "Οι αξιολογήσεις προϊόντων μου",
    "My products discussions": "Οι συζητήσεις προϊόντων μου",
    "Client Center": "Κέντρο πελάτη",
    "My account settings": "Ρυθμίσεις λογαριασμού",
    "Tax documents": "Φορολογικά παραστατικά",
    "My product discussions": "Οι συζητήσεις προϊόντων μου",
    "You have no reserved order...": "Δεν έχετε καμία δεσμευμένη παραγγελία...",
    "Personal data": "Προσωπικά δεδομένα",
    "Phone": "Τηλέφωνο",
    "Your current password to approve changes": "Ο τρέχων κωδικός σας για επιβεβαίωση των αλλαγών",
    "Specify company details": "Συμπληρώστε τα στοιχεία της εταιρείας",
    "Street, House no.": "Οδός, αριθμός",
    "Shipping addresses": "Διευθύνσεις αποστολής",
    "No entries found...": "Δεν βρέθηκαν καταχωρίσεις...",
    "choose a gift": "επιλέξτε δώρο",
    "choose a sample as a gift": "επιλέξτε δείγμα ως δώρο",
    "Memorized cards": "Αποθηκευμένες κάρτες",
    "You have no documents saved yet.": "Δεν έχετε αποθηκευμένα έγγραφα ακόμη.",
    "Extra discount": "Επιπλέον έκπτωση",
    "No rating was found.": "Δεν βρέθηκε αξιολόγηση.",
    "No comments found...": "Δεν βρέθηκαν σχόλια...",
    "To complete your order, you need to choose a pickup point from the carrier. Please search for one and select it.": "Για να ολοκληρώσετε την παραγγελία σας, πρέπει να επιλέξετε σημείο παραλαβής του μεταφορέα. Αναζητήστε ένα και επιλέξτε το.",
    "The final discount can vary depending on the setting of the respective discounts at particular products.": "Η τελική έκπτωση μπορεί να διαφέρει ανάλογα με τις εκπτώσεις που έχουν οριστεί για τα επιμέρους προϊόντα.",

    "subscribe to our newsletter": "εγγραφείτε στο newsletter μας",
    "subscribe to newsletter": "εγγραφή στο newsletter",
    "follow on instagram": "ακολουθήστε μας στο Instagram",
    "continue to blog": "μετάβαση στο blog",
    "store rating": "αξιολόγηση καταστήματος",
    "view more": "δείτε περισσότερα",
    "details": "λεπτομέρειες",
    "ask a salesman": "ρωτήστε έναν σύμβουλο",
    "i want to know more": "θέλω να μάθω περισσότερα",
    "contact form": "φόρμα επικοινωνίας",
    "my cart": "το καλάθι μου",
    "back to shop": "επιστροφή στο κατάστημα",
    "gift to buy": "δώρο με την αγορά",
    "do you need help? we are here for you:": "χρειάζεστε βοήθεια; είμαστε εδώ για εσάς:",
    "the basket is empty. fill it with joy!": "το καλάθι είναι άδειο. γεμίστε το με χαρά!",
    "do you have any questions? we'll answer them. please fill out your contact details carefully.": "έχετε απορίες; θα σας απαντήσουμε. συμπληρώστε προσεκτικά τα στοιχεία επικοινωνίας σας.",
    "items have been added to shopping cart": "τα προϊόντα προστέθηκαν στο καλάθι",
    "your cart is empty.": "το καλάθι σας είναι άδειο.",
    "fill it with joy!": "γεμίστε το με χαρά!",
    "shipping is free!": "η αποστολή είναι δωρεάν!",
    "personal information and address": "προσωπικά στοιχεία και διεύθυνση",
    "availability": "διαθεσιμότητα",
    "price": "τιμή",
    "the page is lost. we will try to find it.": "η σελίδα δεν βρέθηκε. θα προσπαθήσουμε να τη βρούμε.",
    "amount was successfully updated.": "η ποσότητα ενημερώθηκε επιτυχώς.",
    "password": "κωδικός πρόσβασης",
    "hide": "απόκρυψη",
    "contact us": "επικοινωνήστε μαζί μας",
    "variants": "παραλλαγές",
    "incl. vat:": "με ΦΠΑ:",
    "incl. vat": "με ΦΠΑ",
    "excl. vat": "χωρίς ΦΠΑ",
    "i have a discount coupon:": "έχω εκπτωτικό κουπόνι:",
    "apply": "εφαρμογή",
    "enter coupon code": "εισαγάγετε τον κωδικό κουπονιού",
    "shipping is": "η αποστολή είναι",
    "free": "δωρεάν",
    "free!": "δωρεάν!",
    "vat": "ΦΠΑ",
    "items have been added to": "τα προϊόντα προστέθηκαν στο",
    "discount coupon:": "εκπτωτικό κουπόνι:",
    "overall rating": "συνολική αξιολόγηση",
    "rate product": "αξιολογήστε το προϊόν",
    "your rating:": "η αξιολόγησή σας:",
    "product description": "περιγραφή προϊόντος",
    "quantity": "ποσότητα",
    "price per unit": "τιμή μονάδας",
    "code": "κωδικός",
    "total price": "συνολική τιμή",
    "rounding": "στρογγυλοποίηση",
    "price excl. vat": "τιμή χωρίς ΦΠΑ",
    "price incl. vat": "τιμή με ΦΠΑ",
    "in the tax regime oss": "στο φορολογικό καθεστώς OSS",
    "price to pay": "πληρωτέο ποσό",
    "prices are excl. vat": "οι τιμές δεν περιλαμβάνουν ΦΠΑ",
    "prices are incl. vat": "οι τιμές περιλαμβάνουν ΦΠΑ",
    "proceed to cart": "μετάβαση στο καλάθι",
    "proceed to checkout": "μετάβαση στην ολοκλήρωση παραγγελίας",
    "product name": "όνομα προϊόντος",
    "product parameters": "χαρακτηριστικά προϊόντος",
    "qr code": "κωδικός QR",
    "rate this product": "αξιολογήστε αυτό το προϊόν",
    "rating": "αξιολόγηση",
    "read article": "διαβάστε το άρθρο",
    "shopping cart": "καλάθι αγορών",
    "submit": "υποβολή",
    "subscribe": "εγγραφή",
    "vat number": "ΑΦΜ",
    "search": "αναζήτηση",
    "amount": "ποσότητα",
    "billing address": "διεύθυνση χρέωσης",
    "address": "διεύθυνση",
    "addresses": "διευθύνσεις",
    "buy again": "αγορά ξανά",
    "cancel": "ακύρωση",
    "cart": "καλάθι",
    "currency": "νόμισμα",
    "country": "χώρα",
    "date": "ημερομηνία",
    "discount": "έκπτωση",
    "all rights reserved": "με επιφύλαξη παντός δικαιώματος",
    "select a pick-up point": "επιλέξτε σημείο παραλαβής",
    "you have already voted": "έχετε ήδη ψηφίσει",
    "add a new address": "προσθήκη νέας διεύθυνσης",
    "add a rating": "προσθήκη αξιολόγησης",
    "create new password": "δημιουργία νέου κωδικού",
    "newsletter unsubscribe": "κατάργηση εγγραφής από το newsletter",
    "product": "προϊόν",
    "recapitulation": "ανακεφαλαίωση",
    "total": "σύνολο",
    "zip": "Τ.Κ.",
    "zip code": "ταχυδρομικός κώδικας",
    "page not found.": "η σελίδα δεν βρέθηκε.",
    "pcs": "τεμ.",
    "pcs.": "τεμ.",
    "with vat": "με ΦΠΑ",
    "without vat": "χωρίς ΦΠΑ",
    "customer account": "λογαριασμός πελάτη",
    "login to my account": "σύνδεση στον λογαριασμό μου",
    "full name": "ονοματεπώνυμο",
    "city": "πόλη",
    "ship to another address": "αποστολή σε άλλη διεύθυνση",
    "enter note for vendor": "προσθέστε σημείωση για τον πωλητή",
    "your receipt": "η απόδειξή σας",
    "i want to register": "θέλω να εγγραφώ",
    "customer data": "στοιχεία πελάτη",
    "this field is required": "αυτό το πεδίο είναι υποχρεωτικό",
    "message": "μήνυμα",
    "not rated": "χωρίς αξιολόγηση",
    "email address": "διεύθυνση email",
    "save": "αποθήκευση",
    "already on stock": "ήδη σε απόθεμα",
    "send rating": "αποστολή αξιολόγησης",
    "how satisfied are you with the product?": "πόσο ικανοποιημένοι είστε από το προϊόν;",
    "how satisfied are you with the shop?": "πόσο ικανοποιημένοι είστε από το κατάστημα;",
    "name": "όνομα",
    "cart item was successfully deleted.": "το προϊόν αφαιρέθηκε επιτυχώς από το καλάθι.",
    "forgotten password": "ξεχάσατε τον κωδικό;",
    "please enter the email address, which you used in the registration details. we will send you a link to set your password.": "εισαγάγετε τη διεύθυνση email που χρησιμοποιήσατε κατά την εγγραφή. θα σας στείλουμε σύνδεσμο για να ορίσετε νέο κωδικό.",
    "add to cart": "προσθήκη στο καλάθι",
    "checkout": "ολοκλήρωση παραγγελίας",
    "in stock": "σε απόθεμα",
    "out of stock": "εκτός αποθέματος",
    "delivery time": "χρόνος παράδοσης",
    "estimated delivery": "εκτιμώμενη παράδοση",
    "free shipping": "δωρεάν αποστολή",
    "customer support": "εξυπηρέτηση πελατών",
    "order summary": "σύνοψη παραγγελίας",
    "continue shopping": "συνέχεια αγορών",
    "remove": "αφαίρεση",
    "edit": "επεξεργασία",
    "home": "αρχική",
    "category": "κατηγορία",
    "categories": "κατηγορίες",
    "new": "νέο",
    "sale": "προσφορά",
    "recommended": "προτεινόμενο",
    "bestseller": "δημοφιλές",
    "show more": "εμφάνιση περισσότερων",
    "show less": "εμφάνιση λιγότερων",
    "filter": "φίλτρο",
    "sort by": "ταξινόμηση κατά",
    "lowest price": "χαμηλότερη τιμή",
    "highest price": "υψηλότερη τιμή",
    "latest": "νεότερα",
    "popularity": "δημοτικότητα",
    "customer reviews": "αξιολογήσεις πελατών",
    "related products": "σχετικά προϊόντα",
    "you may also like": "μπορεί επίσης να σας αρέσουν",
    "available": "διαθέσιμο",
    "unavailable": "μη διαθέσιμο",
    "coupon code": "κωδικός κουπονιού",
    "order note": "σημείωση παραγγελίας",
    "payment method": "τρόπος πληρωμής",
    "shipping method": "τρόπος αποστολής",
    "place order": "υποβολή παραγγελίας",
    "continue": "συνέχεια",
    "back": "πίσω",
    "first name": "όνομα",
    "last name": "επώνυμο",
    "company": "εταιρεία",
    "company name": "επωνυμία εταιρείας",
    "company id": "αριθμός μητρώου εταιρείας",
    "street": "οδός",
    "house number": "αριθμός",
    "note": "σημείωση",
    "optional": "προαιρετικό",
    "required": "υποχρεωτικό",
    "login": "σύνδεση",
    "register": "εγγραφή",
    "sign in": "σύνδεση",
    "sign up": "εγγραφή",
    "log out": "αποσύνδεση",
    "logout": "αποσύνδεση",
    "email": "email",
    "telephone": "τηλέφωνο",
    "mobile": "κινητό",
    "order": "παραγγελία",
    "orders": "παραγγελίες",
    "invoice": "τιμολόγιο",
    "payment": "πληρωμή",
    "shipping": "αποστολή",
    "delivery": "παράδοση",
    "pick-up point": "σημείο παραλαβής",
    "newsletter": "newsletter",
    "terms and conditions": "όροι και προϋποθέσεις",
    "privacy policy": "πολιτική απορρήτου",
    "return policy": "πολιτική επιστροφών",
    "returns": "επιστροφές",
    "complaints": "παράπονα και αξιώσεις",
    "compare": "σύγκριση",
    "wishlist": "λίστα επιθυμιών",
    "add to wishlist": "προσθήκη στη λίστα επιθυμιών",
    "loading...": "φόρτωση...",
    "please wait": "παρακαλώ περιμένετε",
    "success": "επιτυχία",
    "error": "σφάλμα",
    "thank you for your order": "ευχαριστούμε για την παραγγελία σας",
    "order confirmation": "επιβεβαίωση παραγγελίας",
    "discount code": "κωδικός έκπτωσης",
    "apply coupon": "εφαρμογή κουπονιού",
    "remove item": "αφαίρεση προϊόντος",
    "empty cart": "άδειασμα καλαθιού",
    "subtotal": "μερικό σύνολο",
    "grand total": "τελικό σύνολο",
    "tax": "φόρος",
    "delivery address": "διεύθυνση παράδοσης",
    "account": "λογαριασμός",
    "my account": "ο λογαριασμός μου",
    "change password": "αλλαγή κωδικού",
    "forgot password": "ξέχασα τον κωδικό",
    "reset password": "επαναφορά κωδικού",
    "save changes": "αποθήκευση αλλαγών",
    "close": "κλείσιμο",
    "yes": "ναι",
    "no": "όχι"
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
