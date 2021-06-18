import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.drag}>
        <Text style={styles.dragText}>Drag me down</Text>
      </View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center'
  },
  drag: {
    backgroundColor: '#000',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 100
  },
  dragText: {
    color: 'white'
  }
});
