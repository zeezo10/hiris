import React from "react";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";

import HomeIcons from "../HomeIcons";

export default function BerandaIcons() {
  return (
    <View style={{ width: "100%" }}>
      <View
        style={{
          height: 230,
          width: "100%",
          justifyContent:"center"
        }}
      >
        <View
          style={{
            flexDirection: "row",
            rowGap: 10,
            justifyContent: "space-between",
            rowGap: 30,
            flexWrap: "wrap",
          }}
        >
          <HomeIcons type={"Absensi"} />
          <HomeIcons type={"Pengajuan"} />
          <HomeIcons type={"Payroll"} />
          <HomeIcons type={"Laporan"} />

          <HomeIcons type={"Pengaturan"} />
          <HomeIcons type={"Aktivitas"} />
          <HomeIcons type={"Aset"} />
          <HomeIcons type={"Info"} />
        </View>
      </View>
    </View>
  );
}
