import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import TopBar from "../component/allpages/TopBar";

SplashScreen.preventAutoHideAsync();

export default function Pengaturan({ navigation }) {
  const [loaded, error] = useFonts({
    Jakarta: require("../assets/font/PlusJakartaSans-Bold.ttf"),
  });

  const [language, setLanguage] = useState('Bahasa Indonesia');
  const [notifications, setNotifications] = useState(true);

  React.useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const toggleNotifications = () => setNotifications(previousState => !previousState);

  return (
    <View style={styles.container}>
      <TopBar />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.header}>Pengaturan Aplikasi</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ubah Bahasa</Text>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>{language}</Text>
            <Icon name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notifikasi</Text>
          <View style={styles.option}>
            <Text style={styles.optionText}>Aktifkan Notifikasi</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={notifications ? "#f5dd4b" : "#f4f3f4"}
              onValueChange={toggleNotifications}
              value={notifications}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Keamanan</Text>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Ubah Password</Text>
            <Icon name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Autentikasi Dua Faktor (2FA)</Text>
            <Icon name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
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
  header: {
    fontFamily: 'Jakarta',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  sectionTitle: {
    fontFamily: 'Jakarta',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#3B82F6',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    fontFamily: 'Jakarta',
    fontSize: 16,
    color: '#333',
  },
});
