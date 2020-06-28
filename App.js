import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, View, StyleSheet, Dimensions, ScrollView, TextInput, image} from 'react-native';
import AppDelivery from './src/index';

import Swiper from 'react-native-swiper'

export default function App() {
  
  
  
  return (
    <View style={styles.container}>
      <AppDelivery />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
