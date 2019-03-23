import React, {Component} from 'react';
import {Platform, StyleSheet,ScrollView, Text,TouchableOpacity, View, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import DatePicker from 'react-native-datepicker'

export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {date:"2016-05-15"}
  }

  render(){
    return(
      <SafeAreaView style={{ flex: 1, }}>
      <View style={styles.header}>
        <Text style={{fontSize:20}}>MAIN</Text>
      </View>

      <ScrollView>

        <View style={styles.search}>
          <Text>Pick Service</Text>
        </View>

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

      <TouchableOpacity style={styles.add} onPress={() => this.props.navigation.navigate('Service')}>
        <Icon name= "pluscircleo"  size= {50} color="purple"/>
      </TouchableOpacity>


      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  search:{
    marginLeft:15,
    marginRight:15,
    borderWidth: 1,
    backgroundColor: '#eec64f',
    padding:10,
    marginTop: 10
  },
  add:{
    position:'absolute',
    bottom:70,
    right:50,
  },
  header:{
    height:54,
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth:1
  }
})
