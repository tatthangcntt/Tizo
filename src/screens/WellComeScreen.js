'use strict';

import React, { Component } from 'react';
import {View, Text,StyleSheet, StatusBar, Image,Dimensions,TouchableOpacity } from "react-native";
import SplashScreen from 'react-native-splash-screen';
import { scale, moderateScale, verticalScale } from "../utils/Scale";
import LinearGradient from 'react-native-linear-gradient';
import I18n from '../language/i18n'
import BoNhoRieng from '../utils/BoNhoRieng';
class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: "en",
        };
    }
    componentWillMount = () => {
        setTimeout(() => {
            SplashScreen.hide();
        },1000);
        this.setState({language:BoNhoRieng.layDuLieu("language","en")});
        I18n.locale = this.state.language;
        
    };
    chanLanguage=(lang)=>{
        I18n.locale = lang;
        this.setState({language:lang});
        BoNhoRieng.luuDuLieu("language", lang);
    }
    render=()=> {
        return (
            <View style={{ flex: 1}}>
                <View style={{flex:1,alignItems: 'center',justifyContent: 'center'}}>
                    <Image resizeMode={"contain"} style={{width:verticalScale(200),height: verticalScale(100)}} source={require('../resources/image/logo_edit.png')}/>
                    <Text style={styles.titleText}>{I18n.t("check_your_rates_and")}</Text>
                    <Text style={styles.titleText}>{I18n.t("never_overpay_again")}</Text>
                </View>
                <View style={{flex:1,marginLeft: verticalScale(30)}}>
                    <Text style={styles.languageText}>{I18n.t("your_language")}</Text>
                    <TouchableOpacity onPress={()=>this.chanLanguage("en")} style={styles.language}>
                        <Image resizeMode={"contain"} style={styles.flag} source={require('../resources/image/flag_en.png')} />
                        <Text style={styles.flagText}>{"English"}</Text>
                        {this.state.language != "vi"?
                        <Image resizeMode={"contain"} style={styles.checked} source={require('../resources/image/icon_check.png')} />
                        :null}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.chanLanguage("vi")} style={styles.language}>
                        <Image resizeMode={"contain"} style={styles.flag} source={require('../resources/image/flag_vn.png')} />
                        <Text style={styles.flagText}>{"Tiếng Việt"}</Text>
                        {this.state.language == "vi"?
                        <Image resizeMode={"contain"} style={styles.checked} source={require('../resources/image/icon_check.png')} />
                        :null}
                    </TouchableOpacity>
                    <View style={{flex:1}}>
                    </View>
                    <TouchableOpacity onPress={()=>this.props.navigation.replace("MainNav")}>
                        <LinearGradient  start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#5567af', '#785da8']} style={styles.linearGradient}>
                            <Text style={styles.buttonText}>
                                {I18n.t("next")}
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
  
}
const styles = StyleSheet.create({
    titleText:{
        color:"#142038",
        fontSize: verticalScale(24),
        fontWeight: "300"
    },
    languageText:{
        color: "#a5a8b0",
        fontSize: verticalScale(18),
        marginBottom: verticalScale(20)
    },
    language:{
        flexDirection: "row",
        alignItems: "center",
        marginVertical:verticalScale(20)
    },
    flag :{
        borderRadius: verticalScale(5),
        width:verticalScale(60),
        height:verticalScale(30),
        marginRight: verticalScale(15)
    },
    flagText:{
        flex:1,
        fontSize: verticalScale(18)
    },
    checked:{
        width:verticalScale(30),
        height:verticalScale(20),
        marginRight: verticalScale(30)
    },
    linearGradient: {
        width: Dimensions.get("window").width-verticalScale(60),
        height: verticalScale(50),
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: verticalScale(80)
      },
      buttonText: {
        fontSize: 20,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
});
export default (WelcomeScreen);

