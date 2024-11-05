import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import TopBar from "../component/allpages/TopBar";
import Icon from 'react-native-vector-icons/Ionicons';

SplashScreen.preventAutoHideAsync();

export default function PengumumanNotif() {
  const [loaded, error] = useFonts({
    Jakarta: require("../assets/font/PlusJakartaSans-Bold.ttf"),
    'Jakarta-Italic': require('../assets/font/PlusJakartaSans-BoldItalic.ttf'),
  });

  const [notifications, setNotifications] = useState([
    { id: 1, type: 'announcement', title: 'Perubahan Kebijakan Cuti', content: 'Mulai bulan depan, kebijakan cuti akan diperbarui. Harap baca detail lengkapnya.', date: '2023-06-15' },
    { id: 2, type: 'attendance', title: 'Pengingat Check-in', content: 'Jangan lupa untuk melakukan check-in hari ini.', date: '2023-06-16' },
    { id: 3, type: 'leave', title: 'Persetujuan Cuti', content: 'Pengajuan cuti Anda telah disetujui untuk tanggal 20-22 Juni 2023.', date: '2023-06-17' },
    { id: 4, type: 'payroll', title: 'Slip Gaji Tersedia', content: 'Slip gaji untuk bulan Mei 2023 telah tersedia. Silakan cek di menu Payroll.', date: '2023-06-18' },
  ]);

  if (!loaded && !error) {
    return null;
  }

  const getIcon = (type) => {
    switch(type) {
      case 'announcement':
        return 'megaphone-outline';
      case 'attendance':
        return 'time-outline';
      case 'leave':
        return 'calendar-outline';
      case 'payroll':
        return 'cash-outline';
      default:
        return 'notifications-outline';
    }
  };

  return (
    <View style={styles.container}>
      <TopBar />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.header}>Pengumuman & Notifikasi</Text>
        {notifications.map((item) => (
          <TouchableOpacity key={item.id} style={styles.notificationItem}>
            <Icon name={getIcon(item.type)} size={24} color="#3B82F6" style={styles.icon} />
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>{item.title}</Text>
              <Text style={styles.notificationText}>{item.content}</Text>
              <Text style={styles.notificationDate}>{item.date}</Text>
            </View>
          </TouchableOpacity>
        ))}
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
  notificationItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  icon: {
    marginRight: 15,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontFamily: 'Jakarta',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  notificationText: {
    fontFamily: 'Jakarta',
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  notificationDate: {
    fontFamily: 'Jakarta',
    fontSize: 12,
    color: '#999',
  },
});
