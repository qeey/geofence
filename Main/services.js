import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/AntDesign';

export default class Home extends React.Component{
  render(){
    return(
      <SafeAreaView style={{ flex: 1,}}>
      <View style={styles.header}>
        <Icon name="arrow-left" size={30} style={{marginRight:8}} onPress={() => this.props.navigation.goBack(null)}/>
        <Text style={{fontSize:20}}>SELECT SERVICE</Text>
      </View>


        <TouchableOpacity style={styles.kotak} onPress={() => this.props.navigation.navigate('Battery')}>
          <Icon2 name="car" size={20} style={{marginRight:8}}/>
          <Text>battery</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.kotak} onPress={() => this.props.navigation.navigate('Belts')}>
          <Icon2 name="car" size={20} style={{marginRight:8}}/>
        <Text>belts & hoses</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.kotak} onPress={() => this.props.navigation.navigate('Blackoil')}>
          <Icon2 name="car" size={20} style={{marginRight:8}}/>
        <Text>blackoil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.kotak} onPress={() => this.props.navigation.navigate('Brake')}>
          <Icon2 name="car" size={20} style={{marginRight:8}}/>
        <Text>brake</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.kotak} onPress={() => this.props.navigation.navigate('Enginelight')}>
          <Icon2 name="car" size={20} style={{marginRight:8}}/>
        <Text>enginelight</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.kotak} onPress={() => this.props.navigation.navigate('Exhaust')}>
          <Icon2 name="car" size={20} style={{marginRight:8}}/>
        <Text>exhaust</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.kotak} onPress={() => this.props.navigation.navigate('Steering')}>
          <Icon2 name="car" size={20} style={{marginRight:8}}/>
        <Text>steering</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.kotak} onPress={() => this.props.navigation.navigate('Tyre')}>
          <Icon2 name="car" size={20} style={{marginRight:8}}/>
        <Text>tyre</Text>
        </TouchableOpacity>



      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  kotak:{
    borderBottomWidth: 1,
    color: '#eec64f',
    padding:10,
    marginTop: 10,
    flexDirection: 'row'

  },
  header:{
    height:54,
    alignItems:'center',
    // justifyContent:'ce nter',
    borderBottomWidth:1,
    flexDirection:'row'
  }
})
