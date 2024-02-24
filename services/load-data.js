import API from "./api";

export const loadData = async () => {
  app.store.menu = await API.fetchMenu();
};
