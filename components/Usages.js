import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const usages = props => {
  return(
    <View>
      <Text style={styles.header}>Power</Text>
      <Text>{Math.round(props.power.last_week)} kw</Text>
      <Text>{Math.round(props.power.this_week)} kw</Text>
      <Text>{Math.round(props.power.next_week)} kw</Text>
      <Text style={styles.header}>Water</Text>
      <Text>{Math.round(props.water.last_week)} gal</Text>
      <Text>{Math.round(props.water.this_week)} gal</Text>
      <Text>{Math.round(props.water.next_week)} gal</Text>
    </View>
  );
};

const styles = StyleSheet.create({

  header: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10
  }
});

export default usages;