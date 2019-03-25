import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home extends React.Component{
  render(){
    return(
      <SafeAreaView style={{ flex: 1,  }}>
      <View style={styles.header}>
        <Icon name="arrow-left" size={30} style={{marginRight:8}} onPress={() => this.props.navigation.goBack(null)}/>
        <Text style={{fontSize:20}}>BRAKE</Text>
      </View>

      <ScrollView style={{margin:15}}>
      <TouchableOpacity style={styles.kotak} onPress={() => this.props.navigation.navigate('Booking')}>
        <Text>Workshop Abu</Text>
        <Text>RM 200 - RM 300</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.kotak} onPress={() => this.props.navigation.navigate('Booking')}>
        <Text>Workshop Muthu</Text>
        <Text>RM 200 - RM 300</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.kotak} onPress={() => this.props.navigation.navigate('Booking')}>
        <Text>Workshop 123</Text>
        <Text>RM 200 - RM 300</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.kotak} onPress={() => this.props.navigation.navigate('Booking')}>
        <Text>Kedai Bateri Stylo</Text>
        <Text>RM 200 - RM 280</Text>
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
    padding:10,
    marginTop: 10
  },
  header:{
    height:54,
    alignItems:'center',
    // justifyContent:'ce nter',
    borderBottomWidth:1,
    flexDirection:'row',
    paddingLeft:10
  }
})
