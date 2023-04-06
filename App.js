import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Olá Mundo!</Text>

      <Text style={styles.texto}>Olá meu nome é Luis e esse é meu primeiro APP em React :D</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#Ccc',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,
    padding: 30,
    marginBottom: 300,
    backgroundColor: '#FF69B4',
    borderRadius: 10,
    color: 'red',
  },
  texto: {
    color: 'blue',
    fontSize: 20,

  }
});
