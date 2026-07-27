(function () {
  'use strict';

  if (
    window.location.hostname !== 'giovani.lt' &&
    window.location.hostname !== 'www.giovani.lt'
  ) {
    return;
  }

  const translations = {
    'My order': 'Mano užsakymas',

    'View order details':
      'Peržiūrėti užsakymo informaciją',

    'To view your order details, enter your order number and the email address used during checkout.':
      'Norėdami peržiūrėti užsakymo informaciją, įveskite užsakymo numerį ir el. pašto adresą, kurį naudojote pateikdami užsakymą.',

    'Order number':
      'Užsakymo numeris',

    'Your email':
      'Jūsų el. paštas',

    'This is the email address used for the order.':
      'Tai el. pašto adresas, kuris buvo naudojamas pateikiant užsakymą.',

    'View order':
      'Peržiūrėti užsakymą'
  };

  const placeholderTranslations = {
    'e.g. 123456':
      'pvz., 123456',

    'e.g. john.doe@example.com':
      'pvz., john.doe@example.com'
  };

  function cleanText(value) {
    return String(value || '')
      .replace(/\u00a0/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function translateTextNodes(root) {
    if (!root) return;

    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT
    );

    const nodes = [];

    while (walker.nextNode()) {
      nodes.push(walker.currentNode);
    }

    nodes.forEach(function (node) {
      const original = node.nodeValue;
      const text = cleanText(original);
      const translated = translations[text];

      if (!translated) return;

      const leading =
        original.match(/^\s*/)?.[0] || '';

      const trailing =
        original.match(/\s*$/)?.[0] || '';

      node.nodeValue =
        leading + translated + trailing;
    });
  }

  function translateAttributes(root) {
    if (!root || !root.querySelectorAll) return;

    root
      .querySelectorAll('[placeholder]')
      .forEach(function (element) {
        const original = cleanText(
          element.getAttribute('placeholder')
        );

        const translated =
          placeholderTranslations[original];

        if (translated) {
          element.setAttribute(
            'placeholder',
            translated
          );
        }
      });

    root
      .querySelectorAll('input, button')
      .forEach(function (element) {
        const original = cleanText(element.value);
        const translated = translations[original];

        if (translated) {
          element.value = translated;
          element.setAttribute('value', translated);
        }
      });
  }

  function translateRoot(root) {
    translateTextNodes(root);
    translateAttributes(root);
  }

  function translateAllShadowRoots() {
    document
      .querySelectorAll('*')
      .forEach(function (host) {
        if (!host.shadowRoot) return;

        translateRoot(host.shadowRoot);

        host.shadowRoot
          .querySelectorAll('*')
          .forEach(function (nestedHost) {
            if (nestedHost.shadowRoot) {
              translateRoot(nestedHost.shadowRoot);
            }
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

    const observer = new MutationObserver(
      function () {
        translateEverything();
      }
    );

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: [
        'placeholder',
        'value'
      ]
    });

    window.setInterval(
      translateEverything,
      500
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
