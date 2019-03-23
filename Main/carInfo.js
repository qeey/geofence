import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home extends React.Component{
  render(){
    return(
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>CAR INFO</Text>


        <View style={styles.kotak}>
          <Text>Plate No</Text>
        </View>

        <View style={styles.kotak}>
          <Text>model</Text>
        </View>

        <View style={styles.kotak}>
          <Text>make</Text>
        </View>

        <View style={styles.kotak}>
          <Text>year</Text>
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
})