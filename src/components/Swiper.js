// بِسْمِ اللّهِ الرَّحْمَنِ الرَّحِيْ
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Swiper from 'react-native-swiper';

import {addTask, notification, timeManagement} from '../assets/images';

const SwiperComponent = () => {
  const data = [
    {
      id: 0,
      title: 'ATUR JADWALMU',
      subTitle:
        'DENGAN AKTIVITASKU, KAMU BISA MENGATUR JADWAL, KEGIATAN YANG AKAN KAMU LAKUKAN.',
      img: addTask,
    },
    {
      id: 1,
      title: 'SELALU TEPAT WAKTU',
      subTitle:
        'GUNAKAN PEMBATAS WAKTU, UNTUK MEMPRIORITAS KAN KEGIATAN YANG AKAN DILAKUKAN',
      img: timeManagement,
    },
    {
      id: 2,
      title: 'DAPATKAN PENGINGAT!',
      subTitle:
        'ATUR PENGINGAT UNTUK MELAKUKAN PEMBERITAHUAN SEHINGGA KAMU TIDAK MELEWATKAN KEGIATANMU!',
      img: notification,
    },
  ];

  return (
    <Swiper
      horizontal={true}
      loop={false}
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.dotStyle}>
      {data.map((item) => (
        <View style={styles.container} key={item.id}>
          <View style={styles.wrapTitle}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subTitle}>{item.subTitle}</Text>
          </View>
          <Image source={item.img} style={styles.img} />
        </View>
      ))}
    </Swiper>
  );
};
export default SwiperComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  wrapTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    padding: 20,
  },
  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 24,
  },
  subTitle: {
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
    width: 250,
  },
  img: {
    marginTop: 50,
  },
  dotStyle: {
    position: 'relative',
    left: 140,
  },
});
