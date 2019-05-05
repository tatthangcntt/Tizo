'use strict';

import React, { Component } from 'react';
import {View, Text, StatusBar, Image,Dimensions } from "react-native";


class LanguageSelectScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        listDataSelect: [],
        };
    }
    componentWillMount = () => {
        
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'transparent' }}>
                
            </View>
        );
    }
  
}
export default (LanguageSelectScreen);

