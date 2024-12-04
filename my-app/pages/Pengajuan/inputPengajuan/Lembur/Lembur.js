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
import Laporan_Lembur from "./menu/Laporan_Lembur";
import Hasil_Lembur from "./menu/Hasil_Lembur";

export default function Lembur({ navigation }) {
  const screenWidth = Dimensions.get("window").width;

  const [active, setActive] = useState("Lembur_Pengajuan");

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
                  backgroundColor: active === "Laporan_Lembur" ? "#f1f7fd" : "white",
                }}
                onPress={() => changeActive("Laporan_Lembur")}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "bold",
                    color: active === "Laporan_Lembur" ? "#4599e8" : "#565e6c",
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
      <ScrollView>
        <View
          style={{
            height: "100%",

            backgroundColor: "white",
          }}
        >

          {/* --------------------------------------------------------- */}

          {active === "Lembur_Pengajuan" ? (
            <Lembur_Pengajuan navigation={navigation} />
          ) : active === "Riwayat_Lembur" ? (
            <Riwayat_Lembur />
          ) :active === "Laporan_Lembur" ? (
            <Laporan_Lembur  navigation={navigation}/>
          ) : (
            <Hasil_Lembur  navigation={navigation} />
          )}
          {/* {active === "Buat_Pengajuan" ? <Buat_Pengajuan navigation={navigation} /> : <Riwayat />} */}
        </View>
      </ScrollView>
    </View>
  );
}
