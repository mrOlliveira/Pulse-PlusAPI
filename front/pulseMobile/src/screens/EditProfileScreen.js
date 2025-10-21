import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Cor de destaque verde (ajuste se já tiver uma cor global)
const accentColor = '#1ED760';

// Componente reutilizável para campos de texto
const InputField = ({ label, value, ...props }) => (
  <View style={styles.inputGroup}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      value={value}
      placeholderTextColor="#555"
      {...props}
    />
  </View>
);

// Componente reutilizável para Pickers (simulados)
const PickerField = ({ label, value }) => (
  <View style={styles.inputGroup}>
    <Text style={styles.label}>{label}</Text>
    <TouchableOpacity style={styles.picker}>
      <Text style={styles.pickerText}>{value}</Text>
      <MaterialIcons name="arrow-drop-down" size={24} color="#888" />
    </TouchableOpacity>
  </View>
);

const EditProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Seção do Avatar */}
        <View style={styles.avatarSection}>
          <View style={styles.avatar}>
            {/* Novamente, usando um ícone como placeholder para o logo 'a' */}
            <Ionicons name="person" size={80} color="#FFF" />
          </View>
          <TouchableOpacity style={styles.editIcon}>
            <MaterialIcons name="edit" size={18} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Formulário */}
        <View style={styles.form}>
          <InputField label="Primeiro Nome" value="Sabrina" />
          <InputField label="Sobrenome" value="Aryan" />
          <InputField
            label="Email"
            value="Sabrina@gmailcom"
            keyboardType="email-address"
          />

          {/* Campo de Telefone customizado */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Telefone</Text>
            <View style={styles.phoneInputContainer}>
              <TouchableOpacity style={styles.countryCode}>
                <Text style={styles.pickerText}>+55 19</Text>
                <MaterialIcons name="arrow-drop-down" size={24} color="#888" />
              </TouchableOpacity>
              <TextInput
                style={styles.phoneInput}
                value="91234-5678"
                keyboardType="phone-pad"
              />
            </View>
          </View>

          {/* Pickers Simulados */}
          <PickerField label="Aniversário" value="Selecionar data" />
          <PickerField label="Gênero" value="Selecionar gênero" />

          {/* Botão de Confirmar */}
          <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.confirmButtonText}>Confirmar Alterações</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContainer: {
    paddingBottom: 40,
  },
  avatarSection: {
    alignItems: 'center',
    marginVertical: 20,
    position: 'relative',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#333', // Placeholder
    justifyContent: 'center',
    alignItems: 'center',
  },
  editIcon: {
    position: 'absolute',
    bottom: 5,
    right: '30%', // Ajuste para centralizar
    backgroundColor: accentColor,
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
  },
  form: {
    paddingHorizontal: 25,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    color: '#888',
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#1C1C1E', // Cinza escuro
    color: '#FFF',
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C1C1E',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
  },
  countryCode: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRightWidth: 1,
    borderRightColor: '#333',
  },
  phoneInput: {
    flex: 1,
    color: '#FFF',
    padding: 14,
    fontSize: 16,
  },
  picker: {
    backgroundColor: '#1C1C1E',
    borderRadius: 8,
    padding: 14,
    borderWidth: 1,
    borderColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pickerText: {
    color: '#FFF',
    fontSize: 16,
  },
  confirmButton: {
    backgroundColor: accentColor,
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;