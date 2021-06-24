import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import {
  Animated,
  PanResponder,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView
} from 'react-native';

class CalendarNav extends Component {
  componentWillMount() {
    this.animatedValue = new Animated.ValueXY();
    this.panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => {
        console.log('should start');
      },
      onStartShouldSetPanResponderCapture: (evt, gestureState) => {
        console.log('capture');
        this.startY = this.animatedValue.y;
        console.log(this.startY._value);
      },
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        console.log('should set');
      },
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        this.animatedValue.setOffset(this.animatedValue.__getValue());
        this.animatedValue.setValue({ x: 0, y: 0 });
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: Animated.event([null, { dy: this.animatedValue.y }]),
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (e, { dy }) => {
        const startValue = 0;
        const duration = 500;
        // snap back animation
        if (dy > 0 && Math.abs(dy) < 200) {
          Animated.timing(this.animatedValue, {
            duration,
            toValue: startValue
          }).start();
        } else {
          //render calendar
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
  }

  render() {
    const animatedStyle = {
      transform: this.animatedValue.getTranslateTransform()
    };
    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={[styles.container, animatedStyle]}
      >
        <Text>This will be the pull downnnn</Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    alignItems: 'center',
    height: '100'
  }
});

export default CalendarNav;
