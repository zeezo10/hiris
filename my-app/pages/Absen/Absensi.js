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
import RekapBulanan from "../../component/Absensi/RekapBulanan";
import RekapHarian from "../../component/Absensi/RekapHarian";
import ClockIn from "../../component/Absensi/ClockIn";

export default function Absensi() {
  const screenWidth = Dimensions.get("window").width;
  const [active, setActive] = useState("RekapBulanan");

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
              height: 45,
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal:5,
              
            }}
          >
            <Pressable
              style={{
                flex: 1,
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: active === "RekapBulanan" ? "#f1f7fd" : "white",
              }}
              onPress={() => changeActive("RekapBulanan")}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  color: active === "RekapBulanan" ? "#4599e8" : "#565e6c",
                }}
              >
                Rekap Bulanan
              </Text>
            </Pressable>
            <Pressable
              style={{
                flex: 1,
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: active === "RekapHarian" ? "#f1f7fd" : "white",
              }}
              onPress={() => changeActive("RekapHarian")}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  color: active === "RekapHarian" ? "#4599e8" : "#565e6c",
                }}
              >
                Rekap Harian
              </Text>
            </Pressable>

            <Pressable
              style={{
                flex: 1,
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: active === "Clock-In" ? "#f1f7fd" : "white",
              }}
              onPress={() => changeActive("Clock-In")}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  color: active === "Clock-In" ? "#4599e8" : "#565e6c",
                }}
              >
                Clock In
              </Text>
            </Pressable>

            <Pressable
              style={{
                flex: 1,
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: active === "Clock-Out" ? "#f1f7fd" : "white",
              }}
              onPress={() => changeActive("Clock-Out")}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  color: active === "Clock-Out" ? "#4599e8" : "#565e6c",
                }}
              >
                Clock Out
              </Text>
            </Pressable>
          </View>

          {active === "RekapBulanan" ? <RekapBulanan /> :
          active === "RekapHarian" ? <RekapHarian /> :
          active === "Clock-In" ? <ClockIn /> :
          active === "RekapBulanan" && <RekapHarian /> 
          
          
          }
        </View>
      </ScrollView>
    </View>
  );
}
