import React from "react";
import { View, ScrollView, Dimensions, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function AbsensiHari() {
  const data = [
    {
      id: 1,
      type:"Clock In",
      time: "08:06",
      status: "terlambat +5m",
      date: "Kamis, 23 Des 2024",
    },
    {
      id: 2,
      type:"Clock Out",

      time: "08:10",
      status: "terlambat +9m",
      date: "Jumat, 24 Des 2024",
    },
    {
      id: 3,
      type:"Lembur",

      time: "08:15 - 22:00",
      status: "terlambat +15m",
      date: "Sabtu, 25 Des 2024",
    },
  ];

  return (
    <View style={{ gap: 10, width: "100%", marginBottom:10}}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          
        }}
      >
        <Text
          style={{
            fontSize:14,
            fontWeight:"700",
          }}
        >
          Absensi Hari Ini
        </Text>
        <Pressable>
          <Text style={{color:"#9095A0FF", fontSize:11}}>Lihat Detail</Text>
        </Pressable>
      </View>

      <View
        style={{
          width: "100%",
     
        }}
      >
        <View>
          {data.map((item) => (
            <View
              key={item.id}
              style={{
                height: 70,
                width: "100%",
                alignItems: "center",
                flexDirection: "row",
                gap: 10,
                justifyContent: "space-between",
              
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name="clockcircleo" size={30} color="black" />
              </View>
              <View style={{ flex: 4 }}>
                <Text style={{ fontSize: 14, fontWeight: "bold", color:"#323842FF" }}>
                  {item.type}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#9095A0FF",
                  }}
                >
                  {item.date}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  fontSize: 10,
                  flex: 3.5,
                  color: "grey",
                }}
              >
                <Text style={{ textAlign: "right", fontWeight:"bold" ,fontSize: 14 ,color:"#323842FF" }}>{item.time}</Text>
                <Text style={{ textAlign: "right", color: "#9095A0FF" ,fontSize: 12, }}>
                  {item.status}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
