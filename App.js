import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InstagramScreen from "./screens/instagram";
import FacebookScreen from "./screens/facebook";
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";

export default class App extends React.Component {
  render() {
  return (
    <AppContainer/>
  );
  }
}


const TabNavigator = createBottomTabNavigator({
  Instagram: {screen: InstagramScreen},
  Facebook: {screen: FacebookScreen}
})

const AppContainer = createAppContainer(
  TabNavigator
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});