import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class Settings extends React.Component{
  render(){
    return(
      <SafeAreaView style={{flex:1, backgroundColor:'#383838'}}>
        <View style={{backgroundColor:'#289C3B', height:44, alignItems:'center', justifyContent:'center'}}>
          <Text style={{color:'white', fontWeight:'bold'}}>Settings</Text>
        </View>

        <Text style={{color:'#ccc', margin:15}}>SUPPORTIVE</Text>
        <View style={{backgroundColor:'white'}}>
          <View style={{flexDirection:'row', alignItems:'center', padding:12, borderBottomWidth:0.5, borderBottomColor:'#ccc', }}>
            <Text>Help</Text>
          </View>
          <View style={{flexDirection:'row', alignItems:'center', padding:12, borderBottomWidth:0.5, borderBottomColor:'#ccc', }}>
            <Text>About Application</Text>
          </View>
          <View style={{flexDirection:'row', alignItems:'center', padding:12, borderBottomWidth:0.5, borderBottomColor:'#ccc', }}>
            <Text>Send Feedback</Text>
          </View>
          <View style={{flexDirection:'row', alignItems:'center', padding:12, borderBottomWidth:0.5, borderBottomColor:'#ccc', }}>
            <Text>Support</Text>
          </View>
          <View style={{flexDirection:'row', alignItems:'center', padding:12, borderBottomWidth:0.5, borderBottomColor:'#ccc',justifyContent:'space-between' }}>
            <Text>App Version</Text>
            <Text>V1.0</Text>
          </View>
        </View>


        <View style={{borderColor:'#289C3B', margin:15, marginTop:40, borderRadius:10, padding:15, borderWidth:2}}>
          <Text style={{color:'#ccc'}}>Sign Out</Text>
        </View>

      </SafeAreaView>
    )
  }
}
