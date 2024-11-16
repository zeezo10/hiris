import { createSlice } from "@reduxjs/toolkit";

const InfoPribadiSlice = createSlice({
  name: "InfoPribadi",
  initialState: {
    namaLengkap: "",
    tempatLahir: "",
    tanggalLahir: "",
    nomorHandphone: "",
    statusPerkawinan: "",
    jenisKelamin: "",
    agama: "",
    email: "",
    golonganDarah: "",
    NIK_NPWP: "",
    noBPJSKetenagakerjaan: "",
    nomorBPJSKesehatan: "",
    namaKontakDarurat: "",
    alamatSesuaiKTP_1: "",
    samaDenganAlamatdomisili: false,
    kota_1: "",
    provinsi_1: "",
    kodePos_1: "",
    alamatSesuaiKTP_2: "",
    kota_2: "",
    provinsi_2: "",
    kodePos_2: "",
    // Additional fields for boolean state (if needed)
  },
  reducers: {
    setTrue: (state, action) => {
      const { type } = action.payload;
      if (state.hasOwnProperty(type)) {
        state[type] = true;
      }
    },
    setFalse: (state, action) => {
      const { type } = action.payload;
      if (state.hasOwnProperty(type)) {
        state[type] = false;
      }
    },
    resetAll: (state) => {
      Object.keys(state).forEach((key) => {
        // Only reset boolean fields to false
        if (typeof state[key] === "boolean") {
          state[key] = false;
        }
      });
    },
    updateField: (state, action) => {
      const { field, value } = action.payload;
      if (state.hasOwnProperty(field)) {
        state[field] = value;
      }
    },
    resetForm: () => {
      return {
        namaLengkap: "",
        tempatLahir: "",
        tanggalLahir: "",
        nomorHandphone: "",
        statusPerkawinan: "",
        jenisKelamin: "",
        agama: "",
        email: "",
        golonganDarah: "",
        NIK_NPWP: "",
        noBPJSKetenagakerjaan: "",
        nomorBPJSKesehatan: "",
        namaKontakDarurat: "",
        alamatSesuaiKTP_1: "",
        samaDenganAlamatdomisili: false,
        kota_1: "",
        provinsi_1: "",
        kodePos_1: "",
        alamatSesuaiKTP_2: "",
        kota_2: "",
        provinsi_2: "",
        kodePos_2: "",
      };
    },
  },
});

export const { setTrue, setFalse, resetAll, updateField, resetForm } = InfoPribadiSlice.actions;
export default InfoPribadiSlice.reducer;
