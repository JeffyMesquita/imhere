import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    paddingHorizontal: 24,
  },
  title: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  subtitle: {
    color: '#6B6B6B',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 4,
    color: '#FFF',
    paddingHorizontal: 16,
    fontSize: 16,
  },
  form: {
    marginTop: 36,
    marginBottom: 42,
    flexDirection: 'row',
    width: '100%',
    gap: 12,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 40,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 4,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyList: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
  },
});
