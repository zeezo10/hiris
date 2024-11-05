import React, { useEffect, useState, useCallback } from "react";
import { Text, View, ScrollView } from "react-native";
import TopBar from "../component/allpages/TopBar";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import Feather from "react-native-vector-icons/Feather";
import Form from "../component/PermohonanCuti/Form";
import Status from "../component/PermohonanCuti/Status";
import SaldoCuti from "../component/homepage/SaldoCuti";

SplashScreen.preventAutoHideAsync();

export default function PamuhunanCuti({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const [leaveReason, setLeaveReason] = useState("");

  const [loaded, error] = useFonts({
    Jakarta: require("../assets/font/PlusJakartaSans-Bold.ttf"),
  });

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

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  const handleSubmit = useCallback(() => {
    // Implement form validation and submission logic here
    console.log({ leaveType, startDate, endDate, leaveReason });
    navigation.navigate("Home");
  }, [leaveType, startDate, endDate, leaveReason, navigation]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <TopBar />
      <View
        style={{
          height: 80,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          padding: 15,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontFamily: "Jakarta",
            color: "#1e3a8a",
          }}
        >
          Permohonan Cuti
        </Text>
        <View
          style={{
            height: 50,
            width: 50,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Feather name="info" size={20} color="#1e3a8a" />
        </View>
      </View>
      <ScrollView>
        <Form />

        <Status />

          <View style={{margin:10}}>

        <SaldoCuti />
          </View>

        <View style={{ height: 200 }}></View>
      </ScrollView>
    </View>
  );
}
