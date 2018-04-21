import React from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Linking,
  Vibration
} from 'react-native';


import Usages from './components/Usages';
import Weather from './components/Weather';
import Climate from './components/Climate';


export default class App extends React.Component {

  state = {
  usagesClicked: false,
  weatherClicked: false,
  climateClicked: false,
  showWeb: false,

  data: {
    power: {
      last_week: 100,
      this_week: 101,
      next_week: 102
    },
    water: {
      last_week: 200,
      this_week: 201,
      next_week: 202
    },
    hvac: {
      thermostat: null
    },
    climate: {
      intemp: null,
      description: null,
      humidity: null,
      extemp: null
    }
  }
};

  componentDidMount() {
    const actual = 'http://localhost:3000/profile';
    const dev = 'https://gist.githubusercontent.com/U09Kane/f71c3e76dd8e53aa8ef9b1dee44647c2/raw/658a47ac4797f732dc0cbca5e56520997366ccb0/updatedRequest';
    axios.get(dev)
      .then(response => {
        this.setState({
          data: {
            power: response.data.power,
            water: response.data.water,
            hvac: response.data.hvac,
            climate: response.data.climate,
          }
        });
      });
  }

  usagesClickHandler = () => {
    this.setState({
      usagesClicked: true,
      weatherClicked: false,
      climateClicked: false
    });
  };

  weatherClickHandler = () => {
    this.setState({
      usagesClicked: false,
      weatherClicked: true,
      climateClicked: false
    });
  };

  climateClickHandler = () => {
    this.state = {
      climateClicked: true,
      usagesClicked: false,
      weatherClicked: false
    };
    Alert.alert('The climate button behaves really strangely');
  };

  render() {
    let body = null;
    if (this.state.usagesClicked) {
      body = <Usages
              power={this.state.data.power}
              water={this.state.data.water} />

    } else if (this.state.weatherClicked) {
      body = <Weather
        content={this.state.data.climate}
        pressed={this.permissionRequestHandler} />

    } else {
      body = <Climate
        content={this.state.data.hvac} />
    }

    

    return (
      <View style={styles.container}>
        <View style={styles.buttonRow}>
          <Button title="Usages" onPress={this.usagesClickHandler}/>
          <Button title="Weather" onPress={this.weatherClickHandler}/>
          <Button title="Climate" onPress={this.climateClickHandler}/>
        </View>
        <View style={styles.body}>
          { body }
        </View>
        <Button title="Vibration" onPress={Vibration.vibrate()}/>
        <Button title="See Orignial React App" onPress={() => { Linking.openURL('https://github.com/U09Kane/Smart-Home-WebApp') }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRow: {
    flex: 0,
    flexDirection: 'row'
  }
});
