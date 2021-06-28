import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import {
  Animated,
  PanResponder,
  Easing,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView
} from 'react-native';

import WeekView from '../Weekview/WeekView';
import MonthSelect from '../MonthSelect/MonthSelect';

const CalendarNav = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    // Ask to be the responder:
    onStartShouldSetPanResponder: (evt, gestureState) => {
      console.log('should start');
    },
    onStartShouldSetPanResponderCapture: (evt, gestureState) => {
      console.log('capture');
      //this.startY = pan.y;
      //console.log(this.startY._value);
    },
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      console.log('should set');
    },
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

    onPanResponderGrant: (evt, gestureState) => {
      pan.setOffset(pan.__getValue());
      pan.setValue({ x: 0, y: 0 });

      // The gesture has started. Show visual feedback so the user knows
      // what is happening!
      // gestureState.d{x,y} will be set to zero now
    },
    onPanResponderMove: (e, gs) => {
      Animated.event([null, { dy: pan.y }], {
        useNativeDriver: false
      })(e, gs);
    },
    //   onPanResponderMove: Animated.event([null, { dy: pan.y }]),
    onPanResponderTerminationRequest: (evt, gestureState) => true,
    onPanResponderRelease: (e, { dy }) => {
      const startValue = 0;
      const duration = 500;
      // snap back animation
      if (dy > 0 && Math.abs(dy) < 120) {
        Animated.timing(pan, {
          duration,
          toValue: startValue,
          easing: Easing.in(Easing.elastic(1)),
          useNativeDriver: false
        }).start();
      } else {
        //this.state.calendarViewActive = true;
      }
    },
    onPanResponderTerminate: (evt, gestureState) => {
      // Another component has become the responder, so this gesture
      // should be cancelled
    },
    onShouldBlockNativeResponder: (evt, gestureState) => {
      // Returns whether this component should block native components from becoming the JS
      // responder. Returns true by default. Is currently only supported on android.
      return true;
    }
  });

  const animatedStyle = {
    transform: pan.getTranslateTransform()
  };

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[styles.container, animatedStyle]}
    >
      <MonthSelect />
      <WeekView />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    flex: 2,
    width: '100%',
    zIndex: 9999
  }
});

export default CalendarNav;
