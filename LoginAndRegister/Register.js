import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';


export default class Register extends React.Component{
  render(){
    return(
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#383838' }}>
        <Text style={{fontSize:20, fontWeight:'bold', alignSelf:'flex-start', marginLeft:15, marginBottom:30, color:'white'}}>Sign Up</Text>

        <View style={{margin:15, width:'90%', }}>
          <TextInput placeholder='Email' placeholderTextColor="white" underlineColorAndroid='transparent' style={{borderWidth:1, borderColor:'white', borderRadius:10, marginBottom:15, padding:15}}/>
          <TextInput placeholder='Password' placeholderTextColor="white" underlineColorAndroid='transparent' style={{borderWidth:1, borderColor:'white', borderRadius:10, padding:15}}/>
          <TextInput placeholder='Confirm Password' placeholderTextColor="white" underlineColorAndroid='transparent' style={{borderWidth:1,marginTop:15, borderColor:'white', borderRadius:10, padding:15}}/>
        </View>

        <TouchableOpacity style={styles.kotak} onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={{color:'white'}}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{position:'absolute', bottom:30, alignSelf:'center'}} onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={{color:'white'}}>Already have an account?</Text>
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
