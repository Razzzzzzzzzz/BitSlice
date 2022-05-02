import React from 'react'
import { useState } from 'react'
import { View, StyleSheet, Text} from 'react-native'
import { Input, Button } from 'react-native-elements';
import { auth } from '../firebase';


const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [imageURL, setImageURL] = useState('');
    const Signup = ()=>{
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
             // Signed in
                var user = userCredential.user;
             user.updateProfile({
                displayName: name,
                photoURL: imageURL? imageURL: "https://i.stack.imgur.com/34AD2.jpg"
            }).then(function() {
             // Update successful
             // ...
            }).catch(function(error) {
            // An error occurred
            // ...
            });  
            // ...
          navigation.popToTop(); 
        })
  .catch((error) => {

    var errorMessage = error.message;
    alert(errorMessage)
  });
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Don't hane an Account?</Text>
            <View>
            <Input
                placeholder='Enter Your Name'
                label="Name"
                leftIcon={{ type: 'material', name: 'badge' }}
                value={name}
                onChangeText={text => setName(text)} autoCompleteType={undefined}            />
            
            <Input
                placeholder='Enter Your Email'
                label="Email"
                leftIcon={{ type: 'material', name: 'email' }}
                value={email}
                onChangeText={text => setEmail(text)} autoCompleteType={undefined}            />
            
            <Input
                placeholder='Enter Your Password'
                label="Password"
                leftIcon={{ type: 'material', name: 'lock' }}
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry autoCompleteType={undefined}            />

            <Input
                placeholder='Enter Your Profile Picture URL'
                label="Profile Picture"
                leftIcon={{ type: 'material', name: 'face' }}
                value={imageURL}
                onChangeText={text => setImageURL(text)} autoCompleteType={undefined}            />

            <Button title="Sign Up" onPress={Signup}/>
        </View></View>
    )
}

export default SignupScreen 
const styles = StyleSheet.create({
    
    container: { 
        flex: 1, 
        alignItems: 'stretch',
        justifyContent:'space-evenly',
        borderRadius:10,
        padding: 10,
        backgroundColor: '#f2f2f2', 
        },
    text: {
        fontSize:50
    }
})