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

export default function Status() {
  return (
    <View style={{ height: 1000, paddingHorizontal: 20, gap: 10, marginTop:20}}>
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
                marginBottom:10
              }}
            >
              <AntDesign name="calendar" size={20} color="#4599e8" />

              <Text style={{ color: "#4599e8" }}>Desember 2024</Text>
              <AntDesign name="down" size={18} color="#4599e8" />
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
                  <AntDesign name="deleteuser" size={40} color="white" />
                </View>
                <View
                  style={{
                    flex: 2,
                    height: "100%",
                    justifyContent: "space-between",
                    padding: 4,
                  }}
                >
                  <Text style={{ fontSize: 16 }}>Tepat Waktu</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontWeight: "bold" }}>20 </Text>
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
                    }}
                  >
                    <Text style={{ color: "red", fontWeight: "bold" }}>
                      +5{" "}
                    </Text>
                    <Text style={{ fontSize: 10, color: "#424955FF" }}>
                      hari dari bulan lalu
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
  )
}
