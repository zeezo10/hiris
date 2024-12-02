import React, { useEffect } from "react";
import { Text, View, StyleSheet, Dimensions ,ActivityIndicator } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import {Foundation} from "react-native-vector-icons";

export default function LoadingPage() {

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
        <Foundation
                  name="torsos-all"
                  size={110}
                  color="white"
                  style={{}}
                />
                
         
      <Text style={styles.title}>persona</Text>
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
   fontFamily:"ABeeZee-Bold",
    color: "white",
  },
});
