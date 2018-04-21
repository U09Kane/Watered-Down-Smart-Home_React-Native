import React from 'react';
import { View, Text, Stylesheet, Button, Permis} from 'react-native';

const weather = props => {
  return (
    <View>
      <Text>Temperature: {props.content.extemp}</Text>
      <Text>Humidity: {props.content.humidity}</Text>
      <Text>Description: {props.content.description}</Text>
    </View>
  );
};

export default weather;