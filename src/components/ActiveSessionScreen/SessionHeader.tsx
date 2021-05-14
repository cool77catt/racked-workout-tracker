
import React from 'react';
import {
  StyleSheet,
  Text, 
  View
} from 'react-native';


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


const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default SessionHeader;