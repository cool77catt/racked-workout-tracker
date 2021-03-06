/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, { useState, useContext } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { darkTheme } from './themes';
import { ThemeContext }  from './contexts';
// import { ActiveWorkoutContext } from './contexts';
import { RootStackParamList } from './RootStackParams';
import ActiveSessionScreen from './scenes/ActiveSessionScreen';
import HomeScreen from './scenes/HomeScreen';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {

  const isDarkMode = useColorScheme() === 'dark';


  const theme = isDarkMode ? darkTheme : darkTheme;

  const backgroundStyle = {
      backgroundColor: theme.backgroundColor,
  };

  console.log(isDarkMode);
  console.log(theme);

  const navigationTheme = {
    dark: isDarkMode,
    colors: {
      primary: theme.primary,
      background: theme.backgroundColor,
      card: theme.backgroundColor,
      text: theme.text,
      border: theme.text,
      notification: 'rgb(255, 69, 58)',
    }
  }

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={[backgroundStyle, styles.container]}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <NavigationContainer theme={navigationTheme}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Homeboy" }} />
            <Stack.Screen 
              name="ActiveSession" 
              component={ActiveSessionScreen} 
              options={({route}) => ({ title: route?.params?.workout.title })} 
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </ThemeContext.Provider>
  );

  //  return (
  //    <SafeAreaView style={backgroundStyle}>
  //      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  //      <ScrollView
  //        contentInsetAdjustmentBehavior="automatic"
  //        style={backgroundStyle}>
  //        <Header />
  //        <View
  //          style={{
  //            backgroundColor: isDarkMode ? Colors.black : Colors.white,
  //          }}>
  //          <Section title="Step One">
  //            Edit <Text style={styles.highlight}>App.js</Text> to change this
  //            screen and then come back to see your edits.
  //          </Section>
  //          <Section title="See Your Changes">
  //            <ReloadInstructions />
  //          </Section>
  //          <Section title="Debugcketall">
  //            <DebugInstructions />
  //          </Section>
  //          <Section title="Learn More">
  //            Read the docs to discover what to do next:
  //          </Section>
  //          <LearnMoreLinks />
  //        </View>
  //      </ScrollView>
  //    </SafeAreaView>
  //  );
 };


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//  const styles = StyleSheet.create({
//    sectionContainer: {
//      marginTop: 32,
//      paddingHorizontal: 24,
//    },
//    sectionTitle: {
//      fontSize: 24,
//      fontWeight: '600',
//    },
//    sectionDescription: {
//      marginTop: 8,
//      fontSize: 18,
//      fontWeight: '400',
//    },
//    highlight: {
//      fontWeight: '700',
//    },
//  });

 export default App;
