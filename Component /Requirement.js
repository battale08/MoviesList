//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {services} from '../Src/Utils/RequirementData';
import {Image} from 'react-native-animatable';

// create a component
const Requirement = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>I Require ?</Text>
      <View style={styles.hairline} />
      <View style={styles.grid}>
        {services.map((service, index) => (
          <View style={styles.gridItem} key={index}>
            <Image source={service.image} style={styles.image} />
            <Text style={styles.text}>{service.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    backgroundColor: 'white',
    marginTop: 25,
    borderRadius: 8,
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 25,
  },
  hairline: {
    marginTop: 15,
    backgroundColor: 'black',
    height: 1,
    width: '90%',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  gridItem: {
    height: 32,
    width: 97,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  image: {
    width: '45%',
    height: '40%',
    resizeMode: 'contain',
  },
  text: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 3,
  },
});

export default Requirement;
