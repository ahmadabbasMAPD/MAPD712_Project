import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';

const CareProviderHomePage = ({ navigation }) => {
  const renderPatientDetails = (name, contact, date, time, image) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('PatientDetails', { patientName: name })}>
        <View style={styles.patientDetails}>
          <Image source={image} style={styles.patientImage} />
          <View style={styles.patientText}>
            <Text style={styles.patientName}>{name}</Text>
            <Text style={styles.patientContact}>Contact: {contact}</Text>
            <Text style={styles.patientAppointment}>Appointment Date: {date}</Text>
            <Text style={styles.patientTime}>Time: {time}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image
            source={require('./assets/profile_image.jpeg')}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Nurse</Text>
        </View>
        <View style={styles.hr} />
        <Text style={styles.criticalPatients}>Critical Patients</Text>
        <View style={styles.rectangularContainer}>
          {renderPatientDetails("Patient 1", "123-456-7890", "2023-10-31", "10:00 AM", require('./assets/profile_image.jpeg'))}
          {renderPatientDetails("Patient 2", "987-654-3210", "2023-11-02", "02:30 PM", require('./assets/profile_image.jpeg'))}
          {renderPatientDetails("Patient 3", "111-222-3333", "2023-11-05", "09:15 AM", require('./assets/profile_image.jpeg'))}
          {renderPatientDetails("Patient 4", "555-444-7777", "2023-11-08", "03:45 PM", require('./assets/profile_image.jpeg'))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    marginTop: 50,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  hr: {
    borderBottomColor: '#888',
    borderBottomWidth: 1,
    width: '80%',
    marginVertical: 20,
  },
  criticalPatients: {
    color: '#FF6347',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  rectangularContainer: {
    marginTop: 20,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  patientDetails: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  patientImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  patientText: {
    flexDirection: 'column',
  },
  patientName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
  },
  patientContact: {
    fontSize: 16,
    color: '#555',
  },
  patientAppointment: {
    fontSize: 16,
    color: '#555',
  },
  patientTime: {
    fontSize: 16,
    color: '#555',
  },
});

export default CareProviderHomePage;
