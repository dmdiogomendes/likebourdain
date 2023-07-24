import {Keyboard, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import styles_input from '../styles/Search_request_styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {API_KEY} from "@env"
import { Configuration, OpenAIApi } from "openai"
import axios from 'axios';
import Search_request from './Search_request';

const Search_request_container = () => {

  const openai = new OpenAIApi(new Configuration({
        apiKey: API_KEY
  }))  

  const [input_search, setInput_search] = useState('')
  const [array_chat, setArray_chat] = useState([])

  const scrollViewRef = useRef(null)

  const search_Change = (text) => {
        setInput_search(text)
  }

  const ask_chat = async (e) => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/text-davinci-002/completions',
        {
          prompt: input_search,
          max_tokens: 1000,
          temperature: 0.5
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`,
          },
        }
      );

      const suportData = [...array_chat]
      suportData.push(['Me:',input_search])
      suportData.push(['Chatgpt:',response.data.choices[0].text.trim()])
      setArray_chat(suportData)

      setInput_search('')
      Keyboard.dismiss();
      scrollViewRef.current.scrollToEnd({ animated: true });
    } catch (e) {
      console.log(e);
    }

    setInput_search('')
};

  return (
    <>
      <View style={styles_input.container}>
          <Text style={{paddingLeft: 10, fontSize: 25, fontWeight: 'bold'}}>Likebourdain</Text>
              <View style={styles_input.container_search}>  
                      <TextInput 
                          style={styles_input.input}
                          onChangeText={search_Change}
                          placeholder='try your search'
                          value={input_search}
                      />
                  <TouchableOpacity style={styles_input.search_button} onPress={() => ask_chat()}>
                      <MaterialCommunityIcons name="magnify" color={'black'} size={30} />
                  </TouchableOpacity>
              </View>
      </View>
        <Search_request array_chat={array_chat} scrollViewRef={scrollViewRef}/>
    </>
  )
}

export default Search_request_container