import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Nav() {
  return (
    <View style={styles.container}>
      <Text>Here da nav!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    alignItems: 'center',
    height: '100',
    width: '100%'
  }
});
