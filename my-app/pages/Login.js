import React, { useEffect, useState } from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";
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
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();



export default function Login({navigation}) {

  const screenWidth = Dimensions.get("window").width;

  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };


  const [fontsLoaded] = useFonts({
    Jakarta: require('../assets/font/PlusJakartaSans-Bold.ttf'),
    'Jakarta-Italic': require('../assets/font/PlusJakartaSans-BoldItalic.ttf'),
   
  });

  
  React.useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator />; // Show loader while fonts are loading
  } else {
    SplashScreen.hideAsync(); // Hide splash screen when fonts are loaded
  }

  return (
    <View style={{ display: "flex", flex: 1, backgroundColor: "#2196F3" }}>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#3B82F6",
          flex: 1,
          width: screenWidth,
        }}
      >
        <Text style={{ color: "white", fontSize: 50, fontFamily:"Jakarta-Italic" }}>
          EMPLOI
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          gap: 10,
          flex: 3,
          alignItems: "center",
          padding: 30,
          backgroundColor: "#ffff",
          width: screenWidth,
          borderTopStartRadius:30,
          borderTopEndRadius: 30,
          elevation:20
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 30,fontFamily:"Jakarta"}}>Welcome to </Text>
          <Text style={{ fontSize: 30, color: "#2196F3" ,fontFamily:"Jakarta-Italic"}}>
            EMPLOI
          </Text>
        </View>
        <Text style={{ marginBottom: 50, fontSize: 18, color: "grey",fontFamily:"Jakarta" }}>
          sign in to your account
        </Text>

        <View style={{ display: "flex", width: 300, flexDirection: "row" }}>
          <Text>Username</Text>
        </View>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#f3edff",
            height: 50,
            width: 300,
            borderRadius: 5,
            padding: 10,
          }}
          placeholder="Username"
        ></TextInput>

{/* -------/sssss- */}
        
          <View
            style={{
              display: "flex",
              width: 300,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text>Password</Text>
          </View>

          <View style={{ display: "flex", width: 300, flexDirection: "row" }}>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: "#f3edff",
                height: 50,
                width: 300,
                borderRadius: 5,
                padding: 10,
                paddingRight: 40,
              }}
              placeholder="Password"
              secureTextEntry={!isPasswordVisible}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={{ marginLeft: -34, marginTop: 12 }}
            >
              <Icon
                name={isPasswordVisible ? "eye-off" : "eye"}
                size={24}
                color= "#3B82F6"
              />
            </TouchableOpacity>
          </View>


{/* ---------- */}
        <Pressable
          style={{
            width: 300,
            backgroundColor: "#3B82F6",
            marginTop: 30,
            alignItems: "center",
            height: 50,
            justifyContent: "center",
            borderRadius: 5,
            elevation:3
          }}
          onPress={() => navigation.navigate('Home')} 
        >
          <Text style={{ color: "white", fontFamily:"Jakarta", fontSize:20 }}>Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
}
