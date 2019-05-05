import React, { Component } from 'react'
import {
    Alert,
} from "react-native";
import {
    AsyncStorage
} from 'react-native'

export default class LogCustom {

    static Log(thisClass: Object, thisArguments: Object, sMessage: string) {
        console.log(this.constructor.name + "::" + arguments.callee.name+"::"+sMessage);
    }
   
}
