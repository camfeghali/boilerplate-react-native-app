import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {DetailsScreen} from './details';
import List from '../components/list';
import {SearchBar} from '../components/searchbar';

const HomeStack = createNativeStackNavigator();

export function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen
        name="Home Special"
        component={HomeScreen}
        options={{
          headerShown: false,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <HomeStack.Screen
        options={{
          headerShown: true,
        }}
        name="FoodScreen"
        component={FoodScreen}
      />
    </HomeStack.Navigator>
  );
}

function FoodScreen({route, navigation}) {
  console.log(navigation);
  let {title} = route.params;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <Text> {title}</Text>
    </View>
  );
}

function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <View>
        <SearchBar></SearchBar>
      </View>
      <List></List>
    </View>
  );
}
