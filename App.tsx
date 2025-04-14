import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import Tela_Inicial from './src/pages/tela_inicial';
import Tela_Camisas from './src/pages/tela_camisas';
import Tela_Login from './src/pages/tela_login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Tela_Inicial"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Tela_Inicial" component={Tela_Inicial} />
        <Stack.Screen name="Tela_Camisas" component={Tela_Camisas} />
        <Stack.Screen name="Tela_Login" component={Tela_Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});