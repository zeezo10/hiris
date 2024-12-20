import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  Modal,
  TouchableOpacity
} from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

import * as SplashScreen from "expo-splash-screen";
import LabeledTextInput from "../../../../../component/global/LabeledTextInput";
import UploadFile from "../../../../../component/global/UploadFile";
import TextArea from "../../../../../component/global/TextArea";
import DatePickerInput from "../../../../../component/global/DatePickerInput";
import ModalKirim from "../../../../../component/global/ModalKirim";

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

  // --------- modal ---------------

  modalContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBackground: {
    position: "absolute",
    backgroundColor: "black",
    height: "100%",
    width: "100%",
    opacity: 0.5,
  },
  modalContent: {
    height: 270,
    width: "80%",
    backgroundColor: "white",
    borderRadius: 5,
    alignItems: "center",
    padding: 25,
    justifyContent: "space-between",
  },
  modalIconContainer: {
    backgroundColor: "#379AE6FF",
    height: 40,
    width: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  modalTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  modalDescription: {
    textAlign: "center",
    paddingHorizontal: 5,
  },
  modalButtonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalCancelButton: {
    flex: 1,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  modalCancelButtonText: {
    color: "#379AE6FF",
    fontSize: 16,
  },
  modalConfirmButton: {
    flex: 1,
    backgroundColor: "#379AE6FF",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
  modalConfirmButtonText: {
    color: "white",
    fontSize: 16,
  }
});

export default function Buat_Pengajuan({ navigation }) {
  const screenWidth = Dimensions.get("window").width;

  const [tanjungan, setTnjungan] = useState(1);

  const [modalVisible, setModalVisible] = useState(false);

  const handleBack = () => {
    setModalVisible(true);
  };


  return (
    <>
      <View
        style={{paddingHorizontal: 20, gap: 10, marginTop: 30 }}
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

          <View style={{ height: 40, flexDirection: "row", marginTop: 15 }}>
            <Pressable
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={handleBack}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 16,
                  color: "#379AE6FF",
                }}
              >
                Batal
              </Text>
            </Pressable>
            <ModalKirim
              navigation={navigation}
              title={"Informasi Pekerjaan"}
              name={"InfoPekerjaan"}
            />
          </View>
        </View>
      </View>

      <View style={{ height: 50 }}></View>


      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalBackground}></View>
          <View style={styles.modalContent}>
            <View style={styles.modalIconContainer}>
              <FontAwesome5Icon name="exclamation" size={20} color="white" />
            </View>
            <View style={styles.modalTextContainer}>
              <Text style={styles.modalTitle}>Peringatan</Text>
              <Text style={styles.modalDescription}>
                Apakah anda yakin ingin membatalkan pengisian data?
              </Text>
            </View>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.modalCancelButton}
              >
                <Text style={styles.modalCancelButtonText}>Tidak</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate("Home");
                }}
                style={styles.modalConfirmButton}
              >
                <Text style={styles.modalConfirmButtonText}>Ya</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
