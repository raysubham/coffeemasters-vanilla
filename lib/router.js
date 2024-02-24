import { renderCart } from "../components/cart";
import { renderProductpage } from "../components/products";

const router = {
  init: () => {
    window.addEventListener("popstate", (e) => {
      e.preventDefault();
      router.go(e.state.path);
    });

    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        router.go(e.target.getAttribute("href"));
      });
    });

    router.go(location.pathname);
  },
  go: (path, addToHistory = true) => {
    if (addToHistory) {
      history.pushState({ path }, null, path);
    } else {
    }

    let pageEl = null;

    if (path == "/") {
      const menu = app.store.menu;
      pageEl = renderProductpage(menu);
    } else if (path === "/cart") {
      const cart = app.store.cart;
      pageEl = renderCart(cart);
    }

    document.querySelector("main").innerHTML = "";
    document.querySelector("main").appendChild(pageEl);
  },
};

export default router;
