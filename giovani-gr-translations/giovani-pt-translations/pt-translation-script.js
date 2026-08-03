(function () {
  'use strict';

  const ALLOWED_HOSTS = new Set([
    'giovani.pt',
    'www.giovani.pt'
  ]);

  if (!ALLOWED_HOSTS.has(window.location.hostname)) return;

  const translations = {
    "My personal details": "Os meus dados pessoais",
    "I have a discount coupon": "Tenho um cupão de desconto",
    "My orders": "As minhas encomendas",
    "My invoices": "As minhas faturas",
    "736 ratings": "736 Avaliações",
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
    "choose a gift": "Escolher um presente",
    "choose a sample as a gift": "Escolher uma amostra como presente",
    "Memorized cards": "Cartões guardados",
    "You have no documents saved yet.": "Ainda não tem documentos guardados.",
    "Extra discount": "Desconto adicional",
    "No rating was found.": "Não foi encontrada nenhuma avaliação.",
    "No comments found...": "Não foram encontrados comentários...",
    "To complete your order, you need to choose a pickup point from the carrier. Please search for one and select it.": "Para concluir a sua encomenda, tem de escolher um ponto de recolha da transportadora. Procure um e selecione-o.",
    "The final discount can vary depending on the setting of the respective discounts at particular products.": "O desconto final pode variar consoante a configuração dos descontos aplicáveis a cada produto.",
    "subscribe to our newsletter": "Subscreva a nossa newsletter",
    "subscribe to newsletter": "Subscrever a newsletter",
    "follow on instagram": "Seguir no Instagram",
    "continue to blog": "Continuar para o blog",
    "store rating": "Avaliação da loja",
    "view more": "Ver mais",
    "details": "Detalhes",
    "ask a salesman": "Perguntar a um vendedor",
    "i want to know more": "Quero saber mais",
    "contact form": "Formulário de contacto",
    "my cart": "O meu carrinho",
    "back to shop": "Voltar à loja",
    "gift to buy": "Presente pela compra",
    "do you need help? we are here for you:": "Precisa de ajuda? estamos aqui para si:",
    "the basket is empty. fill it with joy!": "O carrinho está vazio. encha-o de alegria!",
    "do you have any questions? we'll answer them. please fill out your contact details carefully.": "Tem alguma dúvida? responderemos. preencha cuidadosamente os seus dados de contacto.",
    "items have been added to shopping cart": "Os artigos foram adicionados ao carrinho",
    "your cart is empty.": "O seu carrinho está vazio.",
    "fill it with joy!": "Encha-o de alegria!",
    "shipping is free!": "Os portes são gratuitos!",
    "personal information and address": "Dados pessoais e morada",
    "availability": "Disponibilidade",
    "price": "Preço",
    "the page is lost. we will try to find it.": "A página perdeu-se. vamos tentar encontrá-la.",
    "amount was successfully updated.": "A quantidade foi atualizada com sucesso.",
    "password": "Palavra-passe",
    "hide": "Ocultar",
    "contact us": "Contacte-nos",
    "variants": "Variantes",
    "incl. vat:": "Com IVA:",
    "incl. vat": "Com IVA",
    "excl. vat": "Sem IVA",
    "i have a discount coupon:": "Tenho um cupão de desconto:",
    "apply": "Aplicar",
    "enter coupon code": "Introduza o código do cupão",
    "shipping is": "Os portes são",
    "free": "Grátis",
    "free!": "Grátis!",
    "vat": "IVA",
    "items have been added to": "Os artigos foram adicionados a",
    "discount coupon:": "Cupão de desconto:",
    "overall rating": "Avaliação geral",
    "rate product": "Avaliar produto",
    "your rating:": "A sua avaliação:",
    "product description": "Descrição do produto",
    "quantity": "Quantidade",
    "price per unit": "Preço por unidade",
    "code": "Código",
    "total price": "Preço total",
    "rounding": "Arredondamento",
    "price excl. vat": "Preço sem IVA",
    "price incl. vat": "Preço com IVA",
    "in the tax regime oss": "No regime fiscal OSS",
    "price to pay": "Valor a pagar",
    "prices are excl. vat": "Os preços não incluem IVA",
    "prices are incl. vat": "Os preços incluem IVA",
    "proceed to cart": "Ir para o carrinho",
    "proceed to checkout": "Avançar para o checkout",
    "product name": "Nome do produto",
    "product parameters": "Parâmetros do produto",
    "qr code": "Código QR",
    "rate this product": "Avaliar este produto",
    "rating": "Avaliação",
    "read article": "Ler artigo",
    "shopping cart": "Carrinho de compras",
    "submit": "Enviar",
    "subscribe": "Subscrever",
    "vat number": "Número de IVA",
    "search": "Pesquisar",
    "amount": "Quantidade",
    "billing address": "Morada de faturação",
    "address": "Morada",
    "addresses": "Moradas",
    "buy again": "Comprar novamente",
    "cancel": "Cancelar",
    "cart": "Carrinho",
    "currency": "Moeda",
    "country": "País",
    "date": "Data",
    "discount": "Desconto",
    "all rights reserved": "Todos os direitos reservados",
    "select a pick-up point": "Selecione um ponto de recolha",
    "you have already voted": "Já votou",
    "add a new address": "Adicionar nova morada",
    "add a rating": "Adicionar avaliação",
    "create new password": "Criar nova palavra-passe",
    "newsletter unsubscribe": "Cancelar subscrição da newsletter",
    "product": "Produto",
    "recapitulation": "Resumo",
    "total": "Total",
    "zip": "Código postal",
    "zip code": "Código postal",
    "page not found.": "Página não encontrada.",
    "pcs": "Unid.",
    "pcs.": "Unid.",
    "with vat": "Com IVA",
    "without vat": "Sem IVA",
    "customer account": "Conta de cliente",
    "login to my account": "Iniciar sessão na minha conta",
    "full name": "Nome completo",
    "city": "Localidade",
    "ship to another address": "Entregar noutra morada",
    "enter note for vendor": "Introduza uma nota para o vendedor",
    "your receipt": "O seu recibo",
    "i want to register": "Quero registar-me",
    "customer data": "Dados do cliente",
    "this field is required": "Este campo é obrigatório",
    "message": "Mensagem",
    "not rated": "Sem avaliação",
    "email address": "Endereço de e-mail",
    "save": "Guardar",
    "already on stock": "Já em stock",
    "send rating": "Enviar avaliação",
    "how satisfied are you with the product?": "Qual é o seu nível de satisfação com o produto?",
    "how satisfied are you with the shop?": "Qual é o seu nível de satisfação com a loja?",
    "name": "Nome",
    "cart item was successfully deleted.": "O artigo foi removido do carrinho com sucesso.",
    "forgotten password": "Palavra-passe esquecida",
    "please enter the email address, which you used in the registration details. we will send you a link to set your password.": "Introduza o endereço de e-mail utilizado no registo. Enviaremos uma ligação para definir a sua palavra-passe.",
    "add to cart": "Adicionar ao carrinho",
    "checkout": "Checkout",
    "in stock": "Em stock",
    "out of stock": "Esgotado",
    "delivery time": "Prazo de entrega",
    "estimated delivery": "Entrega estimada",
    "free shipping": "Portes grátis",
    "customer support": "Apoio ao cliente",
    "order summary": "Resumo da encomenda",
    "continue shopping": "Continuar a comprar",
    "remove": "Remover",
    "edit": "Editar",
    "home": "Início",
    "category": "Categoria",
    "categories": "Categorias",
    "new": "Novo",
    "sale": "Promoção",
    "recommended": "Recomendado",
    "bestseller": "Mais vendido",
    "show more": "Mostrar mais",
    "show less": "Mostrar menos",
    "filter": "Filtrar",
    "sort by": "Ordenar por",
    "lowest price": "Preço mais baixo",
    "highest price": "Preço mais alto",
    "latest": "Mais recentes",
    "popularity": "Popularidade",
    "customer reviews": "Avaliações dos clientes",
    "related products": "Produtos relacionados",
    "you may also like": "Também poderá gostar",
    "available": "Disponível",
    "unavailable": "Indisponível",
    "coupon code": "Código do cupão",
    "order note": "Nota da encomenda",
    "payment method": "Método de pagamento",
    "shipping method": "Método de envio",
    "place order": "Finalizar encomenda",
    "continue": "Continuar",
    "back": "Voltar",
    "first name": "Nome",
    "last name": "Apelido",
    "company": "Empresa",
    "company name": "Nome da empresa",
    "company id": "NIF da empresa",
    "street": "Rua",
    "house number": "Número de porta",
    "note": "Nota",
    "optional": "Opcional",
    "required": "Obrigatório",
    "login": "Iniciar sessão",
    "register": "Registar",
    "sign in": "Iniciar sessão",
    "sign up": "Registar",
    "log out": "Terminar sessão",
    "logout": "Terminar sessão",
    "email": "E-mail",
    "telephone": "Telefone",
    "mobile": "Telemóvel",
    "order": "Encomenda",
    "orders": "Encomendas",
    "invoice": "Fatura",
    "payment": "Pagamento",
    "shipping": "Envio",
    "delivery": "Entrega",
    "pick-up point": "Ponto de recolha",
    "newsletter": "Newsletter",
    "terms and conditions": "Termos e condições",
    "privacy policy": "Política de privacidade",
    "return policy": "Política de devoluções",
    "returns": "Devoluções",
    "complaints": "Reclamações",
    "compare": "Comparar",
    "wishlist": "Lista de desejos",
    "add to wishlist": "Adicionar à lista de desejos",
    "loading...": "A carregar...",
    "please wait": "Aguarde, por favor",
    "success": "Sucesso",
    "error": "Erro",
    "thank you for your order": "Obrigado pela sua encomenda",
    "order confirmation": "Confirmação da encomenda",
    "discount code": "Código de desconto",
    "apply coupon": "Aplicar cupão",
    "remove item": "Remover artigo",
    "empty cart": "Esvaziar carrinho",
    "subtotal": "Subtotal",
    "grand total": "Total geral",
    "tax": "Imposto",
    "delivery address": "Morada de entrega",
    "account": "Conta",
    "my account": "A minha conta",
    "change password": "Alterar palavra-passe",
    "forgot password": "Esqueci-me da palavra-passe",
    "reset password": "Repor palavra-passe",
    "save changes": "Guardar alterações",
    "close": "Fechar",
    "yes": "Sim",
    "no": "Não",

    // Portuguese and mixed-language variants already rendered by Shoptet
    "o meu carrinho": "O meu carrinho",
    "pagamento e envio": "Pagamento e envio",
    "dados pessoais e morada": "Dados pessoais e morada",
    "cupão de desconto:": "Cupão de desconto:",
    "i have a": "Tenho um",
    "i have a cupão de desconto:": "Tenho um cupão de desconto:"
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
