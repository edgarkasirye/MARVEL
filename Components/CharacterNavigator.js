import React, { Component } from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import CharacterList from "./CharacterList" 
import CharacterDetail from "./CharacterDetail"


const characterNavigator = createStacknavigator({
    CharacterList, CharacterDetail
},
{
    initialRouteName: "CharacterList"
});

export default createAppContainer(CharacterNavigator);