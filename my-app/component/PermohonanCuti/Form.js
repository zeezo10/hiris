import React, { useState, useCallback } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Form() {
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

  const handleSubmit = () => {
    // Implement submit logic here
    console.log("Form submitted");
  };

  const InputSection = ({
    label,
    value,
    onChangeText,
    placeholder,
    ...props
  }) => (
    <View>
      <Text style={{ fontFamily: "Jakarta", fontSize: 16, marginBottom: 5 }}>
        {label}
      </Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={{
          borderWidth: 1,
          borderColor: "#f3edff",
          borderRadius: 5,
          padding: 10,
          fontSize: 15,
          fontFamily: "Jakarta",
          width: "100%",
          backgroundColor: "white",
        }}
        {...props}
      />
    </View>
  );

  const DateSection = ({ label, date, showPicker, onToggle, onDateChange }) => (
    <View>
      <Text style={{ fontFamily: "Jakarta", fontSize: 16, marginBottom: 5 }}>
        {label}
      </Text>
      <Pressable
        onPress={onToggle}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <TextInput
          value={date}
          editable={false}
          style={{
            borderWidth: 1,
            borderColor: "#f3edff",
            borderRadius: 5,
            padding: 10,
            fontSize: 15,
            fontFamily: "Jakarta",
            width: "100%",
            backgroundColor: "white",
          }}
        />
        <FontAwesome
          name="calendar"
          size={20}
          color="#3B82F6"
          style={{ marginLeft: -30 }}
        />
      </Pressable>
      {showPicker && (
        <DateTimePicker
          value={date ? new Date(date) : new Date()}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}
    </View>
  );

  return (
    <View style={{ padding: 10, gap: 10 }}>
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          gap: 10,
          height: 650,
          overflow: "hidden",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 1,
          shadowRadius: 0,
          elevation: 5,
          borderRadius: 10,
        }}
      >
        <InputSection
          label="Jenis Cuti"
          value={leaveType}
          onChangeText={setLeaveType}
          placeholder="e.g Sakit .."
        />

        <DateSection
          label="Mulai"
          date={startDate}
          showPicker={showStartPicker}
          onToggle={() => toggleDatePicker("start")}
          onDateChange={(event, selectedDate) =>
            onDateChange(event, selectedDate, "start")
          }
        />

        <DateSection
          label="Selesai"
          date={endDate}
          showPicker={showEndPicker}
          onToggle={() => toggleDatePicker("end")}
          onDateChange={(event, selectedDate) =>
            onDateChange(event, selectedDate, "end")
          }
        />

        <InputSection
          label="Alasan Cuti"
          value={leaveReason}
          onChangeText={setLeaveReason}
          placeholder="Tulis Alasan Cuti Desini..."
          multiline
          numberOfLines={4}
          style={{
            height: 100,
            borderRadius: 5,
            borderColor: "#f3edff",
            padding: 10,
            fontSize: 15,
            fontFamily: "Jakarta",
            width: "100%",
            backgroundColor: "white",
            borderWidth: 1,
          }}
        />

        <Pressable
          style={{
            width: "100%",
            backgroundColor: "#3B82F6",
            marginTop: 10,
            alignItems: "center",
            height: 50,
            justifyContent: "center",
            borderRadius: 5,
            elevation: 3,
          }}
          onPress={handleSubmit}
        >
          <Text style={{ color: "white", fontFamily: "Jakarta", fontSize: 20 }}>
            Ajukan
          </Text>
        </Pressable>

        <Text
          style={{
            color: "grey",
            fontFamily: "Jakarta",
            textAlign: "center",
          }}
        >
          Kebijakan cuti perusahaan mencakup cuti tahunan (12 hari kerja per
          tahun), cuti sakit (butuh surat dokter jika lebih dari 2 hari), dan
          cuti khusus untuk keperluan mendesak.
        </Text>
      </View>
    </View>
  );
}
