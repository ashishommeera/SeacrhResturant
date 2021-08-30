import React from 'react';
import { TextInput,View,StyleSheet } from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar=(props)=>{
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput 
            placeholder="Search" 
            style={styles.inputStyle}
            autoCapitalize='none'
            value={props.term}
            onChangeText={props.onTermChange}
            onEndEditing={props.onTermSubmitted}
            />
        </View>
    )
};


const styles=StyleSheet.create({
    backgroundStyle:{
        backgroundColor:'#D3D3D3',
        height:50,
        marginHorizontal:15,
        borderRadius:5,
        flexDirection:'row',
        marginTop:10,
        marginBottom:10
    },
    inputStyle:{
        flex:1,
        fontSize:18
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15
    }
});

export default SearchBar;