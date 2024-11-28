import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  TextInput,
  StyleSheet,
  Dimensions,
  Button,
} from "react-native";

import * as SplashScreen from "expo-splash-screen";
import LabeledTextInput from "../../../../../component/global/LabeledTextInput";
import UploadFile from "../../../../../component/global/UploadFile";
import TextArea from "../../../../../component/global/TextArea";
import DatePickerInput from "../../../../../component/global/DatePickerInput";

SplashScreen.preventAutoHideAsync();


//---------------------------------

const styles = StyleSheet.create({
  //----------Select option ----------------
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    overflow: "hidden",
  },
  picker: {
    width: "100%",
    height: 50,
  },

  //---------- input ------------

  container: {
    gap: 3,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    height: 45,
    width: "100%",
    borderColor: "#BCC1CAFF",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
});

export default function Buat_Pengajuan({ navigation }) {
  const screenWidth = Dimensions.get("window").width;

  const [tanjungan, setTnjungan] = useState(1);

  return (
    <>
      <View
        style={{paddingHorizontal: 20, gap: 10, marginTop: 20 }}
      >
        <View style={{ gap: 20 }}>
          <LabeledTextInput
            label={"Nama Project & Pekerjaan"}
            placeholder={"Ketik Nama Project & Pekerjaan"}
          />

          <LabeledTextInput label={"Kategori"} placeholder={"Ketik Kategori"} />

          <LabeledTextInput label={"Nilai Reimbursment"} placeholder={"Rp"} />

            <DatePickerInput label={"Tanggal Transaksi"} placeholder={"Pilih Tanggal Transaksi"} />
         
          <UploadFile label={"Bukti Reimbursement"} placeholder={"Upload Bukti Reimbursement"} />

          <TextArea label={"Bukti Reimbursement"} placeholder={"Tulis Keterangan"}/>

          <View style={{ height: 100, flexDirection: "row-reverse" }}>
            <Pressable
              style={{
                height: 45,
                backgroundColor: "#379ae6",
                width: "50%",
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
              >
                Kirim
              </Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={{ height: 50 }}></View>
    </>
  );
}
