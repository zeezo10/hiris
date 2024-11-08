import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  Alert,
  Modal,
  Pressable,
  ScrollView,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";

export default function RekapPengajuan() {
  return (
    <View
      style={{ height: 1000, paddingHorizontal: 20, gap: 10, marginTop: 20 }}
    >
      <View
        style={{
          paddingHorizontal: 5,
          borderRadius: 5,
          backgroundColor: "#f1f7fd",
          height: 30,
          width: "50%",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          marginBottom: 10,
        }}
      >
        <AntDesign name="calendar" size={20} color="#4599e8" />

        <Text style={{ color: "#4599e8" }}>Desember 2024</Text>
        <AntDesign name="down" size={18} color="#4599e8" />
      </View>

      <View
        style={{
          height: 154,
          width: "100%",
          backgroundColor: "white",
          padding: 15,
          gap: 3,
          justifyContent: "space-between",
          borderRadius: 8,
          elevation: 10,
          shadowColor: "grey",
          flexDirection: "row",
          marginBottom: 10,
        }}
      >
        <View
          style={{
            flex: 1.5,
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              color: "#565E6CFF",
              gap: 5,
              flex: 1,
            }}
          >
            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <Feather name="log-out" size={18} color="#4599e8" />

              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Cuti Tahunan
              </Text>
            </View>

            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <AntDesign name="calendar" size={20} color="#4599e8" />

              <Text style={{ fontSize: 12 }}>
                Kamis 27 Des 2024 - Jumat 27 Des 2024
              </Text>
            </View>
          </View>
          <View
            style={{
              color: "#565E6CFF",
              fontWeight: "bold",
              fontSize: 12,
              flex: 1,
              alignItems:"flex-end",
              flexDirection:"row",
              justifyContent:"space-between"
            }}
          >
            <View style={{ gap: 5 }}>
              <Text style={{ fontSize: 10, color:"#565E6CFF"}}>
                Ditolak oleh Fery Cokroaminoto Dewantoro
              </Text>
              <Text style={{ fontSize: 10, color:"#565E6CFF"}}>
                Sisa kuota cuti 3 dari 6 hari
              </Text>
            </View>

            <View style={{backgroundColor:"#E5696DFF" , borderRadius:6, height:36 , width:80, justifyContent:"center" , alignItems:"center"}}>
              <Text style={{color:"white" , fontSize:16}}>Ditolak</Text>
            </View>

          </View>
        </View>
      </View>

      {/* ---------------------------------- */}


      <View
        style={{
          height: 154,
          width: "100%",
          backgroundColor: "white",
         
          gap: 3,
          justifyContent: "space-between",
          borderRadius: 8,
          elevation: 10,
          shadowColor: "grey",
          flexDirection: "row",
         
        }}
      >
        <View style={{backgroundColor:"white", height:20, width:20, position:"absolute", right:310, top:20, transform: [{ rotate: "45deg" }], elevation: 15,shadowColor: "grey", zIndex:0 }}></View>

      <View
        style={{
          height: 154,
          width: "100%",
          backgroundColor: "white",
          padding: 15,
          gap: 3,
          justifyContent: "space-between",
          borderRadius: 8,
         
          flexDirection: "row",
          marginBottom: 10,
        }}
      >
          
        <View
          style={{
            flex: 1.5,
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              color: "#565E6CFF",
              gap: 5,
              flex: 1,
            }}
          >
            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <Feather name="log-out" size={18} color="#4599e8" />

              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Cuti Tahunan
              </Text>
            </View>

            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <AntDesign name="calendar" size={20} color="#4599e8" />

              <Text style={{ fontSize: 12 }}>
                Kamis 27 Des 2024 - Jumat 27 Des 2024
              </Text>
            </View>
          </View>
          <View
            style={{
              color: "#565E6CFF",
              fontWeight: "bold",
              fontSize: 12,
              flex: 1,
              alignItems:"flex-end",
              flexDirection:"row",
              justifyContent:"space-between"
            }}
          >
            <View style={{ gap: 5 }}>
              <Text style={{ fontSize: 10, color:"#565E6CFF"}}>
                Ditolak oleh Fery Cokroaminoto Dewantoro
              </Text>
              <Text style={{ fontSize: 10, color:"#565E6CFF"}}>
                Sisa kuota cuti 3 dari 6 hari
              </Text>
            </View>

            <View style={{backgroundColor:"#66B2ECFF" , borderRadius:6, height:36 , width:80, justifyContent:"center" , alignItems:"center"}}>
              <Text style={{color:"white" , fontSize:16}}>Diterima</Text>
            </View>

          </View>
        </View>
        </View>
      </View>


      {/* ------------------------------------ */}



      <View
        style={{
          height: 154,
          width: "100%",
          backgroundColor: "white",
          padding: 15,
          gap: 3,
          justifyContent: "space-between",
          borderRadius: 8,
          elevation: 10,
          shadowColor: "grey",
          flexDirection: "row",
          marginBottom: 10,
        }}
      >
        <View
          style={{
            flex: 1.5,
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              color: "#565E6CFF",
              gap: 5,
              flex: 1,
            }}
          >
            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <Feather name="log-out" size={18} color="#4599e8" />

              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Cuti Tahunan
              </Text>
            </View>

            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <AntDesign name="calendar" size={20} color="#4599e8" />

              <Text style={{ fontSize: 12 }}>
                Kamis 27 Des 2024 - Jumat 27 Des 2024
              </Text>
            </View>
          </View>
          <View
            style={{
              color: "#565E6CFF",
              fontWeight: "bold",
              fontSize: 12,
              flex: 1,
              alignItems:"flex-end",
              flexDirection:"row",
              justifyContent:"space-between"
            }}
          >
            <View style={{ gap: 5 }}>
              <Text style={{ fontSize: 10, color:"#565E6CFF"}}>
                Ditolak oleh Fery Cokroaminoto Dewantoro
              </Text>
              <Text style={{ fontSize: 10, color:"#565E6CFF"}}>
                Sisa kuota cuti 3 dari 6 hari
              </Text>
            </View>

            <View style={{backgroundColor:"#BCC1CAFF" , borderRadius:6, height:36 , width:80, justifyContent:"center" , alignItems:"center"}}>
              <Text style={{color:"white" , fontSize:16}}>Pending</Text>
            </View>

          </View>
        </View>
      </View>



    </View>
  );
}
