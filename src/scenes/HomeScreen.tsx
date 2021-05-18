import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import {RootStackParamList} from '../RootStackParams';

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;


const HomeScreen = () => {

  const navigation = useNavigation<HomeScreenProp>();

  const newWorkoutPressed = () => {
    navigation.navigate('ActiveSession', {title: 'Chest & Back'});
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