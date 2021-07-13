import React, {useState, useRef, useEffect}  from 'react';
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
import SetDetailsCard from '../components/SetDetailsCard';
import SessionHistoryCard from '../components/SessionHistoryCard';


type ActiveSessionScreenNavProp = StackNavigationProp<RootStackParamList, 'ActiveSession'>;
type ActiveSessionScreenRouteProp = RouteProp<RootStackParamList, 'ActiveSession'>;

type ActiveSessionScreenProps = {
  navigation: ActiveSessionScreenNavProp,
  route: ActiveSessionScreenRouteProp,
};

enum Status {
  Waiting,
  Running,
  Paused,
  Finished,
};

// const ActiveSessionScreen = (props: activeSessionScreenProps) => {
const ActiveSessionScreen = ({navigation, route}: ActiveSessionScreenProps) => {

  // Define state variables.
  const [status, setStatus] = useState(Status.Waiting);
  const [time, setTime] = useState(0.0);
  const [circuitIndex, setCircuitIndex] = useState(0);
  const [sequenceIndex, setSequenceIndex] = useState(0);

  // Define state variables that won't cause re-render
  let startTime = useRef<number>(0);
  let timeOffset = useRef<number>(0);
  let timerId = useRef<number>(0);

  // Setup navigation event listener
  useEffect(() => {
    navigation.addListener('beforeRemove', e => {
      // Check if the workout session has finished
      // if (status === Status.Finished) {
      //   return;
      // }

      // Stop the timer
      clearInterval(timerId.current);

      // Ask if the user wants to quit the session or keep going
      console.log('Leaving betch');
    });
  }, []);

  // Define handler for the start button clicked
  const startButtonClicked = () => {
    startTime.current = Date.now();
    setStatus(Status.Running);
    timerId.current = window.setInterval(() => {
      setTime((Date.now() - startTime.current + timeOffset.current) / 1000)
    }, CONSTANTS.ACTIVE_SCREEN.TIMER_UPDATE_INTERVAL_SECS * 1000);
  }

  // Define handler for pause button clicked
  const pauseButtonClicked = () => {
    timeOffset.current += Date.now() - startTime.current;
    clearInterval(timerId.current);
    setStatus(Status.Paused);
  }

  // Handler for lap button press
  const lapButtonClicked = () => {
    // clearInterval(timerId.current);
    // setStatus(Status.Paused);
    console.log("lap");
  }

  const renderButton = (title: string, color: string, callback: () => void) => {
    return (
      <View style={styles.controllerButtonContainer}>
        <Button title={title} color={color} onPress={callback}/>
      </View>
    );

  }
  
  const renderButtons = () => {
    if (status === Status.Waiting)
      return renderButton('start', 'blue', startButtonClicked);
    else if (status === Status.Running)
      return (
        <>
          {renderButton('pause', 'purple', pauseButtonClicked)}
          {renderButton('lap', 'purple', lapButtonClicked)}
        </>
      );
    else if (status === Status.Paused)
      return (
        <>
          {renderButton('resume', 'purple', startButtonClicked)}
        </>
      );
    else
      return;
  }
  


  return (
    <View style={styles.container}>
      <View style={styles.timerContainer}>
        <Text style={styles.timer}>
          {secsToHHMMSS(time)}
        </Text>
      </View>
      <View>
        <SetDetailsCard name='Bench' setNumber={2} currentWeight={125} />
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