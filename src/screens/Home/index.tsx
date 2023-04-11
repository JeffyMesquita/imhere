import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export function Home() {

  function handleParticipantAdd() {
    console.log('Adicionar participante');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nome do Evento</Text>
      <Text style={styles.subtitle}>Terça, 11 de Abril de 2023</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6B6B6B"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={handleParticipantAdd}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
}
