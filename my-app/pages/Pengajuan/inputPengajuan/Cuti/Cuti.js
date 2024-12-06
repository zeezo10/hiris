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
import Cuti_Pengajuan from "./menu/Cuti_Pengajuan";
import Cuti_Riwayat from "./menu/Cuti_Riwayat";

export default function Cuti({ navigation }) {
  const screenWidth = Dimensions.get("window").width;

  const [active, setActive] = useState("Pengajuan");

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
            backgroundColor: active === "Pengajuan" ? "#f1f7fd" : "white",
          }}
          onPress={() => changeActive("Pengajuan")}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: active === "Pengajuan" ? "#4599e8" : "#565e6c",
            }}
          >
            Pengajuan
          </Text>
        </Pressable>
        <Pressable
          style={{
            flex: 1,
            height: 52,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 6,
            backgroundColor: active === "Riwayat" ? "#f1f7fd" : "white",
          }}
          onPress={() => changeActive("Riwayat")}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: active === "Riwayat" ? "#4599e8" : "#565e6c",
            }}
          >
            Riwayat
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

          {active === "Pengajuan" ? (
            <Cuti_Pengajuan navigation={navigation} />
          ) : (
            <Cuti_Riwayat/>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
