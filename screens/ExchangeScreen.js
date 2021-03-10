import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert, Modal } from 'react-native';
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
  addItem=(name, description)=>{
      var userName = this.state.userName;
      db.collection("exchange_requests").add({
          "username":userName,
          "item_name":this.state.name,
          "description":this.state.description,
      });
      return Alert.alert(
          'Item ready to exchange',
          '',
          [{text:'OK', 
          onPress=()=>{
          this.props.navigation.navigate('HomeScreen')
      }}
]
);
  }
  render(){
      return(
          <View>
          <TextInput
          style = {styles.name}
          placeholder = "Item Name"
          onChangeText={(name)=>{
              this.setState({
                  name:name
              })
          }
          }
          />

          <TextInput
          style = {styles.description}
          placeholder = "Item Description"
          onChangeText={(descri)=>{
              this.setState({
                  descri:description
              })
          }
          }
          />

          <TouchableOpacity style={styles.add}
          onPress={()=>{this.addItem(this.state.name, this.state.description)}}
          >
              <Text style={{color:'#ffff', fontSize:18, fontWeight:'bold'}}>Add Item</Text>
          </TouchableOpacity>
          </View>
      )
  }
}