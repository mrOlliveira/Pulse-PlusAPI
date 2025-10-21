import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Cor de destaque verde (ajuste se já tiver uma cor global)
const accentColor = '#1ED760';

// Componente reutilizável para os itens da lista
const ListItem = ({ icon, text, onPress }) => (
  <TouchableOpacity style={styles.listItem} onPress={onPress}>
    <MaterialIcons name={icon} size={24} color="#FFF" />
    <Text style={styles.listItemText}>{text}</Text>
    <MaterialIcons name="chevron-right" size={24} color="#555" />
  </TouchableOpacity>
);

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Seção do Perfil */}
        <View style={styles.profileSection}>
          {/* Avatar (Usando um ícone como placeholder para o logo 'a') */}
          <View style={styles.avatar}>
            <Ionicons name="person" size={50} color="#FFF" />
            {/* O logo 'a' na imagem é uma forma customizada. 
                Se fosse uma imagem, seria:
                <Image source={require('../assets/a-logo.png')} style={styles.avatarImage} /> 
                (Ajuste o caminho para sua pasta assets)
            */}
          </View>
          <Text style={styles.profileName}>Sabrina</Text>
          <Text style={styles.profileEmail}>Sabrina@gmailcom</Text>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => navigation.navigate('EditProfile')}>
            {/* Ajuste 'EditProfile' se o nome da rota for diferente no seu navegador */}
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Grupo de Lista 1 */}
        <View style={styles.listGroup}>
          <ListItem icon="favorite-border" text="Medicamentos" onPress={() => {}} />
          <ListItem icon="file-download" text="Dispenser" onPress={() => {}} />
        </View>

        {/* Grupo de Lista 2 */}
        <View style={styles.listGroup}>
          <ListItem icon="language" text="Idiomas" onPress={() => {}} />
          <ListItem icon="bluetooth" text="Bluetooth" onPress={() => {}} />
          <ListItem
            icon="desktop-windows"
            text="qualquer funcionalidade"
            onPress={() => {}}
          />
        </View>

        {/* Grupo de Lista 3 */}
        <View style={styles.listGroup}>
          <ListItem icon="delete-outline" text="Limpar Cache" onPress={() => {}} />
          <ListItem icon="exit-to-app" text="Sair" onPress={() => {}} />
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
  profileSection: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#333', // Placeholder para o avatar preto
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  profileName: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  profileEmail: {
    color: '#888',
    fontSize: 16,
    marginBottom: 15,
  },
  editButton: {
    backgroundColor: accentColor,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  editButtonText: {
    color: '#000', // Texto preto no botão verde, como na imagem
    fontSize: 14,
    fontWeight: 'bold',
  },
  listGroup: {
    marginVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#222',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#000',
  },
  listItemText: {
    color: '#FFF',
    fontSize: 16,
    marginLeft: 15,
    flex: 1, // Para empurrar a seta para a direita
  },
});

export default ProfileScreen;