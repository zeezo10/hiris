import React from 'react'

import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function Todo() {
  return (
    <View style={{ gap: 10, width: "100%" }}>
    <Text
      style={{
        fontSize: 20,
        fontFamily: "Jakarta",
        color: "#1e3a8a",
      }}
    >
      To-Do List
    </Text>

    <View
      style={{
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        flexWrap: "wrap",
        alignContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
      }}
    >
      <View
        style={{
          height: 230,
          width: "100%",
          borderRadius: 10,
          gap: 10,
        }}
      >
        <View
          style={{
            height: 70,
            width: "100%",
            alignItems: "center",
            flexDirection: "row",
            gap: 10,
            justifyContent: "space-between",

            borderColor: "grey",
          }}
        >
          <View
            style={{
              backgroundColor: "#E6E9FF",
              height: 50,
              width: 50,
              borderRadius: 5,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="layout" size={30} color="#3171ee" />
          </View>
          <View style={{ flex: 4 }}>
            <Text style={{ fontSize: 15, fontFamily: "Jakarta" }}>
              Design Home Page
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Jakarta",
                color: "#e76050",
              }}
            >
              Not Done
            </Text>
          </View>
          <Text
            style={{
              fontSize: 10,
              fontFamily: "Jakarta",
              flex: 1,
              color: "grey",
            }}
          >
            {" "}
            10 : 00 AM
          </Text>
        </View>
        <View
          style={{
            height: 70,
            width: "100%",
            alignItems: "center",
            flexDirection: "row",
            gap: 10,
            justifyContent: "space-between",
            borderColor: "grey",
          }}
        >
          <View
            style={{
              backgroundColor: "#E6E9FF",
              height: 50,
              width: 50,
              borderRadius: 5,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="skin" size={30} color="#3171ee" />
          </View>
          <View style={{ flex: 4 }}>
            <Text style={{ fontSize: 15, fontFamily: "Jakarta" }}>
              profile Design
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Jakarta",
                color: "green",
              }}
            >
              Done
            </Text>
          </View>
          <Text
            style={{
              fontSize: 10,
              fontFamily: "Jakarta",
              flex: 1,
              color: "grey",
            }}
          >
            {" "}
            10 : 00 AM
          </Text>
        </View>
        <View
          style={{
            height: 70,
            width: "100%",
            alignItems: "center",
            flexDirection: "row",
            gap: 10,
            justifyContent: "space-between",
            borderColor: "grey",
          }}
        >
          <View
            style={{
              backgroundColor: "#E6E9FF",
              height: 50,
              width: 50,
              borderRadius: 5,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="skin" size={30} color="#3171ee" />
          </View>
          <View style={{ flex: 4 }}>
            <Text style={{ fontSize: 15, fontFamily: "Jakarta" }}>
              Wiring{" "}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Jakarta",
                color: "green",
              }}
            >
              Done
            </Text>
          </View>
          <Text
            style={{
              fontSize: 10,
              fontFamily: "Jakarta",
              flex: 1,
              color: "grey",
            }}
          >
            {" "}
            10 : 00 AM
          </Text>
        </View>
      </View>
    </View>
  </View>
  )
}
