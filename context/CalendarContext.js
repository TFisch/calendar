import React from 'react';
import moment from 'moment';

export const CalendarContext = React.createContext(null);

export default ({ children }) => {
  const [activeDate, setActiveDate] = React.useState(moment());
  const currentDoW = moment().format('dddd');

  const monday = 1;
  const sunday = 7;
  const todayNum = moment().isoWeekday();
  const todayMoment = moment();

  let firstOfWeek;
  let lastOfWeek;

  if (todayNum == 1) {
    firstOfWeek = todayMoment;
  } else {
    const diff = todayNum - 1;
    firstOfWeek = todayMoment.subtract(diff, 'd');
  }

  lastOfWeek = firstOfWeek.clone().add(6, 'd');

  const store = {
    currentTime: {
      currentDate: moment().format('L'),
      currentMonth: moment().format('M'),
      currentYear: moment().format('YYYY'),
      currentDoW: currentDoW,
      firstOfWeek,
      lastOfWeek,
      activeDate: [activeDate, setActiveDate]
    }
  };

  return (
    <CalendarContext.Provider value={store}>
      {children}
    </CalendarContext.Provider>
  );
};
