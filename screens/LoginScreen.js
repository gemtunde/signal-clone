import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { auth } from '../firebase';

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            console.log(authUser);
            if (authUser) {
                navigation.replace('Home');
            }
        });
        return unsubscribe;

    }, []);
    const signIn = () => {
        alert('signin')
    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style='light' />
            <Image
                source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/1200px-Signal-Logo.svg.png"
                }}
                style={{ width: 150, height: 150, marginBottom: 20 }}
            />
            <View style={styles.inputContainer}>
                <Input
                    placeholder='Emails'
                    autoFocus
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

                <Button title="Login" onPress={signIn} containerStyle={styles.button} />
                <Button raised title="Register" onPress={() => navigation.navigate('Register')} containerStyle={styles.button} type='outline' />
            </View>
            {/* 88 */}
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

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
        borderRadius: 15,
    }
});