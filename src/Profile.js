import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';



export default class Profile extends Component {
  render() {
    return (
      <View style={styles.firstContainer}>
        <View style={styles.header}>
          <Image source={require('../assets/avatar.jpg')} style={styles.avatar}/>
          <View style={styles.textContainer}>
            <Text style={styles.title} >Monica Berry</Text>
            <Text style={styles.subTitle} >monicaberry@gmail.com</Text>
          </View>
        <View>
          <View>
            <MaterialCommunityIcons name="android-messages" size={24} color="black" />
            <Text>Messages</Text>
          </View>
          <View>
            <MaterialCommunityIcons name="routes" size={24} color="black" />
            <Text>My routes</Text>
          </View>
          <View>
            <AntDesign name="logout" size={24} color="black" />
            <Text>Log Out</Text>
          </View>
          
        
        
        </View>        
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  avatar: {
    borderRadius: 40,
    height: 80,
    width: 80,
  },
  firstContainer: {
    flex: 1,

  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 80,
    marginLeft: 30,

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',

  },
  textContainer: {
    marginLeft: 15,
  }


})
