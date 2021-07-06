import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import CalendarNav from './components/CalendarNav/CalendarNav';
import Calendar from './views/Calendar';
import Nav from './components/Nav/Nav';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
const { height } = Dimensions.get('window');
import CalendarContext from './context/CalendarContext';

let customFonts = {
  'Public Sans': require('./assets/fonts/PublicSans-Regular.ttf'),
  Archivo: require('./assets/fonts/ArchivoBlack-Regular.ttf'),
  'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf')
};

export default class App extends React.Component {
  state = {
    fontsLoaded: false
  };
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>
          <CalendarContext>
            <Nav />
            <CalendarNav />
            <Calendar />
          </CalendarContext>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    height
  },
  test: {
    fontFamily: 'Archivo',
    color: 'orange'
  }
});
