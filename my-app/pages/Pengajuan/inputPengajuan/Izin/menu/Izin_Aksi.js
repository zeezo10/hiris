import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  Modal,
  TouchableOpacity,
  Button,
} from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

import * as SplashScreen from "expo-splash-screen";
import LabeledTextInput from "../../../../../component/global/LabeledTextInput";
import UploadFile from "../../../../../component/global/UploadFile";
import TextArea from "../../../../../component/global/TextArea";
import DatePickerInput from "../../../../../component/global/DatePickerInput";
import ModalKirim from "../../../../../component/global/ModalKirim";
import { Entypo } from "react-native-vector-icons";
import SelectOption from "../../../../../component/global/SelectOption";

SplashScreen.preventAutoHideAsync();

import DateTimePicker from "@react-native-community/datetimepicker"; // Import DateTimePicker

// import HourPicker from "../../../../../component/global/HourPicker";

// New HourPicker component
const HourPicker = ({ label, placeholder }) => {
  const [show, setShow] = useState(false);
  const [hour, setHour] = useState(new Date());
  const [selected, setSelected] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || hour;
    setShow(false);
    setHour(currentDate);
    setSelected(true);
  };

  return (
    <View style={{ gap: 3 }}>
      <Text style={{ fontSize: 14, fontWeight: "bold", color: "#424955FF" }}>
        {label}
      </Text>
      <Pressable
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          height: 40,
          width: "100%",
          borderColor: "#BCC1CAFF",
          borderWidth: 1,
          borderRadius: 6,
          paddingHorizontal: 10,
        }}
        title="Show Hour Picker"
        onPress={() => setShow(true)}
      >
        {show && (
          <DateTimePicker
            value={hour}
            mode="time" // Keep mode as 'time' to select hours
            is24Hour={true}
            display="default"
            onChange={(event, selectedDate) => {
              onChange(event, selectedDate);
            }}
          />
        )}
        <Text style={{ fontSize: 14, color: selected ? "" : "#BCC1CAFF" }}>
          {selected
            ? hour.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                second: undefined,
                hour12: true,
              })
            : placeholder}
        </Text>
        <Entypo name="chevron-thin-down" size={15} />
      </Pressable>
    </View>
  );
};

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
  },
});

export default function Izin_Aksi({ navigation }) {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const [modalVisible, setModalVisible] = useState(false);

  const handleBack = () => {
    setModalVisible(true);
  };

  return (
    <>
      <View style={{ paddingHorizontal: 20, gap: 10, marginTop: 30, backgroundColor:"white", height:screenHeight}}>
        <View style={{ gap: 20 }}>
          <SelectOption name={"Jenis Cuti"} items={[1, 2, 3]} />
          <DatePickerInput
            label={"Awal Cuti"}
            placeholder={"Pilih Tanggal Awal Cuti"}
          />
          <DatePickerInput
            label={"Akhir Cuti"}
            placeholder={"Pilih Tanggal Akhir Cuti"}
          />

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
              title={"Pengajuan Cuti"} /// change this later
              name={"InfoPekerjaan"}
            />
          </View>
        </View>
      </View>
     
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
