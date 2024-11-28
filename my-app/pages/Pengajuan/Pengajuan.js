import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  TextInput,
  StyleSheet,
  Dimensions,
  Button,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AntDesign from "react-native-vector-icons/AntDesign";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import Aksi from "./Aksi";
import RekapPengajuan from "./RekapPengajuan";
import EvilIcons from  "react-native-vector-icons/EvilIcons";
import {FontAwesome5} from  "react-native-vector-icons/";



SplashScreen.preventAutoHideAsync();


const ReimbursementCard = ({title , navigation}) => {

  let icon = ""

  if(title  === "Reimbursement" ){
    icon = "coins"
  }else if (title === "Lembur"){
    icon = "moon"

  }else if (title === "Cuti"){
    icon = "arrow-left"

  }else if (title === "Sakit"){
    icon = "frown-open"

  }else if (title === "Izin"){
    icon = "user-clock"

  }
  

  const handlePress = () => {

      navigation.navigate(title);
    
  };

  return (
    <TouchableOpacity 
     onPress={handlePress}
    style={{height:120, borderRadius:8, elevation:9, shadowColor:"#9095A0FF", backgroundColor:"white", paddingHorizontal:24, paddingVertical:21, justifyContent:"space-between"}}>
      <View style={{height:24,  flexDirection:"row", justifyContent:"space-between", gap:10}}>
        <View> 
          <FontAwesome5
            name={icon}
            size={20}
            color="#379AE6FF"
            style={{ alignSelf: "center",}}
          />
        </View>
        <View style={{flex:1}}>
          <Text style={{color:"#171A1FFF", fontSize:14}} >{title}</Text>
        </View>
        <View> 
          <EvilIcons
            name="chevron-right"
            size={30}
            color="#9095A0FF"
            style={{ alignSelf: "center", top: -4 }}
          />
        </View>
      </View>
      <View style={{flexDirection:"row", height:32,  gap:10}}>
        <View style={{flex:1, flexDirection:"row",gap:2, backgroundColor:"#F3F4F6FF", borderRadius:6 , justifyContent:"center", alignItems:"center"}}>
          <Text style={{color:"#565E6CFF"}}>1</Text>
          <Text style={{color:"#565E6CFF"}}>Terkirim</Text>
        </View>
        <View style={{flex:1, flexDirection:"row",gap:2, backgroundColor:"#F1F8FDFF", borderRadius:6 , justifyContent:"center", alignItems:"center"}}>
        <Text style={{color:"#379AE6FF"}}>2</Text>
        <Text style={{color:"#379AE6FF"}}>Disetujui</Text>
        </View>
        <View style={{flex:1, flexDirection:"row",gap:2, backgroundColor:"#FDF2F2FF", borderRadius:6 , justifyContent:"center", alignItems:"center"}}>
        <Text style={{color:"#DE3B40FF"}}>6</Text>
        <Text style={{color:"#DE3B40FF"}}>Ditolak</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};



export default function Pengajuan({ navigation }) {
  const screenWidth = Dimensions.get("window").width;
 
  return (
    <View style={{ width: screenWidth }}>
    <ScrollView>
      <View
        style={{
          height: "100%",
          padding:20,
          gap:16,
          backgroundColor: "white",
        }}
      >

        <ReimbursementCard title={"Reimbursement"} navigation={navigation}/>
        <ReimbursementCard title={"Lembur"} navigation={navigation}/>
        <ReimbursementCard title={"Cuti"} navigation={navigation}/>
        <ReimbursementCard title={"Sakit"} navigation={navigation}/>
        <ReimbursementCard title={"Izin"} navigation={navigation}/>
      
      </View>
    </ScrollView>
  </View>
  );
}
