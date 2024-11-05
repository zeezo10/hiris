import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";

import { useEffect, useState } from "react";

let hadir = false;

export default function UserStatus() {
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
        backgroundColor: "white",
        height: 110,
        width: "100%",
        borderRadius: 10,
        justifyContent: "space-between",
        padding: 10,
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
      }}
    >
      <View style={{ flex: 2 }}>
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            flex: 1.5,
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderRadius: 100,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="checkcircleo" size={30} color="#1e3a8a" />
          </View>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Jakarta",
              color: "#1e3a8a",
              marginTop: -6,
            }}
          >
            Status
          </Text>
        </View>
        {hadir ? (
          <View style={{ flex: 2 }}>
            <Text
              style={{
                color: "grey",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Hadir
            </Text>
          </View>
        ) : (
          <View
            style={{
              borderRadius: 5,
              flex: 2,
            }}
          >
            <Text
              style={{
                color: "grey",
                fontSize: 20,
                fontFamily: "Jakarta",
              }}
            >
              Belum Hadir
            </Text>
            <View
              style={{
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  backgroundColor: "#e76050",
                  color: "white",
                  padding: 2,
                  borderRadius: 5,
                  paddingRight: 5,
                  fontSize: 12,
                  textAlign: "center",
                  fontFamily: "Jakarta",
                }}
              >
                Maksimal Keterlambatan
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 3,
                }}
              >
                <Image
                  source={require("../../assets/icons/black/clock.png")}
                  style={{ height: 15, width: 15 }}
                />
                <Text style={{ fontWeight: "bold", color: "#1e3a8a" }}>
                  09:05
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>
      <View
        style={{
          height: "100%",
          borderWidth: 1.4,
          borderRadius: 100,
          marginRight: 5,
        }}
      ></View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#E6E9FF",
          borderRadius: 5,
          flex: 1,
        }}
      >
        <Text
          style={{
            fontSize: 17,
            color: "#1e3a8a",
            fontFamily: "Jakarta",
          }}
        >
          {day}
        </Text>
        <Text style={{ color: "#1e3a8a" }}>{date}</Text>
      </View>
    </View>
  );
}
