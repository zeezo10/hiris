import { createSlice } from "@reduxjs/toolkit";

const dataBtnSlice = createSlice({
  name: "dataBtn",
  initialState: {
    InfoPribadi: false,
    InfoPekerjaan: false,
    Payroll: false,
    RewayatPendidikan: false,
    RewayatPekerjaan: false,
    Aset: false,
  },
  reducers: {
    setTrue: (state, action) => {
      const { type } = action.payload;
      state[type] = true;
    },
    setFalse: (state, action) => {
      const { type } = action.payload;
      state[type] = false;
    },
    resetAll: (state) => {
      Object.keys(state).forEach((key) => {
        state[key] = false;
      });
    },
  },
});

export const { setTrue, setFalse, resetAll } = dataBtnSlice.actions;
export default dataBtnSlice.reducer;
