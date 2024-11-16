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
import { setFalse, setTrue } from "../../redux/counter";

SplashScreen.preventAutoHideAsync();

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

const UploadInput = ({ label, placeholder }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={[
            styles.input,
            {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            },
          ]}
        >
          <Text style={{ color: "grey" }}>{placeholder}</Text>
          <View
            style={{
              height: 30,
              backgroundColor: "pink",
              width: 70,
              borderRadius: 10,
            }}
          ></View>
        </View>
      </View>
    </View>
  );
};

//-------------------------------------------

const LabeledTextInput = ({ label, placeholder }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
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
    paddingHorizontal: 15,
  },
});

const ModalKirim = ({navigation}) => {
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
          Simpan
        </Text>
      </TouchableOpacity>

      <Modal animationType="fade" transparent={true} visible={visible}>
        <View style={{ height: "100%", width: "100%", justifyContent: "center", alignItems: "center" }}>
          <View style={{ position: "absolute", backgroundColor: "black", height: "100%", width: "100%", opacity: 0.5 }}></View>
          <View style={{ height: 270, width: "80%", backgroundColor: "white", borderRadius: 5, alignItems: "center", padding: 25, justifyContent: "space-between" }}>
            <View style={{ backgroundColor: "#379AE6FF", height: 40, width: "40", borderRadius: 100, justifyContent: "center", alignItems: "center" }}>
              <FontAwesome5Icon name="user-alt" size={20} color="white" style={{ position: "absolute" }} />
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", gap: 5 }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Info Payroll</Text>
              <Text style={{ textAlign: "center", paddingHorizontal: 5 }}>
                Apakah anda yakin ingin menyimpan Info Payroll? Jika anda ingin mengubahnya setelah disimpan, anda perlu mengajukan permintaan kepada HRD
              </Text>
            </View>
            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
              <TouchableOpacity onPress={() => handleOpen()} style={{ flex: 1, height: 40, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: "#379AE6FF", fontSize: 16 }}>Batal</Text>
              </TouchableOpacity>
              <ModalKirimSuccess setVisibleKirim={setVisible} navigation={navigation} />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const ModalKirimSuccess = ({ setVisibleKirim, navigation }) => {
  const dispatch = useDispatch();
  const [visible2, setVisible2] = useState(false);

  function handleOpen() {
    setVisible2(!visible2);
  }

  function handleBackToBeranda() {
    setVisibleKirim(false);
    dispatch(setTrue({ type: "InfoPayroll" }));
    if (navigation) {
      navigation.navigate("Home");
    } else {
      console.warn("Navigation prop is not available");
    }
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
        <Text style={{ color: "white", fontSize: 16 }}>Simpan</Text>
      </TouchableOpacity>

      <Modal animationType="fade" transparent={true} visible={visible2}>
        <View style={{ height: "100%", width: "100%", justifyContent: "center", alignItems: "center" }}>
          <View style={{ position: "absolute", backgroundColor: "black", height: "100%", width: "100%", opacity: 0.5 }}></View>
          <View style={{ height: 270, width: "80%", backgroundColor: "white", borderRadius: 5, alignItems: "center", padding: 25, justifyContent: "space-between" }}>
            <View style={{ backgroundColor: "#379AE6FF", height: 40, width: "40", borderRadius: 100, justifyContent: "center", alignItems: "center" }}>
              <FontAwesome5Icon name="check" size={20} color="white" style={{ position: "absolute" }} />
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", gap: 5 }}>
              <Text style={{ textAlign: "center", paddingHorizontal: 5 }}>
                Info Payroll berhasil disimpan dan menunggu persetujuan HRD
              </Text>
            </View>
            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
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
                <Text style={{ color: "white", fontSize: 16 }}>Kembali ke Beranda</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default function InfoPayroll({ navigation }) {
  const screenWidth = Dimensions.get("window").width;

  const [tanjungan, setTnjungan] = useState(1);

  const addTanjungan = () => {
    setTnjungan(tanjungan + 1);
  };

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
          <Text>Informasi Payroll</Text>
        </View>

        <View style={{ gap: 20 }}>
          <SimpleSelect type={"Choose one"} label={"Tipe Penggajian"} />

          <LabeledTextInput label={"Gaji Pokok"} placeholder={"Rp"} />

          <SimpleSelect type={"Choose one"} label={"Tipe Tunjangan"} />

          <View style={{ gap: 10 }}>
            {Array.from({ length: tanjungan }, (_, index) => (
              <LabeledTextInput
                key={index}
                label={`Nilai Tunjangan ${index + 1}`}
                placeholder="Rp"
              />
              
            ))}

            <Pressable
              style={{
                height: 30,
                justifyContent: "center",
                alignItems: "center",
                width: 150,
                borderRadius: 12,
                backgroundColor: "#F1F8FDFF",
              }}
            >
              <Pressable
                style={{ fontSize: 10, color: "#379ae6" }}
                onPress={() => addTanjungan()}
              >
                <Text style={{color:"#379ae6"}}>Tambah Tunjangan</Text>
              </Pressable>
            </Pressable>
          </View>

          <SimpleSelect type={"Choose one"} label={"Nama Bank"} />

          <LabeledTextInput
            label={"Nomor Rekening"}
            placeholder={"Tulis Nonor Rekening"}
          />

          <LabeledTextInput
            label={"Nama Pemilik Rekening"}
            placeholder={"Tulis Nama Pemilik Rekening"}
          />

          <SimpleSelect type={"Choose one"} label={"Status PTKP"} />

          <LabeledTextInput label={"PPH21"} placeholder={"Rp"} />
          <LabeledTextInput label={"JKK"} placeholder={"Rp"} />
          <LabeledTextInput label={"JHT"} placeholder={"Rp"} />
          <LabeledTextInput label={"JKM"} placeholder={"Rp"} />

          <View style={{ height: 100, flexDirection: "row-reverse" }}>
            <ModalKirim navigation={navigation}/>
          </View>
        </View>
      </View>

      <View style={{ height: 50 }}></View>
      </ScrollView>
    </>
  );
}
