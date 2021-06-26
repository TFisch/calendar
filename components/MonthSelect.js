import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MonthSelect() {
  return (
    <View style={styles.container}>
      <Text>October</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    paddingLeft: '10px',
    paddingRight: '40px',
    backgroundColor: 'purple'
  }
});
