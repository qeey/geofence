import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class Lists extends React.Component{
  constructor(){
    super()
    this.state = {
      tabView: 'battery',
      battery: '',

    }
  }


  //tab Illusion
  _changeToBattery = () => {
    this.setState({tabView: 'battery'})
  }

  _changeToTyre = () => {
    this.setState({tabView: 'Tyre'})
  }
  //tab Illusion
  _changeToAirc = () => {
    this.setState({tabView: 'Aircond'})
  }



  render(){

    let battery;

    if(this.state.tabView === 'battery'){
      battery =
      <View style={{borderBottomWidth:3, borderBottomColor:'#289C3B', padding:15}}>
        <Text style={{color:'#289C3B'}}>Battery</Text>
      </View>
    } else {
      battery =
      <TouchableOpacity style={{ padding:15}} onPress={this._changeToBattery}>
        <Text style={{color:'#ccc'}}>Battery</Text>
      </TouchableOpacity>
    }

    let Aircond;

    if(this.state.tabView === 'Aircond'){
      Aircond =
      <View style={{borderBottomWidth:3, borderBottomColor:'#289C3B', padding:15}}>
        <Text style={{color:'#289C3B'}}>AirCond</Text>
      </View>
    } else {
      Aircond =
      <TouchableOpacity style={{ padding:15}} onPress={this._changeToAirc}>
        <Text style={{color:'#ccc'}}>AirCond</Text>
      </TouchableOpacity>
    }

    let Tyre;

    if(this.state.tabView === 'Tyre'){
      Tyre =
      <View style={{borderBottomWidth:3, borderBottomColor:'#289C3B', padding:15}}>
        <Text style={{color:'#289C3B'}}>Tyre</Text>
      </View>
    } else {
      Tyre =
      <TouchableOpacity style={{ padding:15}} onPress={this._changeToTyre}>
        <Text style={{color:'#ccc'}}>Tyre</Text>
      </TouchableOpacity>
    }

    let bottomView;
    if(this.state.tabView === 'battery'){
      bottomView =
      <View style={{margin:15}}>
        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate({cart})}>
        <View style={{backgroundColor:'white',marginBottom:15, padding:15}}>
          <Text>Battery CCU</Text>
          <Text>RM 300</Text>

          <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20,}}>
            <View>
              <Text >Status</Text>
              <Text>Available</Text>
            </View>
            <Text>LAZADA</Text>
          </View>
        </View>
         
        </TouchableWithoutFeedback>
        <View style={{backgroundColor:'white',padding:15, marginBottom:15}}>
          <Text>Battery BUU</Text>
          <Text>RM 299</Text>

          <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20,}}>
            <View>
              <Text >Status</Text>
              <Text>Available</Text>
            </View>
            <Text>Workshop Tariq</Text>
          </View>
        </View>
        <View style={{backgroundColor:'white',padding:15, marginBottom:15}}>
          <Text>Battery Power</Text>
          <Text>RM 300</Text>

          <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20,}}>
            <View>
              <Text >Status</Text>
              <Text>Out Of Stock</Text>
            </View>
            <Text>Workshop Muthi</Text>
          </View>
        </View>
      </View>
    }
    if(this.state.tabView === 'Tyre'){
      bottomView =
        <View style={{margin:15}}>
          <View style={{backgroundColor:'white', marginBottom:15,padding:15}}>
          <Text>Tyre CCU</Text>
          <Text>RM 300</Text>

          <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20,}}>
            <View>
              <Text >Status</Text>
              <Text>Available</Text>
            </View>
            <Text>Workshop JJ</Text>
          </View>
        </View>
        <View style={{backgroundColor:'white',padding:15, marginBottom:15}}>
          <Text>Tyre BUU</Text>
          <Text>RM 299</Text>

          <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20,}}>
            <View>
              <Text >Status</Text>
              <Text>Available</Text>
            </View>
            <Text>Workshop Tariq</Text>
          </View>
        </View>
        <View style={{backgroundColor:'white',padding:15, marginBottom:15}}>
          <Text>Tyre Power</Text>
          <Text>RM 300</Text>

          <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20,}}>
          <View>
            <Text >Status</Text>
            <Text>Out Of Stock</Text>
          </View>
          <Text>Workshop Muthi</Text>
        </View>
        </View>
      </View>
    }
    if(this.state.tabView === 'Aircond'){
      bottomView =
        <View style={{margin:15}}>
          <View style={{backgroundColor:'white', padding:15, marginBottom:15,}}>
          <Text>Aircond CCU</Text>
          <Text>RM 300</Text>

          <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20,}}>
            <View>
              <Text >Status</Text>
              <Text>Available</Text>
            </View>
            <Text>Workshop JJ</Text>
          </View>
        </View>

        <View style={{backgroundColor:'white',padding:15, marginBottom:15}}>
          <Text>Aircond BUU</Text>
          <Text>RM 299</Text>

          <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20,}}>
            <View>
              <Text >Status</Text>
              <Text>Available</Text>
            </View>
            <Text>Shopee</Text>
          </View>
        </View>
        <View style={{backgroundColor:'white',padding:15, marginBottom:15}}>
          <Text>Aircond Power</Text>
          <Text>RM 300</Text>

          <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20,}}>
            <View>
              <Text >Status</Text>
              <Text>Out Of Stock</Text>
            </View>
            <Text>Workshop Muthi</Text>
          </View>
        </View>
      </View>
    }


    return(
      <SafeAreaView style={{flex:1, backgroundColor:'#383838'}}>
        <TouchableOpacity onPress={() =>this.props.navigation.goBack(null)} style={{backgroundColor:'#289C3B', height:44, alignItems:'center', flexDirection:'row', justifyContent:'space-between'}}>
          <Icon name="chevron-left" color='white' size={15} style={{marginLeft:6}} />
          <Text style={{color:'white', fontWeight:'bold'}}>Home</Text>
          <Icon name="chevron-left" color='#289C3B' size={15} style={{marginRight:6}} />
        </TouchableOpacity>

        <View style={{backgroundColor:'white', flexDirection:'row', alignItems:'center', justifyContent:'space-between' }}>
          {battery}
          {Aircond}
          {Tyre}
        </View>

        {bottomView}
      </SafeAreaView>
    )
  }
}
