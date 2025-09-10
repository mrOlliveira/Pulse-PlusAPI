import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.textRow}>
          <Text style={styles.pulseText}>PULSE</Text>
          <Image
          source={require('../images/+.png')}
          style={styles.plusText}
          />
        </View>
        <Image
          source={require('../images/Simbolosplash.png')}
          style={styles.logoImage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logoContainer: {
    flexDirection: 'column', // 🔥 Agora empilha em cima e embaixo
    alignItems: 'center',
  },
  textRow: {
    flexDirection: 'row', // 🔥 Mantém o PULSE e + lado a lado
    alignItems: 'center',
    marginBottom: 15,
  },
  pulseText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000000',
  },
  plusText: {
    width: 35,
    height: 35,
    marginLeft: 5,
    resizeMode: 'contain', // 🔥 mantém proporção sem esticar
  },
  logoImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
});
