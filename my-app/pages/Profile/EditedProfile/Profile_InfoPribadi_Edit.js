import React, { useState } from "react";
import { Pressable, TouchableOpacity } from "react-native";
import {
  Dimensions,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

export default function Profile_InfoPribadi({ navigation }) {
  const screenWidth = Dimensions.get("window").width;

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleKirim, setModalVisibleKirim] = useState(false);

  // State for all input fields
  const [fullName, setFullName] = useState("-");
  const [tempatLahir, setTempatLahir] = useState("-");
  const [birthDate, setBirthDate] = useState("-");
  const [phoneNumber, setPhoneNumber] = useState("-");
  const [maritalStatus, setMaritalStatus] = useState("-");
  const [gender, setGender] = useState("-");
  const [religion, setReligion] = useState("-");
  const [email, setEmail] = useState("-");
  const [bloodType, setBloodType] = useState("-");
  const [nikNpwp, setNikNpwp] = useState("-");
  const [bpjsKetenagakerjaan, setBpjsKetenagakerjaan] = useState("-");
  const [bpjsKesehatan, setBpjsKesehatan] = useState("-");
  const [emergencyContactName, setEmergencyContactName] = useState("-");
  const [emergencyContactNumber, setEmergencyContactNumber] = useState("-");
  const [addressKTP, setAddressKTP] = useState("-");
  const [domicileAddress, setDomicileAddress] = useState("-");

  const handleBack = () => {
    setModalVisible(true);
  };

  const handleBackKirim = () => {
    setModalVisibleKirim(true);
  };

  return (
    <>
      <View
        style={{
          width: screenWidth,
          paddingTop: 10,
          backgroundColor: "white",
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View
            style={{
              alignItems: "center",
              gap: 15,
              paddingVertical: 10,
            }}
          >
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: "pink",
                borderRadius: 100,
              }}
            ></View>
          </View>

          <View style={{}}>
            <View
              style={{
                gap: 3,
                borderWidth: 0.3,
                borderColor: "#ebebeb",
                padding: 15,
              }}
            >
              <Text style={{ fontSize: 12, color: "#9095A0FF" }}>
                Nama Lengkap
              </Text>
              <Text style={{ fontSize: 14, color: "#171A1FFF" }}>
                {fullName}
              </Text>
            </View>
            <View
              style={{
                gap: 3,
                borderWidth: 0.3,
                borderColor: "#ebebeb",
                padding: 15,
              }}
            >
              <Text style={{ fontSize: 12, color: "#9095A0FF" }}>
                Tempat Lahir
              </Text>
              <Text style={{ fontSize: 14, color: "#171A1FFF" }}>
                {tempatLahir}
              </Text>
            </View>
            <View
              style={{
                gap: 3,
                borderWidth: 0.3,
                borderColor: "#ebebeb",
                padding: 15,
              }}
            >
              <Text style={{ fontSize: 12, color: "#9095A0FF" }}>
                Tanggal Lahir
              </Text>
              <Text style={{ fontSize: 14, color: "#171A1FFF" }}>
                {birthDate}
              </Text>
            </View>
            <View
              style={{
                gap: 3,
                borderWidth: 0.3,
                borderColor: "#ebebeb",
                padding: 15,
              }}
            >
              <Text style={{ fontSize: 12, color: "#9095A0FF" }}>
                Nomor Handphone
              </Text>
              <Text style={{ fontSize: 14, color: "#171A1FFF" }}>
                {phoneNumber}
              </Text>
            </View>
            <View
              style={{
                gap: 3,
                borderWidth: 0.3,
                borderColor: "#ebebeb",
                padding: 15,
              }}
            >
              <Text style={{ fontSize: 12, color: "#9095A0FF" }}>
                Status Perkawinan
              </Text>
              <Text style={{ fontSize: 14, color: "#171A1FFF" }}>
                {maritalStatus}
              </Text>
            </View>
            <View
              style={{
                gap: 3,
                borderWidth: 0.3,
                borderColor: "#ebebeb",
                padding: 15,
              }}
            >
              <Text style={{ fontSize: 12, color: "#9095A0FF" }}>
                Jenis Kelamin
              </Text>
              <Text style={{ fontSize: 14, color: "#171A1FFF" }}>{gender}</Text>
            </View>
            <View
              style={{
                gap: 3,
                borderWidth: 0.3,
                borderColor: "#ebebeb",
                padding: 15,
              }}
            >
              <Text style={{ fontSize: 12, color: "#9095A0FF" }}>Agama</Text>
              <Text style={{ fontSize: 14, color: "#171A1FFF" }}>
                {religion}
              </Text>
            </View>
            <View
              style={{
                gap: 3,
                borderWidth: 0.3,
                borderColor: "#ebebeb",
                padding: 15,
              }}
            >
              <Text style={{ fontSize: 12, color: "#9095A0FF" }}>Email</Text>
              <Text style={{ fontSize: 14, color: "#171A1FFF" }}>{email}</Text>
            </View>
            <View
              style={{
                gap: 3,
                borderWidth: 0.3,
                borderColor: "#ebebeb",
                padding: 15,
              }}
            >
              <Text style={{ fontSize: 12, color: "#9095A0FF" }}>
                Golongan Darah
              </Text>
              <Text style={{ fontSize: 14, color: "#171A1FFF" }}>
                {bloodType}
              </Text>
            </View>
            <View
              style={{
                gap: 3,
                borderWidth: 0.3,
                borderColor: "#ebebeb",
                padding: 15,
              }}
            >
              <Text style={{ fontSize: 12, color: "#9095A0FF" }}>
                NIK & NPWP
              </Text>
              <Text style={{ fontSize: 14, color: "#171A1FFF" }}>
                {nikNpwp}
              </Text>
            </View>
            <View
              style={{
                gap: 3,
                borderWidth: 0.3,
                borderColor: "#ebebeb",
                padding: 15,
              }}
            >
              <Text style={{ fontSize: 12, color: "#9095A0FF" }}>
                No BPJS Ketenagakerjaan
              </Text>
              <Text style={{ fontSize: 14, color: "#171A1FFF" }}>
                {bpjsKetenagakerjaan}
              </Text>
            </View>
            <View
              style={{
                gap: 3,
                borderWidth: 0.3,
                borderColor: "#ebebeb",
                padding: 15,
              }}
            >
              <Text style={{ fontSize: 12, color: "#9095A0FF" }}>
                No BPJS Kesehatan
              </Text>
              <Text style={{ fontSize: 14, color: "#171A1FFF" }}>
                {bpjsKesehatan}
              </Text>
            </View>
            <View
              style={{
                gap: 3,
                borderWidth: 0.3,
                borderColor: "#ebebeb",
                padding: 15,
              }}
            >
              <Text style={{ fontSize: 12, color: "#9095A0FF" }}>
                Nama Kontak Darurat
              </Text>
              <Text style={{ fontSize: 14, color: "#171A1FFF" }}>
                {emergencyContactName}
              </Text>
            </View>
            <View
              style={{
                gap: 3,
                borderWidth: 0.3,
                borderColor: "#ebebeb",
                padding: 15,
              }}
            >
              <Text style={{ fontSize: 12, color: "#9095A0FF" }}>
                Nomor Kontak Darurat
              </Text>
              <Text style={{ fontSize: 14, color: "#171A1FFF" }}>
                {emergencyContactNumber}
              </Text>
            </View>
            <View
              style={{
                gap: 3,
                borderWidth: 0.3,
                borderColor: "#ebebeb",
                padding: 15,
              }}
            >
              <Text style={{ fontSize: 12, color: "#9095A0FF" }}>
                Alamat Sesuai KTP
              </Text>
              <Text style={{ fontSize: 14, color: "#171A1FFF" }}>
                {addressKTP}
              </Text>
            </View>
            <View
              style={{
                gap: 3,
                borderWidth: 0.3,
                borderColor: "#ebebeb",
                padding: 15,
              }}
            >
              <Text style={{ fontSize: 12, color: "#9095A0FF" }}>
                Alamat Domisili
              </Text>
              <Text style={{ fontSize: 14, color: "#171A1FFF" }}>
                {domicileAddress}
              </Text>
            </View>
          </View>

          <View
            style={{
              height: 100,
              padding: 15,
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
            }}
          >
          
            <Pressable
              style={{
                backgroundColor: "#379AE6FF",
                height: 40,
                flex: 1,
                justifyContent: "center",
                alignContent: "center",
                borderRadius: 7,
              }}
              onPress={() => navigation.navigate("DataPribadi")}
            >
              <Text
                style={{ color: "white", textAlign: "center", fontSize: 14 }}
              >
                Buat Informasi Pribadi
              </Text>
            </Pressable>
          </View>
          <View style={{ height: 50 }}></View>
        </ScrollView>
      </View>

     
      {/* -------------------------- modal 2 -------------------- */}
      {/* <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisibleKirim}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalBackground}></View>
          <View style={styles.modalContent}>
            <View style={styles.modalIconContainer}>
              <FontAwesome5Icon name="check" size={20} color="white" />
            </View>
            <View style={styles.modalTextContainer}>
              <Text style={styles.modalTitle}>Informasi Pribadi</Text>
              <Text style={styles.modalDescription}>
                Pengajuan Perubahan Data Pribadi berhasil dikirim dan menunggu
                persetujuan HRD?
              </Text>
            </View>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate("Home");
                }}
                style={styles.modalConfirmButton}
              >
                <Text style={styles.modalConfirmButtonText}>
                  Kembali ke Beranda
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal> */}
    </>
  );
}

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
    paddingHorizontal: 10,
  },

  // --------------- radio -----------

  // container: {
  //   margin: 20,
  // },
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
