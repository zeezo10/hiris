import React from 'react'
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  Pressable,
  Alert,
  Dimensions,
  Image,
} from "react-native";

export default function TopBar() {
  return (
    <View
    style={{
      height: 60,
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: 15,
      paddingRight: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#f3edff",
      backgroundColor:"#3171ee",
    }}
  >
    <Text style={{ fontSize: 30, color: "white", fontFamily:"Jakarta-Italic" }}>
      EMPLOI
    </Text>
    <View>
      {/* <Image
        source={require("../assets/icons/menu.png")}
        style={{ height: 30, width: 30 }}
      /> */}
    </View>
  </View>
  )
}
