import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';


const ListScreen=()=>{
    
    const friends=[
        {name:'Ashish'},
        {name:'Ananya'},
        {name:'Happy'},
        {name:'Toto'},
        {name:'Manas'},
        {name:'Shreyansh'},
        {name:'Vaibhav'},
        {name:'Yashasvi'}
    ]

    return(
        <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={friends=>friends.name}
        data={friends}
        renderItem={({item})=>{
            return <Text style={styles.textContainer}>{item.name}</Text>
        }}
        />
    );
}


const styles=StyleSheet.create({
    textContainer:{
        marginVertical:50
    }
})



export default ListScreen;