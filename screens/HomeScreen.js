import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert, Modal, FlatList, ListItem, ListItem, } from 'react-native';
import db from '../config';
import firebase from 'firebase';
import login from '../screens/login'
import HomeScreen from '../screens/HomeScreen';

export default class Exchange extends Component {
  constructor(){
    super()
    this.state={
        name:'',
        description:'',
    }
  }
  renderItem=({item,i})=>{
      return(
          <ListItem
          key={i}
          title={item.name}
          subtitle={item.description}
          titleStyle={{color:'black',fontweight:'bold',}}
          rightElement={
              <TouchableOpacity
              style={styles.button}>
                  <Text style={{color:'#ffff'}}>Exchange</Text>
              </TouchableOpacity>
          }
          bottomDivider
          />
      );
  }
  render(){
      return(
          <View>
              <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.allRequests}
              renderItem={this.renderItem}
              />
          </View>
      )
  }
}