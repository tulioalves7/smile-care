import {
    createNativeStackNavigator,
    NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import HomeScreen from './Home/index';
import DiagnosticoBucal from './Diagnostico/index';
import * as SplashScreen from 'expo-splash-screen';
import CuidadosBucais from './Cuidados';
import GuiasPraticos from './Guias';
import VideosInterativos from './Videos';
import TelaAjuda from './Ajuda';
import Creditos from './Creditos';

// Defina os tipos de rotas e parâmetros (não há parâmetros nesse caso)
export type RootStackParamList = {
    Home: undefined;
    'Diagnóstico Bucal': undefined;
    'Cuidados Bucais': undefined;
    'Guias Práticos': undefined;
    'Vídeos Interativos': undefined;
    'Tela Ajuda': undefined;
    Creditos: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootLayout() {
    React.useEffect(() => {
        SplashScreen.hideAsync();
    }, []);

    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Diagnóstico Bucal"
                    component={DiagnosticoBucal}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Cuidados Bucais"
                    component={CuidadosBucais}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Guias Práticos"
                    component={GuiasPraticos}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Vídeos Interativos"
                    component={VideosInterativos}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Tela Ajuda"
                    component={TelaAjuda}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Creditos"
                    component={Creditos}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
