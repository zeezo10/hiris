import React, { useCallback, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  Alert,
  Modal,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import Feather from "react-native-vector-icons/Feather";
import { Entypo } from "react-native-vector-icons";
import { FontAwesome5 } from "react-native-vector-icons";

import { AntDesign } from "react-native-vector-icons/";
import { MaterialCommunityIcons } from "react-native-vector-icons/";

function SelectOption({ name, items }) {
  const [visible, setVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [value, setValue] = useState(name);
  const [seleted, setSelected] = useState(false);

  function handleOpenModal() {
    setVisible(!visible);
  }

  function handleSelect(index, item) {
    setSelectedIndex(index);
    setValue(item);
    setVisible(!visible);
    setSelected(true);
  }

  return (
    <>
      <View style={{ gap: 3 }}>
        <TouchableOpacity
          style={{
            paddingHorizontal: 5,
            borderRadius: 5,
            backgroundColor: "#F3F4F6FF",
            height: 28,
            width: 147,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            marginBottom: 10,
            gap: 5,
          }}
          onPress={handleOpenModal}
        >
          <Text
            style={{
              color: seleted ? "black" : "#171A1FFF",
              fontSize: 11,
              flex: 1,
            }}
          >
            {seleted ? <>{value}</> : <>Status </>}
          </Text>
          <Entypo name="chevron-thin-down" size={15} />
        </TouchableOpacity>
      </View>

      <Modal animationType="fade" transparent={true} visible={visible}>
        <View
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pressable
            style={{
              position: "absolute",
              backgroundColor: "black",
              height: "100%",
              width: "100%",
              opacity: 0.5,
            }}
            onPress={handleOpenModal}
          />
          <View
            style={{
              width: "80%",
              backgroundColor: "white",
              borderRadius: 5,
              padding: 20,
              gap: 10,
            }}
          >
            <View style={{ width: "100%" }}>
              <TouchableOpacity
                onPress={handleOpenModal}
                style={{
                  justifyContent: "center",

                  height: 20,
                }}
              >
                <AntDesign
                  name="close"
                  size={20}
                  color="#9095A0FF"
                  style={{ position: "absolute" }}
                />
              </TouchableOpacity>
            </View>

            <View style={{ gap: 20 }}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>{name}</Text>

              <View style={{ gap: 10 }}>
                {items.map((item, index) => (
                  <View
                    key={index}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      width: "100%",

                      gap: 5,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => handleSelect(index, item)}
                      style={{
                        flexDirection: "row",
                        gap: 10,
                        width: "100%",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text>{item}</Text>

                      <MaterialCommunityIcons
                        name={
                          selectedIndex === index
                            ? "checkbox-intermediate"
                            : "checkbox-blank-outline"
                        }
                        size={20}
                        color={
                          selectedIndex === index ? "#379AE6FF" : "#9095A0FF"
                        }
                      />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

// -------------------------------------- Select Option ----------------------

import DateTimePicker from "@react-native-community/datetimepicker";

function DatePickerInput({ placeholder }) {
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
          setStartDate(
            currentDate.toLocaleDateString("id-ID", {
              month: "long",
              year: "numeric",
            })
          );
        } else {
          setEndDate(
            currentDate.toLocaleDateString("id-ID", {
              month: "long",
              year: "numeric",
            })
          );
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
      <Pressable
        style={{
          paddingHorizontal: 5,
          borderRadius: 5,
          backgroundColor: "#F3F4F6FF",
          height: 28,
          width: 147,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          marginBottom: 10,
          gap: 5,
        }}
        onPress={showDatepicker}
        title="Pick a Date"
      >
        <AntDesign name="calendar" size={20} color="#4599e8" />

        <Text style={{ color: date ? "" : "#171A1FFF", fontSize: 11, flex: 1 }}>
          {date
            ? date.toLocaleDateString("id-ID", {
                month: "long",
                year: "numeric",
              })
            : placeholder}
        </Text>
        <Entypo name="chevron-small-down" size={18} color="#171A1FFF" />
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

// ... existing code ...

const ReimbursementItem = ({ title, amount, date, status, admin, reason }) => {
  return (
    <View
      style={{
        height: 170,
        width: "100%",
        backgroundColor: "white",
        padding: 20,
        gap: 3,
        justifyContent: "space-between",
        borderRadius: 8,
        elevation: 10,
        shadowColor: "grey",
        flexDirection: "row",
        marginBottom: 10,
      }}
    >
      <View
        style={{
          flex: 1.5,
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            color: "#565E6CFF",
            gap: 5,
            flex: 1,
          }}
        >
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 14 }}>{title}</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <FontAwesome5
              name="coins"
              size={16}
              color="#379AE6FF"
              style={{ alignSelf: "center" }}
            />
            <Text style={{ fontWeight: "bold", fontSize: 12 }}>{amount}</Text>
          </View>

          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <AntDesign name="calendar" size={16} color="#4599e8" />
            <View style={{ flexDirection: "row", gap: 13, flex: 1 }}>
              <Text style={{ fontSize: 12, flex: 1 }}>{date}</Text>
              <View
                style={{
                  paddingHorizontal: 5,
                  borderRadius: 10,
                  backgroundColor: "#F1F8FDFF",
                  height: 20,
                  width: 139,
                  gap: 4,
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <AntDesign name="pdffile1" size={11} color="#4599e8" />
                <Text style={{ fontSize: 11, color: "#4599e8" }}>
                  Bukti Reimbursement
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            color: "#565E6CFF",
            fontWeight: "bold",
            fontSize: 12,
            flex: 1,
            alignItems: "flex-end",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ gap: 5 }}>
            <Text style={{ fontSize: 11, color: "#565E6CFF" }}>{admin}</Text>
            <Text style={{ fontSize: 11, color: "#565E6CFF" }}>{reason}</Text>
          </View>

          <View
            style={{
              backgroundColor:
                status === "Ditolak"
                  ? "#FDF2F2FF"
                  : status === "Disetujui"
                  ? "#F1F8FDFF"
                  : status === "Terkirim"
                  ? "#F3F4F6FF"
                  : "#EEFDF3FF",
              borderRadius: 6,
              height: 32,
              width: 67,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color:
                  status === "Ditolak"
                    ? "#DE3B40FF"
                    : status === "Disetujui"
                    ? "#379AE6FF"
                    : status === "Terkirim"
                    ? "#565E6CFF"
                    : "#117B34FF",
              }}
            >
              {status}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

// ... existing code ...

export default function Riwayat() {
  return (
    <View style={{ paddingHorizontal: 20, gap: 10, marginTop: 30 }}>
      <View style={{ flexDirection: "row", gap: 15 }}>
      
        <DatePickerInput placeholder={"Desember 2024"} />


        <SelectOption
          name={"Status"}
          items={["Terkirim", "Diterima", "Ditolak"]}
        />
      </View>

      {/* title, amount, date, status, reason */}
      <ReimbursementItem
        title={"-"}
        amount={"-"}
        date={"-"}
        status={"-"}
        admin={"-"}
        reason={"-"}
      />
      <ReimbursementItem
        title={"001- Instalasi UPS  BDx"}
        amount={"Rp500.000 Makan Siang"}
        date={"Kamis 27 Des 2024"}
        status={"Ditolak"}
        admin={"Ditolak oleh Ruud Van Nisterloy"}
        reason={"Beli Nasi Padang 100 bungkus"}
      />
      <ReimbursementItem
        title={"002- Instalasi UPS  BDx"}
        amount={"Rp300.000 Bahan Bakar"}
        date={"Kamis 27 Des 2024"}
        status={"Disetujui"}
        admin={"Disetujui oleh Ruud Van Nisterloy"}
        reason={"Isi Bensin Meeting ke Bandung"}
      />
      <ReimbursementItem
        title={"001- Jualan HRIS ke BJB"}
        amount={"Rp300.000 Bahan Bakar"}
        date={"Kamis 27 Des 2024"}
        status={"Terkirim"}
        admin={"Terkirim ke Dimas Anggawijaya"}
        reason={"Isi Bensin Meeting ke Bandung"}
      />
     
      {/* ---------------------------------- */}

      {/* ------------------------------------ */}
    </View>
  );
}
