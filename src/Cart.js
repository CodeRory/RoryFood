import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import colors from './colors';

var { width } = Dimensions.get("window")

export default class Cart extends Component {

  constructor(props) {
     super(props);
     this.state = {
       dataCart:[],
     };
  }

  componentDidMount()
  {
    AsyncStorage.getItem('cart').then((cart)=>{
      if (cart !== null) {        
        const cartbike = JSON.parse(cart)
        this.setState({dataCart:cartbike})
      }
    })
    .catch((err)=>{
      alert(err)
    })
  }

  render() {
    return (
      <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
         <View style={{height:20}} />
         <Text style={{fontSize:28, color: colors.primarydark, marginTop: 20}}>Cart</Text>
         <View style={{height:10}} />       

         <View style={{flex:1}}>
         <ScrollView>         
         {
             this.state.dataCart.map((item, i)=>{
                 return(
                     <View style={{width:width-20,margin:10,backgroundColor:'transparent', flexDirection:'row', borderBottomWidth:2, borderColor:"#cccccc", paddingBottom:10}}>
                      <Image resizeMode={"contain"} style={{width:width/3,height:width/3}} source={{uri: item.bikes.image}} />
                      <View style={{flex:1, backgroundColor:'transparent', padding:10, justifyContent:"space-between"}}>
                        <View>
                          <Text style={{fontWeight:"bold", fontSize:20}}>{item.bikes.name}</Text>
                          <Text>Description of product </Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                          <Text style={{fontWeight:'bold',color: colors.primarydark,fontSize:20}}>${item.price*item.quantity}</Text>
                          <View style={{flexDirection:'row', alignItems:'center'}}>

                            <TouchableOpacity onPress={()=> this.onChangeQuat(i, false) }>
                              <Icon name="ios-remove-circle" size={30} color={colors.primary} />
                            </TouchableOpacity>
                            <Text style={{paddingHorizontal:8, fontWeight:'bold'}}>{item.quantity}</Text>
                            <TouchableOpacity onPress={()=> this.onChangeQuat(i, true) }>
                              <Icon name="ios-add-circle" size={30} color={colors.primary} />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </View>   
                     )
                    } )
                }
         </ScrollView>
         <View style={{height:20}} />
          <Text style={{fontSize:28, color: '#33c37d', textAlign: 'center'}}>$ {this.onLoadTotal()}</Text>
         </View>
         <View style={{height:10}} />
          <TouchableOpacity 
            onPress={() => Alert.alert('This is just a template', 'Here you would buy your items.')}
            style={{
              backgroundColor: colors.primarylight,
              width:width-40,
              alignItems:'center',
              padding:10,
              borderRadius:5,
              
            }}>
            <Text style={{
                fontSize:24,
                fontWeight:"bold",
                color: colors.white,
              }}>
              CHECKOUT
            </Text>
          </TouchableOpacity>

          <View style={{height:20}} />
      </View>
    );
  }

  onLoadTotal()
  {
      let total = 0
      const cart = this.state.dataCart

      for (var i = 0; i < cart.length; i++) {
          total = total + (cart[i].price*cart[i].quantity)
      }
      return total
  }



  onChangeQuat(i,type)
  {
    const dataCar = this.state.dataCart
    let cantd = dataCar[i].quantity;

    if (type) {
     cantd = cantd + 1
     dataCar[i].quantity = cantd
     this.setState({dataCart:dataCar})
    }
    else if (type==false&&cantd>=2){
     cantd = cantd - 1
     dataCar[i].quantity = cantd
     this.setState({dataCart:dataCar})
    }
    else if (type==false&&cantd==1){
     dataCar.splice(i,1)
     this.setState({dataCart:dataCar})
    } 
  }
}