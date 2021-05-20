import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../RootStackParams';
import { Workout } from '../types';

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;


const HomeScreen = () => {

  const navigation = useNavigation<HomeScreenProp>();

  const newWorkoutPressed = () => {
    let workout: Workout = {
      title: 'Legs',
    }
    navigation.navigate('ActiveSession', {workout: workout});
  }

  return (
    <View style={styles.container}>
      <Button title='New Workout' color='blue' onPress={newWorkoutPressed} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});


export default HomeScreen;