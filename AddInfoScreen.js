import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation


const AddInfoScreen = ({ route }) => {
    const navigation = useNavigation();
    const { patientName, age, phoneNumber } = route.params;
    const [respiratoryRate, setRespiratoryRate] = useState(0);
    const [bloodPressure, setBloodPressure] = useState(0);
    const [bloodOxygenLevel, setBloodOxygenLevel] = useState(0);
    const [heartbeatRate, setHeartbeatRate] = useState(0);
    const [showTextBars, setShowTextBars] = useState({
        bloodOxygenLevel: false,
        heartbeatRate: false,
        doctorsNote: false,
    });
    
    const [inputText, setInputText] = useState('');

    const handleRespiratoryIncrement = () => {
        setRespiratoryRate(respiratoryRate + 1);
    };

    const handleRespiratoryDecrement = () => {
        if (respiratoryRate > 0) {
            setRespiratoryRate(respiratoryRate - 1);
        }
    };

    const handleBloodPressureIncrement = () => {
        setBloodPressure(bloodPressure + 1);
    };

    const handleBloodPressureDecrement = () => {
        if (bloodPressure > 0) {
            setBloodPressure(bloodPressure - 1);
        }
    };

    const handleBloodOxygenIncrement = () => {
        setBloodOxygenLevel(bloodOxygenLevel + 1);
    };

    const handleBloodOxygenDecrement = () => {
        if (bloodOxygenLevel > 0) {
            setBloodOxygenLevel(bloodOxygenLevel - 1);
        }
    };

    const handleHeartbeatIncrement = () => {
        setHeartbeatRate(heartbeatRate + 1);
    };

    const handleHeartbeatDecrement = () => {
        if (heartbeatRate > 0) {
            setHeartbeatRate(heartbeatRate - 1);
        }
    };

    const handleAddNote = (field) => {
        setShowTextBars((prevBars) => ({
            ...prevBars,
            [field]: !prevBars[field],
        }));
    };

    const handleSave = () => {
        // Add logic to save the data
        navigation.navigate('UpdatedCriticalInfoScreen', {
          respiratoryRate: respiratoryRate,
          bloodPressure: bloodPressure,
          bloodOxygenLevel: bloodOxygenLevel,
          heartbeatRate: heartbeatRate,
          inputText: inputText,
        });
    };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Update Patient Details</Text>
      <Text>Patient Name: {patientName}</Text>
      <Text>Age: {age}</Text>
      <Text>Phone No: {phoneNumber}</Text>

      <Text style={styles.subHeading}>Patient Info</Text>

      <View style={styles.tableRow}>
        <Text style={styles.tableCell}>Respiratory Rate :</Text>
        <View style={styles.tableCell}>
          <View style={styles.buttonContainer}>
            <Button title="-" onPress={handleRespiratoryDecrement} />
            <Text style={styles.valueText}>{respiratoryRate}</Text>
            <Button title="+" onPress={handleRespiratoryIncrement} />
          </View>
        </View>
      </View>

      <View style={styles.tableRow}>
        <Text style={styles.tableCell}>Blood Pressure :</Text>
        <View style={styles.tableCell}>
          <View style={styles.buttonContainer}>
            <Button title="-" onPress={handleBloodPressureDecrement} />
            <Text style={styles.valueText}>{bloodPressure}</Text>
            <Button title="+" onPress={handleBloodPressureIncrement} />
          </View>
        </View>
      </View>

      <View style={styles.tableRow}>
        <Text style={styles.tableCell}>Blood Oxygen Level :</Text>
        <View style={styles.tableCell}>
          <View style={styles.buttonContainer}>
            <Button title="-" onPress={handleBloodOxygenDecrement} />
            <Text style={styles.valueText}>{bloodOxygenLevel}</Text>
            <Button title="+" onPress={handleBloodOxygenIncrement} />
          </View>
        </View>
      </View>

      <View style={styles.tableRow}>
        <Text style={styles.tableCell}>Heartbeat Rate :</Text>
        <View style={styles.tableCell}>
          <View style={styles.buttonContainer}>
            <Button title="-" onPress={handleHeartbeatDecrement} />
            <Text style={styles.valueText}>{heartbeatRate}</Text>
            <Button title="+" onPress={handleHeartbeatIncrement} />
          </View>
        </View>
      </View>

      <View style={styles.tableRow}>
        <Text style={styles.tableCell}>Doctors Note :</Text>
        <View style={styles.tableCell}>
          <Button
            title={showTextBars.doctorsNote ? 'Close' : 'Add Note'}
            onPress={() => handleAddNote('doctorsNote')}
          />
        </View>
      </View>

      {showTextBars.doctorsNote && (
        <View style={styles.textBar}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={(text) => setInputText(text)}
            placeholder="Enter Doctor's Note"
          />
        </View>
      )}

      <Button
      title="Save"
      onPress={handleSave}
      style={styles.saveButton}
    />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 18,
    marginTop: 10,
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  tableCell: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  valueText: {
    marginHorizontal: 10,
  },
  saveButton: {
    borderRadius: 50, // Makes the button pill-shaped
    backgroundColor: 'blue',
    color: 'black',
  },
});

export default AddInfoScreen;
