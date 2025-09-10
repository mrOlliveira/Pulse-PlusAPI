import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      {/* 🔥 Logo no canto superior esquerdo */}
      <View style={styles.header}>
        <Image
          source={require('../images/Simbolosplash.png')}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>PULSE</Text>
        <Image
          source={require('../images/+.png')}
          style={styles.plusIcon}
        />
      </View>

      {/* Área central */}
      <View style={styles.content}>
        <Text style={styles.title}>Login</Text>

        {/* Campos */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
        />

        {/* Link esqueci senha */}
        <TouchableOpacity>
          <Text style={styles.forgotText}>Esqueci a senha</Text>
        </TouchableOpacity>

        {/* Botão Login */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Registrar */}
        <Text style={styles.registerText}>
          Ainda não criou uma conta? <Text style={styles.registerLink}>Registre agora</Text>
        </Text>

        {/* Login social */}
        <Text style={styles.orText}>Ou logue com:</Text>
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../images/google.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../images/apple.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../images/facebook.png')} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  // 🔥 Header da logo
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50, // distancia do topo
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

  // 🔥 Conteúdo central
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  forgotText: {
    alignSelf: 'flex-start',
    marginBottom: 20,
    color: '#00A86B',
  },
  loginButton: {
    backgroundColor: '#00C851',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerText: {
    marginBottom: 20,
    fontSize: 14,
    color: '#444',
  },
  registerLink: {
    color: '#00A86B',
    fontWeight: 'bold',
  },
  orText: {
    marginBottom: 10,
    fontSize: 14,
    color: '#555',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    marginHorizontal: 10,
  },
  socialIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});
