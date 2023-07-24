import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import styles_singup from './styles/Signup_styles'
import { signup } from '../../firebase'

const Signup = () => {

    const navigation = useNavigation()

    const [email_input, setEmail_input] = useState('')
    const [password_input, setPassword_input] = useState('')

    const handle_Email = (text) => {
      setEmail_input(text)
    }
  
    const handle_Password =  (text) => {
      setPassword_input(text)
    }

    const validate_Email = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if(reg.test(text) === false){
          return false 
        }else{
          return true
        }
    }

    const signup_user = async () => {
      if(validate_Email(email_input)){
        try{
          const authUser = await signup(email_input, password_input)
          navigation.navigate('Menu')
        }catch(e){
          console.log(e)
        }
      }else{
        return
      }
    }

  return (
    <KeyboardAvoidingView
        style={{flex:1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles_singup.container}>
          <View style={styles_singup.sub_container}>
            <ScrollView>
              <View style={{paddingTop:25, paddingBottom:20}}>
                <View>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles_singup.text_style}>X</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles_singup.text_style}>
                    registar em likebourdain
                  </Text>
                </View>
                <View>
                  <View style={styles_singup.inputContainer}>
                    <TextInput
                      style={styles_singup.input_email}
                      onChangeText={handle_Email}
                      placeholder='email'
                      placeholderTextColor='#999'
                      value={email_input}
                    />
                    <TextInput
                      secureTextEntry={true}
                      style={styles_singup.input_others}
                      onChangeText={handle_Password}
                      placeholder='password'
                      placeholderTextColor='#999'
                      value={password_input}
                    />
                  </View>
                </View>
                <View>
                  {/* <TouchableOpacity style={styles_singup.button_registar} onPress={() => navigation.navigate('Menu')}> */}
                  <TouchableOpacity style={styles_singup.button_registar} onPress={() => signup_user()}>
                    <Text style={styles_singup.text_style}>
                      registar
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    button: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
})