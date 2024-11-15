import React from 'react'
import { Pressable, Text, View } from 'react-native'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export default function DataBtn({type , navigation}) {

    let name = ""
    let title = ""

    if(type === "InfoPribadi"){
        name = "user-alt"
        title = "Info Perbadi"
    }else if(type === "InfoPekerjaan"){
        name = "briefcase"
        title = "Info Pekerjaan"
    }else if (type === "Payroll"){
        name = "coins"
        title = "Payroll"
    }else if (type === "RewayatPendidikan"){
        name = "book"
        title = "Rewayat Pendidikan"
    }else if (type === "RewayatPekerjaan"){
        name = "office-building"
        title = "Rewayat Pekerjaan"
    }else if (type === "Aset") {
        name = "grid"
        title = "Aset"
    }

  return (
    <Pressable
    style={{
      backgroundColor: "white",
      height: 70,
      borderRadius: 10,
      borderWidth:0.3,
      borderColor:"#BCC1CAFF",
      flexDirection:"row",
      alignItems:"center",
      padding:15,
    }}
    onPress={() => navigation.navigate(type)}
  >

  <View style={{backgroundColor:"#DAECFAFF" , height:40, width:40, borderRadius:100, justifyContent:"center" ,alignItems:"center"}}>
  {
  type === "Aset" ? (
    <Entypo name={name} size={20} color="#379AE6FF" />
  ) : type === "RewayatPekerjaan" ? (
    <MaterialCommunityIcons name={name} size={20} color="#379AE6FF" />
  ) : (
    <FontAwesome5 name={name} size={15} color="#379AE6FF" />
  )
}
  </View>

   <Text style={{flex:1, paddingHorizontal:10 ,fontSize:15 }}>{title}</Text> 

   <View style={{ height:40, width:40, borderRadius:100, justifyContent:"center" ,alignItems:"center"}}>
   <EvilIcons name="chevron-right" size={35} color="#9095A0FF" />

   </View>

  </Pressable>
 
  )
}
