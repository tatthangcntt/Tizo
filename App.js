/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,AsyncStorage, View} from 'react-native';
import { WellComeRoot } from './src/screens/NavManageScreen';
import I18n from './src/language/i18n'

import SplashScreen from 'react-native-splash-screen'
import { createAppContainer } from "react-navigation";
const AppContainer = createAppContainer(WellComeRoot);

export default class App extends Component {
  constructor(props)
  {
    super(props)
    I18n.locale = "en";
    console.disableYellowBox = true;
  }
  componentDidMount(){
    
  }
  render() {
    return (
      <View style={{flex:1}}>
        <AppContainer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
