import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { styles } from './styles';

import { Participant } from '../../components/Participant';

export function Home() {
  const participants = [
    'Jeffy',
    'Jeferson',
    'Jé',
    'Jefinho',
    'Jefão',
    'Jef',
    'Jofrey',
    'Anakin',
    'Darth Vader',
    'Luke Skywalker',
    'Leia Organa',
    'Han Solo',
    'Chewbacca',
    'Obi-Wan Kenobi',
  ];

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

      <ScrollView showsHorizontalScrollIndicator={false}>
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={() => handleParticipantRemove(participant)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
