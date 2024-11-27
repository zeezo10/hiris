import { createSlice } from "@reduxjs/toolkit";

const dataBtnSlice = createSlice({
  name: "dataBtn",
  initialState: {
    InfoPribadi: false,
    InfoPekerjaan: false,
    InfoPayroll: false,
    RiwayatPendidikan: false,
    RiwayatPekerjaan: false,
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
export const dataBtnReducer = dataBtnSlice.reducer;

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
  initialState: {
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
  },
  reducers: {
    setNamaLengkap: (state, action) => {
      state.namaLengkap = action.payload; // Update the state
    },
  },
});

export const { setNamaLengkap } = infoPribadiSlice.actions;
export const infoPribadiReducer = infoPribadiSlice.reducer;
