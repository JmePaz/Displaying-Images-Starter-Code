import { useState } from 'react';
import { ScrollView, Text, StyleSheet, Pressable, useColorScheme} from 'react-native';
import { TextInput } from 'react-native-paper';


export default function LoginScreen({navigation}) {
  const colorScheme = useColorScheme()
  
  const [emailAddress, changeEmailAddress] = useState('')
  const [password, changePassword] = useState('')
  const [isLoggedIn, setLogInStatus] = useState(false)

  return (
    <ScrollView style={[styles.container, {backgroundColor: colorScheme==="dark"?"#333333":"white"}]} 
    keyboardDismissMode='on-drag'
     keyboardShouldPersistTaps='always'>
      <Text style={[styles.headerText,{ color: colorScheme==="dark"?'white':'black'}]}>Welcome to Little Lemon</Text>
      
      {!isLoggedIn&&
      (
      <>
      <Text style={[styles.regularText, { color: colorScheme==="dark"?'white':'black'}]}>Login to continue </Text>
      <TextInput style={styles.inputStyle} placeholder='E-mail'
      keyboardType='email-address'
      value={emailAddress}
      onChangeText={changeEmailAddress}
      >
      </TextInput>
      <TextInput style={styles.inputStyle} placeholder='Password'
      secureTextEntry={true}
      value={password}
      onChangeText={changePassword}></TextInput>
      <Pressable style={{...styles.button, marginTop: 15}} onPress={
        ()=>{
            //setLogInStatus(true)
            navigation.navigate('Welcome')
        }
      }>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable></>)}

      {isLoggedIn&&
      (<Text style={styles.headerText}>You are Logged In!</Text>)}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputStyle: {
    marginHorizontal: 20,
    marginBottom: 15,
    fontSize: 18,
    height: 50
  },
  button :{
    backgroundColor: '#EE9972',
    width: '30%',
    padding: 7,
    borderRadius: 7,
    alignSelf: 'center'
  },
  buttonText:{
    textAlign: 'center',
    fontSize: 20
  }
});

