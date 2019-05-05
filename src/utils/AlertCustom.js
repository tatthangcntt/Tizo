import React, { Component } from 'react'
import {
  Alert,
} from "react-native";
import {
  AsyncStorage
} from 'react-native'

export default class AlertCustom {

  static AlertConfirm(title: string, message: string, textButton :string, onAlertConfirmOk:func)
  {
    setTimeout(() => {
      Alert.alert(
        title,
        message,
        [
          {text:textButton, onPress:onAlertConfirmOk},
        ],
        { cancelable: false }
      )
      }
    , 1000);
    }
  static AlertDefault(title: string, message: string, textButton :string) {
    Alert.alert(
        title,
        message,
        [
          {text: textButton, onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
    )
  }
  static AlertOptionConfirm(title: string, message: string, option_1 :string,option_2:string, onAlertConfirmOption1:func,onAlertConfirmOption2:func){
    Alert.alert(
      title,
      message,
      [
        {text: option_1, onPress: onAlertConfirmOption1},
        {text: option_2, onPress: onAlertConfirmOption2},
      ],
      { cancelable: false }
    )
  }
}
