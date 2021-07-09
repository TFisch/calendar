import moment from 'moment';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CalendarContext } from '../../context/CalendarContext';
import { days } from '../data/days';
import { mockAppointments } from '../data/mockData';

export default function WeekView() {
  const { currentTime } = React.useContext(CalendarContext);
  const firstDate = JSON.parse(currentTime.firstOfWeek.format('D'));
  const activeDateNum = currentTime.activeDate[0].isoWeekday();
  const setActiveDate = currentTime.activeDate[1];
  const currentMonth = currentTime.currentMonth;
  const currentYear = currentTime.currentYear;
  const daysToRender = [];

  for (let i = 1; i <= 7; i++) {
    const isActiveDay = activeDateNum === i;
    const displayDate = i === 1 ? firstDate : firstDate + i - 1;

    const concatDate =
      currentMonth.toString() +
      '-' +
      displayDate.toString() +
      '-' +
      currentYear.toString();

    if (isActiveDay) {
      daysToRender.push(
        <View style={styles.weekDayBlock} key={'day' + i}>
          <Text style={styles.weekDayCopy}>{days[i - 1].abbrev}</Text>
          <Text style={styles.activeWeekDateNumCopy}>{displayDate}</Text>
        </View>
      );
    } else {
      daysToRender.push(
        <View style={styles.weekDayBlock} key={'day' + i}>
          <Text style={styles.weekDayCopy}>{days[i - 1].abbrev}</Text>
          <Text
            style={styles.weekDateNumCopy}
            onPress={() => {
              setActiveDate(moment(concatDate, 'MM-DD-YYYY'));
            }}
          >
            {displayDate}
          </Text>
        </View>
      );
    }
  }

  return <View style={styles.container}>{daysToRender}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '50px',
    width: '100%',
    paddingLeft: '10px',
    paddingRight: '10px',
    height: 60
  },
  weekDayBlock: {},
  weekDayCopy: {
    paddingBottom: '10px',
    fontFamily: 'Roboto-Medium',
    color: '#BEC4C8'
  },
  weekDateNumCopy: {
    textAlign: 'center',
    fontFamily: 'Archivo'
  },
  activeWeekDateNumCopy: {
    textAlign: 'center',
    fontFamily: 'Archivo',
    color: 'yellow'
  }
});
