import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { useFonts } from "expo-font";
import { useEffect } from "react";

export default function UserInfo() {
  return (
    <ImageBackground
      source={require("../../assets/background/Untitled design.png")}
      style={{
        backgroundColor: "#3171ee",
        height: 210,
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
          <Image
            source={require("../../assets/employee.png")}
            style={{ height: 100, width: 100, marginTop: 4 }}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 25, fontFamily: "Jakarta" }}>Abdulaziz</Text>
          <Text style={{ fontFamily: "Jakarta" }}>Staff</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
