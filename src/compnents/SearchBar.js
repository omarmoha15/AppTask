import react from "react";
import { View,TextInput ,StyleSheet,Text} from "react-native";

const SearchBar = (props) => {
    return (
        <View style={styles.container}>
           <TextInput
           placeholder="Search"
           style={styles.input}
           value={props.searchText}
           onChangeText={(text)=>props.setSearchText(text)}
           onSubmitEditing={props.onSubmit}
           />

        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create
({
    container:{

        margin:15,
    },
    input:{
        backgroundColor:"#fff",
        padding:10,
        borderRadius:10,
        color:"#000",
        borderWidth:2,

    },
    title:{
        fontSize: 18,
        fontWeight: "600",
        marginTop: 10
    },
}
)