import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import TopBar from "../component/allpages/TopBar";
import Icon from 'react-native-vector-icons/FontAwesome';

SplashScreen.preventAutoHideAsync();

export default function Laporan({ navigation }) {
  const [activeTab, setActiveTab] = useState('kehadiran');
  const [loaded, error] = useFonts({
    Jakarta: require("../assets/font/PlusJakartaSans-Bold.ttf"),
    'Jakarta-Italic': require('../assets/font/PlusJakartaSans-BoldItalic.ttf'),
  });

  React.useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const kehadiranData = [
    { tanggal: '2023-05-01', jamMasuk: '08:00', jamKeluar: '17:00', keterlambatan: '0:00', status: 'Hadir' },
    { tanggal: '2023-05-02', jamMasuk: '08:15', jamKeluar: '17:00', keterlambatan: '0:15', status: 'Terlambat' },
    // Add more attendance data as needed
  ];

  const cutiData = [
    { tanggal: '2023-04-15', jenisCuti: 'Tahunan', jumlahHari: 1, status: 'Disetujui' },
    { tanggal: '2023-03-20', jenisCuti: 'Sakit', jumlahHari: 2, status: 'Disetujui' },
    // Add more leave data as needed
  ];

  const renderKehadiran = () => (
    <View style={styles.tableContainer}>
      <View style={styles.tableHeader}>
        <Text style={styles.headerCell}>Tanggal</Text>
        <Text style={styles.headerCell}>Jam Masuk</Text>
        <Text style={styles.headerCell}>Jam Keluar</Text>
        <Text style={styles.headerCell}>Keterlambatan</Text>
        <Text style={styles.headerCell}>Status</Text>
      </View>
      {kehadiranData.map((item, index) => (
        <View key={index} style={styles.tableRow}>
          <Text style={styles.cell}>{item.tanggal}</Text>
          <Text style={styles.cell}>{item.jamMasuk}</Text>
          <Text style={styles.cell}>{item.jamKeluar}</Text>
          <Text style={styles.cell}>{item.keterlambatan}</Text>
          <Text style={styles.cell}>{item.status}</Text>
        </View>
      ))}
    </View>
  );

  const renderCuti = () => (
    <View style={styles.tableContainer}>
      <View style={styles.tableHeader}>
        <Text style={styles.headerCell}>Tanggal</Text>
        <Text style={styles.headerCell}>Jenis Cuti</Text>
        <Text style={styles.headerCell}>Jumlah Hari</Text>
        <Text style={styles.headerCell}>Status</Text>
      </View>
      {cutiData.map((item, index) => (
        <View key={index} style={styles.tableRow}>
          <Text style={styles.cell}>{item.tanggal}</Text>
          <Text style={styles.cell}>{item.jenisCuti}</Text>
          <Text style={styles.cell}>{item.jumlahHari}</Text>
          <Text style={styles.cell}>{item.status}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'kehadiran' && styles.activeTab]}
          onPress={() => setActiveTab('kehadiran')}
        >
          <Text style={styles.tabText}>Laporan Kehadiran</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'cuti' && styles.activeTab]}
          onPress={() => setActiveTab('cuti')}
        >
          <Text style={styles.tabText}>Laporan Cuti</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.content}>
        {activeTab === 'kehadiran' ? renderKehadiran() : renderCuti()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#3B82F6',
  },
  tabText: {
    fontFamily: 'Jakarta',
    fontSize: 16,
    color: '#333',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  tableContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#3B82F6',
    padding: 10,
  },
  headerCell: {
    flex: 1,
    color: '#fff',
    fontFamily: 'Jakarta',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    padding: 10,
  },
  cell: {
    flex: 1,
    fontFamily: 'Jakarta',
    fontSize: 14,
    textAlign: 'center',
  },
});
    