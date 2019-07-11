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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import Home from './Main/home.js';
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
import Booking from './Main/booking.js';

//MAIN
import home from './MainTab/home.js';
import profile from './MainTab/profile.js';
import lists from './MainTab/lists.js';
import settings from './MainTab/settings.js';
import history from './MainTab/history.js';
import payment from './MainTab/payment.js';




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

const homeStack = createStackNavigator({
  First :{screen :home,},
  Lists : {screen: lists,},
}, {headerMode:'none'})

const TabNavi = createBottomTabNavigator({
  Yada: {
    screen: homeStack,
    navigationOptions:{
      tabBarLabel: 'home',
      tabBarIcon: ({ tintColor, focused }) => (
      <Icon
        name={focused ? 'home' : 'home-outline'}
        size={26}
        style={{ color: tintColor }}
      />
  )}
  },
  History: {
    screen: history,
    navigationOptions:{
      tabBarLabel: 'History',
      tabBarIcon: ({ tintColor, focused }) => (
      <Icon
        name={focused ? 'history' : 'history'}
        size={26}
        style={{ color: tintColor }}
      />
  )}},
  Profile: {
    screen: profile,
    navigationOptions:{
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor, focused }) => (
      <Icon
        name={focused ? 'account' : 'account-outline'}
        size={26}
        style={{ color: tintColor }}
      />
  )}
  },
  Settings: {
    screen: settings,
    navigationOptions:{
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor, focused }) => (
      <Icon
        name={focused ? 'settings' : 'settings-outline'}
        size={26}
        style={{ color: tintColor }}
      />
  )}
  },
},{
  tabBarOptions: {
        activeTintColor: '#289C3B',
        inactiveTintColor: '#ccc',
        indicatorStyle:{
          bottom: 0,
          backgroundColor: '#289C3B',
        },
      showIcon: true,
      style: { height: 48,backgroundColor: '#fff', borderTopColor:'#289C3B' },
      showLabel: true,
      labelStyle: {
        fontSize: 10,
      }
    }
})


const StackNavi = createStackNavigator ({
  Home: {screen: TabNavi,},
  Login: {screen: Login,},
  Register: {screen: Register,},

},{
  headerMode: 'none',
  initialRouteName: 'Login',
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
