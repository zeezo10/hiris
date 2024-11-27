import React from "react";
import { View, ScrollView, Dimensions, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Info() {
  const data = [
    {
      id: 1,
      message:
        "Untuk informasi lebih lanjut, silakan hubungi HR atau atasan masing-masing. Terima kasih atas kerja sama dan dedikasinya",
    },
    {
      id: 2,
      message:
        "Untuk informasi lebih lanjut, silakan hubungi HR atau atasan masing-masing. Terima kasih atas kerja sama dan dedikasinya. lorem",
    },
    {
      id: 3,
      message:
        "Untuk informasi lebih lanjut, silakan hubungi HR atau atasan masing-masing. Terima kasih atas kerja sama dan dedikasinya. lorem ",
    },
  ];

  return (
    <View style={{ gap: 10, height: 400, width: "100%" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: "700",
          }}
        >
          Info
        </Text>
        <Pressable>
          <Text style={{ color: "#9095A0FF", fontSize: 11 }}>Lihat Detail</Text>
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
              height: 102,
              backgroundColor: "white",
              borderRadius: 8,
              flexWrap: "wrap",
              alignContent: "center",

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
                width:113
              }}
            />
            <Text
              style={{ flex: 2, padding: 10, fontSize: 12, color: "#9095A0FF", lineHeight: 20, fontWeight:"400" }}
            >
              {item.message}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
