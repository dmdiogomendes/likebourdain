import { StyleSheet } from "react-native";


const styles_input = StyleSheet.create({
    container:{
        backgroundColor: 'white',
    },
    sub_container: {
    },
    input: {
        width: '77%',
        height: 50,
        borderWidth: 0.5,
        padding: 10,
        fontSize: 15,
        borderRadius: 3,
    },
    container_search:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    search_button:{
        borderWidth: 0.5,
        padding: 10,
        fontSize: 15,
        borderRadius: 3,
    },
    fonts_main_response:{
        fontWeight: 'bold',
    },
    fonts_main_text:{
        textAlign: 'justify'
    },
    help_questions_title:{
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color:'#332E30'
    },
    help_questions:{
        paddingTop: 5,
        paddingBottom: 5,
        color:'#BFBFBF',
        fontSize: 20
    }
})

export default styles_input