import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    Button,
    Pressable,
    Alert,
    Dimensions,
    Image,
  } from "react-native";
  
export default function Detail({route}) {

  const { type } = route.params;
  

  return (
    <View style={{flex: 1,  justifyContent:"center" , alignItems:"center"}}>
      <Text style={{fontSize:50}}>{`${type}`}</Text>
    </View>
)
}
