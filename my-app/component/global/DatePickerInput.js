import React, { useCallback, useState } from "react";
import { View, Text, Pressable } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import DateTimePicker from "@react-native-community/datetimepicker";


export default function DatePickerInput({ label , placeholder}) {
  const [date, setDate] = useState(null); // Initialize with null
  const [show, setShow] = useState(false);

  
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");


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
          borderRadius: 10,
          paddingHorizontal: 10,
        }}
        onPress={showDatepicker}
        title="Pick a Date"
      >
        <Text style={{ fontSize: 14, color: date ? "" : "#BCC1CAFF" }}>
          {date ? date.toLocaleDateString() : placeholder}
        </Text>

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
}
