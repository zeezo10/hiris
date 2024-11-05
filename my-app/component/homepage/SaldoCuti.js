import React from 'react'
import { View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'

export default function SaldoCuti() {
  return (
    <View style={{ gap: 10, width: "100%" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  fontFamily: "Jakarta",
                  color: "#1e3a8a",
                }}
              >
                Saldo Cuti
              </Text>

              <View
                style={{
                  height: 200,
                  flexDirection: "row",
                  width: "100%",
                  borderRadius: 10,
                  padding: 10,

                  gap: 10,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    borderRadius: 5,
                    backgroundColor: "white",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.5,
                    elevation: 5,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#2563EB",
                      flex: 2,
                      borderTopEndRadius: 5,
                      borderTopStartRadius: 5,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AntDesign name="carryout" size={100} color="white" />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      paddingLeft: 10,
                      padding: 5,
                    }}
                  >
                    <Text style={{ fontSize: 17, fontFamily: "Jakarta" }}>
                      Cuti Tahunan
                    </Text>
                    <Text style={{ fontFamily: "Jakarta", color: "grey" }}>
                      Sisa : 5 hari
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    borderRadius: 5,
                    backgroundColor: "white",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.5,
                    elevation: 5,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#2563EB",
                      flex: 2,
                      borderTopEndRadius: 5,
                      borderTopStartRadius: 5,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FontAwesome name="stethoscope" size={100} color="white" />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      paddingLeft: 10,
                      padding: 5,
                    }}
                  >
                    <Text style={{ fontSize: 17, fontFamily: "Jakarta" }}>
                      Cuti Sakit
                    </Text>
                    <Text style={{ fontFamily: "Jakarta", color: "grey" }}>
                      Sisa : 10 hari
                    </Text>
                  </View>
                </View>
              </View>
            </View>
  )
}
