import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {ARROW, REFER_EARN, STAR} from '../Src/Utils/RequirementData';

const ReferAFriend = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text
          style={{
            marginTop: 10,
            marginHorizontal: 16,
            color: 'black',
            fontWeight: 'bold',
            fontSize: 18,
          }}>
          Rating and Review
        </Text>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={{flexDirection: 'column', marginHorizontal: 16}}>
            <Text style={{fontSize: 50, color: 'black', fontWeight: 'bold'}}>
              4.8
            </Text>
            <Image source={STAR} style={styles.starIcon} />
            <Text style={{fontSize: 12, color: 'black', marginTop: 15}}>
              401775
            </Text>
          </View>
          <Text style={{marginTop:12, marginLeft:12, color: 'black'}}>5</Text>
          <View style={styles.Datacontainer}></View>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    height: 400,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    marginBottom: 20,
  },
  innerContainer: {
    backgroundColor: 'grey',
    height: 365,
    marginHorizontal: 16,
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
  starIcon: {
    width: 20,
    height: 20,
  },
  Datacontainer: {
    height: 10,
    width: '60%',
    backgroundColor: 'white',
    marginTop: 15,
    marginHorizontal: 16,
    borderRadius: 50,
  },
});

export default ReferAFriend;
