import React, { Component } from 'react';
import { Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
var {height, width } = Dimensions.get('window');
import Swiper from 'react-native-swiper'
import AsyncStorage from '@react-native-community/async-storage';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import colors from './colors';

export default class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      dataBanner:[],
      dataCategories:[],
      dataFood: [],
      selectCatg:0
    }
  }

  componentDidMount(){
    const json = require('../api.json')
    const jsonArray = json.banner;
    const jsonArray2 = json.categories;
    const jsonArray3 = json.bikes;

    try{
      this.setState({
        isLoading: false,
        dataBanner: json.banner,
        dataCategories: json.categories,
        dataFood: json.bikes,
        
      });
    
    }catch(error) {
      console.error(error);
    }; 
  }

  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: colors.primary }}>
          <View style={{width: width, alignItems:'center'}} >
              <View style={styles.header}>
                <Text style={styles.titleHeader}>Rory Bikes</Text>
                <MaterialCommunityIcons name="bike" size={45} color="black" />              
              </View>              
              <Swiper style={{height:width/2}} activeDotColor={'whitesmoke'} showsButtons={false} autoplay={true} autoplayTimeout={2}>
                {
                  this.state.dataBanner.map((itembann)=>{
                    return(
                      <Image style={styles.imageBanner} resizeMode="contain" source={{uri:itembann}}/>
                    )
                  })
                }
              </Swiper>
              <View style={{height:20}} />
          </View>          
          <View style={{width:width, borderRadius:20, paddingVertical:20, backgroundColor:'white'}}>
            <View style={{height: 10}} />
            <Text style={{alignSelf: 'center', fontSize: 30, fontWeight: 'bold', marginTop: -20, marginBottom: 10}}>Shop</Text>
            <FlatList
              data={this.state.dataCategories}
              horizontal={true}
              renderItem={({ item }) => this._renderItem(item)}
              keyExtractor = { (item, index) => index.toString() }
              style={{marginBottom: 20}}
            />
            <FlatList              
              data={this.state.dataFood}
              numColumns={2}
              renderItem={({ item }) => this._renderItemFood(item)}
              keyExtractor = { (item, index) => index.toString() }
            />
            <View style={{height:20}} />
          </View>
        </View>
      </ScrollView>
    );
  }

  _renderItemFood(item){
    let catg = this.state.selectCatg
    if(catg==0||catg==item.categorie)
    {
      return(
        <TouchableOpacity style={styles.divFood}>
          <Image
            style={styles.imageFood}
            resizeMode="contain"
            source={{uri:item.image}} />
            <View style={{height:((width/2)), backgroundColor:'transparent', width:((width/2)-20)}} />
            <Text style={{fontWeight:'bold',fontSize:22,textAlign:'center'}}>
              {item.name}
            </Text>
            <Text>Details of product</Text>
            <Text style={{fontSize:20,color: colors.primarydark}}>${item.price}</Text>

            <TouchableOpacity 
                style={{width:(width/2)-40, flexDirection: 'row', backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', borderRadius: 5, padding: 5}}
                onPress={()=>this.onClickAddCart(item)}                
                >
                <Text style={{color: 'whitesmoke', fontSize: 18, fontWeight: 'bold'}}>Add to cart</Text>
                <View style={{width: 10}}/>
                <MaterialIcons name="add-shopping-cart" size={23} color="whitesmoke" />        
            </TouchableOpacity>
          </TouchableOpacity>
        )
    }
  }
  _renderItem(item){
    return(
      <TouchableOpacity style={[styles.divCategorie,{backgroundColor:item.color}]}
      onPress={()=>this.setState({selectCatg:item.id})}>
        <Image
          style={{width:100, height:80}}
          resizeMode="contain"
          source={{uri : item.image}} />
        <Text style={{fontWeight:'bold',fontSize:22}}>{item.name}</Text>
      </TouchableOpacity>
    )
  }


onClickAddCart(data){
    const itemcart = {    
        bikes:data,
        quantity: 1,
        price: data.price
    }
    AsyncStorage.getItem('cart').then((datacart)=>{
        if (datacart!==null) {
            const cart = JSON.parse(datacart)
            cart.push(itemcart)
            AsyncStorage.setItem('cart',JSON.stringify(cart))
        }
        else {
            const cart = []
            cart.push(itemcart)
            AsyncStorage.setItem('cart', JSON.stringify(cart))

        }
        alert('Product added to cart!')
        })
        .catch((error)=>{
            alert(error)
        }
        )}
}

const styles = StyleSheet.create({
  divCategorie:{
    backgroundColor:'red',
    margin:5, alignItems:'center',
    borderRadius:10,
    padding:10
  },
  divFood:{
    width:(width/2)-20,
    padding:10,
    borderRadius:10,
    marginTop:5,
    marginBottom:5,
    marginLeft:10,
    alignItems:'center',
    elevation:8,
    shadowOpacity:0.3,
    shadowRadius:50,
    backgroundColor:'white',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 35,
    marginBottom: 10,
  },
  imageBanner: {
    height:width/2,
    width:width-40,
    borderRadius:60,
    marginHorizontal:20
  }, 
  imageFood:{
    width:((width/2)-20)-10,
    height:((width/2)),
    backgroundColor:'transparent',
    position:'absolute',
    marginTop: 5,
  },
  titleCatg:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
  },
  titleHeader: {
    fontSize: 40,
    marginRight: 15,
  }
});