import { useEffect } from "react";
import { View, ScrollView, Dimensions } from "react-native";

import TopBar from "../component/allpages/TopBar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import UserInfo from "../component/homepage/UserInfo";
import UserStatus from "../component/homepage/UserStatus";
import Todo from "../component/homepage/Todo";
import BerandaIcons from "../component/homepage/BerandaIcons";
import Pengumuman from "../component/homepage/Pengumuman";
import SaldoCuti from "../component/homepage/SaldoCuti";

SplashScreen.preventAutoHideAsync();

export default function Home({ navigation }) {
  const screenWidth = Dimensions.get("window").width;

  const [loaded, error] = useFonts({
    Jakarta: require("../assets/font/PlusJakartaSans-Bold.ttf"),
    'Jakarta-Italic': require('../assets/font/PlusJakartaSans-BoldItalic.ttf'),
  
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

      <ScrollView>
        <UserInfo />

        <View
          style={{
            backgroundColor: "#F3F4F6",
            flex: 3,
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              columnGap: 10,
              rowGap: 10,
              justifyContent: "center",
              alignContent: "center",
              width: 380,
              padding: 10,
            }}
          >
            <UserStatus />

            <BerandaIcons />

            <Todo />

            <Pengumuman />

            <SaldoCuti />

            <View style={{ height: 150 }}></View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
