import * as React from 'react';
import {Button, StatusBar, Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {HomeStackScreen} from './src/screens/home';
import {ProfileStackScreen} from './src/screens/profile';
import {SettingsStackScreen} from './src/screens/settings';

const Tab = createBottomTabNavigator();

import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar animated={true} backgroundColor="#61dafb" hidden={true} />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home-outline';
              } else if (route.name === 'Settings') {
                iconName = 'settings-outline';
              } else {
                iconName = 'person-outline';
              }

              return <Icon name={iconName} />;
            },
            tabBarActiveTintColor: 'purple',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Settings" component={SettingsStackScreen} />
          <Tab.Screen name="Profile" component={ProfileStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});
