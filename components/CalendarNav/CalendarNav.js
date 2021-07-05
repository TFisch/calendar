import React, { useRef, useState, useEffect } from 'react';
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
  //moving animation
  const [isReady, setIsReady] = useState(false);
  const pan = useRef(new Animated.ValueXY()).current;
  //growing animation
  const grow = useRef(new Animated.Value(500)).current;

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
      if (!isReady) {
        Animated.event([null, { dy: pan.y }], {
          useNativeDriver: false
        })(e, gs);
      }
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
        setIsReady((current) => true);
        Animated.timing(grow, {
          duration,
          toValue: 600,
          duration: 800,
          easing: Easing.in(Easing.elastic(1)),
          useNativeDriver: false
        }).start();
        pan.stopAnimation();
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
    transform: pan.getTranslateTransform(),
    height: !isReady
      ? pan.y.interpolate({
          inputRange: [0, 500],
          outputRange: [100, 500]
        })
      : grow
  };

  useEffect(() => {
    console.log(isReady);
  }, [isReady]);

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
    backgroundColor: 'blue',
    alignItems: 'center',
    //flex: 2,
    width: '100%',
    zIndex: 9999
  }
});

export default CalendarNav;
