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
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    flex: 0.5,
    width: '100%'
  }
});
