import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';

export default class Address extends Component {

  constructor(props) {
     super(props);
     this.state = {
       data:"",
     };
  }
  
  render() {
    return (
      <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
         <Text>SELECCIONA TU RUTA</Text>
      </View>
    );
  }
}