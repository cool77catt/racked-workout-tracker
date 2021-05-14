import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const SessionHistoryCard = () => {
  return (
    <View style={styles.container}>
      <Text style={[ styles.font ]}>History Card</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  font: {
    fontSize: 20,
    textAlign: 'center',
  }
})

export default SessionHistoryCard;