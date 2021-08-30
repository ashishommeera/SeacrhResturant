import React,{useState,useEffect} from 'react';
import { Text,View,StyleSheet,ScrollView } from 'react-native';
import SearchBar from '../Components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../Components/ResultList';

const SearchScreen=()=>{

    const [term,setTerm]=useState('');
    const [searchApi,results,errorMessage]=useResults();

    const filterResultByPrice=price=>{
        return results.filter(results=>{
            return results.price===price;
        })
    };


    return (
        <>
            <SearchBar 
            term={term}
             onTermChange={setTerm}
             onTermSubmitted={()=>searchApi(term)}
             />
         {errorMessage?<Text>{errorMessage}</Text>:null}
         <ScrollView>
            
         <ResultList results={filterResultByPrice('$')} title="Cost Effective" />
         <ResultList results={filterResultByPrice('$$')} title="Bit Pricier" />
         <ResultList results={filterResultByPrice('$$$')} title="Big Spender"/>
         </ScrollView>
         
    </>

    )};


const styles=StyleSheet.create({});

export default SearchScreen;


//This is main screen