import React from 'react';

import { StatusBar } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

// export default function App() {
//   return ( 
//     <NavigationContainer independent={true}>
//       {/* <StatusBar barStyle="light-content"backgroundColor="#FFE700" /> */}
//       <Routes />
//     </NavigationContainer>
//   );
// }

import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
}

export default App;

