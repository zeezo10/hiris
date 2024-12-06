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
} from "react-native";
import Izin_Aksi from "./menu/Izin_Aksi";
import Izin_Riwayat from "./menu/Izin_Riwayat";


export default function Cuti({ navigation }) {
  const screenWidth = Dimensions.get("window").width;

  const [active, setActive] = useState("Aksi");

  const changeActive = (type) => {
    setActive(type);
  };

  return (
    <View style={{ width: screenWidth }}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 5,
          backgroundColor:"white"
        }}
      >
        <Pressable
          style={{
            flex: 1,
            height: 52,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 6,
            backgroundColor: active === "Aksi" ? "#f1f7fd" : "white",
          }}
          onPress={() => changeActive("Aksi")}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: active === "Aksi" ? "#4599e8" : "#565e6c",
            }}
          >
            Aksi
          </Text>
        </Pressable>
        <Pressable
          style={{
            flex: 1,
            height: 52,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 6,
            backgroundColor: active === "Rekap_Pengajuan" ? "#f1f7fd" : "white",
          }}
          onPress={() => changeActive("Rekap_Pengajuan")}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: active === "Rekap_Pengajuan" ? "#4599e8" : "#565e6c",
            }}
          >
            Rekap Pengajuan
          </Text>
        </Pressable>
      </View>
      <ScrollView>
        <View
          style={{
            height: "100%",

            backgroundColor: "white",
          }}
        >
          {/* --------------------------------------------------------- */}

          {active === "Aksi" ? (
            <Izin_Aksi navigation={navigation} />
          ) : (
            <Izin_Riwayat/>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
