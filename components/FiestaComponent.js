import { Text, StyleSheet, View, Image } from 'react-native';

export default function FiestaComponent({ item }) {
    return (
        <View style={styles.itemContainer}>
            <Image
                source={{ uri: item?.URL }}
                style={styles.image}
            />
            <Text style={styles.title}>{item.title ? item.title : 'Not Found'}</Text>
        </View>
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