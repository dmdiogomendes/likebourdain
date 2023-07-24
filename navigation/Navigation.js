import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home/Home';
import Login from '../screens/login/Login';
import Signup from '../screens/signup/Signup';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Posts_Blogs from '../screens/post/Posts_Blogs';
import User from '../screens/user/User';
import Single_Post from '../screens/single_post/Single_Post';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Menu_Stack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black'
      }}
    >
      <Tab.Screen 
        name="Post"
        component={Posts_Blogs}
        options={{
          tabBarLabel: () => {return null},
          tabBarIcon: ({ color }) =>(
            <MaterialCommunityIcons name="home" color={color} size={30} />
          )
        }}
      />
      <Tab.Screen 
        name="Home"
        component={Home}
        options={{
          tabBarLabel: () => {return null},
          tabBarIcon: ({ color }) =>(
            <MaterialCommunityIcons name="magnify" color={color} size={30} />
          )
        }}
      />
      <Tab.Screen 
        name="User"
        component={User}
        options={{
          tabBarLabel: () => {return null},
          tabBarIcon: ({ color }) =>(
            <MaterialCommunityIcons name="account-circle" color={color} size={30} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
              headerShown: false,
              gestureEnabled: false
            }}
            tabBarIcon = {{
              activeTintColor: 'red',
              inactiveTintColor: 'red',
            }}
        >
            <Stack.Screen 
              name="Menu"
              component={Menu_Stack}
              options={{ headerShown: false }}    
            />
            <Stack.Screen 
                name="Login" 
                component={Login}
                options={{ headerShown: false }}                
              />
            <Stack.Screen 
                name="Home" 
                component={Home}
                options={{ headerShown: false }}
            /> 
            <Stack.Screen 
                name="Signup" 
                component={Signup}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="Single_Post"
                component={Single_Post}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
