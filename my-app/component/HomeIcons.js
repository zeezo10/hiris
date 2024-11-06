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
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

SplashScreen.preventAutoHideAsync();

export default function HomeIcons({ type }) {
  const navigation = useNavigation();
  const icons = {
    Absensi: <MaterialIcons name="timer" size={35} color="#379AE6FF" />,
    Pengajuan:<MaterialCommunityIcons name="dots-grid" size={35} color="#379AE6FF" />,
    Payroll:<MaterialIcons name="payments" size={35} color="#379AE6FF" />,
    Laporan:<MaterialIcons name="text-snippet" size={35} color="#379AE6FF" />,
    Pengaturan:<MaterialIcons name="settings" size={35} color="#379AE6FF" />,
    Aktivitas:<FontAwesome6 name="user-check" size={30} color="#379AE6FF" />,
    Aset:<MaterialIcons name="wallet" size={35} color="#379AE6FF" />,
    Info:<MaterialIcons name="info" size={35} color="#379AE6FF" />,
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
        backgroundColor: "white",
        borderRadius: 8,
        height: 78,
        width: 76,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        elevation: 10,
        
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
        <View style={{ height: 40, width: 40,  justifyContent:"center", alignItems:"center" }}>
          {icons[type]}
        </View>
        <Text
          style={{ fontFamily: "Jakarta", fontSize: 10, color: "#9095A0FF" }}
        >
          {type}
        </Text>
      </Pressable>
    </View>
  );
}
