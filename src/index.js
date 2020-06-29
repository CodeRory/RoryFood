import React, { Component } from 'react';
import { Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';

import Food from './Food';
import Cart from './Cart';
import Address from './Address';
import Profile from './Profile';

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
      </View>
    );
  }
}