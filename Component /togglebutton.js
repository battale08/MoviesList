//import liraries
import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import * as Animatable from 'react-native-animatable';

// create a component
const ToggleButton = () => {
  return (
    <View>
      <TouchableWithoutFeedback>
        <View
          style={styles.backgroundSwitch}
          onLayout={event => {
            // componentWidth = event.nativeEvent.layout.width;
          }}>
          <Animatable.View
            duration={500}
            // ref={handleViewRef}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Text style={styles.textOption1}>CUSTOMER</Text>
            <Text style={styles.textOption2}>PARTNER</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  backgroundSwitch: {
    marginTop: -20,
    backgroundColor: '#F3F7F9',
    height: 30,
    borderRadius: 100,
    justifyContent: 'center',
  },
  textOption1: {
    color: 'white',
    borderRadius: 50,
    fontSize: 13,
    width: 77,
    textAlign: 'center',
    backgroundColor: '#2c3e50',
  },
  textOption2: {
    width: '30%',
    textAlign: 'center',
  },
});

export default ToggleButton;
