import { configureStore } from "@reduxjs/toolkit";
import { dataBtnReducer } from "./counter";
import { infoPribadiReducer } from "./counter";

// First store
const store1 = configureStore({
  reducer: {
    dataBtn: dataBtnReducer,
  },
});

// Second store
const store2 = configureStore({
  reducer: {
    DataPribadi: infoPribadiReducer,
  },
});

// Export both stores
export { store1, store2 };

