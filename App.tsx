import * as React from 'react';
import {
  Button,
  StatusBar,
  Text,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {BlurView} from 'expo-blur';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {HomeStackScreen} from './src/screens/home';
import {ProfileStackScreen} from './src/screens/profile';
import {SettingsStackScreen} from './src/screens/settings';
import {SearchBar} from './src/components/searchbar';

const Tab = createBottomTabNavigator();

import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar animated={true} backgroundColor="#61dafb" hidden={false} />
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              headerTitleAlign: 'left',
              headerTitle: props => <Text style={styles.header}>Camille</Text>,
            }}
          />
          <Tab.Screen name="Profile" component={ProfileStackScreen} />
          <Tab.Screen name="Settings" component={SettingsStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const screenOptions = ({route}) => ({
  tabBarActiveTintColor: 'purple',
  tabBarInactiveTintColor: 'gray',

  tabBarIcon: ({focused, color, size}) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = 'home-outline';
    } else if (route.name === 'Settings') {
      iconName = 'settings-outline';
    } else {
      iconName = 'person-outline';
    }

    return <Icon name={iconName} size={22} />;
  },
});

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
    fontSize: 22,
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
  },
});
