// ... existing code ...
import DateTimePicker from '@react-native-community/datetimepicker'; // Import DateTimePicker
import { useState } from 'react';
import { View,  Text, Pressable } from 'react'; // Import View, Button, Text, and Pressable from 'react'

import AntDesign from "react-native-vector-icons/AntDesign";

// New HourPicker component
export default function HourPicker({ label, placeholder })  {
  const [show, setShow] = useState(false);
  const [hour, setHour] = useState(null);
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
      <Text style={{ fontSize: 14, color: selected ? "#424955FF" : "#BCC1CAFF" }}>
          {selected ? hour.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: undefined, hour12: true }) : placeholder}
        </Text>
        <Entypo name="chevron-thin-down" size={15} />

      </Pressable>
    </View>
  );
};



// Inside your Lembur component
