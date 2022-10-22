import * as React from 'react';
import {Button, StatusBar, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {HomeStackScreen} from './src/screens/home';
import {ProfileStackScreen} from './src/screens/profile';
import {SettingsStackScreen} from './src/screens/settings';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar animated={true} backgroundColor="#61dafb" hidden={false} />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Settings" component={SettingsStackScreen} />
          <Tab.Screen name="Profile" component={ProfileStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
