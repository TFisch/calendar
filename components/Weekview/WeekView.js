import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function WeekView() {
  return (
    <View style={styles.container}>
      <View style={styles.weekDayBlock}>
        <Text style={styles.weekDayCopy}>SUN</Text>
        <Text style={styles.weekDateNumCopy}>1</Text>
      </View>
      <View style={styles.weekDayBlock}>
        <Text style={styles.weekDayCopy}>MON</Text>
        <Text style={styles.weekDateNumCopy}>2</Text>
      </View>
      <View style={styles.weekDayBlock}>
        <Text style={styles.weekDayCopy}>TUES</Text>
        <Text style={styles.weekDateNumCopy}>3</Text>
      </View>
      <View style={styles.weekDayBlock}>
        <Text style={styles.weekDayCopy}>WED</Text>
        <Text style={styles.weekDateNumCopy}>4</Text>
      </View>
      <View style={styles.weekDayBlock}>
        <Text style={styles.weekDayCopy}>THU</Text>
        <Text style={styles.weekDateNumCopy}>5</Text>
      </View>
      <View style={styles.weekDayBlock}>
        <Text style={styles.weekDayCopy}>FRI</Text>
        <Text style={styles.weekDateNumCopy}>6</Text>
      </View>
      <View style={styles.weekDayBlock}>
        <Text style={styles.weekDayCopy}>SAT</Text>
        <Text style={styles.weekDateNumCopy}>7</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: '10pt',
    paddingRight: '10pt'
  },
  weekDayBlock: {},
  weekDayCopy: {
    paddingBottom: '10pt',
    fontFamily: 'Roboto-Medium',
    color: '#BEC4C8'
  },
  weekDateNumCopy: {
    textAlign: 'center',
    fontFamily: 'Archivo'
  }
});
