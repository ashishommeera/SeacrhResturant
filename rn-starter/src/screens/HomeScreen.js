import React from "react";
import { Text, StyleSheet,View, Button,TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {

  

  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
      onPress={()=>navigation.navigate('Component')}
       title="Go To Components Demo"/>
     <Button
      onPress={()=>navigation.navigate('List')}
      title="Go to List"/>
      <Button
      onPress={()=>navigation.navigate('Image')}
       title="Go to Image"/>
       <Button
      onPress={()=>navigation.navigate('Counter')}
       title="Go to Counter Demo"/>
        <Button
      onPress={()=>navigation.navigate('Color')}
       title="Go to Color Demo"/>
       <Button
      onPress={()=>navigation.navigate('Square')}
       title="Go to Square Demo"/>
       <Button
      onPress={()=>navigation.navigate('Text')}
       title="Go to Text Demo"/>
       <Button
      onPress={()=>navigation.navigate('Box')}
       title="Go to Box Demo"/>
  </View>)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  itemContainer:{
    marginVertical:10
  }
});

export default HomeScreen;
