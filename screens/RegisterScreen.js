import React, { useLayoutEffect, useState } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { auth } from '../firebase';

const RegisterScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: 'Back to Login',
        });
    }, [navigation]);

    const register = () => {
        // alert('Register')
        auth.createUserWithEmailAndPassword(email, password)
            .then(authUser => {
                authUser.user.updateProfile({
                    displayName: name,
                    photoUrl: imageUrl || 'http://www.ll-mm.com/images/placeholders/team-placeholder.jpg',
                });
            })
            .catch(error => alert(error.message));
    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style='light' />
            <Image
                source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/1200px-Signal-Logo.svg.png"
                }}
                style={{ width: 150, height: 150 }}
            />
            <Text style={styles.text}>Create a Signal account</Text>
            <View style={styles.inputContainer}>
                <Input
                    placeholder='Full Name'
                    autoFocus
                    type='text'
                    value={name}
                    onChangeText={text => setName(text)}
                />
                <Input
                    placeholder='Emails'
                    type='email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <Input
                    placeholder='Password'
                    type='password'
                    secureTextEntry
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
                <Input
                    placeholder='Profile Picture Url (optional)'
                    type='text'
                    value={imageUrl}
                    onChangeText={text => setImageUrl(text)}
                    onSubmitEditing={register}
                />

                <Button raised title="Register" onPress={register} containerStyle={styles.button} type='outline' />
                <Button title="Login" onPress={() => navigation.navigate('Login')} containerStyle={styles.button} />
            </View>
            {/* 88 */}
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        width: 300
    },
    button: {
        width: 300,
        marginTop: 10,
        borderRadius: 15
    },
    text: {
        fontSize: 20,
        marginBottom: 10,
        marginTop: 10
    }
});