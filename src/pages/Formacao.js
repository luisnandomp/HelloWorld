import { StyleSheet, Text, View } from 'react-native';


const Formacao = () =>  {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Olá Formação</Text>
            <Text style={styles.texto}>Olá meu nome é Luis e esse é meu primeiro APP em React :D</Text>
        </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#Ccc',
      marginLeft: '650px',
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
  
export default Formacao;  