import { configureStore } from "@reduxjs/toolkit";
import ListSlice from "./slices/listSlice";

const preloadedState = JSON.parse(window.localStorage.getItem("store")) || {};
const store = configureStore({
  reducer: {
    lists: ListSlice,
  },
  preloadedState,
});

store.subscribe(() => {
  window.localStorage.setItem("store", JSON.stringify(store.getState()));
});

export default store;
