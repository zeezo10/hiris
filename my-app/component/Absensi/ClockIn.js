import React from "react";
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

export default function ClockIn() {
  return (
    <View style={{ paddingHorizontal: 20, gap: 10, marginTop: 20 }}>
      <View
        style={{
          paddingHorizontal: 5,
          borderRadius: 5,
          backgroundColor: "#f1f7fd",
          height: 30,
          width: "50%",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          marginBottom: 10,
        }}
      >
        <AntDesign name="calendar" size={20} color="#4599e8" />

        <Text style={{ color: "#4599e8" }}>Desember 2024</Text>
        <AntDesign name="down" size={18} color="#4599e8" />
      </View>
      {/* --------------------------------------------------- */}

      <View style={{padding:10, gap:30}}>

      <View
        style={{
          width: "100%",
          height: 450,
          borderRadius: 8,
          overflow: "hidden",
          elevation: 5,
          shadowColor:"#9095A0FF"
        }}
      >
        <View style={{ flex: 3, backgroundColor: "pink" }}></View>
        <View
          style={{
            flex: 2,
            backgroundColor: "white",
            padding: 20,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{ textAlign: "center", fontSize: 15, fontWeight: "bold" }}
            >
              Amanda Manoppo
            </Text>
            <Text style={{ textAlign: "center" }}>
              Public Relations & Human Culture
            </Text>
            <Text style={{ textAlign: "center" }}>Manager</Text>
          </View>
          <View>
            <Text style={{ textAlign: "center", color:"#9095A0FF"}}>09.46 - 22 Des 2024</Text>
            <Text style={{ textAlign: "center", color:"#E5696DFF"}}>Terlambat 25 menit</Text>
          </View>
          <View>
            <Pressable
              style={{ backgroundColor: "#F1F8FDFF", width:"70%", padding:10,  borderRadius:6}}
            >
              <Text style={{textAlign:"center", color:"#379AE6FF"}}>Lihat Detail</Text>
            </Pressable>
          </View>
        </View>
      </View>

      </View>


      <View style={{ height: 50 }}></View>
    </View>
  );
}
