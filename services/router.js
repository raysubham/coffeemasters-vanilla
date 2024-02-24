const router = {
  init: () => {
    window.addEventListener("popstate", (e) => {
      router.go(e.target.location.pathname);
    });

    document.querySelectorAll("a.navlink").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        router.go(e.target.getAttribute("href"));
      });
    });

    router.go(window.location.pathname, false);
  },
  go: (path, addToHistory = true) => {
    if (addToHistory) {
      window.history.pushState({}, "", path);
    }

    let pageEl = null;

    switch (path) {
      case "/":
        pageEl = document.createElement("menu-page");
        break;
      case "/order":
        pageEl = document.createElement("order-page");
        break;
      default:
        if (path.startsWith("/product/")) {
          const productId = path.split("/")[2];
          pageEl = document.createElement("details-page");
          pageEl.dataset.productId = productId;
        } else {
          pageEl = document.createElement("h1");
          pageEl.textContent = "404 - Not Found";
        }
    }

    if (pageEl) {
      document.querySelector("main").innerHTML = "";
      document.querySelector("main").appendChild(pageEl);
    }
  },
};

export default router;
