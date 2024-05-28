//import liraries
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  CONVENIENT,
  EXP,
  HOW_IT_WORKS,
  PHONE,
  PRESENCE,
  PUNCTUAL,
  SAFE,
  TRUSTED,
} from '../Src/Utils/RequirementData';

// create a component
const Information = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <Text style={styles.textContainer}>
          our drivers are briefed about the importance of time, Also we track
          their performance & provide them feedback as & when required.
        </Text>
        <View
          style={{flexDirection: 'row', marginTop: 63, marginHorizontal: 16}}>
          <Text style={styles.yourSafety}>Your Safety Matters</Text>
          <Image
            source={PHONE}
            style={styles.imageStyle}
            resizeMode="contain"
          />
          <Text style={styles.numberText}>9999160322</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <View style={styles.Datacontainer}>
            <Image source={SAFE} resizeMode="contain" />
          </View>
          <Text style={{color: 'white', marginTop: 2,fontSize:12}}>Safe</Text>
        </View>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <View style={styles.Datacontainer}>
            <Image source={TRUSTED} resizeMode="contain" />
          </View>
          <Text style={{color: 'white', marginTop: 2,fontSize:12}}>Trained</Text>
        </View>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <View style={styles.Datacontainer}>
            <Image source={EXP} resizeMode="contain" />
          </View>
          <Text style={{color: 'white', marginTop: 2,fontSize:12}}>Experienced</Text>
        </View>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <View style={styles.Datacontainer}>
            <Image source={PUNCTUAL} resizeMode="contain" />
          </View>
          <Text style={{color: 'white', marginTop: 2,fontSize:12}}>Punctual</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <View style={styles.Datacontainer}>
            <Image source={PHONE} resizeMode="contain" />
          </View>
          <Text style={{color: 'white', marginTop: 2,fontSize:12}}>24*7 Services</Text>
        </View>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <View style={styles.Datacontainer}>
            <Image source={PRESENCE} resizeMode="contain" />
          </View>
          <Text style={{color: 'white', marginTop: 2,fontSize:12}}>Presence</Text>
        </View>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <View style={styles.Datacontainer}>
            <Image source={CONVENIENT} resizeMode="contain" />
          </View>
          <Text style={{color: 'white', marginTop: 2,fontSize:12}}>Convenient</Text>
        </View>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <View style={styles.Datacontainer}>
            <Image source={HOW_IT_WORKS} resizeMode="contain" />
          </View>
          <Text style={{color: 'white', marginTop: 2,fontSize:12}}>How It Works</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 35,
    height: 425,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'white',
    backgroundColor: '#2c3e50',
    marginBottom: 20,
  },
  innercontainer: {
    height: 225,
    backgroundColor: 'white',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  textContainer: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    color: 'black',
    lineHeight: 30,
    fontSize: 16,
  },
  yourSafety: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
  },
  imageStyle: {
    marginHorizontal: 16,
    marginLeft: 100,
    height: 16,
    width: 16,
    marginTop: 2,
  },
  numberText: {
    color: '#2c3e50',
    fontWeight: 'bold',
    fontSize: 14,
  },
  Datacontainer: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    marginTop: 20,
    marginHorizontal: 16,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Information;
