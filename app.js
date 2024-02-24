import { loadData } from "./lib/data";
import router from "./lib/router";
import store from "./lib/store";

window.app = {};
app.store = store;
app.router = router;

window.addEventListener("DOMContentLoaded", async (e) => {
  await loadData();
  app.router.init();
  main();
});

const main = () => {};

window.addEventListener("app-cart-changed", (e) => {
  const qty = app.store.cart.reduce((acc, item) => acc + item.quantity, 0);

  const cartEl = document.querySelector("#cart");
  cartEl.textContent = `(${qty})`;
});
