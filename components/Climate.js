import React from 'react';
import { View, Text, Stylesheet } from 'react-native';

const climate = props => {
  return (
    <View>
      <Text>Thermostat Setting: {props.content.thermostat}</Text>
    </View>
  );
};

export default climate;