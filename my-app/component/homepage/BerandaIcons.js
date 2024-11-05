import React from 'react'
import { View, Text } from 'react-native';
import { useFonts } from 'expo-font';

import HomeIcons from '../HomeIcons';



export default function BerandaIcons() {
  return (
    <View style={{ gap: 10, width: "100%" }}>
    <Text
      style={{
        fontSize: 20,
        fontFamily: "Jakarta",
        color: "#1e3a8a",
      }}
    >
      Beranda
    </Text>
    <View
      style={{
        height: 230,
        width: "100%",
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
        borderRadius: 10,
        justifyContent: "space-around",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          rowGap: 10,
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <HomeIcons type={"Aktivitas"} />
        <HomeIcons type={"Absensi"} />
        <HomeIcons type={"Pengumuman"} />

        <HomeIcons type={"Pengajuan"} />
        <HomeIcons type={"Reimbursement"} />
        <HomeIcons type={"Tugas"} />
        <HomeIcons type={"slip gaji"} />
        <HomeIcons type={"waktu kerja"} />
      </View>
    </View>
  </View>
  )
}
