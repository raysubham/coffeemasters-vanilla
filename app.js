import { loadData } from "./services/load-data";
import router from "./services/router";
import store from "./services/store";

import { MenuPage } from "./public/components/MenuPage";
import { OrderPage } from "./public/components/OrderPage";
import { DetailsPage } from "./public/components/DetailsPage";
import ProductItem from "./public/components/ProductItem";

window.app = { store, router };

window.addEventListener("DOMContentLoaded", () => {
  loadData();
  app.router.init();
});

window.addEventListener("appcartchange", (event) => {
  const badge = document.getElementById("badge");
  const qty = app.store.cart.reduce((acc, item) => acc + item.quantity, 0);
  badge.textContent = qty;
  badge.hidden = qty == 0;
});
