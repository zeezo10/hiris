import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Modal,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Picker } from "@react-native-picker/picker";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { useDispatch } from "react-redux";
import { setTrue } from "../../redux/counter";
import { useNavigation } from "@react-navigation/native";

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
            <Text style={{ color: "#BCC1CAFF", fontSize: 11 }}>
              Choose file
            </Text>
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

  const handleOpen = () => {
    setVisible(!visible);
  };

  return (
    <>
      <TouchableOpacity style={styles.kirimButton} onPress={handleOpen}>
        <Text style={styles.kirimButtonText}>Kirim</Text>
      </TouchableOpacity>

      <Modal animationType="fade" transparent={true} visible={visible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalBackground}></View>
          <View style={styles.modalContent}>
            <View style={styles.modalIconContainer}>
              <FontAwesome5Icon name="user-alt" size={20} color="white" />
            </View>
            <View style={styles.modalTextContainer}>
              <Text style={styles.modalTitle}>Informasi Pekerjaan</Text>
              <Text style={styles.modalDescription}>
                Apakah anda yakin ingin mengirim Informasi Pekerjaan? Jika anda
                ingin mengubahnya setelah dikirim, anda perlu mengajukan
                permintaan kepada HRD
              </Text>
            </View>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                onPress={handleOpen}
                style={styles.modalCancelButton}
              >
                <Text style={styles.modalCancelButtonText}>Batal</Text>
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
  const navigation = useNavigation();

  const [visible2, setVisible2] = useState(false);

  const handleOpen = () => {
    setVisible2(!visible2);
  };

  const handleBackToBeranda = () => {
    setVisibleKirim(false);
    dispatch(setTrue({ type: "InfoPekerjaan" }));
    navigation.navigate("Home");
  };

  return (
    <>
      <TouchableOpacity style={styles.kirimButton} onPress={handleOpen}>
        <Text style={styles.kirimButtonText}>Kirim</Text>
      </TouchableOpacity>

      <Modal animationType="fade" transparent={true} visible={visible2}>
        <View style={styles.modalContainer}>
          <View style={styles.modalBackground}></View>
          <View style={styles.modalContent}>
            <View style={styles.modalIconContainer}>
              <FontAwesome5Icon name="check" size={20} color="white" />
            </View>
            <View style={styles.modalTextContainer}>
              <Text style={styles.modalDescription}>
                Informasi Pekerjaan berhasil dikirim dan menunggu persetujuan
                HRD
              </Text>
            </View>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                onPress={handleBackToBeranda}
                style={styles.modalConfirmButton}
              >
                <Text style={styles.modalConfirmButtonText}>
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
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 3,
  },
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
});

export default function InfoPekerjaan({ navigation }) {
  const screenWidth = Dimensions.get("window").width;

  const [modalVisible, setModalVisible] = useState(false);

  const handleBack = () => {
    setModalVisible(true);
  };

  return (
    <>
      <ScrollView
        style={{
          backgroundColor: "white",
          paddingVertical: 15,
          paddingHorizontal: 15,
        }}
      >
        <Pressable onPress={handleBack} style={{ marginBottom: 10 }}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>

        <View style={{ backgroundColor: "white", paddingVertical: 15 }}>
          <View style={{ paddingVertical: 15 }}>
            <Text>Informasi Pekerjaan</Text>
          </View>

          <View style={{ gap: 20 }}>
            <LabeledTextInput
              label={"ID Keryawan"}
              placeholder={"Ketik ID Keryawan"}
            />
            <SimpleSelect type={"Choose one"} label={"Jenis Keryawan"} />
            <SimpleSelect type={"Choose one"} label={"Status Keryawan"} />
            <SimpleSelect type={"Choose one"} label={"Nama Jabatan"} />
            <SimpleSelect type={"Choose one"} label={"Level Jabatan"} />
            <SimpleSelect type={"Choose one"} label={"Department"} />
            <SimpleSelect type={"Choose one"} label={"Grade"} />
            <SimpleSelect type={"Choose one"} label={"Atasan Langsung"} />
            <SimpleSelect type={"Choose one"} label={"Persetujuan"} />
            <SimpleSelect type={"Choose one"} label={"Lokasi Kerja"} />
            <UploadInput label={"CV"} placeholder={"Upload CV"} />
            <UploadInput
              label={"Dokumen Kontrak Kerja"}
              placeholder={"Upload Kontrak Kerja"}
            />
            <View
              style={{
                height: 150,
                flexDirection: "row-reverse",
                marginTop: 15,
              }}
            >
              <ModalKirim />
            </View>
          </View>
        </View>

        <View style={{ height: 50 }}></View>
      </ScrollView>

      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalBackground}></View>
          <View style={styles.modalContent}>
            <View style={styles.modalIconContainer}>
              <FontAwesome5Icon name="exclamation" size={20} color="white" />
            </View>
            <View style={styles.modalTextContainer}>
              <Text style={styles.modalTitle}>Peringatan</Text>
              <Text style={styles.modalDescription}>
                Apakah anda yakin ingin membatalkan pengisian data?
              </Text>
            </View>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.modalCancelButton}
              >
                <Text style={styles.modalCancelButtonText}>Tidak</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate("Home");
                }}
                style={styles.modalConfirmButton}
              >
                <Text style={styles.modalConfirmButtonText}>Ya</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
