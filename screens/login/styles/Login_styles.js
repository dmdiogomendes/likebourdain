import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
      flex:1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    sub_container:{
        width: '90%',
    },
    text_style:{
      fontSize: 25
    },
    text_style_title:{
      fontSize: 25,
    },
    inputContainer: {
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
    input_password: {
        height: 50,
        borderWidth: 0.5,
        padding: 10,
        fontSize: 15,
        borderRadius: 3,
        borderTopWidth: 0,
    },
    container_divider:{
      flexDirection: 'row',
      alignItems: 'center',
    },
    divider:{
      flex:1,
      height: 0.4,
      backgroundColor: 'black'
    },
    container_divider_text:{
      textAlign: 'center',
      width: 50
    },
    
    button_registar:{
        alignItems: 'center',
        padding: 5,
        borderRadius: 5,
        borderColor: "black",
        borderWidth: 0.3,
        flexDirection: 'row',
        justifyContent: 'center'
    }
  })

  export default styles