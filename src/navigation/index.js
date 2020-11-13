// بِسْمِ اللّهِ الرَّحْمَنِ الرَّحِيْ
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from '../screens/Splash';
import Unboarding from '../screens/Unboarding';
import Boarding from '../screens/Boarding';

const Navigation = () => {
  const Stack = createStackNavigator();
  const [loading, setLoading] = useState(false);

  return loading ? (
    <Splash />
  ) : (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: null}}>
        <Stack.Screen name="unboarding" component={Unboarding} />
        <Stack.Screen name="boarding" component={Boarding} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
