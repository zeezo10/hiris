import React, { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

export default function SuccessLoginLoading() {
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
      <Text style={styles.title}>persona</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 50,
    fontFamily: "ABeeZee-Bold",
    color: "#379AE6FF",
  },
});
