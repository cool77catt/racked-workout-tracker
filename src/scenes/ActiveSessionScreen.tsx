import React, {useState, useRef}  from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  Alert,
  StyleSheet
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../RootStackParams';
import CONSTANTS from '../constants';
import { secsToHHMMSS } from '../utils/time';
import SessionHistoryCard from '../components/SessionHistoryCard';


type ActiveSessionScreenNavProp = StackNavigationProp<RootStackParamList, 'ActiveSession'>;
type ActiveSessionScreenRouteProp = RouteProp<RootStackParamList, 'ActiveSession'>;

type ActiveSessionScreenProps = {
  navigation: ActiveSessionScreenNavProp,
  route: ActiveSessionScreenRouteProp,
};

enum Status {
  Stopped,
  Started,
  Paused,
};

// const ActiveSessionScreen = (props: activeSessionScreenProps) => {
const ActiveSessionScreen = ({navigation, route}: ActiveSessionScreenProps) => {

  // Define state variables.
  const [status, setStatus] = useState(Status.Stopped);
  const [time, setTime] = useState(0.0);

  // Define state variables that won't cause re-render
  let startTime = useRef<number>(0);
  let timerId = useRef<number>(0);

  const startButtonClicked = () => {
    startTime.current = Date.now();
    setStatus(Status.Started);
    timerId.current = window.setInterval(() => {
      setTime((Date.now() - startTime.current) / 1000)
    }, CONSTANTS.ACTIVE_SCREEN.TIMER_UPDATE_INTERVAL_SECS * 1000);
  }

  const pauseButtonClicked = () => {
    clearInterval(timerId.current);
    setStatus(Status.Stopped);
  }

  const renderButton = (title: string, color: string, callback: () => void) => {
    return (
      <View style={styles.controllerButtonContainer}>
        <Button title={title} color={color} onPress={callback}/>
      </View>
    );
  }
  
  const renderButtons = () => {
    if (status === Status.Stopped)
      return renderButton('start', 'blue', startButtonClicked);
    else
      return renderButton('pause', 'purple', pauseButtonClicked);
  }
  


  return (
    <View style={styles.container}>
      <View style={styles.timerContainer}>
        <Text style={styles.timer}>
          {secsToHHMMSS(time)}
        </Text>
      </View>
      <View style={styles.controllerContainer}>
        {renderButtons()}
      </View>
      <View style={styles.historyContainer}>
        <ScrollView>
          <SessionHistoryCard />
          <SessionHistoryCard />
          <SessionHistoryCard />
          <SessionHistoryCard />
          <SessionHistoryCard />
          <SessionHistoryCard />
          <SessionHistoryCard />
          <SessionHistoryCard />
          <SessionHistoryCard />
          <SessionHistoryCard />
          <SessionHistoryCard />
          <SessionHistoryCard />
        </ScrollView>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  timerContainer: {
    flex: 4, 
    justifyContent: 'center',
  },
  timer: {
    textAlign: 'center',
    fontSize: 88,
    fontWeight: '200',
    transform: [ {scaleY: 1.25}],
  },
  controllerContainer: {
    flex: 2,
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  controllerButtonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  historyContainer: {
    flex: 5,
  }
});

export default ActiveSessionScreen;