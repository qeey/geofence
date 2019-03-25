import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home extends React.Component{
  render(){
    return(
      <SafeAreaView style={{ flex: 1, }}>
      <View style={styles.header}>
        <Text style={{fontSize:20}}>CAR INFORMATION</Text>
      </View>

      <ScrollView style={{margin:15}}>

          <Text>MODEL : </Text>

          <Text>MAKE :</Text>

          <Text>YEAR : </Text>

          <Text>PLATE NO. : </Text>

      </ScrollView>

        <TouchableOpacity style={styles.kotak} onPress={() => this.props.navigation.navigate('Home')}>
          <Text>SAVE</Text>
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

  header:{
    height:54,
    alignItems:'center',
    //justifyContent:'center',
    borderBottomWidth:1,
    flexDirection:'row',
    paddingLeft:10
  }
})
