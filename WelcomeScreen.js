import * as React from 'react';
import { View,ScrollView, Text, StyleSheet, Image, useColorScheme} from 'react-native';

export default function WelcomeScreen() {
  const colorScheme = useColorScheme()

  return (
    <ScrollView indicatorStyle="white" style={[styles.container, {backgroundColor: colorScheme==="dark"?"#333333":"white",
    }]}>
      <View style={styles.headerContainer}>
        <Image resizeMode='contain' style={styles.imgLogo} 
        source={require('./img/logo.png')}
        accessible={true}
        accessibilityLabel='Little Lemon Logo'></Image>
        <Text style={{...styles.headerText, paddingHorizontal: 20, color: colorScheme==="dark"?'white':'black' }}>Little Lemon</Text>
      </View>
      <Text style={[styles.regularText, {color: colorScheme==="dark"?'white':'black' }]}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row', 
    flex: 1, 
    justifyContent: 'center',
    marginTop: 20
  },

  container: {
    flex: 1
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    textAlign: 'center',
  },
  imgLogo:{
    width: '20%',
    height: '100%',
  }
});
