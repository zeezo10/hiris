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
import Icon from "react-native-vector-icons/FontAwesome";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import InfoPerbadi from "./Profile/inputDataKeryawan/DataPribadi";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import InfoPekerjaan from "./Profile/inputDataKeryawan/DataPekerjaan";
import InfoPayroll from "./Profile/inputDataKeryawan/InfoPayroll";
import RiwayatPendidikan from "./Profile/inputDataKeryawan/RiwayatPendidikan";
import Aset from "./Profile/inputDataKeryawan/Aset";
import DataBtn from "../component/profile/DataBtn";
import { useDispatch, useSelector } from "react-redux";

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

export default function Profile({ navigation }) {
  const screenWidth = Dimensions.get("window").width;

  const dispatch = useDispatch();

  const Pribadi = useSelector((state) => state.dataBtn.InfoPribadi);
  const Pekerjaan = useSelector((state) => state.dataBtn.InfoPekerjaan);
  const Payroll = useSelector((state) => state.dataBtn.InfoPayroll);
  const RiwayatPendidikan = useSelector(
    (state) => state.dataBtn.RiwayatPendidikan
  );
  const RiwayatPekerjaan = useSelector(
    (state) => state.dataBtn.RiwayatPekerjaan
  );
  const Aset = useSelector((state) => state.dataBtn.Aset);

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

  const [type, setType] = useState("InfoPribadi");

  const ChangePage = (type) => {
    setType(type);
  };

  return (
    <View
      style={{
        width: screenWidth,
        paddingTop: 80,
        backgroundColor: "white",
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            alignItems: "center",
            gap: 15,
            paddingVertical: 10,
            paddingBottom:50
          }}
        >
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: "pink",
              borderRadius: 100,
            }}
          ></View>

          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "700" }}>Jennifer Lopez</Text>
            <Text style={{ color: "#565E6CFF", fontWeight: "400" }}>
              Manager People Development
            </Text>
          </View>

          {/* --------------------------------------------------------- */}
        </View>

        <View
          style={{
            paddingTop: 20,
            paddingBottom: 10,
            paddingHorizontal: 20,
            gap: 10,
            backgroundColor:"#fafafb"
          }}
        >
          <DataBtn
            type={"InfoPribadi-Profile"}
            navigation={navigation}
            active={true}
          />

          <DataBtn
            type={"Profile_InfoPekerjaan"}
            navigation={navigation}
            active={true}
          />

          <DataBtn
            type={"InfoPayroll"}
            navigation={navigation}
            active={Pekerjaan}
          />
          <DataBtn
            type={"RiwayatPendidikan"}
            navigation={navigation}
            active={Payroll}
          />
          <DataBtn
            type={"RiwayatPekerjaan"}
            navigation={navigation}
            active={RiwayatPendidikan}
          />
          <DataBtn
            type={"Aset"}
            navigation={navigation}
            active={RiwayatPekerjaan}
          />
        </View>

        <View
          style={{
            height: 150,
            backgroundColor: "#fafafb",
            justifyContent: "center",
            paddingBottom: 55,
            paddingHorizontal: 40,
          }}
        >
          <View style={{ gap: 10 }}>
            <Text style={{color:"#9095A0FF"}}>V 1.1</Text>
            <Pressable>
              <Text style={{ color: "#E5696DFF" }}>Log out</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
