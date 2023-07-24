import { BackHandler, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from './styles/Login_styles'
import { login } from '../../firebase'

const Login = () => {

  const navigation = useNavigation()
  const [emailuser, setEmailuser] = useState('')
  const [passworduser, setPassworduser] = useState('')

  const emailChange = (text) => {
    setEmailuser(text.trim())
  }

  const passwordChange = (text) => {
      setPassworduser(text)
  }

  const Login_user = () => {
    try{
      login(emailuser, passworduser).then(() => {
        navigation.navigate('Menu')
      })
    }catch(e){
      console.log(e)
    }
  }

  return (
      <KeyboardAvoidingView
        style={{flex:1}}
        behavior={Platform.OS === 'ios' ?  'padding' : 'height'}
      >
        <View style={styles.container}>
          <View style={styles.sub_container}>
            <View>
                {
                  Platform.OS === 'ios' ? <></>
                  : 
                  <TouchableOpacity onPress={() => BackHandler.exitApp()}>
                    <Text style={styles.text_style}>X</Text>
                  </TouchableOpacity>
                }
            </View>
            <View>
              <Text style={styles.text_style_title}>
                login or register in likebourdain
              </Text>
            </View>
            <View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input_email}
                            onChangeText={emailChange}
                            placeholder='email'
                            placeholderTextColor='#999'
                            value={emailuser}
                        />
                        <TextInput
                            style={styles.input_password}
                            onChangeText={passwordChange}
                            secureTextEntry={true}
                            placeholder='password'
                            placeholderTextColor='#999'
                            value={passworduser}
                        />
                    </View>
                    <TouchableOpacity style={styles.button_registar}  onPress={() => Login_user()} >
                            <Text style={styles.text_style}>
                                continuar
                            </Text>
                    </TouchableOpacity>   
              </View>
              <View style={styles.container_divider}>
                    <View style={styles.divider}/>
                        <Text style={styles.container_divider_text}>Ou</Text>
                    <View style={styles.divider}/>
                </View>
                <View>
                    <TouchableOpacity style={styles.button_registar} onPress={() => navigation.navigate('Signup')} >
                        <Text style={styles.text_style}>
                            Registar
                        </Text>
                    </TouchableOpacity>
                </View>
              <View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
  )
}

export default Login
