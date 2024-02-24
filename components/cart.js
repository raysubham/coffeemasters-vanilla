const renderCartItem = ({ product, quantity }) => {
  let container = document.createElement("div");
  container.style.marginBottom = "12px";

  let image = document.createElement("img");
  image.setAttribute("src", `/images/${product.image}`);
  let productInfo = document.createElement("div");

  let productName = document.createElement("h4");
  productName.textContent = product.name;
  let productPrice = document.createElement("p");
  productPrice.textContent = `${quantity}   x   $ ${product.price}`;
  let totalPrice = document.createElement("h4");
  totalPrice.textContent = `$ ${product.price * quantity}`;

  productInfo.style.display = "flex";
  productInfo.style.flexDirection = "column";
  productInfo.style.justifyContent = "space-evenly";
  productInfo.append(productName, productPrice, totalPrice);

  container.style.display = "flex";
  container.style.gap = "24px";
  container.appendChild(image);
  container.appendChild(productInfo);
  return container;
};

export const renderCart = (cart) => {
  const mainContainer = document.createElement("div");

  if (cart.length) {
    const cartItemsEl = cart.map((item) => {
      return renderCartItem(item);
    });
    mainContainer.append(...(cartItemsEl ?? []));
  } else {
    mainContainer.textContent = "No Cart Items added";
  }

  return mainContainer;
};
