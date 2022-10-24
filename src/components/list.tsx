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
      style={styles.item}
      onPress={() => {
        navigation.navigate('FoodScreen', {
          title,
        });
      }}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://www.pact-zollverein.de/files/styles/1340w__3by2/public/redaktion/_DSC6027Jefta%20van%20Dinther_%C2%A9%20Urban%20J%C3%B6r%C3%A9n_1.jpg?h=a51a5cf9&itok=EcYxUCq0',
        }}
      />
      <View
        style={{
          paddingLeft: 14,
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Text style={styles.title}>
            27TH VUE SUR LA RELÈVE FESTIVAL -{' '}
            <Text style={styles.who}>Jefta van Dinther</Text>
          </Text>
        </View>

        <Text style={styles.when}>OCT 16 - NOV 29</Text>

        <View style={styles.bottomRow}>
          <Text style={styles.location}>Berlin, Germany</Text>
          <Text style={styles.date}>Deadline:{'\n'}Nov 29, 10:00PM</Text>
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
    marginVertical: 10,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  image: {
    width: 90,
    height: 90,
    border: 'solid',
    borderWidth: 1,
    borderColor: 'silver',
  },
  title: {
    fontSize: 16,
    flex: 1,
    flexWrap: 'wrap',
    color: '#39364f',
    fontWeight: '400',
  },
  who: {
    fontSize: 13,
    color: '#39364f',
    fontWeight: '400',
  },
  when: {
    fontSize: 12,
    color: '#39364f',
    fontWeight: '400',
  },
  bottomRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  location: {
    fontSize: 12,
    color: 'light-grey',
    fontWeight: '400',
    // textAlignVertical: 'bottom',
  },
  date: {
    fontSize: 12,
    color: '#d1410c',
    fontWeight: '300',
    // textAlignVertical: 'bottom',
  },
});
