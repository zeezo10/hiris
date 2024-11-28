import React from "react";
import { View, Text } from "react-native";

export default function UploadFile({ label, placeholder }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={[
            styles.input,
            {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            },
          ]}
        >
          <Text style={{ color: "#BCC1CAFF" }}>{placeholder}</Text>
          <View
            style={{
              height: 30,
              
              backgroundColor:"#F3F4F6FF",
                paddingHorizontal:10,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#BCC1CAFF", fontSize: 11 }}>
              Choose file
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = {
  container: {
    gap: 3,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color:"#424955FF" // Added color for better visibility
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "#BCC1CAFF",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF", // Added background color for input
  },
};
