import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import Login from './screens/login';
import Exchange from './screens/ExchangeScreen';
import HomeScreen from "./screens/HomeScreen";

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <Login/>
    </View>
  );
}

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const switchNavigator = createSwitchNavigator({
  LoginScreen:{screen: WelcomeScreen},
  HomeScreen:{screen: HomeScreen}
})

const AppContainer =  createAppContainer(switchNavigator);



createBottomTabNavigator({
  Exchange : {
    screen: Exchange,
    navigationOptions :{
      tabBarIcon : <Image source={require("./assets/images.jpg")} style={{width:20, height:20}}/>,
      tabBarLabel : "Exchange",
    }
  },
  BookRequest : {
    screen: BookRequestScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("./assets/download.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Send",
    }
  }
});