import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Nav(props) {
  console.log(props);
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
    height: 50,
    width: '100%'
  }
});
