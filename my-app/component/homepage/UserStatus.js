import React from "react";
import { View, Text, Image, Dimensions, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

import { useEffect, useState } from "react";
import { Button } from "react-native-web";

let hadir = false;

export default function UserStatus() {
  const screenWidth = Dimensions.get("window").width;

  const [date, setDate] = useState("");
  const [day, setDay] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const dayOfWeek = days[currentDate.getDay()];
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    setDate(`${day}/${month}/${year}`);
    setDay(dayOfWeek);
  }, []);

  return (
    <View
      style={{
        backgroundColor: "#F1F8FDFF",
        height: 190,
        width: "100%",
        borderRadius: 8,
        shadowColor: "#6a6a6b",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 6,
        paddingHorizontal: 20,
        paddingBottom: 15,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottomWidth: 1,
          borderColor: "#BCC1CAFF",
          flex: 1.5,
          gap: 40,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#565E6CFF",
            flex: 1,
            textAlign: "center",
          }}
        >
          Absen masuk
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#565E6CFF",
            flex: 1,
            textAlign: "center",
          }}
        >
          Absen Keluar
        </Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: 40,
          flex: 3,
          gap: 40,
        }}
      >
        <View
          style={{
            fontWeight: "bold",
            color: "#565E6CFF",
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              fontSize: 16,
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 18 }}>08:09:39</Text>
            <Text style={{ fontSize: 12 }}>Anda Terlambat</Text>
          </View>

          <Pressable
            style={{
              height: 40,
              width: "100%",
              backgroundColor: "#379AE6FF",
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              gap: 4,
            }}
          >
            <MaterialIcons name="login" size={25} color="white" />

            <Text style={{ color: "white", fontSize: 15, fontWeight:"600" }}>Clock In</Text>
          </Pressable>
        </View>
        <View
          style={{
            fontWeight: "bold",
            color: "#565E6CFF",
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              fontSize: 16,
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 18 }}>--:--:--</Text>
            <Text style={{ fontSize: 12 }}>Clock Out Awal</Text>
          </View>

          <Pressable
            style={{
              height: 40,
              width: "100%",
              backgroundColor: "#379AE6FF",
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              gap: 4,
            }}
          >
            <MaterialIcons name="logout" size={25} color="white" />

            <Text style={{ color: "white", fontSize: 15, fontWeight:"600" }}>Clock Out</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
