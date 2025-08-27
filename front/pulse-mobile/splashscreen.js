import { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from './styles/splashStyles';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/login'); 
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        PULSE<Text style={styles.plus}>+</Text>
      </Text>
      <Image 
        source={require('./assets/logopulse.png')} 
        style={styles.logo}
      />
    </View>
  );
}