import React from 'react';
import { View,Text,StyleSheet } from 'react-native';


const BoxScreen=()=>{
    return(
        <View style={styles.viewStyle}>
        <View style={styles.viewOneStyle}></View>
        <View style={styles.viewTwoStyle}></View>
        <View style={styles.viewThreeStyle}></View>
        </View>
    )
}

const styles=StyleSheet.create({
    viewStyle:{
        borderWidth:3,
        borderColor:'black',
        height:300,
        flexDirection:'row',
        justifyContent:'space-between'
    },
   viewOneStyle:{
        height:100,
        width:100,
        backgroundColor:'red'
    },
   viewTwoStyle:{
    height:100,
    width:100,
    backgroundColor:'blue',
    position:'absolute',
    alignSelf:'center',
    left:130
   },
   viewThreeStyle:{
    height:100,
    width:100,
    backgroundColor:'green'
    }
});

export default BoxScreen;