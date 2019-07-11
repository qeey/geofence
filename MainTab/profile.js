import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class Profile extends React.Component{
  render(){
    return(
      <SafeAreaView style={{flex:1, backgroundColor:'#383838'}}>
        <View style={{backgroundColor:'#289C3B', height:44, alignItems:'center', justifyContent:'center'}}>
          <Text style={{color:'white', fontWeight:'bold'}}>Profile</Text>
        </View>

        <View style={{padding:30, backgroundColor:'#37ad4b', alignItems:'center', justifyContent:'center'}}>
          <Image source={{uri:'https://icdn2.digitaltrends.com/image/chimera-majestic-sheep-tongue.jpg'}} style={{height:90, width:90, borderRadius:45}} />
        </View>

        <Text style={{color:'#ccc', margin:15}}>PROFILE</Text>
        <View style={{backgroundColor:'white'}}>
          <View style={{flexDirection:'row', alignItems:'center', padding:12, borderBottomWidth:0.5, borderBottomColor:'#ccc', justifyContent:'space-between'}}>
            <Text>Username</Text>
            <Text style={{color:'#ccc'}}>Mia Adilah</Text>
          </View>
          <View style={{flexDirection:'row', alignItems:'center', padding:12, borderBottomWidth:0.5, borderBottomColor:'#ccc', justifyContent:'space-between'}}>
            <Text>First Name</Text>
            <Text style={{color:'#ccc'}}>Mia</Text>
          </View>
          <View style={{flexDirection:'row', alignItems:'center', padding:12, borderBottomWidth:0.5, borderBottomColor:'#ccc', justifyContent:'space-between'}}>
            <Text>Last Name</Text>
            <Text style={{color:'#ccc'}}>Adilah</Text>
          </View>
          <View style={{flexDirection:'row', alignItems:'center', padding:12, borderBottomWidth:0.5, borderBottomColor:'#ccc', justifyContent:'space-between'}}>
            <Text>Email</Text>
            <Text style={{color:'#ccc'}}>MiaAdilah@gmail.com</Text>
          </View>

        </View>
      </SafeAreaView>
    )
  }
}
