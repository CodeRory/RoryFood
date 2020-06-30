import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';





export default class Address extends Component {
    
    
    render() {
    return (
      <View style={{flex: 1}}>
        <MapView 
          style={styles.map}
          showsUserLocation
          followsUserLocation
        
        />
        
      </View>
    );
  }}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  }
})