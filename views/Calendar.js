import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { mockAppointments } from '../components/data/mockData';
import { CalendarContext } from '../context/CalendarContext';

export default function Calendar() {
  const { currentTime } = React.useContext(CalendarContext);

  const activeDate = currentTime.activeDate[0].format('L');
  const activeAppts = mockAppointments.filter(
    (appt) => appt.date === activeDate
  );

  const renderAppts = activeAppts.map((appt) => (
    <View style={styles.apptContainer} key={appt.id}>
      <Text style={styles.apptTime}>{appt.time}</Text>
      <View style={styles.appt}>
        <Text>{appt.title}</Text>
      </View>
    </View>
  ));

  return <ScrollView style={styles.container}>{renderAppts}</ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    width: '100%',
    height: 500
  },
  apptContainer: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  apptTime: {
    flex: 1,
    textAlign: 'center'
  },
  appt: {
    border: 'solid lime 2px',
    borderRadius: '6px',
    marginTop: '20px',
    marginBottom: '20px',
    paddingTop: '20px',
    marginRight: '20px',
    paddingBottom: '20px',
    paddingLeft: '10px',
    // marginLeft: '40px',
    // marginRight: '10px',
    flex: 3
  }
});
