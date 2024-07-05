import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function Main() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />
        <View style={styles.headerTitleWrapper}>
          <Text style={styles.titulo}>HOLA</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.subtitle}>Estás en Main</Text>
      </View>
      <ScrollView style={styles.largeContent}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 5,
    flexDirection: 'column',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    justifySelf: 'left',
    width: 50,
    height: 50,
    marginLeft: 0,
  },
  headerTitleWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 36,
    color: '#000',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  largeContent: {
    flex: 1,
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
  }
});