import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function HeaderLogo() {
  return (
    <View style={styles.header}>
      <Image source={require('../images/Simbolosplash.png')} style={styles.logoImage} />
      <Text style={styles.logoText}>PULSE</Text>
      <Image source={require('../images/+.png')} style={styles.plusIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  logoImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 5,
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  plusIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
    resizeMode: 'contain',
  },
});
