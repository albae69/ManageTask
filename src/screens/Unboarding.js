// بِسْمِ اللّهِ الرَّحْمَنِ الرَّحِيْ
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import Swiper from '../components/Swiper';

const Unboarding = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Swiper />
      <Text style={styles.skip} onPress={() => navigation.navigate('boarding')}>
        LEWATI
      </Text>
    </View>
  );
};

export default Unboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  skip: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    fontFamily: 'Nunito-Bold',
    fontSize: 13,
    letterSpacing: 2,
  },
});
