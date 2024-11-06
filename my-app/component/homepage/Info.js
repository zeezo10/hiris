import React from "react";
import { View, ScrollView, Dimensions, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Info() {

    const data = [
        { id: 1, message: "Manajemen juga menetapkan tanggal 30-31 Oktober 2024 sebagai cuti bersama untuk seluruh karyawan." },
        { id: 2, message: "Seluruh karyawan diimbau untuk menyelesaikan pekerjaan sebelum cuti bersama." },
        { id: 3, message: "Harap dicatat bahwa semua kantor akan ditutup selama cuti bersama." },
    ];

  return (
    <View style={{ gap: 10, height:400, width: "100%" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 20,
          }}
        >
          Info
        </Text>
        <Pressable>
          <Text style={{color:"#9095A0FF"}}>Lihat Detail</Text>
        </Pressable>
      </View>

      <View
    style={{
      height: 230,
      width: "100%",
      gap: 10,
    }}
  >
    {data.map((item) => (
      <View
        key={item.id}
        style={{
          display: "flex",
          flexDirection: "row",
          height: "45%",
          backgroundColor: "white",
          borderRadius: 8,
          flexWrap: "wrap",
          alignContent: "center",
          borderWidth: 1,
          borderColor: "#f2f2f2",
          overflow: "hidden",
          marginBottom: 10, // Space between each item
        }}
      >
        <View
          style={{
            height: "100%",
            backgroundColor: "lightgrey",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        />
        <Text style={{ flex: 2, padding: 10 }}>
          {item.message}
        </Text>
      </View>
    ))}
  </View>
    </View>
  );
}
