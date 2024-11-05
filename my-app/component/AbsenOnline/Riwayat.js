import React from 'react'
import { View, Text } from 'react-native'

export default function Riwayat() {
  return (
    <View
          style={{
            flexDirection: "row",
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
            Riwayat Absensi
          </Text>
          <View
            style={{
              borderRadius: 5,
              width: "100%",
              padding: 5,
              gap: 5,
              overflow: "hidden",
            }}
          >
            <View
              style={{
                height: 65,
                backgroundColor: "white",
                borderRadius: 5,
                justifyContent: "center",
                padding: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.5,
                elevation: 5,
              }}
            >
              <Text style={{ fontSize: 20, fontFamily: "Jakarta" }}>
                senin, 4 Januari
              </Text>
              <Text
                style={{ fontSize: 15, fontFamily: "Jakarta", color: "grey" }}
              >
                9:00 - 17:00
              </Text>
            </View>
            <View
              style={{
                height: 65,
                backgroundColor: "white",
                borderRadius: 5,
                justifyContent: "center",
                padding: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.5,
                elevation: 5,
              }}
            >
              <Text style={{ fontSize: 20, fontFamily: "Jakarta" }}>
                senin, 3 Januari
              </Text>
              <Text
                style={{ fontSize: 15, fontFamily: "Jakarta", color: "grey" }}
              >
                9:00 - 15:00
              </Text>
            </View>
            <View
              style={{
                height: 65,
                backgroundColor: "white",
                borderRadius: 5,
                justifyContent: "center",
                padding: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.5,
                elevation: 5,
              }}
            >
              <Text style={{ fontSize: 20, fontFamily: "Jakarta" }}>
                senin, 2 Januari
              </Text>
              <Text
                style={{ fontSize: 15, fontFamily: "Jakarta", color: "grey" }}
              >
                9:00 - 17:00
              </Text>
            </View>
            <View
              style={{
                height: 65,
                backgroundColor: "white",
                borderRadius: 5,
                justifyContent: "center",
                padding: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.5,
                elevation: 5,
              }}
            >
              <Text style={{ fontSize: 20, fontFamily: "Jakarta" }}>
                senin, 1 Januari
              </Text>
              <Text
                style={{ fontSize: 15, fontFamily: "Jakarta", color: "grey" }}
              >
                9:00 - 18:00
              </Text>
            </View>
          </View>
        </View>
  )
}
