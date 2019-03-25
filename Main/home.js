import React, {Component} from 'react';
import {Platform, StyleSheet,ScrollView, Text,TouchableOpacity,Dimensions, ImageBackground, View, Image, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


export default class Home extends React.Component{
render(){
    return(
      <SafeAreaView style={{ flex: 1, }}>
      <View style={styles.header}>
        <Text style={{fontSize:20}}>MAIN</Text>
      </View>
      {/*<ImageBackground source={{uri:'https://previews.123rf.com/images/ybonce/ybonce1504/ybonce150400008/39379149-blue-triangle-abstract-background-modern-style-on-isolated.jpg'}}
       style={{height:Dimensions.get('window').height, width: Dimensions.get('window').width}}> */}

      <ScrollView style={{margin:15}}>
        <TouchableOpacity style={styles.kotak} onPress={() => this.props.navigation.navigate('Service')}>
          <Text>Select Service</Text>
        </TouchableOpacity>



      <Image
        source={{uri:'https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.jpg'}}
        style = {{height:150, width:150}}/>

      </ScrollView>
      {/*</ImageBackground> */}

      <TouchableOpacity style={styles.add} onPress={() => this.props.navigation.navigate('carInfo')}>
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
    // backgroundColor: '#eec64f',
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
    borderBottomWidth:1
  }
})
