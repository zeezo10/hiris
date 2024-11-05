import { useEffect } from "react";
import { View, ScrollView, Dimensions, Text } from "react-native";

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
    "Jakarta-Italic": require("../assets/font/PlusJakartaSans-BoldItalic.ttf"),
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
    <View style={{ width: screenWidth }}>
      <ScrollView>
        {/* <UserInfo /> */}
        <View
          style={{
            backgroundColor: "#66B2ECFF",
            height: 300,
            paddingTop: 70,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                height: 60,
                gap: 2,
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 16 }}>
                PT Radhika Amerta Gemilang
              </Text>
              <Text style={{ color: "white", fontSize: 14 }}>
                Kamis 27 Sep 2024, 09:33:12
              </Text>
            </View>

            <View
              style={{ height: 40, width: 40, backgroundColor: "red" }}
            ></View>
          </View>

          <View
            style={{
              height: 80,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                height: 50,
                width: 50,
                borderRadius: 100,
                display: "flex",
                justifyContent: "center",
              }}
            ></View>
            <View>
              <Text
                style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
              >
                Fery Cokroaminoto Dewantoro
              </Text>
              <Text style={{ color: "white", fontSize: 13 }}>
                Manager, People Developmet
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "white",
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
            <View
              style={{
                marginTop: -100,
                width: screenWidth,
                paddingHorizontal: 15,
              }}
            >
              <UserStatus />
            </View>
            <View
              style={{
                width: screenWidth,
                paddingHorizontal: 15,
              }}
            >
              <BerandaIcons />
            </View>
            <Todo />

            <Pengumuman />


            <View style={{ height: 150 }}></View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
