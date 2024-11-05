import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import TopBar from "../component/allpages/TopBar";
import Icon from 'react-native-vector-icons/FontAwesome';

SplashScreen.preventAutoHideAsync();

export default function Support() {
  const [loaded] = useFonts({
    Jakarta: require("../assets/font/PlusJakartaSans-Bold.ttf"),
    'Jakarta-Italic': require('../assets/font/PlusJakartaSans-BoldItalic.ttf'),
  });

  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  if (!loaded) {
    return null;
  }

  const handleSubmit = () => {
    if (subject.trim() === '' || message.trim() === '') {
      Alert.alert('Error', 'Please fill in all fields');
    } else {
      Alert.alert('Success', 'Your message has been sent to HR');
      setSubject('');
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <TopBar />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Kontak HR & Support</Text>
        
        <View style={styles.formContainer}>
          <Text style={styles.label}>Subject:</Text>
          <TextInput
            style={styles.input}
            value={subject}
            onChangeText={setSubject}
            placeholder="Enter subject"
          />
          
          <Text style={styles.label}>Message:</Text>
          <TextInput
            style={[styles.input, styles.messageInput]}
            value={message}
            onChangeText={setMessage}
            placeholder="Enter your message"
            multiline
          />
          
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.contactInfo}>
          <Text style={styles.contactTitle}>HR Contact Information:</Text>
          <View style={styles.contactItem}>
            <Icon name="phone" size={20} color="#3B82F6" />
            <Text style={styles.contactText}>+62 123 456 7890</Text>
          </View>
          <View style={styles.contactItem}>
            <Icon name="envelope" size={20} color="#3B82F6" />
            <Text style={styles.contactText}>hr@company.com</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  scrollView: {
    padding: 20,
  },
  title: {
    fontFamily: 'Jakarta',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  label: {
    fontFamily: 'Jakarta',
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  input: {
    fontFamily: 'Jakarta',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#3B82F6',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    fontFamily: 'Jakarta',
    color: 'white',
    fontSize: 18,
  },
  contactInfo: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
  },
  contactTitle: {
    fontFamily: 'Jakarta',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactText: {
    fontFamily: 'Jakarta',
    fontSize: 16,
    color: '#666',
    marginLeft: 10,
  },
});
