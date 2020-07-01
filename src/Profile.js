import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
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
        </View>        
        <View style={styles.body}>
          <TouchableOpacity style={styles.messages} onPress={() => Alert.alert('This is just a template', 'Here you would find the messages section.')}>
            <MaterialCommunityIcons name="android-messages" size={30} color="green" />
            <Text style={styles.text}>Messages</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.routes} onPress={() => Alert.alert('This is just a template', 'Here you would find the routes section.')}>
            <MaterialCommunityIcons name="routes" size={30} color="green" />
            <Text style={styles.text}>My routes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logout} onPress={() => Alert.alert('This is just a template', 'Here you would logout.')}>
            <AntDesign name="logout" size={30} color="green" />
            <Text style={styles.text}>Log Out</Text>
          </TouchableOpacity>
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

  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  firstContainer: {
    flex: 1,
    flexDirection: 'column',
    

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
  },
  messages: {
    flexDirection: 'row',
    fontSize: 30,
    margin: 20,
  },
  logout: {
    flexDirection: 'row',
    margin: 20,
  },
  routes: {
    flexDirection: 'row',
    margin: 20,
  },
  text: {
    fontSize: 25,
    marginLeft: 10,
  }


})
