import React, { useState } from 'react'; // Added useState import
import { Modal, TouchableOpacity, Text, View } from 'react-native'; // Added necessary imports
import { useDispatch } from 'react-redux'; // Added useDispatch import
import { setFalse, setTrue } from "../../redux/counter";

import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'; // Adjust the import path for FontAwesome5Icon

export default function ModalKirim  ({ navigation ,title, name }) {
    const dispatch = useDispatch();
  
    const [visible, setVisible] = useState(false);
  
    function handleOpen() {
      setVisible(!visible);
    }
  
    function handleBackToBeranda() {
      dispatch(setTrue({ type: `${name}` }));
      if (navigation) {
        navigation.navigate("Home");
      } else {
        console.warn("Navigation prop is not available");
      }
    }
    return (
      <>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "#379AE6FF",
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 7,
          }}
          onPress={handleOpen}
        >
          <Text style={{ color: "white", fontSize: 16 }}>Kirim</Text>
        </TouchableOpacity>
  
        <Modal animationType="fade" transparent={true} visible={visible}>
          <View
            style={{
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                position: "absolute",
                backgroundColor: "black",
                height: "100%",
                width: "100%",
                opacity: 0.5,
              }}
            ></View>
            <View
              style={{
                height: 270,
                width: "80%",
                backgroundColor: "white",
                borderRadius: 5,
                alignItems: "center",
                padding: 25,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  backgroundColor: "#379AE6FF",
                  height: 40,
                  width: 40,
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome5Icon
                  name="check"
                  size={20}
                  color="white"
                  style={{ position: "absolute" }}
                />
              </View>
              <View
                style={{  alignItems: "center", gap: 20,  }}
              >
                <Text style={{ textAlign: "center", paddingHorizontal: 5,  fontSize:17, fontWeight:"bold"}}>
                  {title}
                </Text>

                <Text style={{ textAlign: "center", paddingHorizontal: 5 }}>
                  Informasi Pribadi berhasil dikirim dan menunggu persetujuan HRD
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  onPress={handleBackToBeranda}
                  style={{
                    flex: 1,
                    backgroundColor: "#379AE6FF",
                    height: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 7,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 16 }}>
                    Kembali ke Beranda
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </>
    );
};
