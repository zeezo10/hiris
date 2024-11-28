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
import Feather from "react-native-vector-icons/Feather";
import { Entypo } from "react-native-vector-icons";
import { FontAwesome5 } from "react-native-vector-icons";


// ... existing code ...

const ReimbursementItem = ({ title, amount, date, status, admin , reason }) => {
    return (
      <View
        style={{
          height: 170,
          width: "100%",
          backgroundColor: "white",
          padding: 20,
          gap: 3,
          justifyContent: "space-between",
          borderRadius: 8,
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
          <View
            style={{
              color: "#565E6CFF",
              gap: 5,
              flex: 1,
            }}
          >
            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                {title}
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <FontAwesome5
                name="coins"
                size={16}
                color="#379AE6FF"
                style={{ alignSelf: "center" }}
              />
              <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                {amount}
              </Text>
            </View>
  
            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <AntDesign name="calendar" size={16} color="#4599e8" />
              <View style={{ flexDirection: "row", gap: 13 }}>
                <Text style={{ fontSize: 12 }}>{date}</Text>
                <View
                  style={{
                    paddingHorizontal: 5,
                    borderRadius: 10,
                    backgroundColor: "#F1F8FDFF",
                    height: 20,
                    width: 139,
                    gap: 4,
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "center"
                  }}
                >
                  <AntDesign name="pdffile1" size={11} color="#4599e8" />
                  <Text style={{ fontSize: 11, color: "#4599e8" }}>Bukti Reimbursement</Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              color: "#565E6CFF",
              fontWeight: "bold",
              fontSize: 12,
              flex: 1,
              alignItems: "flex-end",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ gap: 5 }}>
                
              <Text style={{ fontSize: 11, color: "#565E6CFF" }}>
                {admin}
              </Text>
              <Text style={{ fontSize: 11, color: "#565E6CFF" }}>
                {reason}
              </Text>
            </View>
  
            <View
              style={{
                backgroundColor: "#FDF2F2FF",
                borderRadius: 6,
                height: 32,
                width: 67,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 12, color: "#DE3B40FF" }}>{status}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  
  // ... existing code ...



export default function Riwayat() {
  return (
    <View
      style={{ paddingHorizontal: 20, gap: 10, marginTop: 20 }}
    >
      <View style={{ flexDirection: "row", gap: 15 }}>
        <View
          style={{
            paddingHorizontal: 5,
            borderRadius: 5,
            backgroundColor: "#F3F4F6FF",
            height: 28,
            width: 147,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            marginBottom: 10,
            gap: 5,
          }}
        >
          <AntDesign name="calendar" size={20} color="#4599e8" />

          <Text style={{ color: "#171A1FFF", fontSize: 11, flex: 1 }}>
            Desember 2024
          </Text>
          <Entypo name="chevron-small-down" size={18} color="#171A1FFF" />
        </View>

        <View
          style={{
            paddingHorizontal: 5,
            borderRadius: 5,
            backgroundColor: "#F3F4F6FF",
            height: 28,
            width: 147,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            marginBottom: 10,
            gap: 5,
          }}
        >
          <Text style={{ color: "#171A1FFF", fontSize: 11, flex: 1 }}>
            Status
          </Text>
          <Entypo name="chevron-small-down" size={18} color="#171A1FFF" />
        </View>
      </View>

      {/* title, amount, date, status, reason */}

     <ReimbursementItem title={"001- Instalasi UPS  BDx"} amount={"Rp500.000 Makan Siang"} date={"Kamis 27 Des 2024"} status={"Ditolak"} admin={"Ditolak oleh Ruud Van Nisterloy"} reason={"Beli Nasi Padang 100 bungkus"} />
      {/* ---------------------------------- */}

      

      {/* ------------------------------------ */}

    </View>
  );
}
