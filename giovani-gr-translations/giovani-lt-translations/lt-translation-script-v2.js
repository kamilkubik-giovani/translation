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
      'Peržiūrėti užsakymą',

    'I do not consent to receiving request to review the online store and its products':
      'Atsisakau gauti prašymus įvertinti internetinę parduotuvę ir jos produktus'
  };

  /*
   * Partial translations
   * Použijú sa aj v prípade, keď je anglická fráza
   * iba časťou dlhšieho textového uzla.
   */
  const partialTranslations = [
    {
      pattern: /I do not consent to receiving request to review the online store and its products/gi,
      replacement:
        'Atsisakau gauti prašymus įvertinti internetinę parduotuvę ir jos produktus'
    },

    {
      pattern: /I do not consent to receiving request to review online store and its products/gi,
      replacement:
        'Atsisakau gauti prašymus įvertinti internetinę parduotuvę ir jos produktus'
    }
  ];

  const placeholderTranslations = {
    'e.g. 123456':
      'pvz., 123456',

    'e.g. john.doe@example.com':
      'pvz., john.doe@example.com'
  };

  const SKIP_TAGS = new Set([
    'SCRIPT',
    'STYLE',
    'NOSCRIPT',
    'IFRAME',
    'CODE',
    'PRE',
    'TEXTAREA'
  ]);

  function cleanText(value) {
    return String(value || '')
      .replace(/\u00a0/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  /*
   * Case-insensitive mapa presných prekladov.
   */
  const normalizedTranslations = new Map();

  Object.keys(translations).forEach(function (source) {
    normalizedTranslations.set(
      cleanText(source).toLowerCase(),
      translations[source]
    );
  });

  function getExactTranslation(value) {
    return normalizedTranslations.get(
      cleanText(value).toLowerCase()
    );
  }

  function applyPartialTranslations(value) {
    let result = value;

    partialTranslations.forEach(function (item) {
      result = result.replace(
        item.pattern,
        item.replacement
      );
    });

    return result;
  }

  function isMyOrderPage() {
    return (
      window.location.pathname === '/my-order/' ||
      window.location.pathname === '/my-order'
    );
  }

  function updatePageMetadata() {
    if (!isMyOrderPage()) return;
    if (!document.head) return;

    const title =
      'Mano užsakymo informacija | Giovani';

    const description =
      'Peržiūrėkite savo Giovani užsakymo informaciją įvedę užsakymo numerį ir užsakymo metu naudotą el. pašto adresą.';

    document.title = title;

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription =
        document.createElement('meta');

      metaDescription.setAttribute(
        'name',
        'description'
      );

      document.head.appendChild(
        metaDescription
      );
    }

    metaDescription.setAttribute(
      'content',
      description
    );

    let ogTitle = document.querySelector(
      'meta[property="og:title"]'
    );

    if (!ogTitle) {
      ogTitle =
        document.createElement('meta');

      ogTitle.setAttribute(
        'property',
        'og:title'
      );

      document.head.appendChild(
        ogTitle
      );
    }

    ogTitle.setAttribute(
      'content',
      title
    );

    let ogDescription =
      document.querySelector(
        'meta[property="og:description"]'
      );

    if (!ogDescription) {
      ogDescription =
        document.createElement('meta');

      ogDescription.setAttribute(
        'property',
        'og:description'
      );

      document.head.appendChild(
        ogDescription
      );
    }

    ogDescription.setAttribute(
      'content',
      description
    );
  }

  function translateTextNode(node) {
    if (!node) return;
    if (!node.parentElement) return;

    if (
      SKIP_TAGS.has(
        node.parentElement.tagName
      )
    ) {
      return;
    }

    const original = node.nodeValue;

    if (!original) return;

    /*
     * 1. Najprv presná zhoda.
     */
    const exactTranslation =
      getExactTranslation(original);

    if (exactTranslation) {
      const leading =
        original.match(/^\s*/)?.[0] || '';

      const trailing =
        original.match(/\s*$/)?.[0] || '';

      node.nodeValue =
        leading +
        exactTranslation +
        trailing;

      return;
    }

    /*
     * 2. Ak presná zhoda neexistuje,
     * skúsi sa čiastočná náhrada.
     */
    const translated =
      applyPartialTranslations(original);

    if (translated !== original) {
      node.nodeValue = translated;
    }
  }

  function translateTextNodes(root) {
    if (!root) return;

    if (root.nodeType === Node.TEXT_NODE) {
      translateTextNode(root);
      return;
    }

    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function (node) {
          if (
            node.parentElement &&
            SKIP_TAGS.has(
              node.parentElement.tagName
            )
          ) {
            return NodeFilter.FILTER_REJECT;
          }

          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    const nodes = [];

    while (walker.nextNode()) {
      nodes.push(
        walker.currentNode
      );
    }

    nodes.forEach(
      translateTextNode
    );
  }

  function translateAttributes(root) {
    if (!root || !root.querySelectorAll) {
      return;
    }

    root
      .querySelectorAll('[placeholder]')
      .forEach(function (element) {
        const original = cleanText(
          element.getAttribute(
            'placeholder'
          )
        );

        const translated =
          placeholderTranslations[
            original
          ];

        if (translated) {
          element.setAttribute(
            'placeholder',
            translated
          );
        }
      });

    root
      .querySelectorAll(
        '[title], [aria-label]'
      )
      .forEach(function (element) {
        ['title', 'aria-label']
          .forEach(function (attribute) {
            if (
              !element.hasAttribute(
                attribute
              )
            ) {
              return;
            }

            const original =
              element.getAttribute(
                attribute
              );

            const exact =
              getExactTranslation(
                original
              );

            if (exact) {
              element.setAttribute(
                attribute,
                exact
              );

              return;
            }

            const translated =
              applyPartialTranslations(
                original
              );

            if (
              translated !== original
            ) {
              element.setAttribute(
                attribute,
                translated
              );
            }
          });
      });

    root
      .querySelectorAll(
        'input, button'
      )
      .forEach(function (element) {
        const original =
          element.value;

        if (!original) return;

        const exact =
          getExactTranslation(
            original
          );

        if (exact) {
          element.value = exact;

          element.setAttribute(
            'value',
            exact
          );

          return;
        }

        const translated =
          applyPartialTranslations(
            original
          );

        if (
          translated !== original
        ) {
          element.value =
            translated;

          element.setAttribute(
            'value',
            translated
          );
        }
      });
  }

  function translateRoot(root) {
    translateTextNodes(root);
    translateAttributes(root);
  }

  function translateShadowRoot(
    shadowRoot
  ) {
    if (!shadowRoot) return;

    translateRoot(shadowRoot);

    shadowRoot
      .querySelectorAll('*')
      .forEach(function (host) {
        if (host.shadowRoot) {
          translateShadowRoot(
            host.shadowRoot
          );
        }
      });
  }

  function translateAllShadowRoots() {
    document
      .querySelectorAll('*')
      .forEach(function (host) {
        if (host.shadowRoot) {
          translateShadowRoot(
            host.shadowRoot
          );
        }
      });
  }

  function translateEverything() {
    if (!document.body) return;

    translateRoot(
      document.body
    );

    translateAllShadowRoots();

    updatePageMetadata();
  }

  function start() {
    translateEverything();

    let scheduled = false;

    const observer =
      new MutationObserver(
        function () {
          if (scheduled) return;

          scheduled = true;

          window.requestAnimationFrame(
            function () {
              scheduled = false;

              translateEverything();
            }
          );
        }
      );

    observer.observe(
      document.documentElement,
      {
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
      }
    );

    /*
     * Dodatočné kontroly po načítaní
     * dynamických Shoptet prvkov.
     */
    [
      250,
      750,
      1500,
      3000
    ].forEach(function (delay) {
      window.setTimeout(
        translateEverything,
        delay
      );
    });
  }

  if (
    document.readyState === 'loading'
  ) {
    document.addEventListener(
      'DOMContentLoaded',
      start,
      { once: true }
    );
  } else {
    start();
  }
})();
