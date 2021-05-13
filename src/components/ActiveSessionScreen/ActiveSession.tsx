import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import SessionHeader from './SessionHeader';
import SessionTimer from './SessionTimer';
import SessionController from './SessionController';
import SessionHistory from './SessionHistory';

const ActiveSessionScreen = () => {

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, borderColor: 'blue', borderWidth: 2 }}>
        <SessionHeader title="Chest & Back"/>
      </View>
      <View style={{ flex: 4, borderColor: 'blue', borderWidth: 2 }}>
        <SessionTimer />
      </View>
      <View style={{ flex: 2, borderColor: 'blue', borderWidth: 2 }}>
        <SessionController />
      </View>
      <View style={{ flex: 5, borderColor: 'blue', borderWidth: 2 }}>
        <SessionHistory />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ActiveSessionScreen;