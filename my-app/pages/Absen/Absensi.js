import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  Alert,
  Modal,
  Pressable,
  ScrollView,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Status from "../../component/Absensi/Status";
import Rekap from "../../component/Absensi/Rekap";

export default function Absensi() {
  const screenWidth = Dimensions.get("window").width;
  const [active, setActive] = useState("Status");

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
              height: 120,
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal:5
            }}
          >
            <Pressable
              style={{
                flex: 1,
                height: "50%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: active === "Status" ? "#f1f7fd" : "white",
              }}
              onPress={() => changeActive("Status")}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: active === "Status" ? "#4599e8" : "#565e6c",
                }}
              >
                Status Absensi
              </Text>
            </Pressable>
            <Pressable
              style={{
                flex: 1,
                height: "50%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: active === "Rekap" ? "#f1f7fd" : "white",
              }}
              onPress={() => changeActive("Rekap")}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: active === "Rekap" ? "#4599e8" : "#565e6c",
                }}
              >
                Rekap Harian
              </Text>
            </Pressable>
          </View>

          {active === "Status" ? <Status /> : <Rekap />}
        </View>
      </ScrollView>
    </View>
  );
}
