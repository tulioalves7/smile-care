import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
    },
    scrollContent: {
        paddingVertical: 16,
    },

    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#68E1D4',
        marginBottom: 30,
        textAlign: 'center',
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 10,
        // textAlign: 'center',
        lineHeight: 24,
        // marginLeft: 'auto',
        // marginRight: 'auto',
    },

    description: {
        fontSize: 18,
        color: '#333333',
        lineHeight: 24,
        textAlign: 'left',
        marginBottom: 16,
    },
      
      
    });

export default styles;