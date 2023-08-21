import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './components/LogInScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';


const Stack = createNativeStackNavigator()
const BottomNav = createBottomTabNavigator()
export default function App() {

  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <LittleLemonHeader />
            <BottomNav.Navigator initialRouteName="LogIn"
             screenOptions={
              ({route})=>({
              tabBarIcon: ({focused, color, size}) => {
                let iconName
                if(route.name==="Welcome"){
                  iconName = focused? 'home':'home-outline'
                }
                else if(route.name==="LogIn"){
                  iconName = focused? 'log-in':'log-in-outline'
                }
                return <Ionicons name={iconName} size={size} color={color}></Ionicons>
              },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
             })
             
             }>
              <BottomNav.Screen name="Welcome" component={WelcomeScreen} options={{headerTitleAlign: 'center'}}/>
              <BottomNav.Screen name="LogIn" component={LoginScreen}  options={{headerTitleAlign: 'center'}} />
            </BottomNav.Navigator>
        </View>
        <View style={styles.footerContainer}>
          <LittleLemonFooter />
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' }
});


