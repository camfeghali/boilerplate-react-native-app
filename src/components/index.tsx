import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export type Props = {
  name: string;
};

const Hello: React.FC<Props> = ({name}) => {
  return (
    <View>
      <Text>Hello {name}</Text>
    </View>
  );
};

export default Hello;
