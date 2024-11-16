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
  TouchableOpacity,
  Modal,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AntDesign from "react-native-vector-icons/AntDesign";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { useDispatch } from "react-redux";
import { setTrue } from "../../redux/counter";

SplashScreen.preventAutoHideAsync();

const SimpleSelect = ({ type, label }) => {
  const [selectedValue, setSelectedValue] = useState("choose one");

  return (
    <View style={{ gap: 3 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{label}</Text>

      <View style={styles.pickerContainer}>
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

const UploadInput = ({ label, placeholder }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={[styles.input, styles.uploadInput]}>
          <Text style={{ color: "grey" }}>{placeholder}</Text>
          <View style={styles.chooseFileButton}>
            <Text style={{ color: "#BCC1CAFF", fontSize: 11 }}>Choose file</Text>
          </View>
        </View>
      </View>
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

const ModalKirim = () => {
  const [visible, setVisible] = useState(false);

  function handleOpen() {
    setVisible(!visible);
  }

  return (
    <>
      <TouchableOpacity
        style={{
          height: 45,
          backgroundColor: "#379ae6",
          width: "100%",
          borderRadius: 8,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => handleOpen()}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          Kirim
        </Text>
      </TouchableOpacity>

      <Modal animationType="fade" transparent={true} visible={visible}>
        <View
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              position: "absolute",
              backgroundColor: "black",
              height: "100%",
              width: "100%",
              opacity: 0.5,
            }}
          ></View>
          <View
            style={{
              height: 270,
              width: "80%",
              backgroundColor: "white",
              borderRadius: 5,
              alignItems: "center",
              padding: 25,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                backgroundColor: "#379AE6FF",
                height: 40,
                width: "40",
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome5Icon
                name="user-alt"
                size={20}
                color="white"
                style={{ position: "absolute" }}
              />
            </View>
            <View
              style={{ justifyContent: "center", alignItems: "center", gap: 5 }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Informasi Perkerjaan
              </Text>
              <Text style={{ textAlign: "center", paddingHorizontal: 5 }}>
                Apakah anda yakin ingin mengirim Informasi Perkerjaan? Jika anda
                ingin mengubahnya setelah dikirim, anda perlu mengajukan
                permintaan kepada HRD
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                onPress={() => handleOpen()}
                style={{
                  flex: 1,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#379AE6FF", fontSize: 16 }}>Batal</Text>
              </TouchableOpacity>
              <ModalKirimSuccess setVisibleKirim={setVisible} />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const ModalKirimSuccess = ({ setVisibleKirim }) => {
  const dispatch = useDispatch();

  const [visible2, setVisible2] = useState(false);

  function handleOpen() {
    setVisible2(!visible2);
  }

  function handleBackToBeranda() {
    setVisibleKirim(false);
    dispatch(setTrue({ type: "InfoPekerjaan" }));
  }
  return (
    <>
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: "#379AE6FF",
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 7,
        }}
        onPress={() => handleOpen()}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Kirim</Text>
      </TouchableOpacity>

      <Modal animationType="fade" transparent={true} visible={visible2}>
        <View
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              position: "absolute",
              backgroundColor: "black",
              height: "100%",
              width: "100%",
              opacity: 0.5,
            }}
          ></View>
          <View
            style={{
              height: 270,
              width: "80%",
              backgroundColor: "white",
              borderRadius: 5,
              alignItems: "center",
              padding: 25,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                backgroundColor: "#379AE6FF",
                height: 40,
                width: "40",
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome5Icon
                name="check"
                size={20}
                color="white"
                style={{ position: "absolute" }}
              />
            </View>
            <View
              style={{ justifyContent: "center", alignItems: "center", gap: 5 }}
            >
              <Text style={{ textAlign: "center", paddingHorizontal: 5 }}>
                Informasi Perkerjaan berhasil dikirim dan menunggu persetujuan HRD
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                onPress={() => handleBackToBeranda()}
                style={{
                  flex: 1,
                  backgroundColor: "#379AE6FF",
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 7,
                }}
              >
                <Text style={{ color: "white", fontSize: 16 }}>
                  Kembali ke Beranda
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
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
  uploadInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  chooseFileButton: {
    height: 30,
    borderWidth: 1,
    borderColor: "#BCC1CAFF",
    width: 70,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    
  },

  //---------- button ------------
  kirimButton: {
    height: 45,
    backgroundColor: "#379ae6",
    width: "100%",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  kirimButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },

  //---------- modal ------------
  modalContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBackground: {
    position: "absolute",
    backgroundColor: "black",
    height: "100%",
    width: "100%",
    opacity: 0.5,
  },
  modalContent: {
    height: 270,
    width: "80%",
    backgroundColor: "white",
    borderRadius: 5,
    alignItems: "center",
    padding: 25,
    justifyContent: "space-between",
  },
  modalIconContainer: {
    backgroundColor: "#379AE6FF",
    height: 40,
    width: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  modalTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  modalDescription: {
    textAlign: "center",
    paddingHorizontal: 5,
  },
  modalButtonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalCancelButton: {
    flex: 1,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  modalCancelButtonText: {
    color: "#379AE6FF",
    fontSize: 16,
  },
  modalConfirmButton: {
    flex: 1,
    backgroundColor: "#379AE6FF",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
  modalConfirmButtonText: {
    color: "white",
    fontSize: 16,
  },

  // --------------- radio -----------
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#BCC1CAFF",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedCircle: {
    height: 15,
    width: 15,
    borderRadius: 3,
    backgroundColor: "#379ae6",
  },
  radioText: {
    fontSize: 16,
  },
});

export default function InfoPerkerjaan({ navigation }) {
  const screenWidth = Dimensions.get("window").width;

  return (
    <>
      {/* main ------------ - - */}
      <ScrollView
        style={{
          backgroundColor: "white",
          paddingVertical: 15,
          paddingHorizontal: 15,
        }}
      >
        <View style={{ backgroundColor: "white", paddingVertical: 15 }}>
          <View style={{ paddingVertical: 15 }}>
            <Text>Informasi Perkerjaan</Text>
          </View>

          <View style={{ gap: 20 }}>
            <LabeledTextInput
              label={"ID Keryawan"}
              placeholder={"Ketik ID Keryawan"}
            />

            <SimpleSelect type={"Choose one"} label={"Jenis Keryawan"} />
            <SimpleSelect type={"Choose one"} label={"Jenis Keryawan"} />
            <SimpleSelect type={"Choose one"} label={"Status Keryawan"} />
            <SimpleSelect type={"Choose one"} label={"Nama Jabatan"} />
            <SimpleSelect type={"Choose one"} label={"Level Jabatan"} />
            <SimpleSelect type={"Choose one"} label={"Department"} />
            <SimpleSelect type={"Choose one"} label={"Grade"} />
            <SimpleSelect type={"Choose one"} label={"Atasan Langsung"} />
            <SimpleSelect type={"Choose one"} label={"Persetujuan"} />
            <SimpleSelect type={"Choose one"} label={"Lokasi Kerja"} />

            <UploadInput label={"CV"} placeholder={"Uplaod CV"} />
            <UploadInput
              label={"Dokumen Kontrak Kerja"}
              placeholder={"Upload Kontrak Kerja"}
            />

            <View style={{ height: 150, flexDirection: "row-reverse", marginTop: 15 }}>
              <ModalKirim />
            </View>
          </View>
        </View>

        <View style={{ height: 50 }}></View>
      </ScrollView>
    </>
  );
}
