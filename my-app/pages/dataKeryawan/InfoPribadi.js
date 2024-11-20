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
import { setFalse, setTrue } from "../../redux/counter";
import { useDispatch } from "react-redux";
import SelectOption from "../../component/global/SelectOption";
import LabeledTextInput from "../../component/global/LabeledTextInput";
import ModalKirim from "../../component/global/ModalKirim";

SplashScreen.preventAutoHideAsync();

const RadioButtonExample = () => {
  const [selectedValue, setSelectedValue] = useState(false);

  const options = ["Sama dengan alamat domisili"];

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.radioContainer}
          onPress={() => setSelectedValue(!selectedValue)}
        >
          <View style={styles.radioCircle}>
            {selectedValue && <View style={styles.selectedCircle} />}
          </View>
          <Text style={styles.radioText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

// ---------------------------------

const DatePickerInput = () => {
  const [date, setDate] = useState(null); // Initialize with null
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    if (event.type === "dismissed") {
      setShow(false); // Hide the picker if dismissed
      return;
    }
    if (selectedDate) {
      setDate(selectedDate); // Set the selected date
    }
    setShow(false); // Hide the picker after selecting
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View style={{ gap: 3 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Tanggal Lahir</Text>

      <Pressable
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          height: 45,
          width: "100%",
          borderColor: "#BCC1CAFF",
          borderWidth: 1,
          borderRadius: 10,
          paddingHorizontal: 10,
        }}
        onPress={showDatepicker}
        title="Pick a Date"
      >
        <Text style={{ fontSize: 14, color:date ? "" : "#9095A0FF" }}>{date ? date.toLocaleDateString() : "Pilih Tanggal Lahir"}</Text>

        <AntDesign name="calendar" size={20} color="#BCC1CAFF" />
      </Pressable>

      {show && (
        <DateTimePicker
          value={date || new Date()} // Use current date if no date is selected
          mode="date"
          display="calendar"
          onChange={onChange}
        />
      )}
    </View>
  );
};

//-------------------------------------------

const TextArea = () => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        Alamat Sesuai KTP
      </Text>
      <TextInput
        style={styles.textArea}
        placeholder="Type something..."
        placeholderTextColor="gray"
        multiline={true}
        numberOfLines={4} // Adjust the initial number of lines
        value={text}
        onChangeText={setText}
      />
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

export default function InfoPribadi({ navigation }) {
  const screenWidth = Dimensions.get("window").width;

  const [date, setDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const [leaveReason, setLeaveReason] = useState("");

  // ---------------------------inputs------------------------------

  const [namaLengkap, setNameLengkap] = useState("");
  const [tempatLahir, setTempatLahir] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [nomorHandphone, setNomorHandphone] = useState("");
  const [statusPerkawinan, setStatusPerkawinan] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [agama, setAgama] = useState("");
  const [email, setEmail] = useState("");
  const [dolonganDarah, setGolonganDarah] = useState("");
  const [NIK_NPWP, setNIK_NPWP] = useState("");
  const [noBPJSKetenagakerjaan, setNoBPJSKetenagakerjaan] = useState("");
  const [nomorBPJSKesehatan, setnomorBPJSKesehatan] = useState("");
  const [namaKontakDarurat, setNamaKontakDarura] = useState("");
  const [alamatSesuaiKTP_1, setAlamatSesuaiKTP_1] = useState("");
  const [samaDenganAlamatdomisili, setSamaDenganAlamatdomisili] =
    useState(false);
  const [kota_1, setKota_1] = useState("");
  const [provinsi_1, setProvinsi_1] = useState("");
  const [kodePos_1, setKodePos_1] = useState("");
  const [alamatSesuaiKTP_2, setAlamatSesuaiKTP_2] = useState("");
  const [kota_2, setKota_2] = useState("");
  const [provinsi_2, setProvinsi_2] = useState("");
  const [kodePos_2, setKodePos_2] = useState("");

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
        >
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: "#9095A0FF",
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome5Icon
              name="user-alt"
              size={50}
              color="white"
              style={{ position: "absolute" }}
            />
          </View>

          <View
            style={{
              height: 40,
              width: 40,
              backgroundColor: "#379AE6FF",
              position: "absolute",
              top: 20,
              left: 190,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome5Icon
              name="pen"
              size={15}
              color="white"
              style={{ position: "absolute" }}
            />
          </View>
        </View>

        <View style={{ gap: 20 }}>
          <LabeledTextInput
            label={"Nama Lengkap"}
            placeholder={"Ketik Nama Lengkap"}
          />

          <LabeledTextInput
            label={"Tempat Lahir"}
            placeholder={"Ketik Tempat Lahir"}
          />

          <DatePickerInput />

          <View style={{ gap: 3 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Nomor Handphone
            </Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <TextInput
                style={{
                  height: 45,
                  flex: 1,
                  borderColor: "#BCC1CAFF",
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingHorizontal: 10,
                }}
                placeholder="+62"
              ></TextInput>
              <TextInput
                style={{
                  height: 45,
                  flex: 8,
                  borderColor: "#BCC1CAFF",
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingHorizontal: 10,
                }}
                placeholder="Ketik Nomor Handphone"
              ></TextInput>
            </View>
          </View>

          <SelectOption
            name={"Status Perkawinan"}
            items={["Belum Kawin", "Kawin", "Cerai Hidup", "Cerai Mati"]}
          />

          <SelectOption
            name={"Jenis Kelamin"}
            items={["Laki-laki", "Perempuan"]}
          />
          <SelectOption
            name={"Agama"}
            items={[
              "Islam",
              "Kristen Protestan",
              "Kristen Katolik",
              "Hindu",
              "Buddha",
              "Konghucu",
            ]}
          />

          <LabeledTextInput label={"Email"} placeholder={"Ketik Email"} />

          <SelectOption name={"Golongan Darah"} items={["A", "B", "AB", "O"]} />

          <LabeledTextInput
            label={"NIK & NPWP"}
            placeholder={"Ketik NIK & NPWP"}
          />

          <LabeledTextInput
            label={"Nomor BPJS Ketenagakerjaan"}
            placeholder={"Ketik Nomor BPJS Ketenagakerjaan"}
          />

          <LabeledTextInput
            label={"Nomor BPJS Kesehatan"}
            placeholder={"Ketik Nomor BPJS Kesehatan"}
          />

          <LabeledTextInput
            label={"Nama Kontak Darurat"}
            placeholder={"Ketik Nama Kontak Darurat"}
          />

          <View style={{ gap: 3 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Nomor Kontak Darurat
            </Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <TextInput
                style={{
                  height: 45,
                  flex: 1,
                  borderColor: "#BCC1CAFF",
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingHorizontal: 10,
                }}
                placeholder="+62"
              ></TextInput>
              <TextInput
                style={{
                  height: 45,
                  flex: 8,
                  borderColor: "#BCC1CAFF",
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingHorizontal: 10,
                }}
                placeholder="Ketik Nomor Handphone"
              ></TextInput>
            </View>
          </View>

          <TextArea />
          <RadioButtonExample />

          <SelectOption name={"Kota"} items={["Kota A", "Kota B", "Kota C"]} />
          <SelectOption
            name={"Provinsi"}
            items={["Provinsi A", "Provinsi B", "Provinsi C"]}
          />
          <SelectOption
            name={"Kode Pos"}
            items={["Kode Pos A", "Kode Pos B", "Kode Pos C"]}
          />

          <TextArea />

          <SelectOption name={"Kota"} items={["Kota A", "Kota B", "Kota C"]} />
          <SelectOption
            name={"Provinsi"}
            items={["Provinsi A", "Provinsi B", "Provinsi C"]}
          />
          <SelectOption
            name={"Kode Pos"}
            items={["Kode Pos A", "Kode Pos B", "Kode Pos C"]}
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
            <ModalKirim navigation={navigation} title={"Informasi Pribadi"}  name={"InfoPribadi"}/>
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
