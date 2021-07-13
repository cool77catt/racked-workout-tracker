import React, { useContext } from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../contexts';
import { RootStackParamList } from '../RootStackParams';
import { Workout } from '../types';

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;


const HomeScreen = () => {

  const navigation = useNavigation<HomeScreenProp>();

  const newWorkoutPressed = () => {
    Alert.prompt(
      'Freestyle',
      'Enter Workout Name',
      [
        {
          text: 'OK',
          onPress: (workoutName) => {
            navigation.navigate('ActiveSession', {workout: new Workout(workoutName)});
          },
        },
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel'
        }
      ]
      );
  }

  const theme = useContext(ThemeContext);

  return (
    <View style={[style.container, {backgroundColor: theme.backgroundColor}]}>
      <Button title='Freestyle' color={theme.primary} onPress={newWorkoutPressed} />
    </View>
  )
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});


export default HomeScreen;