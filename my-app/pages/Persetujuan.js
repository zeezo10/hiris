import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

export default function Persetujuan() {
  const screenWidth = Dimensions.get("window").width;
  const [modalVisible, setModalVisible] = useState(false);

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
      {modalVisible && (
        <Pressable
          style={{
            position: "absolute",
            backgroundColor: "black",
            height: "100%",
            width: "100%",
            opacity: 0.3,
          }}
          onPress={() => {setModalVisible(false)}}
        ></Pressable>
      )}
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={styles.title}>persetujuan</Text>
      </View>

      <View style={styles.centeredViewModal}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.UpperHalf}></View>

            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World! 
                {`${modalVisible}`}
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredViewModal: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  UpperHalf: {
    flex: 1,
  },
  centeredView: {
    height: "100%",

    alignItems: "center",
  },
  modalView: {
    flex: 2,
    backgroundColor: "white",
    width: "100%",
    height: "60%",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "green",
  },
  buttonClose: {
    backgroundColor: "red",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#379AE6FF",
  },
  title: {
    fontSize: 50,
    fontFamily: "ABeeZee-Bold",
    color: "white",
  },
});
