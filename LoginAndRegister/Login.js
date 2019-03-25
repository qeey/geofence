import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';


export default class Login extends React.Component{
  render(){
    return(
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView style={{margin:15}}>
        <TouchableOpacity style={styles.kotak} onPress={() => this.props.navigation.navigate('Home')}>
          <Text>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.kotak} onPress={() => this.props.navigation.navigate('Register')}>
          <Text>CREATE ACCOUNT</Text>
        </TouchableOpacity>
      </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  kotak:{
    borderWidth: 1,
    color: '#eec64f',
    padding:30,
    marginTop: 50
  },

})
