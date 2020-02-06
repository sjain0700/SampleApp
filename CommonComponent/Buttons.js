import React, { PropTypes } from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
//import style from "./style";

const Buttons = props => {
    const { text, onPress, style } = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}
export const SubmitButton = props => {
    const { text, onPress, style } = props;
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={.8} >
            <Text style={style}>{text}</Text>
        </TouchableOpacity>
    )
}
export const HAButton = props => {
    const { text, onPress, style } = props;
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={.8} >
            <Text style={style}>{text}</Text>
        </TouchableOpacity>
    )
}

export const HAButtonNoAction = props => {
    const { text, onPress, style, imageFont } = props;
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={1.0} >
            <View style = {style}>
               {imageFont}
              <Text style={{color:'white', fontSize:20, fontWeight:'bold',}}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export const HAButtonNoActionCards = props => {
    const { text, onPress, style, imageFont } = props;
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={1.0} >
            <View style = {style}>
               {imageFont}
              <Text style={{color:'white', fontSize:14, fontWeight:'400'}}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export const Button2 = props => {
    const { text, onPress } = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}

export const SDOptionButtons = props => {
    const { text, onPress , style } = props;
    return (
        <TouchableOpacity style = {style} onPress={onPress}>
            <Text style = {{color : "#FFFFFF"}}>{text}</Text>
        </TouchableOpacity>
    )
}

export const LongButtons =  props => {
    const { text, onPress , style , icon , textStyle} = props;
    return (
        <TouchableOpacity style = {style} onPress={onPress}>
             {icon}
             {/* <View style={styles.directionButtonStyle}> */}
                <Text style={textStyle}>{text}</Text>
         {/* </View> */}
        </TouchableOpacity>
    )
}


export default Buttons
