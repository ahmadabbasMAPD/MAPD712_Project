import React from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet } from 'react-native';
import ProfilePic from './assets/profile_image.jpeg'; 


// added doctor details
const DoctorDetails = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>Doctors Details Page</Text>
      <Image source={ProfilePic} style={{ width: 100, height: 100 }} />
      <Text style={{ fontSize: 18 }}>Dr. Jenny Wilson</Text>
      <Text style={{ fontSize: 16 }}>Behavior Expert</Text>
      <Text style={{ fontSize: 14 }}>Rating: 4.8</Text>
      <Button title="Contact Surgeon" onPress={() => console.log('Contact Surgeon Pressed')} />
      <Button title="Aesthetic Surgeon" onPress={() => console.log('Aesthetic Surgeon Pressed')} />
      <Button title="General Surgeon" onPress={() => console.log('General Surgeon Pressed')} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    // Add your button styles here
  },
});

export default DoctorDetails;
