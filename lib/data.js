export const loadData = async () => {
  const response = await fetch("/menu.json");
  const data = await response.json();
  app.store.menu = data;
};
