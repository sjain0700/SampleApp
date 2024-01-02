import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

const Buttons = props => { 
    const { text, onPress, style } = props;
     return (
        <TouchableOpacity onPress={onPress}>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}

export const SampleButton = props => {
    const { text, onPress, style, imageFont } = props;
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={1.0} >
            <View style = {style}>
            <View style={{ alignContent: 'center', height: 16, width: 16, marginRight: 8, 
                  backgroundColor: 'white', borderRadius: 8 }}> 
               {imageFont}
               </View>
              <Text style={{color:'white', fontSize:14, fontWeight:'400'}}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Buttons
