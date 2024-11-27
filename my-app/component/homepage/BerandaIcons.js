import React from "react";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";
import HomeIcons from "./HomeIcons";



export default function BerandaIcons() {
  return (
    <View style={{ width: "100%" }}>
      <View
        style={{
          height: 230,
          width: "100%",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            width: "100%",
            rowGap:20,
          }}
        >
          <HomeIcons type={"Absensi"} page={"Absensi"} />
          <HomeIcons type={"Pengajuan"}  page={"Pengajuan"}/>
          <HomeIcons type={"Payroll"} page={""} />
          <HomeIcons type={"Tugas"} page={""}/>

          <HomeIcons type={"Performa"} page={""} />
          <HomeIcons type={"Riwayat"} page={""} />
          <HomeIcons type={"Aset"} page={""} />
          <HomeIcons type={"Info"}  page={""}/>
        </View>
      </View>
    </View>
  );
}
