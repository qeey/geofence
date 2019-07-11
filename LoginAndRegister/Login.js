import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';


export default class Login extends React.Component{
  render(){
    return(
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#383838' }}>
        <Text style={{fontSize:30, fontWeight:'bold', marginBottom:30, color:'#289C3B'}}>CarClick</Text>

        <View style={{margin:15, width:'90%', }}>
          <TextInput placeholder='Email' placeholderTextColor="white" underlineColorAndroid='transparent' style={{borderWidth:1, borderColor:'white', borderRadius:10, marginBottom:15, padding:15}}/>
          <TextInput placeholder='Password' placeholderTextColor="white" underlineColorAndroid='transparent' style={{borderWidth:1, borderColor:'white', borderRadius:10, padding:15}}/>
        </View>

        <TouchableOpacity style={styles.kotak} onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={{color:'white'}}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{position:'absolute', bottom:30, alignSelf:'center'}} onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={{color:'white'}}>New here? Sign up now!</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  kotak:{
    // borderWidth: 1,
    borderRadius:50,
    backgroundColor: '#289C3B',
    padding:15,
    margin:15,
    width:'90%',
    alignItems:'center',
    // marginTop: 15
  },

})
