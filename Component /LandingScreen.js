//import liraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ToggleButton from './togglebutton';
import Requirement from './Requirement';
import {LOGO} from '../Src/Utils/RequirementData';
import BottomTabNavigator from '../BottomNavigator';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from '../BottomNavigator';
import ReferAFriend from './Refer';
import Information from './information';
import Rating from './Rating&Riview';

// create a component
const LandingScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <Image source={LOGO} style={styles.logoStyle} resizeMode="contain" />
          <Text style={styles.logoTextStyle}>tat d</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'white', fontSize: 8, marginHorizontal: 40}}>
            family ke liye driver
          </Text>
          <ToggleButton />
        </View>
        <Requirement />
        <ReferAFriend />
        <Information />
        <View>
          <Rating />
        </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
  },
  logoStyle: {
    height: 32,
    width: 97,
    marginTop: 10,
    marginHorizontal: -18,
  },
  logoTextStyle: {
    marginTop: 14,
    color: 'white',
    fontSize: 24,
    marginHorizontal: -8,
  },
});

//make this component available to the app
export default LandingScreen;
