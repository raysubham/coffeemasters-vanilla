import { addToCart } from "../lib/utils";

const renderProduct = (product) => {
  let container = document.createElement("div");
  container.style.marginBottom = "12px";

  let image = document.createElement("img");
  image.setAttribute("src", `/images/${product.image}`);
  let productInfo = document.createElement("div");

  let productName = document.createElement("h4");
  productName.textContent = product.name;
  let productDescription = document.createElement("p");
  productDescription.textContent = product.description;
  productDescription.style.fontSize = "14px";
  let productPrice = document.createElement("p");
  productPrice.textContent = `$ ${product.price}`;
  let addToCartBtn = document.createElement("button");
  addToCartBtn.textContent = "Add  to Cart";
  addToCartBtn.addEventListener("click", (e) => {
    addToCart(product);
  });

  productInfo.style.display = "flex";
  productInfo.style.flexDirection = "column";
  productInfo.style.justifyContent = "space-evenly";
  productInfo.append(
    productName,
    productDescription,
    productPrice,
    addToCartBtn
  );

  container.style.display = "flex";
  container.style.gap = "24px";
  container.appendChild(image);
  container.appendChild(productInfo);
  return container;
};

const renderProductpage = (menu) => {
  const mainContainer = document.createElement("div");
  mainContainer.style.marginTop = "16px";

  if (menu.length) {
    menu.forEach((category) => {
      const categoryContainer = document.createElement("div");
      const categoryNameEl = document.createElement("h4");
      categoryNameEl.textContent = category.name;

      categoryContainer.appendChild(categoryNameEl);

      if (category?.products?.length) {
        const products = category.products.map((product) => {
          return renderProduct(product);
        });
        categoryContainer.append(...products);
      }

      mainContainer.appendChild(categoryContainer);
    });
  } else {
    mainContainer.textContent = "No Products to dipsplay";
  }

  return mainContainer;
};

export { renderProductpage, renderProduct };
