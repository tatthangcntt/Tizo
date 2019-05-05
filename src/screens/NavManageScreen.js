import React from 'react';
import { Dimensions, Animated,
    Easing} from "react-native";
import WellComeScreen from "./WellComeScreen";
import LanguageSelectScreen from "./LanguageSelectScreen";
import HomeScreen from "./Home/HomeScreen";
import DrawBar from './DrawBar';
const DEVICE_WIDTH = Dimensions.get('window').width;

import { TabNavigator, createStackNavigator, TabBarBottom, createDrawerNavigator, NavigationActions } from 'react-navigation';

let drawerLockMode = 'unlocked';



export const MainNav = createDrawerNavigator({
    HomeScreen:{
        screen:HomeScreen
    }, 
    // SelectionScreen: {
    //     screen: SelectionScreen,
    // },
},{
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
    //transitionConfig,
    header: null,
    //animationEnabled: true,
    drawerPosition: 'left',
    //useNativeAnimations:true,
    drawerWidth:DEVICE_WIDTH*3/4,
    contentComponent: props => <DrawBar {...props} />
});
HomeScreen.navigationOptions = ({ navigation }) => {
    return {drawerLockMode};
};

 export const WellComeRoot = createStackNavigator(
    {
        WellCome: {
            screen: WellComeScreen,
        },
        LanguageSelectScreen: {
            screen: LanguageSelectScreen,
        },
        MainNav: {
            screen: MainNav
        },
    }, {
        initialRouteName: 'WellCome',
        headerMode: 'none',
        //  header: null,
         navigationOptions: {
            header:null,
        },
    });

 