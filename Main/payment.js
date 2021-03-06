import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class payment extends React.Component{
  render(){
    return(
      <SafeAreaView style={{ flex: 1,  }}>
      <View style={styles.header}>
        <Icon name="arrow-left" size={30} style={{marginRight:8}} onPress={() => this.props.navigation.goBack(null)}/>
        <Text style={{fontSize:20}}>SELECT PAYMENT</Text>
      </View>

      <ScrollView style={{margin:15}}>
        <TouchableOpacity style={styles.kotak} onPress={() => this.props.navigation.navigate('Booking')}>
          <Text>CASH</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.kotak} onPress={() => this.props.navigation.navigate('Booking')}>
          <Text>CREDIT CARD</Text>
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
