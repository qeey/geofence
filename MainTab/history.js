import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class History extends React.Component{
  render(){
    return(
      <SafeAreaView style={{flex:1, backgroundColor:'#383838'}}>
        <View style={{backgroundColor:'#289C3B', height:44, alignItems:'center', justifyContent:'center'}}>
          <Text style={{color:'white', fontWeight:'bold'}}>History</Text>
        </View>

        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <Text style={{color:'white'}}>No history at the moment</Text>
        </View>
      </SafeAreaView>
    )
  }
}
