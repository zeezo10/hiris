import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Laporan() {
  return (
    <View
      style={{
        borderRadius: 10,
        padding: 10,
        flexWrap: "wrap",
        alignContent: "center",
        gap: 10,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontFamily: "Jakarta",
          color: "#1e3a8a",
        }}
      >
        Laporan Kehadiran Harian
      </Text>
      <View
        style={{
          width: "100%",
          backgroundColor: "white",
          padding: 10,
          borderRadius: 10,
          gap: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 50,
          }}
        >
          <Text style={{ fontSize: 20, fontFamily: "Jakarta" }}>
            Masuk : 9:10 AM
          </Text>
          <View
            style={{
              backgroundColor: "#e76050",
              width: 170,
              borderRadius: 5,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              padding: 3,
            }}
          >
            <Image
              source={require("../../assets/icons/warning.png")}
              style={{ height: 15, width: 15 }}
            />
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Jakarta",
                color: "white",
              }}
            >
              Absen terlambat
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 50,
          }}
        >
          <Text style={{ fontSize: 20, fontFamily: "Jakarta" }}>
            Keluar : 1:10 PM
          </Text>
          <View
            style={{
              backgroundColor: "#f5d151",
              width: 170,
              borderRadius: 5,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              padding: 3,
            }}
          >
            <Image
              source={require("../../assets/icons/warning.png")}
              style={{ height: 15, width: 15 }}
            />
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Jakarta",
                color: "white",
              }}
            >
              Pulang Lebih Awal
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
