// [file name]: HomeScreen.js
import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  TouchableOpacity, 
  Alert,
  RefreshControl 
} from 'react-native';
import HeaderLogo from '../components/HeaderLogo';
import FooterNav from '../components/FooterNav';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const [alarms, setAlarms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Função para buscar alarmes do banco
  const fetchAlarms = async () => {
    try {
      // TODO: Substituir pela sua URL real da API
      const response = await fetch('http://localhost:3000/api/alarmes');
      const data = await response.json();
      setAlarms(data);
    } catch (error) {
      console.error('Erro ao buscar alarmes:', error);
      // Fallback para dados mock enquanto desenvolve
      setAlarms([
        { id: '1', nome: 'Vitamina C 1g', hora: '05:30', ativo: true },
        { id: '2', nome: 'Vitamina D 1g', hora: '08:40', ativo: false },
        { id: '3', nome: 'Vitamina E 1g', hora: '15:00', ativo: true },
      ]);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // Função para puxar para atualizar
  const onRefresh = () => {
    setRefreshing(true);
    fetchAlarms();
  };

  // Função para deletar alarme
  const deleteAlarm = (alarmId) => {
    Alert.alert(
      'Confirmar exclusão',
      'Tem certeza que deseja excluir este alarme?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            try {
              // TODO: Substituir pela sua URL real da API
              await fetch(`http://localhost:3000/api/alarmes/${alarmId}`, {
                method: 'DELETE'
              });
              // Remove o alarme da lista localmente (otimista)
              setAlarms(alarms.filter(alarm => alarm.id !== alarmId));
            } catch (error) {
              console.error('Erro ao excluir alarme:', error);
              // Recarrega a lista em caso de erro
              fetchAlarms();
            }
          }
        }
      ]
    );
  };

  // Função para alternar status do alarme
  const toggleAlarm = async (alarmId, currentStatus) => {
    try {
      // TODO: Substituir pela sua URL real da API
      await fetch(`http://localhost:3000/api/alarmes/${alarmId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ativo: !currentStatus })
      });
      // Atualiza localmente (otimista)
      setAlarms(alarms.map(alarm => 
        alarm.id === alarmId ? { ...alarm, ativo: !currentStatus } : alarm
      ));
    } catch (error) {
      console.error('Erro ao atualizar alarme:', error);
      // Recarrega em caso de erro
      fetchAlarms();
    }
  };

  useEffect(() => {
    fetchAlarms();
  }, []);

  const renderAlarm = ({ item }) => (
    <View style={[
      styles.alarmCard,
      !item.ativo && styles.inactiveAlarmCard
    ]}>
      <View style={styles.alarmInfo}>
        <Text style={styles.alarmName}>{item.nome}</Text>
        <Text style={styles.alarmTime}>{item.hora}</Text>
      </View>
      <View style={styles.alarmActions}>
        <TouchableOpacity 
          onPress={() => toggleAlarm(item.id, item.ativo)}
          style={styles.powerButton}
        >
          <Ionicons
            name="power"
            size={24}
            color={item.ativo ? '#00C851' : '#777'}
          />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => deleteAlarm(item.id)}
          style={styles.deleteButton}
        >
          <Ionicons name="trash-outline" size={22} color="#FF4444" />
        </TouchableOpacity>
      </View>
    </View>
  );

  // Tela quando não há alarmes
  if (!loading && alarms.length === 0) {
    return (
      <View style={styles.container}>
        <HeaderLogo />
        
        <View style={styles.emptyContainer}>
          <Ionicons name="alarm-outline" size={80} color="#ccc" />
          <Text style={styles.emptyTitle}>Nenhum alarme criado</Text>
          <Text style={styles.emptyText}>
            Você ainda não criou nenhum alarme para seus medicamentos
          </Text>
          
          <TouchableOpacity 
            style={styles.createButton}
            onPress={() => navigation.navigate('CreateAlarm')}
          >
            <Ionicons name="add" size={20} color="#fff" />
            <Text style={styles.createButtonText}>Criar Primeiro Alarme</Text>
          </TouchableOpacity>
        </View>

        <FooterNav navigation={navigation} current="Home" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <HeaderLogo />

      <View style={styles.header}>
        <Text style={styles.title}>Meus Alarmes</Text>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => navigation.navigate('CreateAlarm')}
        >
          <Ionicons name="add" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {loading ? (
        <View style={styles.loadingContainer}>
          <Ionicons name="alarm" size={50} color="#00C851" />
          <Text style={styles.loadingText}>Carregando alarmes...</Text>
        </View>
      ) : (
        <FlatList
          data={alarms}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderAlarm}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['#00C851']}
            />
          }
        />
      )}

      <FooterNav navigation={navigation} current="Home" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold',
    color: '#333'
  },
  addButton: {
    backgroundColor: '#00C851',
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  listContent: { 
    paddingBottom: 100,
    paddingHorizontal: 15 
  },
  alarmCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 20,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#00C851',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  inactiveAlarmCard: {
    borderLeftColor: '#ccc',
    opacity: 0.7,
  },
  alarmInfo: {
    flex: 1,
  },
  alarmName: { 
    fontSize: 16, 
    fontWeight: '600',
    color: '#333',
    marginBottom: 4 
  },
  alarmTime: { 
    fontSize: 20, 
    fontWeight: 'bold',
    color: '#00C851' 
  },
  alarmActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  powerButton: {
    padding: 8,
  },
  deleteButton: {
    padding: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
    lineHeight: 22,
  },
  createButton: {
    backgroundColor: '#00C851',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 25,
    elevation: 3,
  },
  createButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 15,
    fontSize: 16,
    color: '#666',
  },
});