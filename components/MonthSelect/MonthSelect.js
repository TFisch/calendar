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
    alignItems: 'center',
    width: '100%',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '20px',
    paddingBottom: '20px',
    flex: 1
  }
});
