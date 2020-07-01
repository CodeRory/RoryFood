import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import getDirections from 'react-native-maps-directions';

import Polyline from '@mapbox/polyline';


/* MAPPING */


export default class Address extends Component {
     render() {
      return (
        <View style={styles.container}>
          <MapView 
            style={styles.map}
            initialRegion={{
              latitude: 40.7308,
              longitude: -73.9908,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}          
          ><MapView.Marker 
            coordinate={{latitude: 40.7359, longitude: -73.9911}}/></MapView>
        </View>
      );
    }
    
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  map: {
    flex: 1,
  }
})