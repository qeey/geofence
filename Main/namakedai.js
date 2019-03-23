import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class shop extends React.Component{
  render(){
    return(
      <SafeAreaView style={{ flex: 1, }}>
        <Text>SHOPS</Text>

        <View style={styles.kotak}>
          <Text>Service</Text>
          <Text>Battery</Text>
        </View>

        <View>
          <Text>Workshop Ahmad</Text>
          <Text>Batteri RX80</Text>
          <Text>RM 230</Text>
        </View>

        <View style={{marginTop:15}}>
          <Text>Kedai MUTHU</Text>
          <Text>Bateri KERETA</Text>
          <Text>RM 180</Text>
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
