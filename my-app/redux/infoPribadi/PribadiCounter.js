import { createSlice } from "@reduxjs/toolkit";

const initialState2 = {
  namaLengkap: "asdfghjkl;",
  tempatLahir: "asdfghjkl;",
  tanggalLahir: "asdfghjkl;",
  nomorHandphone: "asdfghjkl;",
  statusPerkawinan: "asdfghjkl;",
  jenisKelamin: "asdfghjkl;",
  agama: "asdfghjkl;",
  email: "asdfghjkl;",
  golonganDarah: "asdfghjkl;",
  NIK_NPWP: "asdfghjkl",
  noBPJSKetenagakerjaan: "asdfghjkl;",
  nomorBPJSKesehatan: "asdfghjkl;",
  namaKontakDarurat: "asdfghjkl;",
  alamatSesuaiKTP_1: "asdfghjkl;",
  samaDenganAlamatdomisili: false,
  kota_1: "asdfghjkl;",
  provinsi_1: "asdfghjkl;",
  kodePos_1: "asdfghjkl;",
  alamatSesuaiKTP_2: "asdfghjkl;",
  kota_2: "asdfghjkl;",
  provinsi_2: "asdfghjkl;",
  kodePos_2: "asdfghjkl;",
};

const infoPribadiSlice = createSlice({
  name: "DataPribadi",
  initialState2,
  reducers: {
    // Define your reducers here
    setNamaLengkap: (state, action) => {
      state.namaLengkap = action.payload; // Update the state
    },
  },
});

export const { setNamaLengkap } = infoPribadiSlice.actions;
export default infoPribadiSlice.reducer;
