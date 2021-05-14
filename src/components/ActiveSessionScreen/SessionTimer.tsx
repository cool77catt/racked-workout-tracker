
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { secsToHHMMSS } from '../../utils/time'



const SessionTimer = () => {

  let time = 60.0;

  return (
    <View style={{ flex:1, justifyContent: 'center' }} >
      <Text style={styles.font}>
        {secsToHHMMSS(time)}
      </Text>
    </View>
  )
};


const styles = StyleSheet.create({
  font: {
    textAlign: 'center',
    fontSize: 88,
    fontWeight: '200',
  },
});

export default SessionTimer;