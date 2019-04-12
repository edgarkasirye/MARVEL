import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Dimensions } from 'react-native';
import Image from "react-native-scalable-image"

export default (props) => {
    let { width } = Dimensions.get("window");

    return (
        <View style={{ padding: 10 }}>

            <View style={{ flexDirection:"row"}}>
                <Image source={require("../img/xcaptain_america.jpg")} width={width/3} style={{ borderRadius: 5 }}>
                </Image>
            </View>

        </View>
    )
}