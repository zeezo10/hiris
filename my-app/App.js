import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Fontisto from "react-native-vector-icons/Fontisto";
import Detail from "./pages/Detail";
import "react-native-gesture-handler";
import Pengaturan from "./pages/Pengaturan";
import LoadingPage from "./pages/LoadingPage";
import { useEffect, useState } from "react";
import SuccessLoginLoading from "./pages/SuccessLoginLoading";
import InfoPerbadi from "./pages/dataKeryawan/InfoPerbadi";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Persetujuan from "./pages/Persetujuan";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Absen from "./pages/Absen/Absen";
import FaceAbsence from "./pages/Absen/FaceAbsence";
import Absensi from "./pages/Absen/Absensi";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// const login = false;

function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Beranda") {
            iconName = "home";
          } else if (route.name === "Persetujuan") {
            iconName = "inbox";
          } else if (route.name === "Chat") {
            iconName = "message-square";
          } else if (route.name === "Profil") {
            iconName = "user";
          }

          return (
            <View
              style={{
                borderTopWidth: focused ? 2 : 0,
                borderTopColor: focused ? "#66B2ECFF" : "transparent",
                paddingTop: 5,
                height: "100%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Feather name={iconName} size={focused ? 27 : 25} color={color} />
            </View>
          );
        },
        tabBarActiveTintColor: "#66B2ECFF",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          height: 55,
          position: "absolute",
        },
        tabBarItemStyle: {
          paddingBottom: 5,
        },
      })}
    >
      <Tab.Screen
        name="Beranda"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Persetujuan"
        component={Persetujuan}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  //// delete after ----------------

  const [isLoad, setLoading] = useState(true);

  // useEffect(() => {
  //   if (isLoad) {
  //     const timer = setTimeout(() => {
  //       setLoading(false);
  //     }, 3000);

  //     return () => clearTimeout(timer);
  //   }
  // }, [isLoad]);

  //// delete after ----------------

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* {!login ? ( */}
          {isLoad ? (
            <Stack.Screen
              name="Laoding"
              component={MainTab}
              options={{ headerShown: false }}
            />
          ) : (
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
          )}

          {/* // ) : ( */}
          <Stack.Screen
            name="Home"
            component={Home}
            // change to main tab
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{
              headerTitle: "",

              headerStyle: {
                backgroundColor: "#288aff",

                shadowOpacity: 0,
                elevation: 0,
              },
            }}
          />
          <Stack.Screen
            name="Absen"
            component={Absen}
            options={{
              headerTitle: "",

              headerStyle: {
                backgroundColor: "white",

                shadowOpacity: 0,
                elevation: 0,
              },
            }}
          />
          <Stack.Screen
            name="FaceAbsence"
            component={FaceAbsence}
            options={{
              headerTitle: "",

              headerStyle: {
                backgroundColor: "white",

                shadowOpacity: 0,
                elevation: 0,
              },
            }}
          />
          
          <Stack.Screen
            name="Absensi"
            component={Absensi}
            options={{
              headerTitle: "",

              headerStyle: {
                backgroundColor: "white",

                shadowOpacity: 0,
                elevation: 0,
              },
            }}
          />

          <Stack.Screen
            name="SuccessLogin"
            component={SuccessLoginLoading}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
