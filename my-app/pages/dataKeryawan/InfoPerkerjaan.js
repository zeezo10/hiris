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
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AntDesign from "react-native-vector-icons/AntDesign";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

SplashScreen.preventAutoHideAsync();



//---------------------------------

const SimpleSelect = ({ type, label }) => {
  const [selectedValue, setSelectedValue] = useState("choose one");

  return (
    <View style={{ gap: 3 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{label}</Text>

      <View
        style={{
          height: 45,
          width: "100%",
          borderColor: "#BCC1CAFF",
          borderWidth: 1,
          borderRadius: 10,
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          style={styles.picker}
        >
          <Picker.Item
            label={type}
            value={null}
            style={{ color: "#BCC1CAFF" }}
          />
          <Picker.Item label="option 1" value="option 1" />
          <Picker.Item label="option 2" value="option 2" />
        </Picker>
      </View>
    </View>
  );
};


const UploadInput = ({ label, placeholder }) => {


  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={{flexDirection:"row", alignItems:"center"}}>
      <View style={[styles.input, {flexDirection:"row", alignItems:"center" , justifyContent:"space-between"}]}>
      <Text style={{color:"grey"}}>{placeholder}</Text>
      <View style={{height:30, backgroundColor:"pink", width:70,  borderRadius:10}}></View>
      </View>

      </View>
    </View>
  );
};

//-------------------------------------------

const LabeledTextInput = ({ label, placeholder }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  
  //----------Select option ----------------
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    overflow: "hidden",
  },
  picker: {
    width: "100%",
    height: 50,
    },

  //---------- input ------------

  container: {
    gap: 3,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    height: 45,
    width: "100%",
    borderColor: "#BCC1CAFF",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
});

export default function InfoPerkerjaan({ navigation }) {
  const screenWidth = Dimensions.get("window").width;

  

  return (
    <>
      {/* main ------------ - - */}

      <View style={{ backgroundColor: "white", paddingVertical: 15 }}>
        <View style={{ paddingVertical: 15 }}>
          <Text>Informasi Perkerjaan</Text>
        </View>

        <View style={{ gap: 20 }}>
          <LabeledTextInput
            label={"ID Keryawan"}
            placeholder={"Ketik ID Keryawan"}
          />

        
          <SimpleSelect type={"Choose one"} label={"Jenis Keryawan"} />
          <SimpleSelect type={"Choose one"} label={"Jenis Keryawan"} />
          <SimpleSelect type={"Choose one"} label={"Status Keryawan"} />
          <SimpleSelect type={"Choose one"} label={"Nama Jabatan"} />
          <SimpleSelect type={"Choose one"} label={"Level Jabatan"} />
          <SimpleSelect type={"Choose one"} label={"Department"} />
          <SimpleSelect type={"Choose one"} label={"Grade"} />
          <SimpleSelect type={"Choose one"} label={"Atasan Langsung"} />
          <SimpleSelect type={"Choose one"} label={"Persetujuan"} />
          <SimpleSelect type={"Choose one"} label={"Lokasi Kerja"} />


          <UploadInput  label={"CV"} placeholder={"Uplaod CV"}/>
          <UploadInput  label={"Dokumen Kontrak Kerja"} placeholder={"Upload Kontrak Kerja"}/>




          <View style={{ height: 100, flexDirection: "row-reverse" }}>
            <Pressable
              style={{
                height: 45,
                backgroundColor: "#379ae6",
                width: "50%",
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
              >
                Simpan
              </Text>
            </Pressable>
          </View>

        </View>
      </View>

      <View style={{ height: 50 }}></View>
    </>
  );
}
