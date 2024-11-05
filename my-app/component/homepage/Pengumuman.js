import React from 'react'
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";




export default function Pengumuman() {
  return (
    <View style={{ gap: 10, width: "100%" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Jakarta",
                  color: "#1e3a8a",
                }}
              >
                Pengumuman
              </Text>

              <View
                style={{
                  height: 230,
                  width: "100%",
                  gap: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    height: "45%",
                    backgroundColor: "white",
                    borderRadius: 10,
                    padding: 10,
                    flexWrap: "wrap",
                    alignContent: "center",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.5,
                    elevation: 5,
                  }}
                >
                  <LinearGradient
                    colors={["#5497f7", "#3171ee"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{
                      height: "100%",
                      width: "25%",
                      backgroundColor: "lightgrey",
                      borderRadius: 5,
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AntDesign name="calendar" size={30} color="white" />
                  </LinearGradient>
                  <Text
                    numberOfLines={3}
                    ellipsizeMode="tail"
                    style={{ width: "75%", padding: 10 }}
                  >
                    Manajemen juga menetapkan tanggal 30-31 Oktober 2024 sebagai
                    cuti bersama untuk seluruh karyawan.
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    height: "45%",
                    backgroundColor: "white",
                    borderRadius: 10,
                    padding: 10,
                    flexWrap: "wrap",
                    alignContent: "center",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.5,
                    elevation: 5,
                  }}
                >
                  <LinearGradient
                    colors={["#5497f7", "#3171ee"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{
                      height: "100%",
                      width: "25%",
                      backgroundColor: "lightgrey",
                      borderRadius: 5,
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AntDesign name="calendar" size={30} color="white" />
                  </LinearGradient>
                  <Text
                    numberOfLines={3}
                    ellipsizeMode="tail"
                    style={{ width: "75%", padding: 10 }}
                  >
                    Seluruh karyawan diharapkan kembali bekerja seperti biasa
                    pada tanggal 1 November 2024.
                  </Text>
                </View>
              </View>
            </View>

  )
}
