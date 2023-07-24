import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import styler_user from './styles/User_style'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { logout, useAuth } from '../../firebase';
import { useNavigation } from '@react-navigation/native';

const User = () => {

  const navigation = useNavigation()
  const userIn = useAuth()

  const login_out = () => {
    logout()
    navigation.navigate('Login')
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
        <KeyboardAvoidingView
            style={{flex:1}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={styler_user.main_style_container}>
                <MaterialCommunityIcons name="account-circle" color={'black'} size={60} />
                <Text style={styler_user.text_styles}>{userIn?.email}</Text>
                <TouchableOpacity onPress={() => login_out()}>
                  <Text style={styler_user.text_styles}>log out</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default User