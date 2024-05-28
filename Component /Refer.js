import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {ARROW, REFER_EARN} from '../Src/Utils/RequirementData';

const ReferAFriend = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.percentage}>5%</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Refer & Earn</Text>
            <Image source={ARROW} resizeMode="contain" />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'column'}}>
          <View style={styles.imageContainer}>
            <Image
              source={REFER_EARN}
              style={{height: 150, width: 165}}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.descriptionBold}>Get 5% back Each </Text>
          <Text style={styles.description}>time your friend</Text>
          <Text style={styles.description}>initiate an booking</Text>
          <Text style={styles.description}>with us</Text>
          <TouchableOpacity style={styles.learnMoreButton}>
            <Text style={styles.learnMoreText}>How it works?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 35,
    height: 312,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'white',
    backgroundColor: '#2c3e50',
    marginBottom: 20,
  },
  innerContainer: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    flexDirection: 'row',
    marginVertical: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  percentage: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#F47526',
    marginTop: 20,
    marginHorizontal: 16,
    marginBottom: 10,
  },
  imageContainer: {
    alignItems: 'flex-start',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 16,
    flexWrap: 'wrap',
  },
  descriptionBold: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    backgroundColor: '#F47526',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 16,
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 4,
    marginRight: 8,
  },
  learnMoreButton: {
    alignItems: 'center',
    marginBottom: 20,
  },
  learnMoreText: {
    color: '#F47526',
    textDecorationLine: 'underline',
  },
});

export default ReferAFriend;
