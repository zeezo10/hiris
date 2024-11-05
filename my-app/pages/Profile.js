import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, Pressable, TextInput, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import TopBar from "../component/allpages/TopBar";
import Icon from 'react-native-vector-icons/FontAwesome';

SplashScreen.preventAutoHideAsync();

export default function Profile({ navigation }) {
  const [loaded, error] = useFonts({
    Jakarta: require("../assets/font/PlusJakartaSans-Bold.ttf"),
    'Jakarta-Italic': require('../assets/font/PlusJakartaSans-BoldItalic.ttf'),
  });

  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'John Doe',
    position: 'Software Developer',
    department: 'IT Department',
    email: 'john.doe@example.com',
    phone: '+62 123 456 7890',
  });

  const [careerHistory, setCareerHistory] = useState([
    { date: '2023', position: 'Senior Software Developer' },
    { date: '2021', position: 'Software Developer' },
    { date: '2019', position: 'Junior Software Developer' },
  ]);

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // Here you would typically send the updated data to a server
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      <TopBar />
      <ScrollView style={styles.scrollView}>
        <View style={styles.profileHeader}>
          <Image
            source={require("../assets/employee.png")}
            style={styles.profileImage}
          />
          <Text style={styles.name}>{userData.name}</Text>
          <Text style={styles.position}>{userData.position}</Text>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Informasi Pribadi</Text>
          {Object.entries(userData).map(([key, value]) => (
            <View key={key} style={styles.infoRow}>
              <Text style={styles.infoLabel}>{key.charAt(0).toUpperCase() + key.slice(1)}:</Text>
              {isEditing && key !== 'name' && key !== 'position' ? (
                <TextInput
                  style={styles.input}
                  value={value}
                  onChangeText={(text) => setUserData({ ...userData, [key]: text })}
                />
              ) : (
                <Text style={styles.infoValue}>{value}</Text>
              )}
            </View>
          ))}
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Riwayat Karir & Mutasi</Text>
          {careerHistory.map((item, index) => (
            <View key={index} style={styles.careerItem}>
              <Text style={styles.careerDate}>{item.date}</Text>
              <Text style={styles.careerPosition}>{item.position}</Text>
            </View>
          ))}
        </View>

        <Pressable
          style={styles.editButton}
          onPress={isEditing ? handleSave : handleEdit}
        >
          <Text style={styles.editButtonText}>
            {isEditing ? 'Simpan' : 'Edit Profil'}
          </Text>
        </Pressable>
      <View style={{height:300}}></View>
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
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
    
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor:"lightgrey"
  },
  name: {
    fontFamily: 'Jakarta',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  position: {
    fontFamily: 'Jakarta',
    fontSize: 18,
    color: '#666',
  },
  infoSection: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  sectionTitle: {
    fontFamily: 'Jakarta',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#3B82F6',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  infoLabel: {
    fontFamily: 'Jakarta',
    fontSize: 16,
    color: '#666',
  },
  infoValue: {
    fontFamily: 'Jakarta',
    fontSize: 16,
    color: '#333',
  },
  input: {
    fontFamily: 'Jakarta',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 5,
    flex: 1,
    marginLeft: 10,
  },
  careerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  careerDate: {
    fontFamily: 'Jakarta',
    fontSize: 16,
    color: '#666',
  },
  careerPosition: {
    fontFamily: 'Jakarta',
    fontSize: 16,
    color: '#333',
  },
  editButton: {
    backgroundColor: '#3B82F6',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  editButtonText: {
    fontFamily: 'Jakarta',
    color: 'white',
    fontSize: 18,
  },
});
