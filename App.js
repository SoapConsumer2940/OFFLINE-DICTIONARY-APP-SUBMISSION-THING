import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import dictionary from '../database';

var word = dictionary [text] ["word"]
var lexicalCategory = dictionary [text] ["lexicalCategory"]
var definition = dictionary [text] ["definition"]

this.setState({
  "word" : word,
  "lexicalCategory" : lexicalCategory,
  "definition" : definition
})

export default class App extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <HomeScreen />
      </View>
    )
  }
}
