import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import TextInputFormComponent from '../components/TextInputFormComponent';
import { addData } from '../data/data';
import useLastImage from '../hooks/lastIncludedImage';

/**
 * Panatalla formulario, en ella tienes unos campos a rellenar para incluir en la flatList alguna fiesta tipica
 * Para ello, en esta misma funcion comprobamos que funcione todo y lo submimos al archivo data
 * @returns una vista de un formulario
 */
export default function Formulario({ navigation }) {

  //obtenemos las variables donde se guarda los textview 
  const [fiestaName, setFiestaName] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [lastImage, setIdActual] = useLastImage(5); //obtenemos el
  
  //validamos url
  const validateUrl = (url) => {
    const regex = /^(http|https):\/\/[^ "]+$/
    return regex.test(url)
  };

  
  const handleSubmit = () => {
    //validamos que los campos estén escritos correctamente
    if (!fiestaName || !imageUrl) {
      Alert.alert('Error', 'Todos los campos son obligatorios')
      return
    }

    if (!validateUrl(imageUrl)) {
      Alert.alert('Error', 'URL no válida')
      setImageUrl('')
      return
    }
    //creamos el item para el data y lo añadimos
    const newItem = {
      id: lastImage.id + 1,
      title: fiestaName,
      URL: imageUrl,
    }
    addData(newItem)
    setIdActual(newItem.id)
    setFiestaName('')
    setImageUrl('')
    navigation.navigate('ConfirmFiesta', {screen: 'Home', item: newItem})
  };

  return (
      <ImageBackground //utilizamos una imagen de background
          source={require('../assets/BackgroundCuestionario.jpg')} 
          style={styles.background}
      >
          <View style={styles.container}>
          <Text style={styles.titulo}>HOLA</Text>
          <Text style={styles.subtitle}>Introduzca sus datos</Text>
            <TextInputFormComponent //componente importando de component que sirve como campo para rellenar
            placeholder='Nombre de la fiesta'
            value={fiestaName}
            onChangeText={setFiestaName}
          />
          <TextInputFormComponent
            placeholder='URL de la imagen'
            value={imageUrl}
            onChangeText={setImageUrl}
          />
          <TouchableOpacity 
            style={styles.button}
            onPress={handleSubmit}>
              <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
          </View>
      </ImageBackground>
    )
}
//usamos styles principalmente para mover los elementos
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
      color: '#fff',
      fontWeight: 'bold',
    },
    subtitle: {
      
      fontSize: 24,
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