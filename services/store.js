const store = {
  menu: null,
  cart: [],
};

const proxyStore = new Proxy(store, {
  set(target, property, value) {
    target[property] = value;
    if (property == "menu") {
      window.dispatchEvent(new Event("app-menu-changed"));
    }
    if (property == "cart") {
      window.dispatchEvent(new Event("appcartchange"));
    }
    return true;
  },
});

export default proxyStore;
