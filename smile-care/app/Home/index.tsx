import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { RootStackParamList } from '../_layout';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Semi-círculo maior */}
      <View style={styles.largeSemiCircle}>
        {/* Semi-círculo menor */}
        <View style={styles.smallSemiCircle}>
          {/* Logo dentro do semi-círculo menor */}
          <Image source={require('../../assets/images/smile.jpg')} style={styles.logo} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Diagnóstico Bucal')}
        >
          <Text style={styles.buttonText}>Diagnóstico Bucal</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Cuidados Bucais')}
        >
          <Text style={styles.buttonText}>Cuidados Bucais</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Vídeos Interativos')}
        >
          <Text style={styles.buttonText}>Vídeos Interativos</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Guias Práticos')}
        >
          <Text style={styles.buttonText}>Guias Práticos</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.needHelpContainer}>
          <Text style={styles.needHelpText}>Precisando de ajuda?</Text>
          <Text style={styles.helpText}>Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
