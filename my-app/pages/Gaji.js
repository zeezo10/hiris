import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import TopBar from "../component/allpages/TopBar";
import Feather from "react-native-vector-icons/Feather";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export default function Gaji() {
  return (
    <View style={{ flex: 1 }}>
      <TopBar />
      <View
        style={{
          height: 80,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          padding: 15,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontFamily: "Jakarta",
            color: "#1e3a8a",
          }}
        >
          Informasi Gaji
        </Text>
        <View
          style={{
            height: 50,
            width: 50,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Feather name="info" size={20} color="#1e3a8a" />
        </View>
      </View>
      <ScrollView style={{}}>
        <View style={{ padding: 15 }}>
          <RincianGaji />
          <SlipGaji />
          <HistoriGaji />
          <View style={{ height: 20 }} />
        </View>
      </ScrollView>
    </View>
  );
}

const RincianGaji = () => (
  <View
    style={{
      backgroundColor: "white",
      padding: 15,
      width: "100%",
        
      borderRadius: 10,
      marginBottom: 20,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    }}
  >
    <Text
      style={{
        fontSize: 18,
        fontFamily: "Jakarta",
        marginBottom: 10,
        color: "#1e3a8a",
      }}
    >
      Rincian Gaji Bulan Ini
    </Text>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
      }}
    >
      <Text style={{ fontFamily: "Jakarta" }}>Gaji Pokok</Text>
      <Text style={{ fontFamily: "Jakarta" }}>Rp 5.000.000</Text>
    </View>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
      }}
    >
      <Text style={{ fontFamily: "Jakarta" }}>Tunjangan</Text>
      <Text style={{ fontFamily: "Jakarta" }}>Rp 1.000.000</Text>
    </View>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
      }}
    >
      <Text style={{ fontFamily: "Jakarta" }}>Potongan</Text>
      <Text style={{ fontFamily: "Jakarta" }}>Rp 500.000</Text>
    </View>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
      }}
    >
      <Text style={{ fontFamily: "Jakarta", fontWeight: "bold" }}>
        Total Gaji
      </Text>
      <Text style={{ fontFamily: "Jakarta", fontWeight: "bold" }}>
        Rp 5.500.000
      </Text>
    </View>
  </View>
);

const SlipGaji = () => (
  <Pressable
    style={{
      backgroundColor: "#3B82F6",
      padding: 15,
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20,
    }}
    onPress={() => console.log("Download slip gaji")}
  >
    <Feather
      name="download"
      size={20}
      color="white"
      style={{ marginRight: 10 }}
    />
    <Text style={{ color: "white", fontFamily: "Jakarta", fontSize: 16 }}>
      Unduh Slip Gaji
    </Text>
  </Pressable>
);

const HistoriGaji = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
    datasets: [
      {
        data: [5000000, 5200000, 5100000, 5300000, 5400000, 5500000],
        color: (opacity = 1) => `rgba(30, 58, 138, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontFamily: "Jakarta",
          marginBottom: 10,
          color: "#1e3a8a",
        }}
      >
        Histori Gaji
      </Text>
      <LineChart
        data={data}
        width={screenWidth - 60}
        height={220}
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(30, 58, 138, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#1e3a8a",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};
