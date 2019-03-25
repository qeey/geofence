import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import DatePicker from 'react-native-datepicker'

export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {date:"2016-05-15"}
  }

  render(){
    return(
      <SafeAreaView style={{ flex: 1,  }}>
      <View style={styles.header}>
        <Icon name="arrow-left" size={30} style={{marginRight:8}} onPress={() => this.props.navigation.goBack(null)}/>
        <Text style={{fontSize:20}}>RECEIPT</Text>
      </View>


      <TouchableOpacity style={styles.kotak} onPress={() => this.props.navigation.navigate('Payment')}>
        <Text>PAY</Text>
      </TouchableOpacity>


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

  add:{
    position:'absolute',
    bottom:30,
    right:50,
  },

  header:{
    height:54,
    alignItems:'center',
    //justifyContent:'center',
    borderBottomWidth:1,
    flexDirection:'row',
    paddingLeft:10
  }
})
