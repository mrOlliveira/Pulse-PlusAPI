import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import HeaderLogo from '../components/HeaderLogo';
import FooterNav from '../components/FooterNav';
import { Ionicons } from '@expo/vector-icons';

// Mock dos dados de alarmes
const alarms = [
  { id: '1', name: 'Vitamina C 1g', time: '5:30 AM', active: true },
  { id: '2', name: 'Vitamina D 1g', time: '8:40 AM', active: false },
  { id: '3', name: 'Vitamina E 1g', time: '15:00 PM', active: true },
  { id: '4', name: 'Vitamina M 1g', time: '22:00 PM', active: true },
];

export default function HomeScreen({ navigation }) {
  const renderAlarm = ({ item }) => (
    <View style={styles.alarmCard}>
      <Text style={styles.alarmName}>{item.name}</Text>
      <View style={styles.alarmRow}>
        <Text style={styles.alarmTime}>{item.time}</Text>
        <Ionicons
          name="power"
          size={22}
          color={item.active ? 'green' : '#777'}
          style={{ marginRight: 10 }}
        />
        <TouchableOpacity>
          <Ionicons name="trash" size={22} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <HeaderLogo />

      <Text style={styles.title}>Remédios de hoje</Text>

      <FlatList
        data={alarms}
        keyExtractor={(item) => item.id}
        renderItem={renderAlarm}
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      />

      <FooterNav navigation={navigation} current="Home" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 },
  alarmCard: {
    backgroundColor: '#333',
    borderRadius: 12,
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  alarmName: { color: '#fff', fontSize: 14, marginBottom: 5 },
  alarmRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  alarmTime: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
});
