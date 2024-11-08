import React from "react";
import { Dimensions, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Absen() {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={{ width: screenWidth }}>
        <Text style={{width:"100%", textAlign:"center", padding:20, fontSize:30}}>JUST FOR TEST </Text>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          padding: 40,
          flexDirection:"row"
        }}
      >
        <Pressable style={{ backgroundColor: "pink", padding: 10 }}
            onPress={() => navigation.navigate("FaceAbsence")}
        >
          <Text>camera</Text>
        </Pressable>
        <Pressable style={{ backgroundColor: "pink", padding: 10 }}
            onPress={() => navigation.navigate("Absensi")}
            >
          <Text>Status</Text>
        </Pressable>
      </View>
    </View>
  );
}
