import { BackHandler, ImageBackground, KeyboardAvoidingView, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import post_styles from './styles/Post_Styles';
import { db } from '../../firebase';
import { collection, addDoc, doc, getDoc, getDocs } from "firebase/firestore"; 
import { useNavigation } from '@react-navigation/native';

const images =  {uri: './image_trips.jpg'};

const Posts_Blogs = () => {

  const navigation = useNavigation();

  const handleBackButtonPress = () => {
    //Check if user is on Home screen
    if (navigation.isFocused()) {
      //Redirect to Profile screen instead of Login screen
      navigation.navigate('Home');
      return true;
    }
    return false;
  };

  useEffect(() => {
    //Set up custom back button handler
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonPress);
    };
  },[])


  const [requestData, setRequestData] = useState([])

  const fetchData =  async () => {
    try{
      const usersCollectionRef = await getDocs(collection(db, "posts"))
      const data = usersCollectionRef.docs.map((doc) => doc.data())
      setRequestData(data)
    }catch(e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <SafeAreaView style={{ flex: 1}}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content" 
      />
      <KeyboardAvoidingView 
        style={{flex:1}}
        behavior={Platform.OS === 'ios' ?  'padding' : 'height'}
      >
        <ScrollView>
          <View>
            {requestData.length > 0 ? (
                requestData.map((item, index) => 
                <View key={index}>
                  <ImageBackground source={{uri: item.imagem}} style={post_styles.image_background_styles}>
                    <View style={post_styles.style_container}>
                      <View style={post_styles.container_image_text}></View>
                      <TouchableOpacity onPress={() => navigation.navigate('Single_Post',{
                        titulo: item.titulo,
                        description: item.description,
                        imagem: item.imagem
                      })}>
                        <Text style={post_styles.title_image}>{item.titulo}</Text>
                        <Text style={post_styles.text_container}>{item.description.slice(0, 80)}...</Text>
                      </TouchableOpacity>
                    </View>
                  </ImageBackground>
                </View>
                ) 
              ):(
                <Text>Loading</Text>
              )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Posts_Blogs
