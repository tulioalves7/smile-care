// style.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: 0,
        width: '110%',
        backgroundColor: '#68E1D4', // Cor de fundo conforme imagem enviada
        paddingVertical: 15,
        borderTopWidth: 1,
        borderColor: '#E0E0E0', // Cor do contorno do rodapé
    },
    button: {
        alignItems: 'center',
        flex: 1,
    },
    icon: {
        width: 24,
        height: 24,
    },
});

export default styles;
