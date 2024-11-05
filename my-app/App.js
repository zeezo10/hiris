import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import Fontisto from "react-native-vector-icons/Fontisto";
import Detail from "./pages/Detail";
import Profile from "./pages/Profile";
import AbsenCamera from "./pages/AbsenCamera";
import "react-native-gesture-handler";
import PamuhunanCuti from "./pages/PamuhunanCuti";
import Gaji from "./pages/Gaji";
import PengumumanNotif from "./pages/Pangumuman&notif";
import Laporan from "./pages/Laporan";
import Support from "./pages/Support";
import Pengaturan from "./pages/Pengaturan";

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
            iconName = focused ? "home" : "home";
          } else if (route.name === "Absensi") {
            iconName = focused ? "camera" : "camera";
          } else if (route.name === "Riwayat") {
            iconName = focused ? "clock-rotate-left" : "clock";
            return <FontAwesome6 name={iconName} size={25} color={color} />;
          }

          return <Fontisto name={iconName} size={25} color={color} />;
        },
        tabBarActiveTintColor: "#ffff",
        tabBarInactiveTintColor: "grey",
        tabBarActiveBackgroundColor: "#3171ee",
        tabBarStyle: {
          height: 55,
          position: "absolute",
          bottom: 10,
          left: 20,
          right: 20,
          borderRadius: 15,
        },

        tabBarItemStyle: {
          paddingVertical: 5,
          borderRadius: 10,
        },
      })}
    >
      <Tab.Screen
        name="Beranda"
        component={Home}
        options={{
          headerTitle: "",
          headerStyle: {
            backgroundColor: "#3171ee",
            shadowOpacity: 0,
            elevation: 0,
            height: 20,
          },
        }}
      />
      <Tab.Screen
        name="Absensi"
        component={AbsenCamera}
        options={{
          headerTitle: "" ,
          headerStyle: {
            backgroundColor: "#3171ee",
            shadowOpacity: 0,
            elevation: 0,
            height: 20,
          },
        }}
      />
      <Tab.Screen
        name="Riwayat"
        component={Pengaturan}
        options={{
          headerTitle: "",
          headerStyle: {
            backgroundColor: "#3171ee",
            shadowOpacity: 0,
            elevation: 0,
            height: 20,
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* {!login ? ( */}
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          {/* // ) : ( */}
          <Stack.Screen
            name="Home"
            component={MainTab}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen
              name="Home"
              component={Profile}
              options={{ headerShown: false }}
            /> */}
          {/* // )} */}
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
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
