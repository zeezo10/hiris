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
import {AntDesign} from "react-native-vector-icons";
import {Feather} from "react-native-vector-icons";

export default function Profile_InfoPekerjaan({navigation}) {
  const screenWidth = Dimensions.get("window").width;

  const pdf = [
    {name :"Surat Kontrak .pdf" , size :"1,5 MB  Download"},
    {name :"Perintah Kerja.pdf" , size :"1,5 MB  Download"}
  ]

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleKirim, setModalVisibleKirim] = useState(false);

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
          

          <View style={{}}>
            <View
              style={{
                gap: 3,
                borderWidth: 0.3,
                borderColor: "#ebebeb",
                padding: 15,
              }}
            >
              <Text style={{ color: "#9095A0FF" }}>ID Karyawan</Text>
              <Text>IT-2022-0123</Text>
            </View>
            <View
              style={{
                gap: 3,
                borderWidth: 0.3,
                borderColor: "#ebebeb",
                padding: 15,
              }}
            >
              <Text style={{ color: "#9095A0FF" }}>Jenis Karyawan</Text>
              <Text>Karyawan Tetap (PKWTT)</Text>
            </View>
            <View
              style={{
                gap: 3,
                borderWidth: 0.3,
                borderColor: "#ebebeb",
                padding: 15,
              }}
            >
              <Text style={{ color: "#9095A0FF" }}>Status Karyawan</Text>
              <Text>Aktif</Text>
            </View>
            <View
              style={{
                gap: 3,
                borderWidth: 0.3,
                borderColor: "#ebebeb",
                padding: 15,
              }}
            >
              <Text style={{ color: "#9095A0FF" }}>Nama Jabatan</Text>
              <Text>Full Stack Engineer</Text>
            </View>
            <View
              style={{
                gap: 3,
                borderWidth: 0.3,
                borderColor: "#ebebeb",
                padding: 15,
              }}
            >
              <Text style={{ color: "#9095A0FF" }}>Level Jabatan</Text>
              <Text>Manager</Text>
            </View>
            <View
              style={{
                gap: 3,
                borderWidth: 0.3,
                borderColor: "#ebebeb",
                padding: 15,
              }}
            >
              <Text style={{ color: "#9095A0FF" }}>Departemen</Text>
              <Text>IT Security & Infrastructure</Text>
            </View>
            <View
              style={{
                gap: 3,
                borderWidth: 0.3,
                borderColor: "#ebebeb",
                padding: 15,
              }}
            >
              <Text style={{ color: "#9095A0FF" }}>Grade</Text>
              <Text>Grade H (Eksekutif Senior)</Text>
            </View>
            <View
              style={{
                gap: 3,
                borderWidth: 0.3,
                borderColor: "#ebebeb",
                padding: 15,
              }}
            >
              <Text style={{ color: "#9095A0FF" }}>Atasan Langsung</Text>
              <Text>Pep Guardiola</Text>
            </View>
            <View
              style={{
                gap: 3,
                borderWidth: 0.3,
                borderColor: "#ebebeb",
                padding: 15,
              }}
            >
              <Text style={{ color: "#9095A0FF" }}>Persetujuan</Text>
              <Text>Pep Guardiola</Text>
            </View>
            <View
              style={{
                gap: 3,
                borderWidth: 0.3,
                borderColor: "#ebebeb",
                padding: 15,
              }}
            >
              <Text style={{ color: "#9095A0FF" }}>Lokasi Kerja</Text>
              <Text>Cabang Manado</Text>
            </View>
            <View
              style={{
                gap: 3,
                borderWidth: 0.3,
                borderColor: "#ebebeb",
                padding: 15,
              }}
            >
              <Text style={{ color: "#9095A0FF" }}>Mulai Bekerja</Text>
              <Text>23 Desember 2026</Text>
            </View>
            <View
              style={{
                gap: 3,
                borderWidth: 0.3,
                borderColor: "#ebebeb",
                padding: 15,
              }}
            >
              <Text style={{ color: "#9095A0FF" }}>
              Terakhir Bekerja
              </Text>
              <Text>14 Oktober 2029</Text>
            </View>
        
            
            <View
              style={{
                gap: 10,
                borderWidth: 0.3,
                borderColor: "#ebebeb",
                padding:15
              }}
            >
              <View style={{flexDirection:"row", alignItems:"center", gap:5}}>
              <Feather name="paperclip" size={15} />

              <Text style={{color:"#9095A0FF"}}>Lampiran ({pdf.length}) </Text>
              </View>
              {pdf.map((item, index) => (
                <View key={index} style={{flexDirection:"row",alignItems:"center", gap:5, padding:10}}>
                  <AntDesign name="pdffile1" size={30} color="red" />
                  <View>
                    <Text style={{}}>{item.name}</Text>
                    <Text style={{color:"#7A7A8DFF", fontSize:12}}>{item.size}</Text>
                  </View>
                </View>
              ))}
              
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
                height: 40,
                flex: 1,
                justifyContent: "center",
                alignContent: "center",
              }}
              onPress={handleBack}
            >
              <Text
                style={{
                  color: "#379AE6FF",
                  textAlign: "center",
                  fontSize: 16,
                }}
              >
                Batal
              </Text>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#379AE6FF",
                height: 40,
                flex: 3,
                justifyContent: "center",
                alignContent: "center",
                borderRadius: 7,
              }}
              onPress={handleBackKirim}
            >
              <Text
                style={{ color: "white", textAlign: "center", fontSize: 16 }}
              >
                Ajukan Perubahan Data Pribadi
              </Text>
            </Pressable>
          </View>
          <View style={{ height: 50 }}></View>
        </ScrollView>
      </View>

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
      {/* -------------------------- modal 2 -------------------- */}
      <Modal animationType="fade" transparent={true} visible={modalVisibleKirim}>
        <View style={styles.modalContainer}>
          <View style={styles.modalBackground}></View>
          <View style={styles.modalContent}>
            <View style={styles.modalIconContainer}>
              <FontAwesome5Icon name="check" size={20} color="white" />
            </View>
            <View style={styles.modalTextContainer}>
              <Text style={styles.modalTitle}>Informasi Pekerjaan</Text>
              <Text style={styles.modalDescription}>
                Pengajuan Perubahan Data Pekerjaan berhasil dikirim dan menunggu
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
                <Text style={styles.modalConfirmButtonText}>Kembali ke Beranda</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
