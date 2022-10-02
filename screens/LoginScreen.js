import React from 'react';
import { View, Text, StyleSheet, Button, StatusBar,Image,SafeAreaView  } from 'react-native';

function LoginScreen({Navigation}){
    return(
        <SafeAreaView style = {styles.container}>
        <Text style = {styles.title}>Drink</Text> 
        
        <Image 
        resizeMode = "contain"
       source = {require('../assets/fullglass.png')}   
       style = {styles.glassImage} />

       <View style = {styles.loginButton}>
        <Button
        onPress = {()=>Navigation.navigate('DrinkScreen')}
        title = "Login"/>
       </View>

       <View style = {styles.loginButton}>

        <Button
        title = "Register"/>
       </View>
        </SafeAreaView>
    )
}