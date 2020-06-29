import React, { Component } from 'react';
import { Text, View, TextInput, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';

import Food from './Food';
import Cart from './Cart';
import Address from './Address';
import Profile from './Profile';



var { width } = Dimensions.get('window')

console.disableYellowBox = true;

export default class Index extends Component {

  constructor(props) {
     super(props);
     this.state = {
       module: 1,
     };
  }

  /* Básicamente lo que ocurre es que si el module es 1, te va a llevar a la comida, si es 2 al carrito, etc */

  render() {
    return (
      <View style={{flex:1}}>
        {
          this.state.module==1?
          <Food />
          : this.state.module==2?
          <Cart />
          : this.state.module==3?
          <Address />
          : <Profile />
        }

        <View style={styles.bottomTab}>
          <View style={styles.itemTab}>
            <Text>Food</Text>
          </View>
          <View style={styles.itemTab}>
            <Text>Cart</Text>
          </View>
          <View style={styles.itemTab}>
            <Text>Address</Text>
          </View>
          <View style={styles.itemTab}>
            <Text>Profile</Text>
          </View>
          

        
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomTab:{
    height:60,
    width:width,
    backgroundColor:'orange',
    flexDirection:'row',
    justifyContent:'space-between',
    elevation:8,
    shadowOpacity:0.3,
    shadowRadius:50,
  },
  itemTab:{
    width:width/4,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center'
  }
})