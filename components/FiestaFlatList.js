import React from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
/**
 * componente FlatList que sirve para mostrar los datos que tenemos, la screen que use el componente
 * debe de ser la encargada de proporcionarlo los datos
 * @param {*} data: datos que se usaran para crear la flatlist
 * @returns Flatlist donde se muestra los elementos utilizados
 */
export default function FlatListComponent({ data }) {
  return (
    <FlatList 
      data={data} 
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image
            source={{ uri: item.URL }}
            style={styles.image}
          />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      )} 
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "green",
    marginBottom: 20,
    alignItems: 'center',
    marginVertical: 0,
    marginHorizontal: 16,
    paddingBottom: 30,
    borderRadius: 6,
  },
  image: {
    width: 400,
    height: 300,
    borderRadius: 6,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
});