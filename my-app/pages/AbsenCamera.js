import React, { useEffect } from "react";
import { Text, View, ScrollView } from "react-native";
import TopBar from "../component/allpages/TopBar";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import Feather from "react-native-vector-icons/Feather";
import CheckInOut from "../component/AbsenOnline/CheckInOut";
import Laporan from "../component/AbsenOnline/Laporan";
import Riwayat from "../component/AbsenOnline/Riwayat";

SplashScreen.preventAutoHideAsync();

export default function AbsenCamera() {
  const [loaded, error] = useFonts({
    Jakarta: require("../assets/font/PlusJakartaSans-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <TopBar />
      <View
        style={{
          height: 80,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          padding: 15,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontFamily: "Jakarta",
            color: "#1e3a8a",
          }}
        >
          Absensi Online
        </Text>
        <View
          style={{
            height: 50,
            width: 50,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Feather name="info" size={20} color="#1e3a8a" />
        </View>
      </View>
      <ScrollView>
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
          <CheckInOut />
        </View>

        <Laporan />

        <Riwayat />

        <View style={{ height: 300, width: "100%" }}></View>
      </ScrollView>
    </View>
  );
}
