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
  TouchableOpacity,
  Modal,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AntDesign from "react-native-vector-icons/AntDesign";
import DateTimePicker from "@react-native-community/datetimepicker";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { setFalse, setTrue } from "../../../redux/counter";
import { useDispatch } from "react-redux";
import SelectOption from "../../../component/global/SelectOption";
import UploadFile from "../../../component/global/UploadFile";
import LabeledTextInput from "../../../component/global/LabeledTextInput";
import ModalKirim from "../../../component/global/ModalKirim";

SplashScreen.preventAutoHideAsync();


// ---------------------------------

const DatePickerInput = ({name}) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    // Handle if the user canceled the selection (selectedDate will be undefined)
    if (selectedDate) {
      setDate(selectedDate);
    }
    setShow(false); // Hide the picker after selecting
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View style={{ gap: 3 }}>
      <Text style={{ fontSize: 14, fontWeight: "bold", color:"#424955FF" }}>{name}</Text>

      <Pressable
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          height: 45,
          width: "100%",
          borderColor: "#BCC1CAFF",
          borderWidth: 1,
          borderRadius: 6,
          paddingHorizontal: 10,
        }}
        onPress={showDatepicker}
        title="Pick a Date"
      >
        <Text style={{ fontSize: 14  }}>{date.toLocaleDateString()}</Text>

        <AntDesign name="calendar" size={20} color="#BCC1CAFF" />
      </Pressable>

      {show && (
        <DateTimePicker
          value={date}
          mode="date" // Date mode
          display="calendar" // For Android: Use 'calendar' or 'spinner'
          onChange={onChange}
        />
      )}
    </View>
  );
};


// ------------------------------------------




const styles = StyleSheet.create({
  //---------- text area ------------

  container: {
    flex: 1,
    justifyContent: "center",
    gap: 3,
  },
  textArea: {
    height: 150,
    padding: 10,
    width: "100%",
    borderColor: "#BCC1CAFF",
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 10,
    textAlignVertical: "top", // Align text at the top
  },

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
    paddingHorizontal: 10,
  },

  // --------------- radio -----------

  // container: {
  //   margin: 20,
  // },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#BCC1CAFF",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedCircle: {
    height: 15,
    width: 15,
    borderRadius: 3,
    backgroundColor: "#379ae6",
  },
  radioText: {
    fontSize: 16,
  },

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

export default function DataPekerjaan({ navigation }) {
  const screenWidth = Dimensions.get("window").width;

  const [date, setDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const [leaveReason, setLeaveReason] = useState("");

  // ---------------------------inputs------------------------------

  // ---------------------------------------------------------
  const toggleDatePicker = useCallback(
    (pickerType) => {
      if (pickerType === "start") {
        setShowStartPicker(!showStartPicker);
      } else {
        setShowEndPicker(!showEndPicker);
      }
    },
    [showStartPicker, showEndPicker]
  );

  const onDateChange = useCallback(
    (event, selectedDate, dateType) => {
      if (event.type === "dismissed") {
        toggleDatePicker(dateType);
        return;
      }

      if (selectedDate) {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        if (dateType === "start") {
          setStartDate(currentDate.toDateString());
        } else {
          setEndDate(currentDate.toDateString());
        }
      }
      toggleDatePicker(dateType);
    },
    [date, toggleDatePicker]
  );

  // -------- Batal Modal ------------------------------------
  const [modalVisible, setModalVisible] = useState(false);

  const handleBack = () => {
    setModalVisible(true);
  };

  return (
    <>
      <ScrollView
        style={{
          backgroundColor: "white",
          paddingVertical: 15,
          paddingHorizontal: 15,
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            gap: 15,
            paddingVertical: 10,
            flexDirection: "row",
          }}
        ></View>

        <View style={{ gap: 20 }}>
          <LabeledTextInput
            label={"ID Karyawan"}
            placeholder={"Ketik ID Karyawanp"}
          />

          <SelectOption
            name={"Jenis Karyawan"}
            items={["Karyawan Tetap (PKWTT)", "Karyawan Kontrak (PKWT)", "Karyawan Harian Lepas","Karyawan Paruh Waktu (Part-Time)","Karyawan Freelance (Pekerja Lepas)","Karyawan Outsourcing","Karyawan Magang (Internship)"]}
          />

          <SelectOption
            name={"Status Karyawan"}
            items={["Aktif", "Tidak Aktif", "Cuti", "Pensiun", "Mengundurkan Diri (Resign)", "Diberhentikan (PHK)", "Meninggal Dunia", "Tugas Belajar", "Skorsing"]}
          />

          <SelectOption
            name={"Nama Jabatan"}
            items={["Software Engineer", "Front-End Developer", "Back-End Developer" , "Full Stack Developer", "Mobile Developer", "DevOps Engineer", "System Administrator", "Network Engineer", "Data Engineer"]}
          />

          <SelectOption
            name={"Level Jabatan"}
            items={["Entry Level (Junior / Staff / Pelaksana)", "Associate / Officer", "Senior Staff / Senior Associate", "Supervisor / Koordinator" , "Assistant Manager", "Manager", "Senior Manager", "General Manager", "Director", "Vice President (VP)", "Executive Level (C-Level)", "Komisaris"]}
          />

          <SelectOption
            name={"Departemen"}
            items={["Product Development", "Engineering Development", "IT Security & Infrastructure", "Design UI/UX", "Data & Analytics", "Marketing & Sales", "Customer Support & Technical Support"]}
          />

          <SelectOption name={"Grade"} items={["Grade A (Pemula / Entry)", "Grade B (Pelaksana / Operator)", "Grade C (Terampil / Skilled)", "Grade D (Profesional)", "Grade E (Ahli / Senior Specialist)", "Grade F (Koordinator / Project Lead)", "Grade G (Eksekutif Junior)", "Grade H (Eksekutif Senior / Pengawas Utama)", "Grade I (Top Level / Eksekutif Puncak)"]} />

          <LabeledTextInput
            label={"Atasan Langsung"}
            placeholder={"Ketik Atasan Langsung"}
          />

          <LabeledTextInput
            label={"Persetujuan"}
            placeholder={"Ketik Persetujuan"}
          />

          <SelectOption name={"Lokasi Kerja"} items={["Kantor Pusat", "Cabang Makassar", "Remote", "Cabang Batam", "Cabang Pembantu Batam Center", "Pabrik Gunung Putri 1", "Pabrik Gunung Putri 2"]} />


          <DatePickerInput name={"Mulai Bekerja"} />

          <DatePickerInput name={"Terakhir Bekerja"} />

          <UploadFile
              label={"CV"}
              placeholder={"Upload CV"}
            />

          <UploadFile
              label={"Dokumen Kontrak Kerja"}
              placeholder={"Upload Kontrak Kerja"}
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
            <ModalKirim navigation={navigation} title={"Informasi Pekerjaan"} name={"InfoPekerjaan"} />
          </View>
        </View>

        <View style={{ height: 100 }}></View>
      </ScrollView>

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
