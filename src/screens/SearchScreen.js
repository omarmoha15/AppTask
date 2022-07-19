import react, {useState} from "react"
import { Route, useRoute } from "@react-navigation/native";
import {View, Text, StyleSheet, FlatList, Image,TouchableOpacity} from "react-native";
import SearchBar from "../compnents/SearchBar";
import axios from "axios";
import Card from "../compnents/Card";





const SearchScreen = ({navigation}) => {
  const route = useRoute();
    const [searchText,setSearchText] = useState("");
    const [articles,setArticles] = useState([]);
    const [description, setDescription] = useState([]);


    const searchArticels = () =>{

        axios.get( 'https://newsapi.org/v2/top-headlines?country=us&apiKey=a538cf1661d4409890c33c1e37fea07a',{
            params:{
            category: "technology",
            q:searchText
        }})
  .then((response) => {
    // handle success

    setArticles(response.data.articles);
    setDescription(response.description);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
    }

    return(

        <View style={styles.container}>

           <SearchBar searchText={searchText} setSearchText={setSearchText} onSubmit={searchArticels}/>
           <FlatList
           data={articles}
           renderItem = {({item})=>(
            <TouchableOpacity onPress={()=>navigation.navigate("Screan2", {item})}>
           <Card
                        urlToImage = {item.urlToImage}
                        title = {item.title}
                        description = {item.description}
                        author = {item.author}
                        publishedAt = {item.publishedAt}
                        sourceName = {item.source.name}
                        url={item.url}
                    /></TouchableOpacity>

    )}
        keyExtractor={(item) =>item.title}
           />



        </View>

    )
}
export default SearchScreen;

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#fff",

    },
})