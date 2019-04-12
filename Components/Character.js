import React, {PureComponent} from 'react';
import {Platform, StyleSheet, View, Text, Dimensions} from 'react-native';
import {Header, Content, TabHeading, Tabs, Tab, Left, Title} from 'native-base';
import Image from "react-native-scalable-image";

const imageCount = 3;
const spacing = 20;

export default class Character extends PureComponent{
    
    render (){
        let {width} =Dimensions.get("window");
        let imageWidth = width / imageCount - spacing

        return(
            <View style={{padding: 10, width: width/imageCount}}>
                <Image source = {{uri: this.props.imageSource}} width = {imageWidth} style = {{borderRadius : 5}}>   
                </Image>
                <Text style = {{color : "white" , fontSize : 10, alignSelf : "center", marginTop : 5}}>
                    {
                        this.props.text
                    }
                </Text>
            </View> 
        )
    }
}