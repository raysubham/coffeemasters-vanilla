const store = {
  menu: [],
  cart: [],
};

const proxyStore = new Proxy(store, {
  set(target, property, value) {
    target[property] = value;
    if (property == "menu") {
      window.dispatchEvent(new Event("appmenuchange"));
    }
    if (property == "cart") {
      window.dispatchEvent(new Event("app-cart-changed"));
    }
    return true;
  },
});

export default proxyStore;
