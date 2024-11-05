import React from 'react'
import { Text, View , StyleSheet } from 'react-native'

export default function LoadingPage() {
  return (
    <View style={styles.container} >
        <Text style={styles.title}>Persona</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#66b2ec',
    },
    title: {
      fontSize: 50,
      fontWeight: 'bold',
      color: 'white',
    }
  });
  