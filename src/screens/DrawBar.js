import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Alert, 
  Image,
  ScrollView,
  SafeAreaView,
  Linking,Text
} from 'react-native';
import { scale, moderateScale, verticalScale } from "../utils/Scale";
import LinearGradient from 'react-native-linear-gradient';
import I18n from '../language/i18n'
import BoNhoRieng from '../utils/BoNhoRieng';

class DrawBar extends Component {
    constructor(props) {
        super(props);
        this.state={
            imgUser:undefined,
            levelUser: "",
            // colorBoderAvatar: Base.ColorApp.green,
        }
    }

    componentWillMount(){
        
    }
  render() {
    return (
      <SafeAreaView style={{}}>
        <View style={{flexDirection: "row",alignItems: "flex-end",marginTop: verticalScale(20),paddingLeft: verticalScale(10) }}>
          <Image
            resizeMode={"contain"} style={{width:verticalScale(150),height: verticalScale(75)}}
            source={require('../resources/image/logo_edit.png')} 
          />
          <View style={{flex:1}}>
          </View>
          <Text style={{marginRight: verticalScale(10),color:"#ccc"}}>{"v1.0"}</Text>
        </View>
        <TouchableOpacity  style={styles.tabMenu}>
          <Image resizeMode={"contain"}  style={styles.icon} source={require('../resources/image/icon_data.png')}/>
          <Text style={{color:'#142038',fontSize: verticalScale(16)}}>{I18n.t("your_loans")}</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.tabMenu}>
          <Image resizeMode={"contain"}  style={styles.icon} source={require('../resources/image/ic_notifications.png')}/>
          <Text style={{color:'#142038',fontSize: verticalScale(16)}}>{I18n.t("notifications")}</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.tabMenu}>
          <Image resizeMode={"contain"}  style={styles.icon} source={require('../resources/image/ic_account_circle.png')}/>
          <Text style={{color:'#142038',fontSize: verticalScale(16)}}>{I18n.t("profile")}</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.tabMenu}>
          <Image resizeMode={"contain"}  style={styles.icon} source={require('../resources/image/ic_settings.png')}/>
          <Text style={{color:'#142038',fontSize: verticalScale(16)}}>{I18n.t("setting")}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  tabMenu:{
    flexDirection: "row",
    marginVertical: verticalScale(15),
    marginHorizontal: verticalScale(15),
    alignItems: "center"
  },
  icon:{
    marginRight: verticalScale(50),
    width: verticalScale(20),
    height: verticalScale(25)
  }
});


export default (DrawBar);