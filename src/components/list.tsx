import React from 'react';
import {
  Image,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function List() {
  return (
    <SectionList
      showsVerticalScrollIndicator={false}
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => <Item title={item} />}
      // renderSectionHeader={({section: {title}}) => (
      //   <Text style={styles.header}>{title}</Text>
      // )}
    />
  );
}

const Item = ({title}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('FoodScreen', {
          title,
        });
      }}>
      <View style={styles.item}>
        <View>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://www.pact-zollverein.de/files/styles/1340w__3by2/public/redaktion/_DSC6027Jefta%20van%20Dinther_%C2%A9%20Urban%20J%C3%B6r%C3%A9n_1.jpg?h=a51a5cf9&itok=EcYxUCq0',
            }}
          />
        </View>
        <View style={{paddingLeft: 14}}>
          <Text style={styles.date}>Oct 29, 10:00AM - Nov 29, 10:00PM</Text>
          <Text style={styles.title}>LINK | Open Call</Text>

          <Text style={styles.who}>Jefta von Dinther</Text>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.location}>Berlin, Germany</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fffff',
    // paddingHorizontal: 4,
    marginVertical: 10,
    borderRadius: 2,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  date: {
    flex: 1,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#d1410c',
  },
  title: {
    fontSize: 16,
    flex: 2,
    color: '#39364f',
    fontWeight: 'bold',
  },
  who: {
    fontSize: 13,
    color: '#39364f',
    fontWeight: 'bold',
  },
  location: {
    fontSize: 12,
    color: 'light-grey',
    justifyContent: 'flex-end',
  },
  tinyLogo: {
    width: 90,
    height: 90,
  },
});
