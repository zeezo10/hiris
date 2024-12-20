import { useEffect } from "react";
import { View, ScrollView, Dimensions, Text, Image } from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import UserStatus from "../component/homepage/UserStatus";
import BerandaIcons from "../component/homepage/BerandaIcons";
import Activitas from "../component/homepage/AbsensiHari";
import Info from "../component/homepage/Info";
import { Octicons } from "@expo/vector-icons";

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
    <View style={{ width: screenWidth, backgroundColor: "white" }}>
      <ScrollView>
        <View
          style={{
            backgroundColor: "#379AE6FF",
            height: 300,
            paddingTop: 50,
            shadowColor: "#6a6a6b",
            paddingHorizontal: 20,
            elevation: 10,
            gap: 2,
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
                gap: 3,
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 14 }}>
                PT Radhika Amerta Gemilang
              </Text>
              <Text style={{ color: "white", fontSize: 12 }}>
                Kamis 27 Sep 2024, 09:33:12
              </Text>
            </View>

            <View style={{}}>
              <Octicons name="bell" size={24} color="white" />
            </View>
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
                height: 44,
                width: 44,
                borderRadius: 100,
                display: "flex",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <Image
                source={require("../assets/employee.png")}
                style={{ height: 44, width: 44, marginTop: 4 }}
              />
            </View>
            <View>
              <Text
                style={{ color: "white", fontSize: 14, fontWeight: "bold" }}
              >
                Fery Cokroaminoto Dewantoro
              </Text>
              <Text style={{ color: "white", fontSize: 12 }}>
                Manager, People Developmet
              </Text>
            </View>
          </View>
        </View>

        {/* white----------------------- */}

        <View
          style={{
            // backgroundColor: "white",
            flex: 3,
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              columnGap: 10,
              rowGap: 26,
              justifyContent: "center",
              alignContent: "center",
              width: 380,
              padding: 10,
            }}
          >
            <View
              style={{
                marginTop: -120,
                width: screenWidth,
                paddingHorizontal: 20,
              }}
            >
              <UserStatus />
            </View>
            <View
              style={{
                width: screenWidth,
                paddingHorizontal: 20,
              }}
            >
              <BerandaIcons />
            </View>

            <View
              style={{
                width: screenWidth,
                paddingHorizontal: 20,
              }}
            >
              <Activitas />
            </View>

            <View
              style={{
                width: screenWidth,
                paddingHorizontal: 20,
              }}
            >
              <Info />
            </View>

            <View style={{ height: 150 }}></View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
