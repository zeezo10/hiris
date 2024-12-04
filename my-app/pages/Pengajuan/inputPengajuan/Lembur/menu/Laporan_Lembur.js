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

function SelectOptionLocal({ name, items }) {
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
import SelectOption from "../../../../../component/global/SelectOption";
import TextArea from "../../../../../component/global/TextArea";
import UploadFile from "../../../../../component/global/UploadFile";
import ModalKirim from "../../../../../component/global/ModalKirim";

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
          backgroundColor: "#F1F8FDFF",
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

        <Text style={{ color: date ? "" : "#379AE6FF", fontSize: 11, flex: 1 }}>
          {date
            ? date.toLocaleDateString("id-ID", {
                month: "long",
                year: "numeric",
              })
            : placeholder}
        </Text>
        <Entypo name="chevron-small-down" size={18} color="#379AE6FF" />
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

const HourPicker = ({ label, placeholder }) => {
  const [show, setShow] = useState(false);
  const [hour, setHour] = useState(new Date());
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
        title="Show Hour Picker"
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
        <Text style={{ fontSize: 14, color: selected ? "" : "#BCC1CAFF" }}>
          {selected
            ? hour.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                second: undefined,
                hour12: true,
              })
            : placeholder}
        </Text>
        <Entypo name="chevron-thin-down" size={15} />
      </Pressable>
    </View>
  );
};

const Riwayat_Lembur_Item = ({
  date,
  status,
  tugas,
  admin,
  alasan,
  handelOpen,
  setDate,
  setStatus,
  setTugas,
  setAdmin,
  setAlasan,
}) => {
  const handelChangeTheVlaue = () => {
    setDate(date);
    setStatus(status);
    setTugas(tugas);
    setAdmin(admin);
    setAlasan(alasan);
  };

  return (
    <View
      style={{
        height: 330,
        width: "100%",
        backgroundColor: "white",
        padding: 26,
        gap: 20,
        justifyContent: "space-between",
        borderRadius: 8,
        elevation: 10,
        shadowColor: "grey",
        marginBottom: 10,
      }}
    >
      <View
        style={{
          backgroundColor: "#F1F8FDFF",
          borderRadius: 6,
          height: 28,
          width: 160,
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              flex: 1,
              fontSize: 11,
              color: "#379AE6FF",
              textAlign: "center",
            }}
          >
            Disetujui
          </Text>
        </View>
        {/* ------------------ */}
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#379AE6FF",
            height: "100%",
          }}
          onPress={() => {
            handelOpen();
            handelChangeTheVlaue();
          }}
        >
          <Text
            style={{
              flex: 1,
              fontSize: 11,
              color: "white",
              textAlign: "center",
            }}
          >
            Buat Laporan
          </Text>
        </TouchableOpacity>
      </View>

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
            <FontAwesome5
              name="calendar"
              size={16}
              color="#379AE6FF"
              style={{ alignSelf: "center" }}
            />
            <Text
              style={{ fontWeight: "400", fontSize: 14, color: "#171A1FFF" }}
            >
              {date}
            </Text>
          </View>

          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <AntDesign name="clockcircleo" size={16} color="#4599e8" />

            <Text style={{ fontSize: 12, color: "#9095A0FF" }}>
              09:05 - 17:10
            </Text>
            <Text style={{ fontSize: 12, color: "#4E3630FF" }}>
              (08:05:36 jam)
            </Text>
          </View>

          <View style={{ marginLeft: 20 }}>
            <Text
              style={{ color: "#565E6CFF", fontWeight: "600", fontSize: 13 }}
            >
              Tugas yang akan diselesaikan:
            </Text>
            <Text style={{ color: "#565E6CFF", fontSize: 13 }}>{tugas}</Text>
          </View>
        </View>
        <View
          style={{
            color: "#565E6CFF",
            fontWeight: "bold",
            marginTop: 20,
            flex: 1,
            fontSize: 12,
            flexDirection: "row",
            marginLeft: 20,
          }}
        >
          <View style={{}}>
            <Text
              style={{
                fontSize: 13,
                color: status === "Terkirim" ? "#9095A0FF" : "#379AE6FF",
              }}
            >
              Disetujui {admin}
            </Text>
            <Text
              style={{ color: "#565E6CFF", fontWeight: "600", fontSize: 13 }}
            >
              Alasan pengajuan Disetujui :
            </Text>
            <Text style={{ color: "#565E6CFF", fontSize: 13 }}>{alasan}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

// ... existing code ...

export default function Laporan_Lembur({ navigation }) {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const [visible, setVisible] = useState(false);

  const [date, setDate] = useState(""); // Initialize with empty string
  const [status, setStatus] = useState(""); // Initialize with empty string
  const [tugas, setTugas] = useState(""); // Initialize with empty string
  const [admin, setAdmin] = useState(""); // Initialize with empty string
  const [alasan, setAlasan] = useState(""); // Initialize with empty string

  const handelOpen = () => {
    setVisible(!visible);
  };

  return (
    <View style={{ paddingHorizontal: 20, gap: 10, marginTop: 30 }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        style={{}}
      >
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            height: "100%",
            marginTop: 110,
            padding: 20,
            alignItems: "center",
            gap: 10,
          }}
        >
          <View
            style={{
              height: 270,
              width: "100%",
              backgroundColor: "white",
              padding: 26,
              gap: 20,
              justifyContent: "space-between",
              borderRadius: 8,
              elevation: 10,
              shadowColor: "grey",
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
                <View
                  style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
                >
                  <FontAwesome5
                    name="calendar"
                    size={16}
                    color="#379AE6FF"
                    style={{ alignSelf: "center" }}
                  />
                  <Text
                    style={{
                      fontWeight: "400",
                      fontSize: 14,
                      color: "#171A1FFF",
                    }}
                  >
                    {date}
                  </Text>
                </View>

                <View
                  style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
                >
                  <AntDesign name="clockcircleo" size={16} color="#4599e8" />

                  <Text style={{ fontSize: 12, color: "#9095A0FF" }}>
                    09:05 - 17:10
                  </Text>
                  <Text style={{ fontSize: 12, color: "#4E3630FF" }}>
                    (08:05:36 jam)
                  </Text>
                </View>

                <View style={{ marginLeft: 20 }}>
                  <Text
                    style={{
                      color: "#565E6CFF",
                      fontWeight: "600",
                      fontSize: 13,
                    }}
                  >
                    Tugas yang akan diselesaikan:
                  </Text>
                  <Text style={{ color: "#565E6CFF", fontSize: 13 }}>
                    {tugas}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  color: "#565E6CFF",
                  fontWeight: "bold",
                  marginTop: 20,
                  flex: 1,
                  fontSize: 12,
                  flexDirection: "row",
                  marginLeft: 20,
                }}
              >
                <View style={{}}>
                  <Text
                    style={{
                      fontSize: 13,
                      color: status === "Terkirim" ? "#9095A0FF" : "#379AE6FF",
                    }}
                  >
                    Disetujui {admin}
                  </Text>
                  <Text
                    style={{
                      color: "#565E6CFF",
                      fontWeight: "600",
                      fontSize: 13,
                    }}
                  >
                    Alasan pengajuan Disetujui :
                  </Text>
                  <Text style={{ color: "#565E6CFF", fontSize: 13 }}>
                    {alasan}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{ gap: 12 }}>
            <HourPicker
              label={"Jam Diselesaikan"}
              placeholder={"Pilih Jam Mulai Lembur"}
            />
            <TextArea
              label={"Laporan Hasil Lembur"}
              placeholder={"Tulis Laporan Hasil Lembur"}
            />

            <UploadFile label={"Dokumen "} placeholder={"Dokumen "} />
          </View>

          <View style={{ height: 40, flexDirection: "row", marginTop: 15 }}>
            <Pressable
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={handelOpen}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 14,
                  color: "#379AE6FF",
                }}
              >
                Batal
              </Text>
            </Pressable>
            <ModalKirim
              navigation={navigation}
              title={"Pengajuan Laporan Lembur"}
            />
          </View>
        </View>
      </Modal>

      <View style={{ flexDirection: "row", gap: 15 }}>
        <DatePickerInput placeholder={"Desember 2024"} />
      </View>

      {/* title, amount, date, status, reason */}

      <Riwayat_Lembur_Item
        status={"Diterima"}
        date={"Kamis 27 Des 202ddd4"}
        tugas={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore mi"
        }
        admin={"Ruud Van Nisterloy"}
        handelOpen={handelOpen}
        alasan={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore mi"
        }
        setDate={setDate}
        setStatus={setStatus}
        setTugas={setTugas}
        setAdmin={setAdmin}
        setAlasan={setAlasan}
      />

      <Riwayat_Lembur_Item
        status={"Ditolak"}
        date={"Kamis 27 Des 2024"}
        tugas={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore mi"
        }
        admin={"Ruud Van Nisterloy"}
        handelOpen={handelOpen}
        alasan={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore mi"
        }
        setDate={setDate}
        setStatus={setStatus}
        setTugas={setTugas}
        setAdmin={setAdmin}
        setAlasan={setAlasan}
      />

      <Riwayat_Lembur_Item
        status={"Terkirim"}
        date={"Kamis 27 Des 2024"}
        tugas={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore mi"
        }
        admin={"Ruud Van Nisterloy"}
        handelOpen={handelOpen}
        alasan={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore mi"
        }
        setDate={setDate}
        setStatus={setStatus}
        setTugas={setTugas}
        setAdmin={setAdmin}
        setAlasan={setAlasan}
      />

      {/* ---------------------------------- */}

      {/* ------------------------------------ */}
    </View>
  );
}
