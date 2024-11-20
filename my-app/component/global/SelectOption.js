import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, Pressable } from "react-native";
import { AntDesign } from "react-native-vector-icons/";
import { MaterialCommunityIcons } from "react-native-vector-icons/";
import { Entypo } from "react-native-vector-icons/";

export default function SelectOption({ name, items }) {
  const [visible, setVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [value, setValue] = useState(name);
  const [seleted, setSelected] = useState(false);

  function handleOpenModal() {
    setVisible(!visible);
  }

  function handleSelect(index, item) {
    setSelectedIndex(index);
    setValue(item);
    setVisible(!visible);
    setSelected(true);
  }

  return (
    <>
      <View style={{ gap: 3 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{name}</Text>
        <TouchableOpacity
          style={{
            height: 45,
            width: "100%",
            borderColor: "#BCC1CAFF",
            borderWidth: 1,
            borderRadius: 10,
            alignItems: "center",
            flexDirection: "row",
            padding: 10,
            justifyContent: "space-between",
          }}
          onPress={handleOpenModal}
        >
          <Text style={{ color: seleted ? "black" : "#BCC1CAFF" }}>
            {seleted ? <></> : <>Pilih </>}
            {value}
          </Text>
          <Entypo name="chevron-thin-down" size={15} />
        </TouchableOpacity>
      </View>

      <Modal animationType="fade" transparent={true} visible={visible}>
        <View
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pressable
            style={{
              position: "absolute",
              backgroundColor: "black",
              height: "100%",
              width: "100%",
              opacity: 0.5,
            }}
            onPress={handleOpenModal}
          />
          <View
            style={{
              width: "80%",
              backgroundColor: "white",
              borderRadius: 5,
              padding: 20,
              gap: 10,
            }}
          >
            <View style={{ width: "100%" }}>
              <TouchableOpacity
                onPress={handleOpenModal}
                style={{
                  justifyContent: "center",

                  height: 20,
                }}
              >
                <AntDesign
                  name="close"
                  size={20}
                  color="#9095A0FF"
                  style={{ position: "absolute" }}
                />
              </TouchableOpacity>
            </View>

            <View style={{ gap: 20 }}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>{name}</Text>

              <View style={{ gap: 10 }}>
                {items.map((item, index) => (
                  <View
                    key={index}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      width: "100%",

                      gap: 5,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => handleSelect(index, item)}
                      style={{
                        flexDirection: "row",
                        gap: 10,
                        width: "100%",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text>{item}</Text>

                      <MaterialCommunityIcons
                        name={
                          selectedIndex === index
                            ? "checkbox-intermediate"
                            : "checkbox-blank-outline"
                        }
                        size={20}
                        color={
                          selectedIndex === index ? "#379AE6FF" : "#9095A0FF"
                        }
                      />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
