import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MonthSelect() {
  return (
    <View style={styles.container}>
      <Text style={styles.month}>October</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    paddingLeft: '10pt',
    paddingRight: '10pt',
    paddingTop: '20pt',
    paddingBottom: '20pt'
  }
});
