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
import { Picker } from "@react-native-picker/picker";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { setFalse, setTrue } from "../../redux/counter";
import { useDispatch } from "react-redux";

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
        <Text style={{ fontSize: 18 }}>{date.toLocaleDateString()}</Text>

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

//---------------------------------

const SimpleSelect = ({ type, label }) => {
  const [selectedValue, setSelectedValue] = useState("choose one");

  return (
    <View style={{ gap: 3 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{label}</Text>

      <View
        style={{
          height: 45,
          width: "100%",
          borderColor: "#BCC1CAFF",
          borderWidth: 1,
          borderRadius: 10,
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          style={styles.picker}
        >
          <Picker.Item
            label={type}
            value={null}
            style={{ color: "#BCC1CAFF" }}
          />
          <Picker.Item label="option 1" value="option 1" />
          <Picker.Item label="option 2" value="option 2" />
        </Picker>
      </View>
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

const LabeledTextInput = ({ label, placeholder }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

// -----------------------------------------------

const ModalKirim = () => {
  const [visible, setVisible] = useState(false);

  function handleOpen() {
    setVisible(!visible);
  }

  return (
    <>
      <TouchableOpacity
        style={{
          height: 45,
          backgroundColor: "#379ae6",
          width: "100%",
          borderRadius: 8,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => handleOpen()}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          Kirim
        </Text>
      </TouchableOpacity>

      <Modal animationType="fade" transparent={true} visible={visible}>
        <View
          style={{
            height: "100%",
            width: "100%",

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              position: "absolute",
              backgroundColor: "black",
              height: "100%",
              width: "100%",
              opacity: 0.5,
            }}
          ></View>
          <View
            style={{
              height: 270,
              width: "80%",
              backgroundColor: "white",
              borderRadius: 5,
              alignItems: "center",
              padding: 25,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                backgroundColor: "#379AE6FF",
                height: 40,
                width: "40",
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome5Icon
                name="user-alt"
                size={20}
                color="white"
                style={{ position: "absolute" }}
              />
            </View>
            <View
              style={{ justifyContent: "center", alignItems: "center", gap: 5 }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Informasi Pribadi
              </Text>
              <Text style={{ textAlign: "center", paddingHorizontal: 5 }}>
                Apakah anda yakin ingin mengirim Informasi Pribadi? Jika anda
                ingin mengubahnya setelah dikirim, anda perlu mengajukan
                permintaan kepada HRD
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                onPress={() => handleOpen()}
                style={{
                  flex: 1,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#379AE6FF", fontSize: 16 }}>Batal</Text>
              </TouchableOpacity>
              <ModalKirimSuccess setVisibleKirim={setVisible} />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const ModalKirimSuccess = ({ setVisibleKirim }) => {
  const dispatch = useDispatch();

  const [visible2, setVisible2] = useState(false);

  function handleOpen() {
    setVisible2(!visible2);
  }

  function handleBackToBeranda() {
    setVisibleKirim(false);
    dispatch(setTrue({ type: "InfoPribadi" }));
  }
  return (
    <>
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: "#379AE6FF",
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 7,
        }}
        onPress={() => handleOpen()}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Kirim</Text>
      </TouchableOpacity>

      <Modal animationType="fade" transparent={true} visible={visible2}>
        <View
          style={{
            height: "100%",
            width: "100%",

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              position: "absolute",
              backgroundColor: "black",
              height: "100%",
              width: "100%",
              opacity: 0.5,
            }}
          ></View>
          <View
            style={{
              height: 270,
              width: "80%",
              backgroundColor: "white",
              borderRadius: 5,
              alignItems: "center",
              padding: 25,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                backgroundColor: "#379AE6FF",
                height: 40,
                width: "40",
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome5Icon
                name="check"
                size={20}
                color="white"
                style={{ position: "absolute" }}
              />
            </View>
            <View
              style={{ justifyContent: "center", alignItems: "center", gap: 5 }}
            >
              <Text style={{ textAlign: "center", paddingHorizontal: 5 }}>
                Informasi Pribadi berhasil dikirim dan menunggu persetujuan HRD
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                onPress={() => handleBackToBeranda()}
                style={{
                  flex: 1,
                  backgroundColor: "#379AE6FF",
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 7,
                }}
              >
                <Text style={{ color: "white", fontSize: 16 }}>
                  Kembali ke Beranda
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

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

          <SimpleSelect type={"Choose one"} label={"Status Pernikahan"} />
          <SimpleSelect type={"Choose one"} label={"Jenis Kelamin"} />
          <SimpleSelect type={"Choose one"} label={"Agama"} />

          <LabeledTextInput label={"Email"} placeholder={"Ketik Email"} />

          <SimpleSelect type={"Choose one"} label={"Golongan Darah"} />

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

          <SimpleSelect type={"Choose one"} label={"Pilih Kota"} />
          <SimpleSelect type={"Choose one"} label={"Pilih Provisi"} />
          <SimpleSelect type={"Choose one"} label={"Pilih Kode Pos"} />

          <TextArea />

          <SimpleSelect type={"Choose one"} label={"Pilih Kota"} />
          <SimpleSelect type={"Choose one"} label={"Pilih Provisi"} />
          <SimpleSelect type={"Choose one"} label={"Pilih Kode Pos"} />

          <View
            style={{ height: 150, flexDirection: "row-reverse", marginTop: 15 }}
          >
            <ModalKirim />
          </View>
        </View>
        <View style={{ height: 50 }}></View>
      </ScrollView>
    </>
  );
}
