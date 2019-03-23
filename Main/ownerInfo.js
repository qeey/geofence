import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home extends React.Component{
  render(){
    return(
      <SafeAreaView style={{ flex: 1,}}>
        <View style={styles.header}>
          <Text style={{fontSize:20}}>OWNER's INFO</Text>
        </View>

        <Icon name="home" size={40} color="purple" />

        <View style={styles.kotak}>
          <Text>Pick Service</Text>
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
  header:{
    height:54,
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth:1
  }
})
