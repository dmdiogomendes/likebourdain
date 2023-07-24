import { SafeAreaView, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import Search_request_container from './components/Search_request_container'

const Home = () => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
      <Search_request_container />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });