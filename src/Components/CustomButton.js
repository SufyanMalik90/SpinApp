import { 
    View, 
    Text,
    StyleSheet,
    Pressable,
 } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type = "PRIMARY", bgColor, fgColor}) => {
  return (
    <Pressable onPress={onPress} 
    style={[styles.container, styles[`container_${type}`],
    bgColor ? {backgroundColor: bgColor} : {}
    ]}>
      <Text style={[styles.text, styles[`text_${type}`],
    fgColor ? {color: fgColor} : {}
    ]}>{text}</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
    container: {
        width: '60%',
        padding: 10,
        marginVertical: 10,
        alignItems:  'center',
        borderRadius: 8,
  
    },
    container_PRIMARY: {
      backgroundColor: '#663ab5',
    },
    container_TERTIARY: {
      borderColor:'#02074c',
      borderWidth: 2,
  },
    container_Secoundry: {
        width: '90%',
        marginVertical: 0
        
    },
    

    text : {
       color: '#ffffff'
    },
    text_Secoundry: {
      color: '#000',
    },
    text_TERTIARY: {
      color: '#02074c',
    }
})
export default CustomButton