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
import AntDesign from "react-native-vector-icons/AntDesign";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();

export default function Login() {
  const navigation = useNavigation();

  const screenWidth = Dimensions.get("window").width;

  const [emailInput, setEmailInput] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isSuccessLogin, setSuccessLogin] = useState(false);

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
      setSuccessLogin(true);

      //temp ------

      
    }
  };

  /// test login -------------------

  return (
    <View style={styles.container}>
      <View style={[styles.formContainer, { width: screenWidth }]}>
        <View style={styles.welcomeTextContainer}>
          <View style={styles.logo}></View>
          <Text style={styles.appNameText}>persona</Text>
          <Text style={styles.signInText}>Log into your account</Text>
        </View>
        {!isSuccessLogin ? (
          <>
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

              <View style={{ width: 35 }}>
                <Octicons
                  name="mail"
                  size={20}
                  color="grey"
                  style={{ marginTop: -35, marginLeft: 13 }}
                />
              </View>
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
                <TouchableOpacity
                  onPress={togglePasswordVisibility}
                  style={styles.eyeIcon}
                >
                  <Icon
                    name={isPasswordVisible ? "eye-off" : "eye"}
                    size={24}
                    color="grey"
                  />
                </TouchableOpacity>
              </View>
              <View style={{ width: 35 }}>
                <Octicons
                  name="lock"
                  size={20}
                  color="grey"
                  style={{ marginTop: -35, marginLeft: 16 }}
                />
              </View>
            </View>
            <View style={styles.forgetPassword}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 5,
                  alignItems: "center",
                }}
              >
                {!isPasswordValid && (
                  <>
                    <AntDesign
                      name="exclamationcircleo"
                      size={18}
                      color="#c12126"
                    />
                    <Text style={styles.errorMessage}>Wrong password</Text>
                  </>
                )}
              </View>
              <Text style={styles.forgetPasswordText}>Forget password?</Text>
            </View>

            <Pressable style={styles.signInButton} onPress={handleLogin}>
              <Text style={styles.signInButtonText}>Login</Text>
            </Pressable>
          </>
        ) : (
          <ActivityIndicator size="large" color="#379AE6FF" />
        )}
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
  welcomeTextContainer: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  logo: {
    height: 100,
    width: 100,
    backgroundColor: "pink",
  },
  formContainer: {
    gap: 20,
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
    fontSize: 45,
    color: "#2196F3",
    fontFamily: "ABeeZee-Bold",
  },
  signInText: {
    marginBottom: 25,
    fontSize: 16,
    color: "#BCC1CAFF",
  },
  outerInputBorder: {
    padding: 3.5,
    width: 335,
  },
  outerInputBorderFocused: {
    backgroundColor: "#d7ebfa",
    padding: 3.5,
    width: 335,
    borderRadius: 17,
  },
  outerInputBorderError: {
    borderRadius: 17,
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
    paddingLeft: 44,
    paddingRight: 16,
  },
  inputFocused: {
    borderColor: "#379ae6",
  },
  inputError: {
    borderColor: "red",
  },

  forgetPassword: {
    marginTop: -25,
    height: 40,
    width: 335,
    display: "flex",
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  forgetPasswordText: {
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
    width: 335,
    backgroundColor: "#379ae6",
    alignItems: "center",
    height: 50,
    justifyContent: "center",
    borderRadius: 15,
    elevation: 3,
  },
  signInButtonText: {
    color: "white",
    fontSize: 18,
  },
});
