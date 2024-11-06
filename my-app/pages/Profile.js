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
import TopBar from "../component/allpages/TopBar";
import Icon from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import DateTimePicker from "@react-native-community/datetimepicker";
import PamuhunanCuti from "./PamuhunanCuti";
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

const SimpleSelect = () => {
  const [selectedValue, setSelectedValue] = useState("Pilih Status Pernikahan"); // Default value

  return (
    <View style={{ gap: 3 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        Status Pernikahan
      </Text>

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
            label="Pilih Status Pernikahan"
            value={null}
            style={{ color: "#BCC1CAFF" }}
          />
          <Picker.Item label="Nikah" value="Nikah" />
          <Picker.Item label="Belum Nikah" value="Belum-Nikah" />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
//-------------------------------------------




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
            <View
              style={{
                backgroundColor: "#F3F4F6FF",
                height: 35,
                width: 35,
                borderRadius: 100,
              }}
            ></View>
            <View
              style={{ backgroundColor: "#F3F4F6FF", height: 5, width: 30 }}
            ></View>
            <View
              style={{
                backgroundColor: "#F3F4F6FF",
                height: 35,
                width: 35,
                borderRadius: 100,
              }}
            ></View>
            <View
              style={{ backgroundColor: "#F3F4F6FF", height: 5, width: 30 }}
            ></View>

            <View
              style={{
                backgroundColor: "#F3F4F6FF",
                height: 35,
                width: 35,
                borderRadius: 100,
              }}
            ></View>
            <View
              style={{ backgroundColor: "#F3F4F6FF", height: 5, width: 30 }}
            ></View>

            <View
              style={{
                backgroundColor: "#F3F4F6FF",
                height: 35,
                width: 35,
                borderRadius: 100,
              }}
            ></View>
            <View
              style={{ backgroundColor: "#F3F4F6FF", height: 5, width: 30 }}
            ></View>

            <View
              style={{
                backgroundColor: "#F3F4F6FF",
                height: 35,
                width: 35,
                borderRadius: 100,
              }}
            ></View>
          </View>
        </View>

        {/* main ------------ - - */}

        <View style={{ backgroundColor: "white", paddingVertical: 15 }}>
          <View style={{ paddingVertical: 15 }}>
            <Text>Informasi Perbadi</Text>
          </View>

          <View style={{ gap: 20 }}>
            <View style={{ gap: 3 }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                nama Depan
              </Text>
              <TextInput
                style={{
                  height: 45,
                  width: "100%",
                  borderColor: "#BCC1CAFF",
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingHorizontal: 10,
                }}
                placeholder="Ketik Nama Depan"
              ></TextInput>
            </View>

            <View style={{ gap: 3 }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                nama Belakang
              </Text>
              <TextInput
                style={{
                  height: 45,
                  width: "100%",
                  borderColor: "#BCC1CAFF",
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingHorizontal: 10,
                }}
                placeholder="Ketik Nama Belakang"
              ></TextInput>
            </View>

            <View style={{ gap: 3 }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Tempat Lahir
              </Text>
              <TextInput
                style={{
                  height: 45,
                  width: "100%",
                  borderColor: "#BCC1CAFF",
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingHorizontal: 10,
                }}
                placeholder="Ketik Tempat Lahir"
              ></TextInput>
            </View>

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

            <SimpleSelect />

            <View style={{ gap: 3 }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                nama Belakang
              </Text>
              <TextInput
                style={{
                  height: 45,
                  width: "100%",
                  borderColor: "#BCC1CAFF",
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingHorizontal: 10,
                }}
                placeholder="Ketik Nama Belakang"
              ></TextInput>
            </View>
          </View>
        </View>

        <View style={{ height: 400 }}></View>
      </ScrollView>
    </View>
  );
}
