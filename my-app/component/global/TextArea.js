import React, { useState } from "react"; // Added useState import
import { View, Text, TextInput, StyleSheet } from "react-native"; // Added necessary imports

export default function TextArea({label , placeholder}) {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 14, fontWeight: "bold" ,color:"#424955FF"}}>
        {label}
      </Text>
      <TextInput
        style={styles.textArea}
        placeholder={placeholder || "Type something..."}
        placeholderTextColor="#BCC1CAFF"
        multiline={true}
        numberOfLines={4} // Adjust the initial number of  lines
        value={text}
        onChangeText={setText}
      />
    </View>
  );
}

const styles = StyleSheet.create({ // Wrapped styles in StyleSheet.create
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 3,
  },
  textArea: {
    height: 95,
    padding: 10,
    width: "100%",
    borderColor: "#BCC1CAFF",
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 6,
    textAlignVertical: "top", // Align text at the top
  },
});