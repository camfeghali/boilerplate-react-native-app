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
              // headerShown: false,
              // headerTransparent: true,
              headerTitle: props => <Text style={styles.header}>Camille</Text>,
              headerRight: () => <Button title="Update count" />,

              headerStyle: {
                // position: 'absolute',
                // backgroundColor: 'transparent',
                // zIndex: 100,
                // top: 0,
                // left: 0,
                // right: 0,
                // elevation: 0,
                // shadowOpacity: 0,
                // borderBottomWidth:
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
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
  // headerStyle: {
  //   position: 'absolute',
  //   backgroundColor: 'transparent',
  //   zIndex: 100,
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   elevation: 0,
  //   shadowOpacity: 0,
  //   borderBottomWidth: 0,
  // },

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
    fontSize: 18,
    backgroundColor: '#fff',

    textAlignVertical: 'bottom',
  },
  title: {
    fontSize: 24,
  },
});
