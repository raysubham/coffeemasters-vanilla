export class MenuPage extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    const styles = document.createElement("style");
    this.root.appendChild(styles);

    const loadStyle = async () => {
      const res = await fetch("components/MenuPage.css");
      const css = await res.text();
      styles.textContent = css;
    };

    loadStyle();
  }
  connectedCallback() {
    const nodeTemplate = document.getElementById("menu-page-template");
    const content = nodeTemplate.content.cloneNode(true);
    this.root.appendChild(content);

    window.addEventListener("app-menu-changed", (e) => {
      this.render();
    });
    this.render();
  }

  render() {
    console.log("rendering menu", app.store.menu);
    if (app.store.menu) {
      this.root.querySelector("#menu").innerHTML = "";
      for (let category of app.store.menu) {
        const liCategory = document.createElement("li");
        liCategory.innerHTML = `
              <h3>${category.name}</h3>
              <ul class='category'>
              </ul>
          `;
        this.root.querySelector("#menu").appendChild(liCategory);

        category.products.forEach((product) => {
          const item = document.createElement("product-item");
          item.dataset.product = JSON.stringify(product);
          liCategory.querySelector("ul").appendChild(item);
        });
      }
    } else {
      this.root.querySelector("#menu").innerHTML = "Loading...";
    }
  }
}

customElements.define("menu-page", MenuPage);
