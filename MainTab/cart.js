import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class Cart extends React.Component{
  render(){
    return(
      <SafeAreaView style={{flex:1}}>
          <TouchableOpacity onPress={() =>this.props.navigation.goBack(null)} style={{backgroundColor:'#289C3B', height:44, alignItems:'center', flexDirection:'row', justifyContent:'space-between'}}>
          <Icon name="chevron-left" color='white' size={15} style={{marginLeft:6}} />
          <Text style={{color:'white', fontWeight:'bold'}}>Cart</Text>
          <Icon name="chevron-left" color='#289C3B' size={15} style={{marginRight:6}} />
        </TouchableOpacity>

      </SafeAreaView>
    )
  }
}
