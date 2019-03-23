import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class payment extends React.Component{
  render(){
    return(
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>PAYMENT</Text>
        <Icon name="home" size={40} color="purple" />

        <View>
          <Text> Cash </Text>
          </View>

          <View>
          <Text> CREDIT CARD</Text>
          </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  kotak:{
    borderWidth: 1,
    color: '#eec64f',
    padding:10,
    marginTop: 10
  },
})
