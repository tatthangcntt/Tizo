import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
    View,
    StyleSheet,
    Platform,
    StatusBar,
    Image,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import { Base } from '../../screens/BaseScreen';
import { verticalScale } from '../../utils/Scale';

const STATUS_BAR_HEIGHT = (Platform.OS === 'ios' ? 20 : StatusBar.currentHeight)
const DEVICE_WIDTH = Dimensions.get('window').width
const DEVICE_HEIGHT = Dimensions.get('window').height
const WINDOW_HEIGHT_NO_STATUS_BAR = DEVICE_WIDTH - STATUS_BAR_HEIGHT

export default class EasyHeader extends Component {

    static propTypes = {
        backgroundHeader: PropTypes.string,
        onLeftClick: PropTypes.func,
        onRightClick: PropTypes.func,
        onRightClickAdd: PropTypes.func,
        uriViewLeft: PropTypes.string,
        uriViewRight: PropTypes.string,
        uriViewRightAdd: PropTypes.string,
        colorViewLeft: PropTypes.string,
        titleColor: PropTypes.string,
        titleText: PropTypes.string,
        colorViewRight: PropTypes.string,
        paddingTop: PropTypes.number,
        customIconRight: PropTypes.bool,
    }

    static defaultProps = {
        backgroundHeader: 'transparent',
        uriViewLeft: require('../../resources/image/icon_back.png'),
        colorViewLeft: '#fff',
        titleColor: '#fff',
        titleText: '',
        colorViewRight: '#fff',
        uriViewRight: undefined,
        paddingTop: verticalScale(10),
        uriViewRightAdd: undefined,
        customIconRight: false
    }

    constructor(props) {
        super(props)
        this.state = {
            valueInput: "",
        }
    }

    onLeftClick() {
        this.props.navigation.goBack(null);
    }

    render() {
        return (
            <SafeAreaView
                style={{ alignSelf: 'stretch',zIndex:100,flexDirection: "column", backgroundColor: this.props.backgroundHeader,
                paddingTop: Platform.OS == "android"?Base.verticalScale(15):0, 
                justifyContent:'flex-start' }}
            >
            <StatusBar barStyle={'light-content'}/>
            <View
                style={{
                    width: DEVICE_WIDTH,
                    backgroundColor: this.props.backgroundHeader,
                    flexDirection: 'row',
                    paddingBottom: Base.verticalScale(10),
                    paddingTop: Base.verticalScale(this.props.paddingTop),
                    paddingHorizontal: Base.verticalScale(10),
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <TouchableOpacity
                    onPress={
                        this.props.onLeftClick ?
                            this.props.onLeftClick
                            :
                            () => this.onLeftClick()
                    }
                    style={{ padding: Base.verticalScale(5) }}
                >
                    <Image
                        source={this.props.uriViewLeft}
                        style={{ width: Base.verticalScale(22), height: Base.verticalScale(22), tintColor: this.props.colorViewLeft }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                    <Base.BaseText
                        ellipsizeMode={"tail"}
                        numberOfLines={1}
                        style={{
                            fontSize: Base.moderateScale(20, 0.4),
                            color: this.props.titleColor,
                            backgroundColor: 'transparent',
                            // fontWeight: 'bold',
                        }}
                    >
                        {this.props.titleText}
                    </Base.BaseText>
                </View>

                {
                    !this.props.customIconRight ?
                        <TouchableOpacity
                            onPress={this.props.onRightClick ? this.props.onRightClick : null}
                            style={{ padding: Base.verticalScale(5) }}
                        >
                            <Image
                                source={this.props.uriViewRight}
                                style={{ width: Base.verticalScale(22), height: Base.verticalScale(22), tintColor: this.props.colorViewRight }}
                            />
                        </TouchableOpacity>
                        :
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={this.props.onRightClickAdd ? this.props.onRightClickAdd : null}
                                style={{ padding: Base.verticalScale(5), marginHorizontal: Base.verticalScale(10) }}
                            >
                                <Image
                                    source={this.props.uriViewRightAdd}
                                    style={{ width: Base.verticalScale(22), height: Base.verticalScale(22), tintColor: this.props.colorViewRight }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={this.props.onRightClick ? this.props.onRightClick : null}
                                style={{ padding: Base.verticalScale(5) }}
                            >
                                <Image
                                    source={this.props.uriViewRight}
                                    style={{ width: Base.verticalScale(22), height: Base.verticalScale(22), tintColor: this.props.colorViewRight }}
                                />
                            </TouchableOpacity>
                        </View>
                }
            </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    group: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflow: 'hidden'
    },
})
