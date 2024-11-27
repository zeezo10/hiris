import React from "react";
import { View, Text, TextInput } from "react-native";   

const styles = { 
  container: {
    gap: 3,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color:"#424955FF"
  },
  input: {
    height: 45  ,
    width: "100%",
    borderColor: "#BCC1CAFF",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    fontSize: 14,
    color: '#000000',
  },
};

export default function LabeledTextInput({ label, placeholder }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput 
        style={styles.input} 
        placeholder={placeholder}
        placeholderTextColor="#BCC1CAFF"
        
      />
    </View>
  );
}
