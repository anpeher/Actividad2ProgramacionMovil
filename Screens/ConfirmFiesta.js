import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FiestaComponent from '../components/FiestaComponent';

/**
 * Panatalla formulario, en ella tienes unos campos a rellenar para incluir en la flatList alguna fiesta tipica
 * Para ello, en esta misma funcion comprobamos que funcione todo y lo submimos al archivo data
 * @returns una vista de un formulario
 */
export default function ConfirmFiesta({ navigation, route }) {
  const [item, setItem] = useState(route.params?.item);
  
  useEffect(() => {
    setItem(route.params?.item)
  }, [route]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Fiesta Registrada Correctamente</Text>
      <FiestaComponent item={item} />
    </View>
  )
}
//usamos styles principalmente para mover los elementos
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});
