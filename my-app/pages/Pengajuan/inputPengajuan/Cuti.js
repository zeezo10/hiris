import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  TextInput,
  StyleSheet,
  Dimensions,
  Button,
} from "react-native";

export default function Cuti({ navigation }) {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={{ width: screenWidth }}>
      <ScrollView>
        <View
          style={{
            height: "100%",
            padding: 20,
            gap: 16,
            backgroundColor: "white",
          }}
        ></View>
      </ScrollView>
    </View>
  );
}
