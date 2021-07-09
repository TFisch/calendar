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
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import WeekView from '../Weekview/WeekView';
import MonthSelect from '../MonthSelect/MonthSelect';
import { CalendarContext } from '../../context/CalendarContext';

const CalendarNav = () => {
  //moving animation
  const [isReady, setIsReady] = useState(false);
  const pan = useRef(new Animated.ValueXY()).current;
  const panBack = useRef(new Animated.ValueXY()).current;

  //growing animation
  const grow = useRef(new Animated.Value(500)).current;

  const panResponder = PanResponder.create({
    // Ask to be the responder:
    onStartShouldSetPanResponder: (evt, gestureState) => {},
    onStartShouldSetPanResponderCapture: (evt, gestureState) => {
      //this.startY = pan.y;
      //console.log(this.startY._value);
    },
    onMoveShouldSetPanResponder: (evt, gestureState) => {},
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
        pan.stopAnimation();
        Animated.parallel([
          Animated.timing(panBack, {
            duration: 800,
            toValue: 0,
            easing: Easing.in(Easing.elastic(1)),
            useNativeDriver: false
          }).start(),
          Animated.timing(grow, {
            duration,
            toValue: 600,
            duration: 800,
            easing: Easing.in(Easing.elastic(1)),
            useNativeDriver: false
          }).start()
        ]);
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
    transform: !isReady
      ? pan.getTranslateTransform()
      : panBack.getTranslateTransform(),
    height: !isReady
      ? pan.y.interpolate({
          inputRange: [0, 500],
          outputRange: ['15%', '100%']
        })
      : grow
  };

  useEffect(() => {}, [isReady]);

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
    width: '100%',
    zIndex: 9999
  }
});

export default CalendarNav;
