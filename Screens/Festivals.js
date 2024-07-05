import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FiestaComponent from '../components/FiestaFlatList';
import { data } from '../data/data';

/**
 * Pantalla donde se realiza la pantalla scrolleable
 * exportamos el componente principal que es FiestaComponent pasándole el data
 * Aqui solo añadimos los componentes secundarios y le damos un style para configurar el espacio
 * @returns pantalla scrolleable debido al uso de una flatList
 */
export default function Festivals({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>Fiestas Típicas</Text>
        <FiestaComponent data={data} />
      </View>
    </SafeAreaView>
  );
}

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
