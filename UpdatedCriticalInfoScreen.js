import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const UpdatedCriticalInfoScreen = ({ route }) => {
  const { respiratoryRate, bloodPressure, bloodOxygenLevel, heartbeatRate, inputText } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Updated Critical Information</Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Respiratory Rate:</Text>
          <Text style={styles.value}>{respiratoryRate}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Blood Pressure:</Text>
          <Text style={styles.value}>{bloodPressure}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Blood Oxygen Level:</Text>
          <Text style={styles.value}>{bloodOxygenLevel}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Heartbeat Rate:</Text>
          <Text style={styles.value}>{heartbeatRate}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Doctor's Note:</Text>
          <Text style={styles.noteText}>{inputText}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  infoContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  value: {
    fontSize: 16,
    color: '#666666',
  },
  noteText: {
    fontSize: 16,
    color: 'red',
  },
});

export default UpdatedCriticalInfoScreen;
