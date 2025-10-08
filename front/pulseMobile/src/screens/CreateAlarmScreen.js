// [file name]: CreateAlarmScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Modal
} from 'react-native';
import HeaderLogo from '../components/HeaderLogo';
import { Ionicons } from '@expo/vector-icons';
import { API_BASE_URL } from '../config';

export default function CreateAlarmScreen({ navigation }) {
  const [medicamento, setMedicamento] = useState('');
  const [dosagem, setDosagem] = useState('');
  const [diasSemana, setDiasSemana] = useState([]);
  const [hora, setHora] = useState('07');
  const [minuto, setMinuto] = useState('00');
  const [periodo, setPeriodo] = useState('AM');
  const [medicamentos, setMedicamentos] = useState([]);
  const [showMedicamentos, setShowMedicamentos] = useState(false);

  const dias = [
    { id: 0, label: 'D', nome: 'Domingo' },
    { id: 1, label: 'S', nome: 'Segunda' },
    { id: 2, label: 'T', nome: 'Terça' },
    { id: 3, label: 'W', nome: 'Quarta' },
    { id: 4, label: 'T', nome: 'Quinta' },
    { id: 5, label: 'F', nome: 'Sexta' },
    { id: 6, label: 'S', nome: 'Sábado' }
  ];

  useEffect(() => {
    fetchMedicamentos();
  }, []);

  const fetchMedicamentos = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/medicamentos`);
      const data = await response.json();
      setMedicamentos(data);
    } catch (error) {
      console.error('Erro ao buscar medicamentos:', error);
      setMedicamentos([
        { id: 1, nome: 'Paracetamol 500mg', formato: '500mg' },
        { id: 2, nome: 'Ibuprofeno 400mg', formato: '400mg' },
        { id: 3, nome: 'Vitamina C 1g', formato: '1g' },
        { id: 4, nome: 'Omeprazol 20mg', formato: '20mg' }
      ]);
    }
  };

  const toggleDia = (diaId) => {
    if (diasSemana.includes(diaId)) {
      setDiasSemana(diasSemana.filter(id => id !== diaId));
    } else {
      setDiasSemana([...diasSemana, diaId]);
    }
  };

  const selecionarMedicamento = (med) => {
    setMedicamento(med.nome);
    setDosagem(med.formato || '500mg');
    setShowMedicamentos(false);
  };

  const criarAlarme = async () => {
    if (!medicamento) {
      Alert.alert('Erro', 'Selecione um medicamento');
      return;
    }

    if (diasSemana.length === 0) {
      Alert.alert('Erro', 'Selecione pelo menos um dia da semana');
      return;
    }

    let horaFormatada = parseInt(hora);
    if (periodo === 'PM' && horaFormatada !== 12) {
      horaFormatada += 12;
    } else if (periodo === 'AM' && horaFormatada === 12) {
      horaFormatada = 0;
    }

    const horarioCompleto = `${horaFormatada.toString().padStart(2, '0')}:${minuto.padStart(2, '0')}`;
    const diasString = diasSemana.join(',');

    try {
      const response = await fetch(`${API_BASE_URL}/api/alarmes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: medicamento,
          hora: horarioCompleto,
          dosagem: dosagem,
          dias: diasString,
          ativo: true,
          'cpf-cliente': '123.456.789-00'
        })
      });

      if (response.ok) {
        Alert.alert('Sucesso', 'Alarme criado com sucesso!', [
          { text: 'OK', onPress: () => navigation.goBack() }
        ]);
      } else {
        throw new Error('Erro ao criar alarme');
      }
    } catch (error) {
      console.error('Erro ao criar alarme:', error);
      Alert.alert('Erro', 'Não foi possível criar o alarme');
    }
  };

  const horas = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
  const minutos = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];

  return (
    <View style={styles.container}>
      <HeaderLogo />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Novo Alarme</Text>

        <View style={styles.section}>
          <Text style={styles.label}>Nome do Remédio</Text>
          <TouchableOpacity 
            style={styles.input}
            onPress={() => setShowMedicamentos(true)}
          >
            <Text style={medicamento ? styles.inputText : styles.placeholderText}>
              {medicamento || 'Selecione um medicamento'}
            </Text>
            <Ionicons name="chevron-down" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Dosagem</Text>
          <View style={styles.input}>
            <Text style={styles.inputText}>{dosagem || '500mg'}</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dias da semana</Text>
          <View style={styles.diasContainer}>
            {dias.map((dia) => (
              <TouchableOpacity
                key={dia.id}
                style={[
                  styles.diaButton,
                  diasSemana.includes(dia.id) && styles.diaButtonSelected
                ]}
                onPress={() => toggleDia(dia.id)}
              >
                <Text style={[
                  styles.diaText,
                  diasSemana.includes(dia.id) && styles.diaTextSelected
                ]}>
                  {dia.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Horário</Text>
          <View style={styles.horarioContainer}>
            <View style={styles.timeSection}>
              <Text style={styles.timeLabel}>Hora</Text>
              <ScrollView style={styles.timePicker} showsVerticalScrollIndicator={false}>
                {horas.map((h) => (
                  <TouchableOpacity
                    key={h}
                    style={[styles.timeOption, hora === h && styles.timeOptionSelected]}
                    onPress={() => setHora(h)}
                  >
                    <Text style={[styles.timeText, hora === h && styles.timeTextSelected]}>
                      {h}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            <View style={styles.timeSection}>
              <Text style={styles.timeLabel}>Minuto</Text>
              <ScrollView style={styles.timePicker} showsVerticalScrollIndicator={false}>
                {minutos.map((m) => (
                  <TouchableOpacity
                    key={m}
                    style={[styles.timeOption, minuto === m && styles.timeOptionSelected]}
                    onPress={() => setMinuto(m)}
                  >
                    <Text style={[styles.timeText, minuto === m && styles.timeTextSelected]}>
                      {m}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            <View style={styles.timeSection}>
              <Text style={styles.timeLabel}>Período</Text>
              <View style={styles.periodoContainer}>
                <TouchableOpacity
                  style={[styles.periodoButton, periodo === 'AM' && styles.periodoButtonSelected]}
                  onPress={() => setPeriodo('AM')}
                >
                  <Text style={[styles.periodoText, periodo === 'AM' && styles.periodoTextSelected]}>
                    AM
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.periodoButton, periodo === 'PM' && styles.periodoButtonSelected]}
                  onPress={() => setPeriodo('PM')}
                >
                  <Text style={[styles.periodoText, periodo === 'PM' && styles.periodoTextSelected]}>
                    PM
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.confirmButton} onPress={criarAlarme}>
          <Text style={styles.confirmButtonText}>Criar Alarme</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal visible={showMedicamentos} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Selecione o Medicamento</Text>
              <TouchableOpacity onPress={() => setShowMedicamentos(false)}>
                <Ionicons name="close" size={24} color="#333" />
              </TouchableOpacity>
            </View>
            
            <ScrollView>
              {medicamentos.map((med) => (
                <TouchableOpacity
                  key={med.id}
                  style={styles.medicamentoItem}
                  onPress={() => selecionarMedicamento(med)}
                >
                  <Text style={styles.medicamentoNome}>{med.nome}</Text>
                  {med.formato && (
                    <Text style={styles.medicamentoFormato}>{med.formato}</Text>
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// Mantenha os mesmos styles do anterior...
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 30, color: '#333' },
  section: { marginBottom: 25 },
  label: { fontSize: 14, fontWeight: '600', color: '#666', marginBottom: 8 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 15 },
  input: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: '#ddd', borderRadius: 10, paddingHorizontal: 15, paddingVertical: 12, backgroundColor: '#f9f9f9' },
  inputText: { fontSize: 16, color: '#333' },
  placeholderText: { fontSize: 16, color: '#999' },
  divider: { height: 1, backgroundColor: '#eee', marginVertical: 20 },
  diasContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  diaButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#f0f0f0', justifyContent: 'center', alignItems: 'center' },
  diaButtonSelected: { backgroundColor: '#00C851' },
  diaText: { fontSize: 16, fontWeight: 'bold', color: '#666' },
  diaTextSelected: { color: '#fff' },
  horarioContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  timeSection: { alignItems: 'center', flex: 1 },
  timeLabel: { fontSize: 14, fontWeight: '600', color: '#666', marginBottom: 10 },
  timePicker: { maxHeight: 150, width: '100%' },
  timeOption: { paddingVertical: 8, alignItems: 'center', borderRadius: 8, marginVertical: 2 },
  timeOptionSelected: { backgroundColor: '#00C851' },
  timeText: { fontSize: 16, color: '#666' },
  timeTextSelected: { color: '#fff', fontWeight: 'bold' },
  periodoContainer: { gap: 5 },
  periodoButton: { paddingHorizontal: 15, paddingVertical: 8, borderRadius: 8, backgroundColor: '#f0f0f0' },
  periodoButtonSelected: { backgroundColor: '#00C851' },
  periodoText: { fontSize: 14, color: '#666', fontWeight: '600' },
  periodoTextSelected: { color: '#fff' },
  confirmButton: { backgroundColor: '#00C851', paddingVertical: 16, borderRadius: 25, alignItems: 'center', marginTop: 20, marginBottom: 40 },
  confirmButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  modalContainer: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', padding: 20 },
  modalContent: { backgroundColor: '#fff', borderRadius: 15, maxHeight: '70%' },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, borderBottomWidth: 1, borderBottomColor: '#eee' },
  modalTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  medicamentoItem: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  medicamentoNome: { fontSize: 16, fontWeight: '600', color: '#333', marginBottom: 4 },
  medicamentoFormato: { fontSize: 14, color: '#666' },
});