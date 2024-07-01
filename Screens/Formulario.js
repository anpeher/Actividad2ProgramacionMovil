import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import TextInputFormComponent from '../components/TextInputFormComponent';
import { addData } from '../data/data';

export default function Formulario() {

  const [fiestaName, setFiestaName] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  let idActual = 6

  const validateUrl = (url) => {
    const regex = /^(http|https):\/\/[^ "]+$/
    return regex.test(url)
  };

  const handleSubmit = () => {
    if (!fiestaName || !imageUrl) {
      Alert.alert('Error', 'Todos los campos son obligatorios')
      return
    }

    if (!validateUrl(imageUrl)) {
      Alert.alert('Error', 'URL no válida')
      setImageUrl('')
      return
    }

    const newItem = {
      id: idActual,
      title: fiestaName,
      URL: imageUrl,
    }

    addData(newItem)
    Alert.alert('Éxito', 'Datos enviados correctamente')
    idActual++;
    setFiestaName('')
    setImageUrl('')
  };

  return (
      <ImageBackground 
          source={require('../assets/BackgroundCuestionario.jpg')} 
          style={styles.background}
      >
          <View style={styles.container}>
          <Text style={styles.titulo}>HOLA</Text>
          <Text style={styles.subtitle}>Introduzca sus datos</Text>
            <TextInputFormComponent
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