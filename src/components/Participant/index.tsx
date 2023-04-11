import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface Participant {
  name: string;
}

export function Participant({ name }: Participant) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
