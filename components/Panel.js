import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const panel = props => {
  return(
    <View style={styles.statistics}>
      <Text style={styles.stat} >{props.content.last_week}</Text>
      <Text>{props.content.this_week}</Text>
      <Text>{props.content.next_week}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  statistics: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  stat: {
    margin: 10


  }
});

export default panel;