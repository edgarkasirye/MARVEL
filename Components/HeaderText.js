import Svg,{Text} from "react-native-svg";
import React, { Component } from 'react';

export default Head = (props) => {
    return(
<Svg
    height="60"
    width="200"
>

    <Text
        fill="#F90303"
        stroke="white"
        fontSize="20"
        fontWeight="bold"
        x="100"
        y="20"
        textAnchor="stretch"
    >{props.edgar}</Text>
    
    
</Svg>)
}