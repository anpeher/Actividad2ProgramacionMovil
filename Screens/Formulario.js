import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, ImageBackground, TouchableOpacity } from 'react-native';

export default function Formulario() {
    return (
        <ImageBackground 
            source={require('../assets/BackgroundCuestionario.jpg')} 
            style={styles.background}
        >
            <View style={styles.container}>
            <Text style={styles.titulo}>HOLA</Text>
            <Text style={styles.subtitle}>Introduzca sus datos</Text>
            <TextInput
                placeholder='Nombre de la fiesta'
                style={styles.textInput}
            />
            <TextInput
                placeholder='URL de la imagen'
                style={styles.textInput}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
            </View>
        </ImageBackground>
      )
}

const styles = StyleSheet.create({
    background: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover'
    },
  
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulo: {
      fontSize: 40,
      fontFamily: "cursive",
      color: '#fff',
      fontWeight: 'bold',
    },
    subtitle: {
      
      fontSize: 24,
      fontFamily: "cursive",
      color: '#fff',
      fontWeight: 'bold',
      marginBottom: 20,
    },
    textInput: {
      width: '75%',
      height: 50,
      padding: 10,
      marginTop: 20,
      borderRadius: 30,
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
    button: {
      
      width: '40%',
      height: 30,
      marginTop: 20,
      borderRadius: 30,
      backgroundColor: '#007BFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 14,
    },
  });