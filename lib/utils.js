export const addToCart = (product) => {
  const results = app.store.cart.filter(
    (prodInCart) => prodInCart.product.id == product.id
  );
  if (results.length == 1) {
    // The product is already in the cart
    // update the current item
    app.store.cart = app.store.cart.map((p) =>
      p.product.id == product.id ? { ...p, quantity: p.quantity + 1 } : p
    );
  } else {
    app.store.cart = [...app.store.cart, { product, quantity: 1 }];
  }
};
