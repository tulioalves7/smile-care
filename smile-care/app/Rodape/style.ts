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
        backgroundColor: '#68E1D4', 
        paddingVertical: 25,
        borderTopWidth: 1,
        borderColor: '#E0E0E0', 
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
