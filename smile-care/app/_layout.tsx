import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import HomeScreen from './Home/index';
import DiagnosticoBucal from './Diagnostico/index';
import * as SplashScreen from 'expo-splash-screen';
import CuidadosBucais from './Cuidados';
import GuiasPraticos from './Guias';
import VideosInterativos from './Videos';

// Defina os tipos de rotas e parâmetros (não há parâmetros nesse caso)
export type RootStackParamList = {
  Home: undefined;
  'Diagnóstico Bucal': undefined;
  'Cuidados Bucais': undefined;
  'Guias Práticos': undefined;
  'Vídeos Interativos': undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootLayout() {
  React.useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Diagnóstico Bucal" component={DiagnosticoBucal} />
        <Stack.Screen name="Cuidados Bucais" component={CuidadosBucais} />
        <Stack.Screen name="Guias Práticos" component={GuiasPraticos} />
        <Stack.Screen name="Vídeos Interativos" component={VideosInterativos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
