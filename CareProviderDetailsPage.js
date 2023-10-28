import React from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet } from 'react-native';
import ProfilePic from './assets/profile_image.jpeg'; 

const CareProviderDetails = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>Care Provider Details Page</Text>
      <Image source={ProfilePic} style={{ width: 100, height: 100 }} />
      <Text style={{ fontSize: 18 }}>Dr. Jenny Wilson</Text>
      <Text style={{ fontSize: 16 }}>Dental Surgeon (Implantologist)</Text>
      <Text style={{ fontSize: 14 }}>Rating: 4.8</Text>
      <Button title="Specialties" onPress={() => console.log('Specialties Pressed')} />
      <Button title="General Surgeon" onPress={() => console.log('General Surgeon Pressed')} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProfileEdit')}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UserHomePage')}>
          <Text style={styles.buttonText}>User Home Page</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DoctorDetails')}>
          <Text style={styles.buttonText}>Doctor Details</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
      button: {
        padding: 10,
        alignItems: 'center',
      },
      buttonText: {
        color: '#000000',
        fontWeight: 'bold',
      },
});

export default CareProviderDetails;
