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
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { FontAwesome5 } from "react-native-vector-icons";
import { FontAwesome6 } from "react-native-vector-icons";
import data from "../../Data/Absensi/rekap_bulanan.json";

export default function RekapBulanan() {
  return (
    <View
      style={{ paddingHorizontal: 20, gap: 10, marginTop: 20 }}
    >
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

      {data.map((item, index) => (
        <View
          key={index}
          style={{
            height: 86,
            width: "100%",
            backgroundColor: "white",
            padding: 15,
            gap: 3,
            justifyContent: "space-between",
            borderRadius: 16,
            elevation: 10,
            shadowColor: "grey",
            flexDirection: "row",
            marginBottom: 10, // Add some space between each item
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#4599e8",
              height: "100%",
              aspectRatio: 1,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome6
              name={
                item.category === "Tepat Waktu"
                  ? "user-clock"
                  : item.category === "Terlambat"
                  ? "bell-slash"
                  : item.category === "Tidak Hadir"
                  ? "user-minus"
                  : item.category === "Tidak Clock In"
                  ? "clock-rotate-left"
                  : item.category === "Tidak Clock Out"
                  ? "pen-to-square"
                  : item.category === "Izin"
                  ? "person-through-window"
                  : item.category === "Cuti"
                  ? "ban"
                  : item.category === "Sakit"
                  ? "briefcase-medical"
                  : item.category === "Lembur" && "couch"
              }
              size={20}
              color="white"
            />
          </View>
          <View
            style={{
              flex: 2,
              height: "100%",
              justifyContent: "space-between",
              padding: 4,
            }}
          >
            <Text style={{ fontSize: 16 }}>{item.category}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold" }}>{item.count} </Text>
              <Text style={{ color: "#424955FF" }}>hari</Text>
            </View>
          </View>
          <View
            style={{
              flex: 2,
              height: "100%",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
              }}
            >
              <Text style={{ color: "red", fontWeight: "bold" }}>
                {item.days}
              </Text>
              <Text style={{ fontSize: 10, color: "#424955FF" }}>
                {item.difference}
              </Text>
            </View>
          </View>
        </View>
      ))}

      <View style={{height:"50"}}></View>
    </View>
  );
}
