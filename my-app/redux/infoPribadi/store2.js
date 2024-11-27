import { configureStore } from "@reduxjs/toolkit";
import InfoPribadiReducer from "./PribadiCounter"; // Ensure this path is correct

const store2 = configureStore({
  reducer: {
    DataPribadi: InfoPribadiReducer, // Ensure this is correct
  },
});

export default store2;