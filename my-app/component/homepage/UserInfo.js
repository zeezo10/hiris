import React from "react";
import { View, Text, Image } from "react-native";
import { useFonts } from "expo-font";
import { useEffect } from "react";

export default function UserInfo() {
  return (
    <View
     
      style={{
        backgroundColor: "#66B2ECFF",
        height: 300,
        flex: 2.5,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          alignItems: "center",
          gap: 10,
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            borderWidth: 3,
            borderColor: "white",
            height: 100,
            width: 100,
            borderRadius: 100,
            overflow: "hidden",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 1,
            shadowRadius: 0,
            elevation: 25,
          }}
        >
        
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 25, fontFamily: "Jakarta" }}>Abdulaziz</Text>
          <Text style={{ fontFamily: "Jakarta" }}>Staff</Text>
        </View>
      </View>
    </View>
  );
}
