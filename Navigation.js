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

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function MyTabs() {
  return (
    <Tab.Navigator>
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
        component={FormularioScreen}
        options={{
          tabBarLabel: 'Encuesta',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="pencil-alt" size={24} color="white" />
          ),
        }} />
      <Tab.Screen name="Festivals"
        component={FestivalsScreen}
        options={{
          tabBarLabel: 'Fiestas',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="lemon" size={24} color="yellow" />
          ),
        }} />
    </Tab.Navigator>
  );
}


function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Main" component={MyTabs} />
      <Stack.Screen name="Formulario" component={FormularioScreen} />
      <Stack.Screen name="Festivales" component={FestivalsScreen} />
    </Stack.Navigator>
  );
}


export default function Navigation() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}