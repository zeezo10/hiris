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
import Lembur_Pengajuan from "./menu/Lembur_Pengajuan";
import Riwayat_Lembur from "./menu/Riwayat_Lembur";

export default function Lembur({ navigation }) {
  const screenWidth = Dimensions.get("window").width;

  const [active, setActive] = useState("Lembur_Pengajuan");

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
                borderRadius: 6,
                backgroundColor:
                  active === "Lembur_Pengajuan" ? "#f1f7fd" : "white",
              }}
              onPress={() => changeActive("Lembur_Pengajuan")}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  color: active === "Lembur_Pengajuan" ? "#4599e8" : "#565e6c",
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
                backgroundColor:
                  active === "Riwayat_Lembur" ? "#f1f7fd" : "white",
              }}
              onPress={() => changeActive("Riwayat_Lembur")}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  color: active === "Riwayat_Lembur" ? "#4599e8" : "#565e6c",
                }}
              >
                Riwayat
              </Text>
            </Pressable>
            <Pressable
              style={{
                flex: 1,
                height: 52,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 6,
                backgroundColor: active === "Laporan" ? "#f1f7fd" : "white",
              }}
              onPress={() => changeActive("Laporan")}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  color: active === "Laporan" ? "#4599e8" : "#565e6c",
                }}
              >
                Laporan
              </Text>
            </Pressable>
            <Pressable
              style={{
                flex: 1,
                height: 52,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 6,
                backgroundColor: active === "Hasil" ? "#f1f7fd" : "white",
              }}
              onPress={() => changeActive("Hasil")}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  color: active === "Hasil" ? "#4599e8" : "#565e6c",
                }}
              >
                Hasil
              </Text>
            </Pressable>
          </View>

          {/* --------------------------------------------------------- */}

          {active === "Lembur_Pengajuan" ? (
            <Lembur_Pengajuan navigation={navigation} />
          ) : active === "Riwayat_Lembur" ? (
            <Riwayat_Lembur />
          ) : (
            <></>
          )}
          {/* {active === "Buat_Pengajuan" ? <Buat_Pengajuan navigation={navigation} /> : <Riwayat />} */}
        </View>
      </ScrollView>
    </View>
  );
}
