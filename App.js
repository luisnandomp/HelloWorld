import {  View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

import Home from './src/pages/Home';
import Formacao from './src/pages/Formacao';


export default function App() {
  return (
    <View>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Formação' component={Formacao}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
);
}


