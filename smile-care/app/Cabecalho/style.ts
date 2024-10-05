import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    largeSemiCircle: {
        width: '130%',
        height: '15%', // Altura maior para o semi-círculo
        backgroundColor: '#2F3737', // Cor de fundo do semi-círculo maior
        borderBottomLeftRadius: 200,
        borderBottomRightRadius: 200,
        position: 'relative', // Para garantir que o semi-círculo menor fique posicionado corretamente
    },
    smallSemiCircle: {
        width: '90%',
        height: '80%',  // Ajuste para deixar um "espaço" entre os dois semi-círculos
        backgroundColor: '#3FB3B5', // Cor do semi-círculo menor
        borderBottomLeftRadius: 200,
        borderBottomRightRadius: 200,
        position: 'absolute',
        left: '5%', // Centralizar horizontalmente
        justifyContent: 'center', // Centralizar o conteúdo verticalmente
        alignItems: 'center', // Centralizar o conteúdo horizontalmente
    },
});

export default styles;
