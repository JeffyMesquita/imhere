import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import { Participant } from '../../components/Participant';

export function Home() {
  function handleParticipantAdd() {
    console.log('Adicionar participante');
  }

  function handleParticipantRemove(name: string) {
    console.log(`Remover participante ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nome do Evento</Text>
      <Text style={styles.subtitle}>Terça, 11 de Abril de 2023</Text>

      <View style={styles.form}>
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

      <Participant name="Jeffy" onRemove={() => handleParticipantRemove('Jeffy')}/>
      <Participant name="Jeferson" onRemove={() => handleParticipantRemove('Jeferson')}/>
      <Participant name="Jé" onRemove={() => handleParticipantRemove('Jé')}/>
      <Participant name="Jefinho" onRemove={() => handleParticipantRemove('Jefinho')}/>
    </View>
  );
}
