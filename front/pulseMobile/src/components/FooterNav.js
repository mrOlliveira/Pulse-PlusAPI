import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FooterNav({ navigation, current }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Home')}>
        <Ionicons name="home" size={22} color={current === 'Home' ? '#00A86B' : '#999'} />
        <Text style={[styles.label, current === 'Home' && styles.active]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Alarms')}>
        <Ionicons name="alarm" size={22} color={current === 'Alarms' ? '#00A86B' : '#999'} />
        <Text style={[styles.label, current === 'Alarms' && styles.active]}>Alarmes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Agenda')}>
        <Ionicons name="calendar" size={22} color={current === 'Agenda' ? '#00A86B' : '#999'} />
        <Text style={[styles.label, current === 'Agenda' && styles.active]}>Agenda</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Profile')}>
        <Ionicons name="person" size={22} color={current === 'Profile' ? '#00A86B' : '#999'} />
        <Text style={[styles.label, current === 'Profile' && styles.active]}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  tab: { alignItems: 'center' },
  label: { fontSize: 12, color: '#999', marginTop: 2 },
  active: { color: '#00A86B', fontWeight: 'bold'},
});
