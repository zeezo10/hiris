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
import Buat_Pengajuan from "./menu/Buat_Pengajuan";
import Riwayat from "./menu/Riwayat";
export default function Reimbursement({ navigation }) {
  const screenWidth = Dimensions.get("window").width;

  const [active, setActive] = useState("Buat_Pengajuan");

  const changeActive = (type) => {
    setActive(type);
  };

  return (
    <View style={{ width: screenWidth }}>
      <ScrollView>
        <View
          style={{
            height: "100%",

            backgroundColor: "white",
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 5,
            }}
          >
            <Pressable
              style={{
                flex: 1,
                height: 52,
                justifyContent: "center",
                alignItems: "center",
                borderRadius:6,
                backgroundColor:
                  active === "Buat_Pengajuan" ? "#f1f7fd" : "white",
              }}
              onPress={() => changeActive("Buat_Pengajuan")}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  color: active === "Buat_Pengajuan" ? "#4599e8" : "#565e6c",
                }}
              >
                Buat Pengajuan
              </Text>
            </Pressable>
            <Pressable
              style={{
                flex: 1,
                height: 52,
                justifyContent: "center",
                alignItems: "center",
                borderRadius:6,
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

          {/* --------------------------------------------------------- */}

          {active === "Buat_Pengajuan" ? <Buat_Pengajuan navigation={navigation} /> : <Riwayat />}
        </View>
      </ScrollView>
    </View>
  );
}
