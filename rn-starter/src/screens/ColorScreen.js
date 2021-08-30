import React,{useState} from 'react';
import { View,Button,StyleSheet,FlatList } from 'react-native';


const ColorScreeen=()=>{

    const [colors,setColor]=useState([]);
    console.log(colors);

    return(
        <View>
            <Button title="Add a color" onPress={()=>{
                setColor([...colors,RandomRgb()]);
            }}/>
            
            <FlatList
            keyExtractor={colors=>colors}
            data={colors}
            renderItem={({item})=>{
                return <View style={{height:100,width:100,backgroundColor:item}}/>
            }}
            />
        </View>
    )
};

const RandomRgb=()=>{
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);

    return `rgb(${red},${green},${blue})`;
}

const styles=StyleSheet.create({});

export default ColorScreeen;