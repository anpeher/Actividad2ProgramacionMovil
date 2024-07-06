import * as React from 'react';
import 'react-native-gesture-handler';

import Navigation from './Navigation';
/**
 * Aplicacion principal, su unico uso es el de cargar el componente Navigation que esel que se encargará de mostrar la pantalla principl
 * y la navegacion entre ventanas.
 */
export default function App() {
  return (
    <Navigation />
  );
}
