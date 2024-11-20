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
import data from "../../Data/Absensi/rekap_harian.json";

export default function RekapHarian() {
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

      {data.map((item, index) => (
        <View
          key={index}
          style={{
            width: "100%",
            backgroundColor: "white",
            padding: 15,
            gap: 3,
            justifyContent: "space-between",
            borderRadius: 7,
            elevation: 10,
            shadowColor: "grey",
            gap: 10,
            marginBottom: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                flex: 1.5,

                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: "#565E6CFF",
                  fontWeight: "bold",
                  fontSize: 12,
                }}
              >
                Clock In & Clock Out
              </Text>

              <Text style={{ fontSize: 12, color: "#424955FF" }}>
                {item.clockIn} - {item.clockOut}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: item.attendanceStatus === "Hadir" ? "" : "#E5696DFF",
                }}
              >
                {item.attendanceStatus}
              </Text>
            </View>
            <View
              style={{
                flex: 2,
                height: "100%",
                borderRadius: 10,
              }}
            >
              <View style={{}}>
                <Text
                  style={{
                    color: "#565E6CFF",
                    fontWeight: "bold",
                    textAlign: "right",
                    fontSize: 13,
                  }}
                >
                  {item.date}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#9095A0FF",
                    textAlign: "right",
                  }}
                >
                  {item.recordedTime} jam
                </Text>

                {item.attendanceStatus === "Cuti Tahunan" ||
                item.attendanceStatus === "Izin" ? (
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#BCC1CAFF",
                      textAlign: "right",
                    }}
                  >
                    {item.approval}
                  </Text>
                ) : (
                  <></>
                )}
              </View>
            </View>
          </View>

          {/* ---------------------------------------------------------------------------------- */}
          <View
            style={{ borderWidth: 0.5, marginTop: 5, borderColor: "#BCC1CA40" }}
          ></View>
          {/* ---------------------------------------------------------------------------------- */}

          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                flex: 1.5,

                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: "#565E6CFF",
                  fontWeight: "bold",
                  fontSize: 12,
                }}
              >
                Lembur
              </Text>

              <Text style={{ fontSize: 12, color: "#424955FF" }}>
                {item.overtime.time}
              </Text>
            </View>
            <View
              style={{
                flex: 3,
                height: "100%",
                borderRadius: 10,
              }}
            >
              <View style={{}}>
                {item.attendanceStatus === "Cuti Tahunan" ||
                item.attendanceStatus === "Izin" ? (
                  <>
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#565E6CFF",
                        textAlign: "right",
                      }}
                    >
                      -
                    </Text>

                    <Text
                      style={{
                        fontSize: 12,
                        color: "#9095A0FF",
                        textAlign: "right",
                      }}
                    >
                      -
                    </Text>
                  </>
                ) : (
                  <>
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#565E6CFF",
                        textAlign: "right",
                      }}
                    >
                      Disetuji oleh Christiano Ronaldo
                    </Text>

                    <Text
                      style={{
                        fontSize: 12,
                        color: "#9095A0FF",
                        textAlign: "right",
                      }}
                    >
                      {item.overtime.hours} jam
                    </Text>
                  </>
                )}
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}
