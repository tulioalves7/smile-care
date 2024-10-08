import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    largeSemiCircle: {
        width: '140%',
        height: '20%', 
        backgroundColor: '#2F3737', 
        borderBottomLeftRadius: 200,
        borderBottomRightRadius: 200,
        position: 'relative', 
    },
    smallSemiCircle: {
        width: '90%',
        height: '80%',  
        backgroundColor: '#3FB3B5', 
        borderBottomLeftRadius: 200,
        borderBottomRightRadius: 200,
        position: 'absolute',
        left: '5%', 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    logo: {
        width: 155,
        height: 30,
        position: 'absolute', 
        top: 20, // Mantém no topo
        right: 20, // Alinha à direita
    },
    setaEsquerda: {
        width: 30, // Ajuste o tamanho da seta conforme necessário
        height: 30,
        position: 'absolute', 
        top: 20, // Mantém no topo
        left: 20, // Alinha à esquerda
    }
});

export default styles;
