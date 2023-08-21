import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './components/LogInScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator()

export default function App() {

  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <LittleLemonHeader />
            <Drawer.Navigator useLegacyImplementation initialRouteName="LogIn">
              <Drawer.Screen name="LogIn" component={LoginScreen}  options={{headerTitleAlign: 'center'}} />
              <Drawer.Screen name="Welcome" component={WelcomeScreen} options={{headerTitleAlign: 'center'}}/>
            </Drawer.Navigator>
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


