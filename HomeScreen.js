import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/Logo.jpeg')} style={styles.image} />
      <Text style={[styles.text, styles.title]}>HealthSync</Text>
      <Text style={[styles.text, styles.subtitle]}>Seamless Care, Empowering Lives</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PatientSearch')}>
          <Text style={styles.buttonText}>Login as a Nurse</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SearchCareProviderPage')}>
          <Text style={styles.buttonText}>Login as a Doctor</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  text: {
    color: '#FFFFFF',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  buttonContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 50,
    backgroundColor: '#00FF00',
    paddingHorizontal: 20,
  },
  button: {
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
