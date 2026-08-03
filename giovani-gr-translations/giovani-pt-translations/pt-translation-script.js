(function () {
  'use strict';

  const ALLOWED_HOSTS = new Set([
    'giovani.pt',
    'www.giovani.pt'
  ]);

  if (!ALLOWED_HOSTS.has(window.location.hostname)) return;

  const translations = {
    "My personal details": "Os meus dados pessoais",
    "My orders": "As minhas encomendas",
    "My invoices": "As minhas faturas",
    "736 ratings": "736 avaliações",
    "My proforma invoices": "As minhas faturas proforma",
    "Client proforma invoices": "Faturas proforma do cliente",
    "My credit notes": "As minhas notas de crédito",
    "Client credit notes": "Notas de crédito do cliente",
    "My delivery notes": "As minhas guias de remessa",
    "Client delivery notes": "Guias de remessa do cliente",
    "My proof of payments received": "Os meus comprovativos de pagamentos recebidos",
    "Proofs of payment received": "Comprovativos de pagamentos recebidos",
    "My discounts": "Os meus descontos",
    "My products ratings": "As minhas avaliações de produtos",
    "My products discussions": "As minhas discussões sobre produtos",
    "Client Center": "Área de cliente",
    "My account settings": "Definições da minha conta",
    "Tax documents": "Documentos fiscais",
    "My product discussions": "As minhas discussões sobre produtos",
    "You have no reserved order...": "Não tem nenhuma encomenda reservada...",
    "Personal data": "Dados pessoais",
    "Phone": "Telefone",
    "Your current password to approve changes": "A sua palavra-passe atual para aprovar as alterações",
    "Specify company details": "Indique os dados da empresa",
    "Street, House no.": "Rua, n.º de porta",
    "Shipping addresses": "Moradas de entrega",
    "No entries found...": "Nenhum registo encontrado...",
    "choose a gift": "escolher um presente",
    "choose a sample as a gift": "escolher uma amostra como presente",
    "Memorized cards": "Cartões guardados",
    "You have no documents saved yet.": "Ainda não tem documentos guardados.",
    "Extra discount": "Desconto adicional",
    "No rating was found.": "Não foi encontrada nenhuma avaliação.",
    "No comments found...": "Não foram encontrados comentários...",
    "To complete your order, you need to choose a pickup point from the carrier. Please search for one and select it.": "Para concluir a sua encomenda, tem de escolher um ponto de recolha da transportadora. Procure um e selecione-o.",
    "The final discount can vary depending on the setting of the respective discounts at particular products.": "O desconto final pode variar consoante a configuração dos descontos aplicáveis a cada produto.",
    "subscribe to our newsletter": "subscreva a nossa newsletter",
    "subscribe to newsletter": "subscrever a newsletter",
    "follow on instagram": "seguir no Instagram",
    "continue to blog": "continuar para o blog",
    "store rating": "avaliação da loja",
    "view more": "ver mais",
    "details": "detalhes",
    "ask a salesman": "perguntar a um vendedor",
    "i want to know more": "quero saber mais",
    "contact form": "formulário de contacto",
    "my cart": "o meu carrinho",
    "back to shop": "voltar à loja",
    "gift to buy": "presente pela compra",
    "do you need help? we are here for you:": "precisa de ajuda? estamos aqui para si:",
    "the basket is empty. fill it with joy!": "o carrinho está vazio. encha-o de alegria!",
    "do you have any questions? we'll answer them. please fill out your contact details carefully.": "tem alguma dúvida? responderemos. preencha cuidadosamente os seus dados de contacto.",
    "items have been added to shopping cart": "os artigos foram adicionados ao carrinho",
    "your cart is empty.": "o seu carrinho está vazio.",
    "fill it with joy!": "encha-o de alegria!",
    "shipping is free!": "os portes são gratuitos!",
    "personal information and address": "dados pessoais e morada",
    "availability": "disponibilidade",
    "price": "preço",
    "the page is lost. we will try to find it.": "a página perdeu-se. vamos tentar encontrá-la.",
    "amount was successfully updated.": "a quantidade foi atualizada com sucesso.",
    "password": "palavra-passe",
    "hide": "ocultar",
    "contact us": "contacte-nos",
    "variants": "variantes",
    "incl. vat:": "com IVA:",
    "incl. vat": "com IVA",
    "excl. vat": "sem IVA",
    "i have a discount coupon:": "tenho um cupão de desconto:",
    "apply": "aplicar",
    "enter coupon code": "introduza o código do cupão",
    "shipping is": "os portes são",
    "free": "grátis",
    "free!": "grátis!",
    "vat": "IVA",
    "items have been added to": "os artigos foram adicionados a",
    "discount coupon:": "cupão de desconto:",
    "overall rating": "avaliação geral",
    "rate product": "avaliar produto",
    "your rating:": "a sua avaliação:",
    "product description": "descrição do produto",
    "quantity": "quantidade",
    "price per unit": "preço por unidade",
    "code": "código",
    "total price": "preço total",
    "rounding": "arredondamento",
    "price excl. vat": "preço sem IVA",
    "price incl. vat": "preço com IVA",
    "in the tax regime oss": "no regime fiscal OSS",
    "price to pay": "valor a pagar",
    "prices are excl. vat": "os preços não incluem IVA",
    "prices are incl. vat": "os preços incluem IVA",
    "proceed to cart": "ir para o carrinho",
    "proceed to checkout": "avançar para o checkout",
    "product name": "nome do produto",
    "product parameters": "parâmetros do produto",
    "qr code": "código QR",
    "rate this product": "avaliar este produto",
    "rating": "avaliação",
    "read article": "ler artigo",
    "shopping cart": "carrinho de compras",
    "submit": "enviar",
    "subscribe": "subscrever",
    "vat number": "número de IVA",
    "search": "pesquisar",
    "amount": "quantidade",
    "billing address": "morada de faturação",
    "address": "morada",
    "addresses": "moradas",
    "buy again": "comprar novamente",
    "cancel": "cancelar",
    "cart": "carrinho",
    "currency": "moeda",
    "country": "país",
    "date": "data",
    "discount": "desconto",
    "all rights reserved": "todos os direitos reservados",
    "select a pick-up point": "selecione um ponto de recolha",
    "you have already voted": "já votou",
    "add a new address": "adicionar nova morada",
    "add a rating": "adicionar avaliação",
    "create new password": "criar nova palavra-passe",
    "newsletter unsubscribe": "cancelar subscrição da newsletter",
    "product": "produto",
    "recapitulation": "resumo",
    "total": "total",
    "zip": "código postal",
    "zip code": "código postal",
    "page not found.": "página não encontrada.",
    "pcs": "unid.",
    "pcs.": "unid.",
    "with vat": "com IVA",
    "without vat": "sem IVA",
    "customer account": "conta de cliente",
    "login to my account": "iniciar sessão na minha conta",
    "full name": "nome completo",
    "city": "localidade",
    "ship to another address": "entregar noutra morada",
    "enter note for vendor": "introduza uma nota para o vendedor",
    "your receipt": "o seu recibo",
    "i want to register": "quero registar-me",
    "customer data": "dados do cliente",
    "this field is required": "este campo é obrigatório",
    "message": "mensagem",
    "not rated": "sem avaliação",
    "email address": "endereço de e-mail",
    "save": "guardar",
    "already on stock": "já em stock",
    "send rating": "enviar avaliação",
    "how satisfied are you with the product?": "qual é o seu nível de satisfação com o produto?",
    "how satisfied are you with the shop?": "qual é o seu nível de satisfação com a loja?",
    "name": "nome",
    "cart item was successfully deleted.": "o artigo foi removido do carrinho com sucesso.",
    "forgotten password": "palavra-passe esquecida",
    "please enter the email address, which you used in the registration details. we will send you a link to set your password.": "introduza o endereço de e-mail utilizado no registo. Enviaremos uma ligação para definir a sua palavra-passe.",
    "add to cart": "adicionar ao carrinho",
    "checkout": "checkout",
    "in stock": "em stock",
    "out of stock": "esgotado",
    "delivery time": "prazo de entrega",
    "estimated delivery": "entrega estimada",
    "free shipping": "portes grátis",
    "customer support": "apoio ao cliente",
    "order summary": "resumo da encomenda",
    "continue shopping": "continuar a comprar",
    "remove": "remover",
    "edit": "editar",
    "home": "início",
    "category": "categoria",
    "categories": "categorias",
    "new": "novo",
    "sale": "promoção",
    "recommended": "recomendado",
    "bestseller": "mais vendido",
    "show more": "mostrar mais",
    "show less": "mostrar menos",
    "filter": "filtrar",
    "sort by": "ordenar por",
    "lowest price": "preço mais baixo",
    "highest price": "preço mais alto",
    "latest": "mais recentes",
    "popularity": "popularidade",
    "customer reviews": "avaliações dos clientes",
    "related products": "produtos relacionados",
    "you may also like": "também poderá gostar",
    "available": "disponível",
    "unavailable": "indisponível",
    "coupon code": "código do cupão",
    "order note": "nota da encomenda",
    "payment method": "método de pagamento",
    "shipping method": "método de envio",
    "place order": "finalizar encomenda",
    "continue": "continuar",
    "back": "voltar",
    "first name": "nome",
    "last name": "apelido",
    "company": "empresa",
    "company name": "nome da empresa",
    "company id": "NIF da empresa",
    "street": "rua",
    "house number": "número de porta",
    "note": "nota",
    "optional": "opcional",
    "required": "obrigatório",
    "login": "iniciar sessão",
    "register": "registar",
    "sign in": "iniciar sessão",
    "sign up": "registar",
    "log out": "terminar sessão",
    "logout": "terminar sessão",
    "email": "e-mail",
    "telephone": "telefone",
    "mobile": "telemóvel",
    "order": "encomenda",
    "orders": "encomendas",
    "invoice": "fatura",
    "payment": "pagamento",
    "shipping": "envio",
    "delivery": "entrega",
    "pick-up point": "ponto de recolha",
    "newsletter": "newsletter",
    "terms and conditions": "termos e condições",
    "privacy policy": "política de privacidade",
    "return policy": "política de devoluções",
    "returns": "devoluções",
    "complaints": "reclamações",
    "compare": "comparar",
    "wishlist": "lista de desejos",
    "add to wishlist": "adicionar à lista de desejos",
    "loading...": "a carregar...",
    "please wait": "aguarde, por favor",
    "success": "sucesso",
    "error": "erro",
    "thank you for your order": "obrigado pela sua encomenda",
    "order confirmation": "confirmação da encomenda",
    "discount code": "código de desconto",
    "apply coupon": "aplicar cupão",
    "remove item": "remover artigo",
    "empty cart": "esvaziar carrinho",
    "subtotal": "subtotal",
    "grand total": "total geral",
    "tax": "imposto",
    "delivery address": "morada de entrega",
    "account": "conta",
    "my account": "a minha conta",
    "change password": "alterar palavra-passe",
    "forgot password": "esqueci-me da palavra-passe",
    "reset password": "repor palavra-passe",
    "save changes": "guardar alterações",
    "close": "fechar",
    "yes": "sim",
    "no": "não"
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
    return normalizedTranslations.get(normalize(value)) || null;
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
      const translated = translateString(element.getAttribute(attribute));
      if (translated) element.setAttribute(attribute, translated);
    }
    if ((element.tagName === 'INPUT' || element.tagName === 'BUTTON') && element.hasAttribute('value')) {
      const translated = translateString(element.getAttribute('value'));
      if (translated) element.setAttribute('value', translated);
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

  function hideUndefined(root) {
    const scope = root?.querySelectorAll ? root : document;
    scope.querySelectorAll('*').forEach((element) => {
      if (element.children.length === 0 && normalize(element.textContent) === 'undefined') element.style.display = 'none';
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
        if (mutation.type === 'characterData' || mutation.type === 'attributes') pendingNodes.add(mutation.target);
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

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
