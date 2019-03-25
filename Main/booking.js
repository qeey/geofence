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
        <Text style={{fontSize:20}}>BOOKING FORM</Text>
      </View>

      <ScrollView style={{margin:15}}>
        <DatePicker
      style={{width: 200}}
      date={this.state.date}
      mode="date"
      placeholder="select date"
      format="YYYY-MM-DD"
      minDate="2018-05-01"
      maxDate="2020-06-01"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      customStyles={{
        dateIcon: {
          position: 'absolute',
          left: 0,
          top: 4,
          marginLeft: 0
        },
        dateInput: {
          marginLeft: 36
        }
        // ... You can check the source to find the other keys.
      }}
      onDateChange={(date) => {this.setState({date: date})}}
        />
      </ScrollView>

      <TouchableOpacity style={styles.kotak} onPress={() => this.props.navigation.navigate('Receipt')}>
        <Text>GENERATE RECEIPT</Text>
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
    right:100,
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
