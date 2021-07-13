import React, {useState, useRef, useEffect}  from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';

type SetDetailsCardProps = {
  name: string;
  setNumber: number;
  currentWeight: number;
  targetWeight?: number;
}

const SetDetailsCard = (props: SetDetailsCardProps) => {

  const weight = props.targetWeight || props.currentWeight;
  const weightStyle = props.targetWeight ? styles.font : styles.weakFont;
  

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.font}>{props.name}</Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.font}>{props.setNumber}</Text>
      </View>
      <View style={{flex: 1}}>
        <Text 
          style={weightStyle} 
          onPress={() => {
            Alert.prompt(
              'Set Weight',
              'Enter weight: ',
              (newVal) => {
                console.log(`new weight: ${newVal}`)
              },
              'plain-text',
              `${props.currentWeight || props.targetWeight}`,
            )
          }}
        >
          {weight}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  font: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
  weakFont: {
    fontSize: 20,
    textAlign: 'center',
    color: 'gray',
  }
})

export default SetDetailsCard;