import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

//icons
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

//screens
import FormularioScreen from "./Screens/Formulario"
import HomeScreen from "./Screens/Home"
import FestivalsScreen from "./Screens/Festivals"
import ConfirmFiesta from "./Screens/ConfirmFiesta"

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

/**
 * FormStack define las pantallas que se pueden visitar en la aplicación desde el formulario
 * @returns Stack.Navigator 
 */
function FormStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Formulario" component={FormularioScreen} />
      <Stack.Screen name="ConfirmFiesta" component={ConfirmFiesta} />
      
    </Stack.Navigator>
  );
}


/**
 * ListFiestasStack define las pantallas que se pueden visitar en la aplicación desde la pestaña Fiestas
 * @returns Stack.Navigator 
 */
function ListFiestasStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Festivales" component={FestivalsScreen} />
    </Stack.Navigator>
  );
}

/**
 * StackNavigator define la navegación disponible en la parte inferior de la pantalla
 * @returns Tab.Navigator 
 */
function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={24} color="red" />
          ),
        }} />
      <Tab.Screen
        name="Formulario"
        component={FormStack}
        options={{
          tabBarLabel: 'Añadir',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="pencil-alt" size={24} color="white" />
          ),
        }} />
      <Tab.Screen name="Festivals"
        component={ListFiestasStack}
        options={{
          tabBarLabel: 'Fiestas',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="lemon" size={24} color="yellow" />
          ),
        }} />
    </Tab.Navigator>
  );
}


/**
 * Retorna el componente de navegación de la aplicación
 * @returns NavigationContainer 
 */
export default function Navigation() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}