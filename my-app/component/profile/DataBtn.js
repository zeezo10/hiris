import React, { useState } from "react";
import { Pressable, Text, View, Modal } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import EvilIcons from  "react-native-vector-icons/EvilIcons";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function DataBtn({ type, navigation, active }) {
  let name = "";
  let title = "";

  if (type === "InfoPribadi") {
    name = "user-alt";
    title = "Informasi Pribadi";
  } else if (type === "InfoPekerjaan") {
    name = "briefcase";
    title = "Informasi Pekerjaan";
  } else if (type === "InfoPayroll") {
    name = "coins";
    title = "Informasi Payroll";
  } else if (type === "RiwayatPendidikan") {
    name = "book";
    title = "Riwayat Pendidikan";
  } else if (type === "RiwayatPekerjaan") {
    name = "office-building";
    title = "Riwayat Pekerjaan";
  } else if (type === "Aset") {
    name = "grid";
    title = "Aset";
  }
  // -----------------------------------------------------
    if (type === "InfoPribadi-Profile"){
    name = "user-alt";
    title = "Informasi Pribadi";
  }
   else if (type === "Profile_InfoPekerjaan"){
    name = "briefcase";
    title = "Informasi Pekerjaan";
  }

  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    if (!active) {
      setModalVisible(true);
    } else {
      navigation.navigate(type);
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
              width: "80%",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 15 }}>
              Please complete the previous section first
            </Text>
            <Pressable
              style={{
                backgroundColor: "#379AE6FF",
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 5,
              }}
              onPress={handleCloseModal}
            >
              <Text style={{ color: "white" }}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable
        style={{
          backgroundColor: "white" ,

          height: 68,
          borderRadius: 12,
          elevation:5,
          shadowColor: "#BCC1CAFF",
          flexDirection: "row",
          alignItems: "center",
          padding: 15,
        }}
        onPress={handlePress}
      >
        <View
          style={{
            backgroundColor: "#DAECFAFF",
            height: 32,
            width: 32,
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {type === "Aset" ? (
            <Entypo name={name} size={20} color="#379AE6FF" />
          ) : type === "RiwayatPekerjaan" ? (
            <MaterialCommunityIcons name={name} size={20} color="#379AE6FF" />
          ) : (
            <FontAwesome5 name={name} size={15} color="#379AE6FF" />
          )}
        </View>

        <Text
          style={{
            flex: 1,
            paddingHorizontal: 10,
            fontSize: 14,
            color: active ?  "#171A1FFF" : "#565E6CFF",
            fontWeight:"500"

          }}
        >
          {title}
        </Text>

        <View
          style={{
            flexDirection: "row",

            height: 40,
            width: 40,

            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <EvilIcons
            name="chevron-right"
            size={30}
            color="#9095A0FF"
            style={{ alignSelf: "center", top: -4 }}
          />
        </View>
      </Pressable>
    </>
  );
}
