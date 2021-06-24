import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalendarNav from './components/CalendarNav';
import Calendar from './views/Calendar';
import Nav from './components/Nav';

export default function App() {
  return (
    <View style={styles.container}>
      <Nav />
      <CalendarNav />
      <Calendar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center'
  }
});
