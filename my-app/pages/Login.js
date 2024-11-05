import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Dimensions,
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function Login({ navigation }) {
  const screenWidth = Dimensions.get("window").width;

  const [emailInput, setEmailInput] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [fontsLoaded] = useFonts({
    Jakarta: require("../assets/font/PlusJakartaSans-Bold.ttf"),
    "Jakarta-Italic": require("../assets/font/PlusJakartaSans-BoldItalic.ttf"),
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

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  /// test login -------------------

  const validEmail = "aziz@gmail.com";
  const validPassword = "12346";

  const handleLogin = () => {
    if (emailInput !== validEmail) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }
    if (password !== validPassword) {
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }
    if (emailInput === validEmail && password === validPassword) {
      console.log("Login successful");
    }
  };

  /// test login -------------------

  return (
    <View style={styles.container}>
      <View style={[styles.formContainer, { width: screenWidth }]}>
        <View style={styles.welcomeTextContainer}>
          <Text style={styles.appNameText}>Persona</Text>
        </View>
        <Text style={styles.signInText}>Log into your account</Text>

        <View
          style={[
            styles.outerInputBorder,
            isUsernameFocused && styles.outerInputBorderFocused,
            !isEmailValid && styles.outerInputBorderError,
          ]}
        >
          <TextInput
            style={[
              styles.input,
              isUsernameFocused && styles.inputFocused,
              !isEmailValid && styles.inputError,
            ]}
            placeholder="Enter your email address"
            onChangeText={setEmailInput}
            onFocus={() => setIsUsernameFocused(true)}
            onBlur={() => setIsUsernameFocused(false)}
          />
        </View>
           

        <View
          style={[
            styles.outerInputBorder,
            isPasswordFocused && styles.outerInputBorderFocused,
            !isPasswordValid && styles.outerInputBorderError,
          ]}
        >
          <View style={styles.passwordContainer}>
            <TextInput
              style={[
                styles.input,
                isPasswordFocused && styles.inputFocused,
                !isPasswordValid && styles.inputError,
              ]}
              placeholder="Enter your password"
              secureTextEntry={!isPasswordVisible}
              value={password}
              onChangeText={setPassword}
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
            />
            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
              <Icon
                name={isPasswordVisible ? "eye-off" : "eye"}
                size={24}
                color="grey"
              />
            </TouchableOpacity>
          </View>
        </View>
          <View style={styles.forgetPassword}>
            <Text style={styles.errorMessage}>
              {!isPasswordValid && "Wrong password"}
            </Text>
            <Text style={styles.forgetPasswordText}>Forget password?</Text>
          </View>


        <Pressable style={styles.signInButton} onPress={handleLogin}>
          <Text style={styles.signInButtonText}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
  },
  formContainer: {
    gap: 30,
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    backgroundColor: "white",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    elevation: 20,
  },
  welcomeText: {
    fontSize: 30,
  },
  appNameText: {
    fontSize: 40,
    color: "#2196F3",
    fontWeight: "bold",
  },
  signInText: {
    marginBottom: 25,
    fontSize: 17,
    color: "grey",
  },
  outerInputBorder: {
    borderRadius: 17,
    padding: 3.5,
    width: 350,
  },
  outerInputBorderFocused: {
    backgroundColor: "#d7ebfa",
    borderRadius: 17,
    padding: 3.5,
    width: 350,
  },
  outerInputBorderError: {
    backgroundColor: "#fddede",
  },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    height: 50,
    fontSize: 15,
    width: "100%",
    borderRadius: 15,
    padding: 10,
    borderColor: "#f3edff",
  },
  inputFocused: {
    borderColor: "#379ae6",
  },
  inputError: {
    borderColor: "red",
  },

  forgetPassword:{
    marginTop:-30,
    marginTop:-30,
    height: 40,
    width: 350,
    display:"flex",
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  forgetPasswordText:{
    color: "#379ae6",
  },

  passwordContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  eyeIcon: {
    marginLeft: -34,
  },
  errorMessage: {
    color: "#c12126",
    fontSize: 14,
  },
  signInButton: {
    width: 350,
    backgroundColor: "#379ae6",
    alignItems: "center",
    height: 50,
    justifyContent: "center",
    borderRadius: 15,
    elevation: 3,
  },
  signInButtonText: {
    color: "white",
    fontSize: 20,
  },
});
