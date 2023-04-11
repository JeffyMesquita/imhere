import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1F1E25',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },
  name: {
    flex: 1,
    color: '#FFF',
    fontSize: 16,
    marginLeft: 16,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 40,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 4,
    backgroundColor: '#E23C44',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
