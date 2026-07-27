(function () {
  'use strict';

  if (
    window.location.hostname !== 'giovani.lt' &&
    window.location.hostname !== 'www.giovani.lt'
  ) {
    return;
  }

  const translations = {
    'My order':
      'Mano užsakymas',

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

  const pageMetadata = {
    title:
      'Mano užsakymo informacija | Giovani',

    description:
      'Peržiūrėkite savo Giovani užsakymo informaciją įvedę užsakymo numerį ir užsakymo metu naudotą el. pašto adresą.'
  };

  function cleanText(value) {
    return String(value || '')
      .replace(/\u00a0/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function isMyOrderPage() {
    const pathname = window.location.pathname.replace(/\/+$/, '');

    return pathname === '/my-order';
  }

  function setMetaContent(selector, attributeName, attributeValue, content) {
    let element = document.head.querySelector(selector);

    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attributeName, attributeValue);
      document.head.appendChild(element);
    }

    element.setAttribute('content', content);
  }

  function updatePageMetadata() {
    if (!isMyOrderPage()) return;
    if (!document.head) return;

    document.title = pageMetadata.title;

    setMetaContent(
      'meta[name="description"]',
      'name',
      'description',
      pageMetadata.description
    );

    setMetaContent(
      'meta[property="og:title"]',
      'property',
      'og:title',
      pageMetadata.title
    );

    setMetaContent(
      'meta[property="og:description"]',
      'property',
      'og:description',
      pageMetadata.description
    );

    setMetaContent(
      'meta[name="twitter:title"]',
      'name',
      'twitter:title',
      pageMetadata.title
    );

    setMetaContent(
      'meta[name="twitter:description"]',
      'name',
      'twitter:description',
      pageMetadata.description
    );
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
          element.setAttribute(
            'value',
            translated
          );
        }
      });

    root
      .querySelectorAll('[title], [aria-label]')
      .forEach(function (element) {
        ['title', 'aria-label'].forEach(function (attribute) {
          if (!element.hasAttribute(attribute)) return;

          const original = cleanText(
            element.getAttribute(attribute)
          );

          const translated = translations[original];

          if (translated) {
            element.setAttribute(
              attribute,
              translated
            );
          }
        });
      });
  }

  function translateRoot(root) {
    translateTextNodes(root);
    translateAttributes(root);
  }

  function translateNestedShadowRoots(root) {
    if (!root || !root.querySelectorAll) return;

    root
      .querySelectorAll('*')
      .forEach(function (host) {
        if (!host.shadowRoot) return;

        translateRoot(host.shadowRoot);
        translateNestedShadowRoots(host.shadowRoot);
      });
  }

  function translateAllShadowRoots() {
    document
      .querySelectorAll('*')
      .forEach(function (host) {
        if (!host.shadowRoot) return;

        translateRoot(host.shadowRoot);
        translateNestedShadowRoots(host.shadowRoot);
      });
  }

  function translateEverything() {
    if (!document.body) return;

    updatePageMetadata();
    translateRoot(document.body);
    translateAllShadowRoots();
  }

  function start() {
    updatePageMetadata();
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
        'value',
        'title',
        'aria-label'
      ]
    });

    [
      100,
      300,
      500,
      1000,
      1500,
      2500,
      4000,
      7000
    ].forEach(function (delay) {
      window.setTimeout(
        translateEverything,
        delay
      );
    });

    window.setInterval(
      translateEverything,
      500
    );

    window.addEventListener(
      'load',
      translateEverything
    );

    window.addEventListener(
      'pageshow',
      translateEverything
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
