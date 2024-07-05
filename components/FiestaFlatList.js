import { FlatList, View } from 'react-native';
import FiestaComponent from './FiestaComponent';

/**
 * componente FlatList que sirve para mostrar los datos que tenemos, la screen que use el componente
 * debe de ser la encargada de proporcionarlo los datos
 * @param {*} data: datos que se usaran para crear la flatlist
 * @returns Flatlist donde se muestra los elementos utilizados
 */
export default function FlatListComponent({ data }) {
  return (
    <View style={{flex: 1, flexGrow: 1}}>
      <FlatList 
        data={data} 
        keyExtractor={(item) => item.id.toString()}
        renderItem={FiestaComponent} 
      />
    </View>
  );
}
