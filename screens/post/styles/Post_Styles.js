import { StyleSheet } from "react-native"

const post_styles = StyleSheet.create({
    image_background_styles:{
        width: '100%',
        height: 290,
        resizeMode: 'cover'
    },
    container_image_text:{
        opacity: '0.2'
    },
    title_image:{
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
        paddingLeft: 5
    },
    text_container:{
        color: 'white',
        paddingLeft: 5
    },
    container_image_text:{
      position: 'absolute', 
      backgroundColor: 'black', 
      height: 60,
      width: '100%', 
      opacity:0.5
    },
    style_container:{
        width: '100%',
        position: 'absolute',
        justifyContent: 'flex-end',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
})

export default post_styles
