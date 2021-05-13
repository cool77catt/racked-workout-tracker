
import React from 'react';
import {
  StyleSheet,
  Text, 
  View
} from 'react-native';

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
});

type SessionHeaderProps = {
  title: string,
}

const SessionHeader = (props: SessionHeaderProps) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={styles.header}>
        { props.title }
      </Text>
    </View>
  )
};

export default SessionHeader;