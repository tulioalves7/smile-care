import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
        paddingHorizontal: 16,
    },
    scrollContent: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 100,
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        color: '#68E1D4',
        textAlign: 'center',
        letterSpacing: 1.5,
    },
    subtitle: {
        fontSize: 18,
        marginTop: 10,
        textAlign: 'center',
        color: '#68E1D4',
        paddingHorizontal: 15,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        color: '#333',
        textAlign: 'center',
    },
    paragraph: {
        fontSize: 20,
        color: '#000000',
        marginTop: 10,
        lineHeight: 24,
        textAlign: 'justify',
        paddingHorizontal: 15,
    },
    videoButton: {
        backgroundColor: '#68E1D4',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginTop: 15,
        width: '90%',
        alignItems: 'center',
    },
    videoText: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
    },
});

export default styles;
