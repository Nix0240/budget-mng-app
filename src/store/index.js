import { configureStore } from "@reduxjs/toolkit";
import ListSlice from "./slices/listSlice";

const store = configureStore({
  reducer: {
    lists: ListSlice,
  },
});

export default store;
