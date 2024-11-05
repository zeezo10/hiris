import React from 'react'
import { View, Text } from 'react-native';

export default function Status() {
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
      status cuti
    </Text>
    <View
      style={{
        width: "100%",
        backgroundColor: "white",
        padding: 10,
        borderRadius: 5,
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
          flex: 1,
        }}
      >
        <Text style={{ fontSize: 15, fontFamily: "Jakarta", flex: 2 }}>
          Permohonan cuti pada tanggal 12/10/24
        </Text>
        <View
          style={{
            backgroundColor: "#e76050",
            flex: 1,
            borderRadius: 5,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            padding: 3,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontFamily: "Jakarta",
              color: "white",
            }}
          >
            {" "}
            Ditolak
          </Text>
        </View>
      </View>
    </View>
  </View>
  )
}
