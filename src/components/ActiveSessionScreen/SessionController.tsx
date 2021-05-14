
import React from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

const SessionController = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title='start' color='blue' onPress={() => Alert.alert('hi')}/>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="lap" color='purple' onPress={() => Alert.alert('hi')}/>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
  }
})

export default SessionController;