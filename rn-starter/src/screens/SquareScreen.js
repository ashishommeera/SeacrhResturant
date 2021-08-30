import React,{useState} from 'react';
import { View,Text,StyleSheet,Button } from 'react-native';
import ColorCounter from '../Components/ColorCounter';



const SquareScreen=()=>{

    const [red,setRed]=useState(0);
    const [blue,setBlue]=useState(0);
    const [green,setGreen]=useState(0);

    console.log(red)

    return <View>
        <ColorCounter 
        onIncreases={()=>setRed(red+1)}
        onDecrease={()=>setRed(red-1)}
        color="Red"/>

        <ColorCounter
        onIncreases={()=>setBlue(blue+1)}
        onDecrease={()=>setBlue(blue-1)}
         color="Blue"/>

        <ColorCounter
        onIncreases={()=>setGreen(green+1)}
        onDecrease={()=>setGreen(green-1)}
         color="green"/>

         <View style={{height:150,width:150,backgroundColor:`rgb(${red},${blue},${green})`}}/>
    </View>
}

const styles=StyleSheet.create({});

export default SquareScreen;