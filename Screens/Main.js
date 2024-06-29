import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, ImageBackground, TouchableOpacity } from 'react-native';

export default function Main() {
    return (
        
        <View style={styles.container}>
        <Text style={styles.titulo}>HOLA</Text>
        <Text style={styles.subtitle}>Estás en Main</Text>
        
        </View>
  )
}

const styles = StyleSheet.create({

container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},
titulo: {
  fontSize: 40,
  fontFamily: "cursive",
  color: '#000',
  fontWeight: 'bold',
},
subtitle: {
  
  fontSize: 24,
  fontFamily: "cursive",
  color: '#000',
  fontWeight: 'bold',
  marginBottom: 20,
},

});