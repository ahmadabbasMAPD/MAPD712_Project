import React from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import profilePicture from './assets/profile_image.jpeg';

const ProfileEdit = () => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Edit Profile</Text>
      <Image
        style={{ width: 100, height: 100, borderRadius: 50 }}
        source={profilePicture}
      />
      <Text>USERNAME</Text>
      <TextInput placeholder="YANCHUI" />
      <Text>Email</Text>
      <TextInput placeholder="yanchui@gmail.com" />
      <Text>Phone Number</Text>
      <TextInput placeholder="+1498789999" />
      <Text>Password</Text>
      <TextInput placeholder="evFfTbyVVCd" secureTextEntry={true} />
      <Button title="Update" onPress={() => {}} />
    </View>
  );
};

export default ProfileEdit;
