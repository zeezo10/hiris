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
import InfoPerbadi from "./dataKeryawan/InfoPerbadi";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import InfoPerkerjaan from "./dataKeryawan/InfoPerkerjaan";
import InfoPayroll from "./dataKeryawan/InfoPayroll";
import RewayatPendidikan from "./dataKeryawan/RewayatPendidikan";
import Aset from "./dataKeryawan/Aset";

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

  const [type, setType] = useState("InfoPerbadi");

  const ChangePage = (type) => {
    setType(type);
  };

  return (
    <View
      style={{
        width: screenWidth,
        paddingTop: 30,
        backgroundColor: "white",
        paddingHorizontal: 20,
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#F3F4F6FF",
            height: 150,
            backgroundColor: "white",
            padding: 20,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              flex: 1,
              fontSize: 25,
              fontWeight: "bold",
              color: "#323842FF",
            }}
          >
            Data Keryawan
          </Text>
          <View
            style={{
              flex: 1,
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pressable
              style={{
                backgroundColor: type === "InfoPerbadi" ? "#379ae6" : "#F3F4F6FF"  ,
                height: 35,
                width: 35,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => ChangePage("InfoPerbadi")}
            >
              <FontAwesome5 name="user-alt" size={20} color={type === "InfoPerbadi" ? "white" :  "#BCC1CAFF"} />
            </Pressable>
            <View
              style={{ backgroundColor: "#F3F4F6FF", height: 5, width: 30 }}
            ></View>
            <Pressable
              style={{
                backgroundColor: type === "InfoPerkerjaan" ? "#379ae6" : "#F3F4F6FF",
                height: 35,
                width: 35,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => ChangePage("InfoPerkerjaan")}
            >
              <FontAwesome5 name="briefcase" size={20}  color={type === "InfoPerkerjaan" ? "white" :  "#BCC1CAFF"} />
            </Pressable>
            <View
              style={{ backgroundColor: "#F3F4F6FF", height: 5, width: 30 }}
            ></View>

            <Pressable
              style={{
                backgroundColor: type === "InfoPayroll" ? "#379ae6" : "#F3F4F6FF",
                height: 35,
                width: 35,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => ChangePage("InfoPayroll")}
            >
              <FontAwesome5 name="coins" size={20}  color={type === "InfoPayroll" ? "white" :  "#BCC1CAFF"} />
            </Pressable>
            <View
              style={{ backgroundColor: "#F3F4F6FF", height: 5, width: 30 }}
            ></View>

            <Pressable
              style={{
                backgroundColor: type === "RewayatPendidikan" ? "#379ae6" : "#F3F4F6FF",
                height: 35,
                width: 35,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => ChangePage("RewayatPendidikan")}
            >
              <FontAwesome5 name="book" size={20}  color={type === "RewayatPendidikan" ? "white" :  "#BCC1CAFF"} />
            </Pressable>
            <View
              style={{ backgroundColor: "#F3F4F6FF", height: 5, width: 30 }}
            ></View>

            <Pressable
              style={{
                backgroundColor: type === "Aset" ? "#379ae6" : "#F3F4F6FF",
                height: 35,
                width: 35,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => ChangePage("Aset")}
            >
              <FontAwesome5 name="sliders-h" size={20} color={type === "Aset" ? "white" :  "#BCC1CAFF"}/>
            </Pressable>
          </View>
        </View>

        {/* main ------------ - - */}
        {type === "InfoPerbadi" && <InfoPerbadi />}
        {type === "InfoPerkerjaan" && <InfoPerkerjaan />}
        {type === "InfoPayroll" && <InfoPayroll />}
        {type === "RewayatPendidikan" && <RewayatPendidikan />}
        {type === "Aset" && <Aset />}
        
        

        <View style={{ height: 50 }}></View>
      </ScrollView>
    </View>
  );
}
