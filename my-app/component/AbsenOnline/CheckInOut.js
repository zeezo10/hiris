import React from 'react'
import { View, Text, Pressable } from 'react-native'


export default function CheckInOut() {
  return (
    <>
      <View style={{ height: 100, flex: 1, borderRadius: 5 }}>
        <Pressable
          style={{
            flex: 1,
            borderWidth: 1,
            backgroundColor: "white",
            borderColor: "#3171ee",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            elevation: 5,
          }}
        >
          <Text
            style={{
              color: "#3171ee",
              fontSize: 20,
              fontFamily: "Jakarta",
            }}
          >
            Check-in
          </Text>
        </Pressable>
      </View>
      <View style={{ height: 100, flex: 1, borderRadius: 5 }}>
        <Pressable
          style={{
            flex: 1,
            borderWidth: 1,
            backgroundColor: "white",
            borderColor: "#3171ee",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            elevation: 5,
          }}
        >
          <Text
            style={{
              color: "#3171ee",
              fontSize: 20,
              fontFamily: "Jakarta",
            }}
          >
            Check-out
          </Text>
        </Pressable>
      </View>
    </>
  )
}
