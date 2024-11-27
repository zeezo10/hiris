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
import { useSelector, useDispatch } from "react-redux";


export default function Profile_InfoPribadi({ navigation }) {
  const screenWidth = Dimensions.get("window").width;
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleKirim, setModalVisibleKirim] = useState(false);

  const Pribadi = useSelector((state) => state.dataBtn.InfoPribadi);

  // State for all input fields
  const fullName = "useSelector((state) => state.DataPribadi.namaLengkap);"
  const tempatLahir = "useSelector((state) => state.InfoPribadi.tempatLahir);"
  const birthDate = "useSelector((state) => state.InfoPribadi.tanggalLahir);"
  const phoneNumber = "useSelector((state) => state.InfoPribadi.nomorHandphone);"
  const maritalStatus = "useSelector((state) => state.InfoPribadi.statusPerkawinan);"
  const gender = "useSelector((state) => state.InfoPribadi.jenisKelamin);"
  const religion = "useSelector((state) => state.InfoPribadi.agama);"
  const email =" useSelector((state) => state.InfoPribadi.email);"
  const bloodType = "useSelector((state) => state.InfoPribadi.golonganDarah);"
  const nikNpwp = "useSelector((state) => state.InfoPribadi.NIK_NPWP);"
  const bpjsKetenagakerjaan = "useSelector((state) => state.InfoPribadi.noBPJSKetenagakerjaan );"
  const bpjsKesehatan = "useSelector((state) => state.InfoPribadi.nomorBPJSKesehatan);"
  const emergencyContactName = "useSelector((state) => state.InfoPribadi.namaKontakDarurat);"
  const emergencyContactNumber = "useSelector((state) => state.InfoPribadi.nomorKontakDarurat);"
  const addressKTP = "useSelector(  (state) => state.InfoPribadi.alamatSesuaiKTP_1 );"
  const domicileAddress = "useSelector(  (state) => state.InfoPribadi.alamatSesuaiKTP_2  );"

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
                {Pribadi ? (<>Gibran Rakabuming Pangarep</>):(<>-</>) }
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
                {Pribadi ? (<>Los Angeles, Amerika Serikat</>):(<>-</>) }
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
                {Pribadi ? (<>17 September 1981</>):(<>-</>) }
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
                {Pribadi ? (<>+62 81280807676</>):(<>-</>) }
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
                {Pribadi ? (<>Kawin</>):(<>-</>) }
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
              <Text style={{ fontSize: 14, color: "#171A1FFF" }}>{Pribadi ? (<>Laki Laki</>):(<>-</>) }</Text>
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
                {Pribadi ? (<>Islam</>):(<>-</>) }
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
              <Text style={{ fontSize: 14, color: "#171A1FFF" }}>{Pribadi ? (<>gibran.rakabuming@gmail.com</>):(<>-</>) }</Text>
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
                {Pribadi ? (<>AB</>):(<>-</>) }
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
                {Pribadi ? (<>8063853891323668</>):(<>-</>) }
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
                {Pribadi ? (<>0000 1234 5678 90</>):(<>-</>) }
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
                {Pribadi ? (<>0000 1234 5678</>):(<>-</>) }
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
                {Pribadi ? (<>Christiano Ronaldo</>):(<>-</>) }
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
                {Pribadi ? (<>+62 858656513131</>):(<>-</>) }
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
                {Pribadi ? (<>Jl. Raya Merdeka No. 45
RT/RW: 003/004, Sukamaju, Cilandak
Jakarta Selatan, DKI Jakarta, 12130</>):(<>-</>) }
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
                {Pribadi ? (<>Jl. Pahlawan No. 17
RT/RW: 005/010, Mandalika, Mataram, 
Nusa Tenggara Barat, 45398</>):(<>-</>) }
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
            {Pribadi ? (
              <>
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
                      fontSize: 14,
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
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: 14,
                    }}
                  >
                    Ajukan Perubahan Data Pribadi
                  </Text>
                </Pressable>
              </>
            ) : (
              <>
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
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: 14,
                    }}
                  >
                    Buat Informasi Pribadi
                  </Text>
                </Pressable>
              </>
            )}
          </View>
          <View style={{ height: 50 }}></View>
        </ScrollView>
      </View>

      {/* ---------------------------------- modal 1 --------------------- */}

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
      <Modal
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
              <Text style={styles.modalTitle}>Data Pribadi</Text>
              <Text style={styles.modalDescription}>
                Pengajuan Perubahan Data Pribadi berhasil dikirim dan menunggu
                persetujuan HRD
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
