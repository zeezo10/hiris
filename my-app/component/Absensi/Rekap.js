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

export default function Rekap() {
  return (
    <View
      style={{ height: 1000, paddingHorizontal: 20, gap: 10, marginTop: 20 }}
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

      <View
          style={{
            height: 86,
            width: "100%",
            backgroundColor: "#FDF2F2FF",
            padding: 15,
            gap: 3,
            justifyContent: "space-between",
            borderRadius: 16,
            elevation: 10,
            shadowColor: "grey",
            flexDirection: "row",
            marginBottom: 10,
          }}
        >
          <View
            style={{
              flex: 1.5,
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "#565E6CFF",
                fontWeight: "bold",
                fontSize: 12,
              }}
            >
              Clock In & Clock Out
            </Text>

            <Text style={{ fontSize: 12, color: "#424955FF" }}>
              09:05 - 17:10
            </Text>
            <Text style={{ fontSize: 12, color: "#BCC1CAFF" }}>Terlambat</Text>
          </View>
          <View
            style={{
              flex: 2,
              height: "100%",
              borderRadius: 10,
            }}
          >
            <View style={{}}>
              <Text
                style={{
                  color: "#565E6CFF",
                  fontWeight: "bold",
                  textAlign: "right",
                  fontSize: 13,
                }}
              >
                Kamis, 17 Desember 2029
              </Text>
              <Text
                style={{ fontSize: 12, color: "#424955FF", textAlign: "right" }}
              >
                08:05:36 jam
              </Text>
              <Text
                style={{ fontSize: 12, color: "#BCC1CAFF", textAlign: "right" }}
              >
                Disetujui
              </Text>
            </View>
          </View>
        </View>

      {Array.from({ length: 9 }).map((_, index) => (
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
            marginBottom: 10,
          }}
        >
          <View
            style={{
              flex: 1.5,
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "#565E6CFF",
                fontWeight: "bold",
                fontSize: 12,
              }}
            >
              Clock In & Clock Out
            </Text>

            <Text style={{ fontSize: 12, color: "#424955FF" }}>
              09:05 - 17:10
            </Text>
            <Text style={{ fontSize: 12, color: "#BCC1CAFF" }}>Terlambat</Text>
          </View>
          <View
            style={{
              flex: 2,
              height: "100%",
              borderRadius: 10,
            }}
          >
            <View style={{}}>
              <Text
                style={{
                  color: "#565E6CFF",
                  fontWeight: "bold",
                  textAlign: "right",
                  fontSize: 13,
                }}
              >
                Kamis, 17 Desember 2029
              </Text>
              <Text
                style={{ fontSize: 12, color: "#424955FF", textAlign: "right" }}
              >
                08:05:36 jam
              </Text>
              <Text
                style={{ fontSize: 12, color: "#BCC1CAFF", textAlign: "right" }}
              >
                Disetujui
              </Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}
