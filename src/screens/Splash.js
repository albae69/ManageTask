// بِسْمِ اللّهِ الرَّحْمَنِ الرَّحِيْ
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Splash = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Management Task</Text>
    </View>
  );
};

export default Splash;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 24,
  },
});
