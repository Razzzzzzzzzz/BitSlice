import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text} from 'react-native'
import { Input, Button, Divider } from 'react-native-elements';
import { auth } from '../firebase';


const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const Signin = ()=>{
        auth.signInWithEmailAndPassword(email, password)
  .catch((error) => {
    var errorMessage = error.message;
    alert(errorMessage)
  });
    }

    useEffect(() => {
        const unsubcribe = auth.onAuthStateChanged
        (function (user) {
            if (user) {
              navigation.replace('Chat');
            } else {
                navigation.canGoBack() &&
                navigation.popToTop();
              // User is signed out
              // ...
            }
          });

        return unsubcribe
        }, [])

    return (
        
        <View style={styles.container}>
            <Text style={styles.text}>
                Welcome to Bitslice
            </Text>
            <View><Input
                placeholder='Enter Your Email'
                label="Email"
                leftIcon={{ type: 'material', name: 'email'  }}
                value={email}
                onChangeText={text => setEmail(text)} autoCompleteType={undefined}            
            />
            
            <Input
                placeholder='Enter Your Password'
                label="Password"
                leftIcon={{ type: 'material', name: 'lock' }}
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry autoCompleteType={undefined}            
            />

            <Button title=" Log In  "  onPress={Signin} />
            <Divider width={10} color='#f2f2f2' />
            <Button title="Sign Up" onPress={()=>navigation.navigate('Signup')}/>
        </View></View>
    )
}

export default LoginScreen
const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        alignItems: 'stretch',
    justifyContent: 'space-evenly',
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: '#f2f2f2', 
    },
    text: {
        fontSize:50
    }
})