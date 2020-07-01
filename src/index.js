import React, { Component } from 'react';
import { Text, View, TextInput, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Food from './Food';
import Cart from './Cart';
import Address from './Address';
import Profile from './Profile';
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



var { width } = Dimensions.get('window')

console.disableYellowBox = true;

export default class Index extends Component {

  constructor(props) {
     super(props);
     this.state = {
       module: 1,
     };
  }

  /* Básicamente lo que ocurre es que si el module es 1, te va a llevar a la comida, si es 2 al carrito, etc.
  Abajo, cuando rendericemos los distintos componentes, cada uno tendrá un onPress que cambiará este módulo,
  mostrándonos así las distintas secciones.  */

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
           <TouchableOpacity style={styles.itemTab} onPress={()=>this.setState({module:1})}>
             <MaterialIcons name="directions-bike" size={30} color={this.state.module==1?"#900":"gray"} />
             <Text>Shop</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.itemTab} onPress={()=>this.setState({module:2})}>
             <MaterialCommunityIcons name="cart-outline" size={30} color={this.state.module==2?"#900":"gray"} />
             <Text>Cart</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.itemTab} onPress={()=>this.setState({module:3})}>
             <MaterialCommunityIcons name="routes" size={30} color={this.state.module==3?"#900":"gray"} />
             <Text>Routes</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.itemTab} onPress={()=>this.setState({module:4})}>
             <AntDesign name="message1" size={30} color={this.state.module==4?"#900":"gray"} />
             <Text>My Account</Text>
           </TouchableOpacity>
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