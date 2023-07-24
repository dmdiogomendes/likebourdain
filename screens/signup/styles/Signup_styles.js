import { StyleSheet } from 'react-native';

const styles_singup = StyleSheet.create({
    container:{
      flex:1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    sub_container:{
      width: '90%',
      justifyContent: 'center',
    },
    text_style:{
      fontSize: 25
    },
    inputContainer:{
      paddingTop:10,
      paddingBottom:10
    },
    input_email: {
      height: 50,
      borderWidth: 0.5,
      padding: 10,
      fontSize: 15,
      borderRadius: 3,
    },
    input_others: {
      height: 50,
      borderWidth: 0.5,
      padding: 10,
      fontSize: 15,
      borderRadius: 3,
      borderTopWidth: 0,
    },
    button_registar:{
      alignItems: 'center',
      padding: 5,
      borderRadius: 5,
      borderColor: "black",
      borderWidth: 0.3,
      flexDirection: 'row',
      justifyContent: 'center'
    },
    container_checkbox:{
      flexDirection: 'row',
      margin: 10,
      alignItems: 'center'
    },
    checkBox:{
      width: 25,
      height: 25,
      borderWidth: 2,
      borderColor: '#999',
      marginRight: 5,
      borderRadius: 3,
    },
    style_checkbox:{
      fontSize: 20,
      paddingBottom: 3 
    }
});

export default styles_singup