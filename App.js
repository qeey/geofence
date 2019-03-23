/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import Home from './Main/home.js';
import Login from './LoginAndRegister/Login.js';
import Register from './LoginAndRegister/Register.js';
import Payment from './Main/payment.js';
import Service from './Main/services.js';
import Battery from './Main/battery.js';
import Belts from './Main/belts.js';
import Blackoil from './Main/blackoil.js';
import Brake from './Main/brake.js';
import Enginelight from './Main/enginelight.js';
import Exhaust from './Main/exhaust.js';
import Steering from './Main/steering.js';
import Tyre from './Main/tyre.js';
import carInfo from './Main/carInfo.js';
import ownerInfo from './Main/ownerInfo.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class App extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const StackNavi = createStackNavigator ({
  Home: {screen: Home,},
  Login: {screen: Login,},
  Register: {screen: Register,},
  Payment:  {screen: Payment,},
  Service:   {screen: Service,},
  Battery: {screen: Battery,},
  Belts: {screen: Belts,},
  Blackoil: {screen: Blackoil,},
  Brake: {screen: Brake,},
  Enginelight : {screen: Enginelight,},
  Exhaust: {screen: Exhaust,},
  Steering: {screen: Steering,},
  Tyre: {screen: Tyre,},
  carInfo: {screen: carInfo,},
  ownerInfo: {screen: ownerInfo},
},{
  headerMode: 'none',
  initialRouteName: 'Home',
  })

export default StackNavi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
