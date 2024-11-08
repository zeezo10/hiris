    import React from "react";
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

    export default function FaceAbsence() {
    const screenWidth = Dimensions.get("window").width;

    return (
        <View style={{ width: screenWidth }}>
        <View
            style={{
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            gap:40,
            backgroundColor:"white"
            }}
        >
            <View
            style={{
                backgroundColor: "white",
                aspectRatio: 1,
                borderRadius:1000,       
                width: "80%",
                borderWidth:3,
                borderStyle:"dashed",
                borderColor:"grey"
            }}
            ></View>
            <View
            style={{
                height: 50,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
            }}
            >
            <Text style={{fontSize:20, fontWeight:"bold"}}>Arahkan Wajah Ke Kamera</Text>
            <Text>Clock In Success</Text>
            <Text>anda sudah tercatat hadir hari ini</Text>
            </View>
        </View>
        </View>
    );
    }
