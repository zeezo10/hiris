import { Text, View } from "react-native";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Detail from "./pages/Detail";
import "react-native-gesture-handler";
import { useEffect, useState } from "react";
import SuccessLoginLoading from "./pages/SuccessLoginLoading";
import Feather from "react-native-vector-icons/Feather";
import Persetujuan from "./pages/Persetujuan";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Absen from "./pages/Absen/Absen";
import FaceAbsence from "./pages/Absen/FaceAbsence";
import Absensi from "./pages/Absen/Absensi";
import Pengajuan from "./pages/Pengajuan/Pengajuan";
import LoadingPage from "./pages/LoadingPage";
import { store1 } from "./redux/store";
import { store2 } from "./redux/store";
import { Provider } from "react-redux";
import InfoPekerjaan from "./pages/Profile/inputDataKeryawan/DataPekerjaan";
import InfoPayroll from "./pages/Profile/inputDataKeryawan/InfoPayroll";
import RiwayatPendidikan from "./pages/Profile/inputDataKeryawan/RiwayatPendidikan";
import Aset from "./pages/Profile/inputDataKeryawan/Aset";
import RiwayatPekerjaan from "./pages/Profile/inputDataKeryawan/RiwayatPekerjaan";
import Profile_InfoPribadi from "./pages/Profile/FinalProfile/Profile_InfoPribadi";
import Profile_InfoPekerjaan from "./pages/Profile/FinalProfile/Profile_InfoPekerjaan";
import DataPribadi from "./pages/Profile/inputDataKeryawan/DataPribadi";
import DataPekerjaan from "./pages/Profile/inputDataKeryawan/DataPekerjaan";

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
          } else if (route.name === "Profil") {
            iconName = "user";
          } else if (route.name === "settings") {
            iconName = "settings";
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
        name="Profil"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="settings"
        component={Persetujuan}
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
    <Provider store={store2}>
      <Provider store={store1}>
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

              <Stack.Screen
                name="SuccessLogin"
                component={SuccessLoginLoading}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Home"
                component={MainTab}
                options={{ headerShown: false }}
              />
              {/* ---------------------------Edit Profile -------------------------------- */}

              <Stack.Screen
                name="DataPribadi"
                component={DataPribadi}
                options={{
                  headerTitle: () => (
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        flex: 1,
                        textAlignVertical: "center",
                      }}
                    >
                      Data Pribadi
                    </Text>
                  ),
                  headerTitleAlign: "center",
                  headerStyle: {
                    backgroundColor: "white",
                    shadowOpacity: 0,
                    elevation: 0,
                  },
                }}
              />
              <Stack.Screen
                name="DataPekerjaan"
                component={DataPekerjaan}
                options={{
                  headerTitle: () => (
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        flex: 1,
                        textAlignVertical: "center",
                      }}
                    >
                      Data Pekerjaan
                    </Text>
                  ),
                  headerTitleAlign: "center",
                  headerStyle: {
                    backgroundColor: "white",
                    shadowOpacity: 0,
                    elevation: 0,
                  },
                }}
              />
              <Stack.Screen
                name="InfoPayroll"
                component={InfoPayroll}
                options={{
                  headerTitle: () => (
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        flex: 1,
                        textAlignVertical: "center",
                      }}
                    >
                      Informasi Payroll
                    </Text>
                  ),
                  headerTitleAlign: "center",
                  headerStyle: {
                    backgroundColor: "white",
                    shadowOpacity: 0,
                    elevation: 0,
                  },
                }}
              />
              <Stack.Screen
                name="RiwayatPendidikan"
                component={RiwayatPendidikan}
                options={{
                  headerTitle: () => (
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        flex: 1,
                        textAlignVertical: "center",
                      }}
                    >
                      Riwayat Pendidikan
                    </Text>
                  ),
                  headerTitleAlign: "center",
                  headerStyle: {
                    backgroundColor: "white",
                    shadowOpacity: 0,
                    elevation: 0,
                  },
                }}
              />
              <Stack.Screen
                name="RiwayatPekerjaan"
                component={RiwayatPekerjaan}
                options={{
                  headerTitle: () => (
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        flex: 1,
                        textAlignVertical: "center",
                      }}
                    >
                      Riwayat Pekerjaan
                    </Text>
                  ),
                  headerTitleAlign: "center",
                  headerStyle: {
                    backgroundColor: "white",
                    shadowOpacity: 0,
                    elevation: 0,
                  },
                }}
              />
              <Stack.Screen
                name="Aset"
                component={Aset}
                options={{
                  headerTitle: () => (
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        flex: 1,
                        textAlignVertical: "center",
                      }}
                    >
                      Aset
                    </Text>
                  ),
                  headerTitleAlign: "center",
                  headerStyle: {
                    backgroundColor: "white",
                    shadowOpacity: 0,
                    elevation: 0,
                  },
                }}
              />

              {/* ----------------------------------------------------------------------------- */}
              {/* ---------------------------------- Profile Data ---------------------------------- */}

              <Stack.Screen
                name="InfoPribadi-Profile"
                component={Profile_InfoPribadi}
                options={{
                  headerTitle: () => (
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        flex: 1,
                        textAlignVertical: "center",
                      }}
                    >
                      Data Pribadi
                    </Text>
                  ),
                  headerTitleAlign: "center",
                  headerStyle: {
                    backgroundColor: "white",
                    shadowOpacity: 0,
                    elevation: 0,
                  },
                }}
              />

              <Stack.Screen
                name="Profile_InfoPekerjaan"
                component={Profile_InfoPekerjaan}
                options={{
                  headerTitle: () => (
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        flex: 1,
                        textAlignVertical: "center",
                      }}
                    >
                      Informasi Pribadi
                    </Text>
                  ),
                  headerTitleAlign: "center",
                  headerStyle: {
                    backgroundColor: "white",
                    shadowOpacity: 0,
                    elevation: 0,
                  },
                }}
              />

              <Stack.Screen
                name="Pengajuan"
                component={Pengajuan}
                options={{
                  headerTitle: "Pengajuan",

                  headerStyle: {
                    backgroundColor: "white",

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
                  headerTitle: () => (
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        flex: 1,
                        textAlignVertical: "center",
                      }}
                    >
                      Absensi
                    </Text>
                  ),
                  headerTitleAlign: "center",
                  headerStyle: {
                    backgroundColor: "white",
                    shadowOpacity: 0,
                    elevation: 0,
                  },
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </Provider>
  );
}
