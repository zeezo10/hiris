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
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AntDesign from "react-native-vector-icons/AntDesign";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

SplashScreen.preventAutoHideAsync();

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

const LabeledTextInput = ({ label, placeholder }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
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
});

export default function InfoPerbadi({ navigation }) {
  const screenWidth = Dimensions.get("window").width;

  const [date, setDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const [leaveReason, setLeaveReason] = useState("");

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
      {/* main ------------ - - */}

      <View style={{ backgroundColor: "white", paddingVertical: 15 }}>
        <View style={{ paddingVertical: 15 }}>
          <Text>Informasi Perbadi</Text>
        </View>

        <View style={{ gap: 20 }}>
          <LabeledTextInput
            label={"Nama Depan"}
            placeholder={"Ketik Nama Depan"}
          />

          <LabeledTextInput
            label={"Nama Balekang"}
            placeholder={"Ketik Nama Belakang"}
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

          <SimpleSelect type={"Choose one"} label={"Pilih Kota"} />
          <SimpleSelect type={"Choose one"} label={"Pilih Provisi"} />
          <SimpleSelect type={"Choose one"} label={"Pilih Kode Pos"} />

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
                Simpan
              </Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={{ height: 50 }}></View>
    </>
  );
}
