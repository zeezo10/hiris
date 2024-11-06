import React, { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

export default function Persetujuan() {
  const screenWidth = Dimensions.get("window").width;

  const [fontsLoaded] = useFonts({
    "ABeeZee-Bold": require("../assets/font/ABeeZee Bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    SplashScreen.hideAsync();
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>persetujuan</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#379AE6FF",
  },
  title: {
    fontSize: 50,
    fontFamily: "ABeeZee-Bold",
    color: "white",
  },
});
