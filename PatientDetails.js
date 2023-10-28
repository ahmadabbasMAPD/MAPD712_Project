import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const PatientDetails = ({ route, navigation }) => {
  const { patientName, age, phoneNumber } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.patientName}>{patientName} Details</Text>

      <View style={styles.infoContainer}>
        <View style={styles.basicInfoContainer}>
          <Image
            source={require('./assets/profile_image.jpeg')}
            style={styles.basicInfoImage}
          />
          <View style={styles.basicInfo}>
            <Text style={styles.basicInfoText}>Name: {patientName}</Text>
            <Text style={styles.basicInfoText}>Age: {age}</Text>
            <Text style={styles.basicInfoText}>Phone: {phoneNumber}</Text>
          </View>
        </View>

        <View style={styles.patientInfo}>
          <Text style={styles.infoItem}>Blood Pressure: (X/Y mmHg)</Text>
          <Text style={styles.infoItem}>Respiratory Rate: (X/min)</Text>
          <Text style={styles.infoItem}>Blood Oxygen Level: (X%)</Text>
          <Text style={styles.infoItem}>Heartbeat Rate: (X/min)</Text>
        </View>

        <View style={styles.criticalContainer}>
          <Text style={styles.criticalText}>Critical Condition</Text>
        </View>

        <View style={styles.hr} />

        <TouchableOpacity
          style={styles.addButton}
          onPress={() =>
            navigation.navigate('AddInfoScreen', {
              patientName: patientName,
              age: age,
              phoneNumber: phoneNumber,
            })
          }
        >
          <Text style={styles.addButtonText}>Add Info</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  patientName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    margin: 20,
  },
  basicInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  basicInfoImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  basicInfo: {
    flexDirection: 'column',
  },
  basicInfoText: {
    fontSize: 20,
    marginBottom: 5,
    color: '#333',
  },
  patientInfo: {
    marginBottom: 20,
  },
  infoItem: {
    fontSize: 18,
    marginBottom: 10,
    color: '#555',
  },
  criticalContainer: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  criticalText: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  hr: {
    borderBottomColor: '#888',
    borderBottomWidth: 1,
    width: '80%',
    marginVertical: 20,
  },
});

export default PatientDetails;
