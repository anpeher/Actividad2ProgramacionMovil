import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
//icons
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
//screens
import FormularioScreen from "./Screens/Formulario"
import HomeScreen from "./Screens/Main"
import FestivalsScreen from "./Screens/Festivals"
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
        initialRouteName='Formulario'
        screenOptions={{
          tabBarStyle: {
            backgroundColor: 'black',  
          },
        }
          
        }>
      <Tab.Screen 
      name="Formulario" 
      component={FormularioScreen} 
      options={{
        tabBarLabel: 'Encuesta',
        tabBarIcon: ({ color, size })=>(
          <FontAwesome5 name="pencil-alt" size={24} color="white" />
        ),
      }}/>
      <Tab.Screen name="Home" 
      component={HomeScreen}
      options={{
        tabBarLabel: 'P.Principal',
        tabBarIcon: ({ color, size })=>(
          <FontAwesome5 name="home" size={24} color="red" />
        ),
      }} />
      <Tab.Screen name="Festivals" 
      component={FestivalsScreen}
      options={{
        tabBarLabel: 'Fiestas',
        tabBarIcon: ({ color, size })=>(
          <FontAwesome5 name="lemon" size={24} color="yellow" />
        ),
      }} />
    </Tab.Navigator>
  );
}

export default function Navigation(){

  return(
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}