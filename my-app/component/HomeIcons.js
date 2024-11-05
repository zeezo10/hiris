import React from "react";
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
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function HomeIcons({ type }) {
  const navigation = useNavigation();
  const icons = {
    Aktivitas: require("../assets/icons/Aktivitas.png"),
    Absensi: require("../assets/icons/Absensi.png"),
    Pengumuman: require("../assets/icons/Pengumuman.png"),
    Pengajuan: require("../assets/icons/Pengajuan.png"),
    Tugas: require("../assets/icons/Tugas.png"),
    Reimbursement: require("../assets/icons/Reimbursement.png"),
    "slip gaji": require("../assets/icons/slip gaji.png"),
    "waktu kerja": require("../assets/icons/waktu kerja.png"),
  };

  const [fontsLoaded] = useFonts({
    Jakarta: require("../assets/font/PlusJakartaSans-Bold.ttf"),
    "Jakarta-Italic": require("../assets/font/PlusJakartaSans-BoldItalic.ttf"),
  });

  React.useEffect(() => {
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
      <View
          style={{
            backgroundColor:"white",
            borderRadius: 8,
            height: 78,
            width: 76,
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            elevation: 3,
          }}
      >
        <Pressable
          onPress={() => navigation.navigate("Detail", { type: `${type}` })}
          style={{
            height: 60,
            width: 60,
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <View style={{backgroundColor:"#379AE6FF", height:40 , width:40}}></View>
      <Text style={{ fontFamily: "Jakarta", fontSize: 10, color:"#9095A0FF" }}>{type}</Text>
        </Pressable>
      </View>
  );
}
