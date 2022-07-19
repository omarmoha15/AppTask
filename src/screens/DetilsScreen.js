import react from "react";
import * as WebBrowser from 'expo-web-browser';
import { Route } from "@react-navigation/native";
import { StyleSheet, Text, View,SafeAreaView,Image,Pressable} from 'react-native';

import moment from "moment";


const DetilsScreen = ({ route, navigation }) => {
    const { item } = route.params;
    const goToSource =() =>{
        WebBrowser.openBrowserAsync(item.url);
    }

    return (
        <SafeAreaView
         >

<Image source={{
            uri: item.urlToImage}}
           style={styles.image}
           />
           <View style={{padding:10}}>

           {/*title*/}
           <Text style={styles.title}>{item.title}</Text>

           {/*description*/}
           <Text style={styles.description} numberOfLines={2}>{item.description}</Text>

           <View style={styles.data}>
           <Text style={styles.heading}>by:<Text style={styles.author}>{item.author}</Text></Text>
           <Text style={styles.date}>{moment(item.publishedAt).format("MMM Do YY") }</Text>
           </View>
           </View>

           {/*source*/}

           <View style={{margin:10}}>

            <Pressable onPress={goToSource} ><Text style={styles.source}>source,Click here!</Text></Pressable>

           </View>



            </SafeAreaView>
    );
};

export default DetilsScreen;

const styles = StyleSheet.create({
    container:{
        width: "90%",
        alignSelf: "center",
        borderRadius: 40,
        shadowOpacity: 0.5,
        shadowColor: "#000",
        shadowOffset: {
            height: 5,
            width: 5
        },
        backgroundColor: "#fff",
        marginTop: 20
    },

    image:{
        height: 200,
        width: "100%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    title:{
        fontSize: 18,
        fontWeight: "600",
        marginTop: 10
    },
    description:{

            flex: 0.55,
            marginHorizontal: 7,
            marginBottom: 7,
            borderRadius: 20,
            marginTop: 30,
            paddingTop: 30,
    },
    data:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    author:{
        fontWeight: "bold",
        fontSize: 15
    },
    heading:{

    },
    date:{
        fontWeight: "bold",
        color: "#e63946",
        fontSize: 15
    },
    source:{
        color: "#e63946",
        fontWeight: "bold",
        fontSize: 18
    },
})