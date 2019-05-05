'use strict';

import React, { Component } from 'react';
import {StyleSheet,Platform,TouchableOpacity,SafeAreaView,View, Text, StatusBar, Image,Dimensions } from "react-native";

import { scale, moderateScale, verticalScale } from "../../utils/Scale";
import LinearGradient from 'react-native-linear-gradient';
import I18n from '../../language/i18n'
import BoNhoRieng from '../../utils/BoNhoRieng';
import { ScrollView } from 'react-native-gesture-handler';
// const STATUS_BAR_HEIGHT = (Platform.OS === 'ios' ? 20 : StatusBar.currentHeight)
const DEVICE_WIDTH = Dimensions.get('window').width
var demoDatas=[
    {
        name: "Esther & Micheal",
        date: "Nov 20, 2018",
        content: "Hi Esther, I'm sitting at a coffee shop...",
        subject: "Modern Silicon Valley 2BR/2BA Condo",
        price: "10,000,000"
    },
    {
        name: "Louis",
        date: "Aug 10, 2018",
        content: "I wish there was some way but I readly...",
        subject: "Great walk up Apt in Great Location",
        price: "20,000,000"
    },
    {
        name: "William",
        date: "Dec 21, 2018",
        content: "Hello! No can not do two people for the...",
        subject: "Large bedroom with everything, Great Location",
        price: "30,000,000"
    },
    {
        name: "Xinyang",
        date: "Dec 21, 2018",
        content: "Coll! I love it very much!",
        subject: "Boutique Living Room in Downtown Manhattan",
        price: "50,000,000"
    },
]
var price_curent = "VND"
class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        listDataSelect: [],
        };
    }
    componentWillMount = () => {
        
    };
    renderList=(item,index)=>{
        return(
            <TouchableOpacity key={index} style={styles.itemList}>
                <View style={styles.headItem}>
                    <Text numberOfLines={1} style={styles.textName}>{item.name}</Text>
                    <View style={{flex:1}}>
                    </View>
                    <Text style={styles.textDate}>{item.date}</Text>
                    <Image style={styles.iconArrow} resizeMode={"contain"} source={require('../../resources/image/arrow.png')} />
                </View>
                <Text style={styles.textContent}>{item.content}</Text>
                <Text style={styles.textSubject}>{item.subject}</Text>
                <Text style={styles.price}>{price_curent +" "+item.price }</Text>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <LinearGradient  start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} 
            colors={['#5567af','#5567af','#785da8']}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'transparent' }}>
            
            <SafeAreaView
                style={{ alignSelf: 'stretch',zIndex:100,flexDirection: "column", 
                //backgroundColor: "#5567af",
                paddingTop: Platform.OS == "android"?verticalScale(20):0, 
                justifyContent:'flex-start' }}
            >
            <StatusBar  backgroundColor={'rgba(255,255,255,0.0)'} translucent={true}/>
                    <LinearGradient
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} 
                        colors={['#5567af','#5567af','#785da8']}
                        style={{
                            width: DEVICE_WIDTH,
                            //backgroundColor: "#5567af",
                            flexDirection: 'row',
                            paddingBottom: verticalScale(10),
                            paddingTop: verticalScale(10),
                            paddingHorizontal: verticalScale(10),
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}
                            style={{ padding: verticalScale(5) }}
                        >
                            <Image
                                source={require('../../resources/image/icon_menu.png')}
                                style={{transform: [{ rotate: '180deg'}], width: verticalScale(22), height: verticalScale(22), tintColor: "white" }}
                            />
                        </TouchableOpacity>

                        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Text
                                ellipsizeMode={"tail"}
                                numberOfLines={1}
                                style={{
                                    fontSize: moderateScale(20, 0.4),
                                    color: "white",
                                    // fontWeight: 'bold',
                                }}
                            >
                                {I18n.t("chat_with_a_potential_client")}
                            </Text>
                        </View>

                    </LinearGradient>
                </SafeAreaView>
                    <ScrollView style={{flex:1,width: DEVICE_WIDTH, backgroundColor:'white'}}>
                        {demoDatas.map(this.renderList)}
                    </ScrollView>
            </LinearGradient>
        );
    }
  
}
const styles = StyleSheet.create({
    itemList:{
        borderBottomWidth: verticalScale(1),
        borderBottomColor: "#dddddd",
        paddingRight: verticalScale(5),
        paddingLeft: verticalScale(15),
        paddingVertical: verticalScale(10),
    },
    headItem:{
        flexDirection: "row",
        alignItems: "center"
    },
    textName:{
        color:'#142038',
        fontSize: verticalScale(18),
        marginVertical: verticalScale(6)
    },
    textDate:{
        color:'#bbb',
        fontSize: verticalScale(16)
    },
    iconArrow:{
        marginHorizontal: verticalScale(5),
        width:verticalScale(18),
        height: verticalScale(18)
    },
    textContent:{
        fontSize: verticalScale(15),
        marginVertical: verticalScale(4),
        color:"#bbb"
        
    },
    textSubject:{
        fontSize: verticalScale(13),
        marginVertical: verticalScale(4),
        color:"#bbb"
    },
    price:{
        color:'#142038',
        fontSize: verticalScale(18),
        marginVertical: verticalScale(8)
    },
})
export default (HomeScreen);

