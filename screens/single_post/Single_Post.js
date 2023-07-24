import { View, Text, KeyboardAvoidingView, SafeAreaView, ImageBackground, Platform, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import post_styles from '../post/styles/Post_Styles';

const Single_Post = ({route}) => {

    const platform = Platform.OS

    const navigation = useNavigation()

    const {
        titulo,
        description,
        imagem
    } = route.params

    const text_color = {
        color: 'black',
        fontSize: '17.5',
        textAlign: 'justify',
        paddingRight: 5
    }

    const text_header = {
        color: 'black'
    }

    const styles_title ={...post_styles.title_image, ...text_header}
    const styles_text = {...post_styles.text_container, ...text_color}

  return (
    <SafeAreaView style={{ flex: 1}}>
        <KeyboardAvoidingView
            style={{flex:1}}
            behavior={Platform.OS === 'ios' ?  'padding' : 'height'}
        >
            <ImageBackground 
            source={{uri: route.params.imagem}}
            style={{width: '100%',
            height: 290,
            resizeMode: 'cover'}}
            >
            </ImageBackground>
            {
                 Platform === 'android' ?
                  <View sstyle={{position: 'absolute',left: 10,top: 20,}}>
                      <TouchableOpacity onPress={() => useNavigation.goBack()}>
                          <MaterialCommunityIcons name="arrow-left" color={"white"} size={45} style={{opacity:1}}/>
                      </TouchableOpacity>
                  </View>
                  :
                  <View style={{position: 'absolute',left: 10,top: 20,}}>
                      <TouchableOpacity onPress={() => navigation.goBack()}>
                          <MaterialCommunityIcons name="arrow-left" color={"white"} size={45} style={{opacity:1}}/>
                      </TouchableOpacity>
                  </View>
              }
              <ScrollView>
              <View>
                <View>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                        color: 'black',
                        paddingLeft: 5
                    }}>{route.params.titulo}</Text>
                </View>
                <View>
                    <Text style={{
                        paddingLeft: 5,
                        color: 'black',
                        fontSize: '17.5',
                        textAlign: 'justify',
                        paddingRight: 5
                    }}>{route.params.description}</Text>
                </View>
              </View>
              </ScrollView>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Single_Post