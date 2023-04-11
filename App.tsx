import { Text, View } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131016',
      }}
    >
      <Text
        style={{
          color: '#FDFCFE',
          fontSize: 24,
          fontWeight: 'bold',
          marginTop: 48,
        }}
      >
        Nome do Evento
      </Text>
      <Text
        style={{
          color: '#6B6B6B',
          fontSize: 16,
          fontWeight: 'bold',
        }}
      >
        Sexta, 11 de Abril de 2023
      </Text>
    </View>
  );
}
