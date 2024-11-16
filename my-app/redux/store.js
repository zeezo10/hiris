import { configureStore } from "@reduxjs/toolkit";
import dataBtnReducer from "./counter";

const store = configureStore({
  reducer: {
    dataBtn: dataBtnReducer,
  },
});

export default store;
