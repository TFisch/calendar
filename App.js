import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalendarNav from './components/CalendarNav';
import Calendar from './views/Calendar';
import Nav from './components/Nav';
import { useFonts } from 'expo-font';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Public Sans': require('./assets/fonts/PublicSans-Regular.ttf')
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Nav />
        <CalendarNav />
        <Calendar />
        <Text style={styles.test}>Test if works</Text>
        <Text>Test if works</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center'
  },
  test: {
    fontFamily: 'Public Sans'
  }
});
