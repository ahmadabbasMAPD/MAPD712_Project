import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
// added care providers
const FitnessCoach = ({ navigation }) =>  {
  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', margin: 10 }}>
        Fitness Coach
      </Text>
     <TouchableOpacity onPress={() =>navigation.navigate('CareProviderDetailsPage')}>
     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={require('./assets/profile_image.jpeg')}
          style={{ width: 50, height: 50, margin: 10 }}
        />
        <View>
          <Text style={{ fontSize: 18 }}>Dietician Coach</Text>
          <Text style={{ fontSize: 16 }}>Dr. Jenny Wilson</Text>
          <Text style={{ fontSize: 16 }}>4.8</Text>
        </View>
      </View>
     </TouchableOpacity>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={require('./assets/profile_image.jpeg')}
          style={{ width: 50, height: 50, margin: 10 }}
        />
        <View>
          <Text style={{ fontSize: 18 }}>Dietician Coach</Text>
          <Text style={{ fontSize: 16 }}>Dr. Kristin Watson</Text>
          <Text style={{ fontSize: 16 }}>4.9</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={require('./assets/profile_image.jpeg')}
          style={{ width: 50, height: 50, margin: 10 }}
        />
        <View>
          <Text style={{ fontSize: 18 }}>Behaviour Coach</Text>
          <Text style={{ fontSize: 16 }}>Dr. Jenny Wilson</Text>
          <Text style={{ fontSize: 16 }}>4.9</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={require('./assets/profile_image.jpeg')}
          style={{ width: 50, height: 50, margin: 10 }}
        />
        <View>
          <Text style={{ fontSize: 18 }}>Behaviour Coach</Text>
          <Text style={{ fontSize: 16 }}>Dr. Kristin Watson</Text>
          <Text style={{ fontSize: 16 }}>4.9</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={require('./assets/profile_image.jpeg')}
          style={{ width: 50, height: 50, margin: 10 }}
        />
        <View>
          <Text style={{ fontSize: 18 }}>Fitness Coach</Text>
          <Text style={{ fontSize: 16 }}>Dr. Jenny Wilson</Text>
          <Text style={{ fontSize: 16 }}>4.9</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={require('./assets/profile_image.jpeg')}
          style={{ width: 50, height: 50, margin: 10 }}
        />
        <View>
          <Text style={{ fontSize: 18 }}>Fitness Coach</Text>
          <Text style={{ fontSize: 16 }}>Dr. Kristin Watson</Text>
          <Text style={{ fontSize: 16 }}>4.9</Text>
        </View>
      </View>

    
      {/* Search bar */}
      <TextInput
        placeholder="Search"
        placeholderTextColor="#a0a0a0"
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="always"
        returnKeyType="search"
        onSubmitEditing={() => console.log('Search pressed')}
        style={{
          backgroundColor: '#f0f0f0',
          borderRadius: 20,
          paddingVertical: 5,
          paddingHorizontal: 20,
          marginHorizontal: 20,
          marginVertical: 30,
        }}
      />
    </View>
  );
};

export default FitnessCoach;
