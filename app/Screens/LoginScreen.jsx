import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'
import { client } from '../Utils/KindeConfig'

const LoginScreen = () => {
    const handleSignUp = async () => {
        const token = await client.register();
        if (token) {
          // User was authenticated
          console.log('Authenticated Successfully');
        }
      };
      
      const handleSignIn = async () => {
        const token = await client.login();
        if (token) {
          // User was authenticated
          console.log('Authenticated Successfully');
        }
      };
  return (
    <View>
      <Image source={require(`../../assets/images/rocket.jpg`)}
            style={{width:'100%', height:400, objectFit:'cover'}}/>
            <View style={{padding:20}}>
                <Text style={{fontSize:45, fontWeight:'bold'}}>Welcome To 
                    <Text style={{color:Colors.PRIMARY}}> NIBM</Text>
                </Text>
                <Text style={{marginTop:7, color:Colors.GRAY, fontSize:18}}>Learn Programming to Build Real Life Projects </Text>

                {/* Sign In button */}
                <TouchableOpacity onPress={handleSignIn} style={styles.button}>
                    <Text style={{textAlign:'center', color:Colors.WHITE, fontSize:18}}>Sign In</Text>
                </TouchableOpacity>

                {/* Create an account */}
                <TouchableOpacity onPress={handleSignUp}>
                    <Text style={{marginTop:10, color:Colors.PRIMARY, textAlign:'center', fontSize:18}}>Create an Account</Text>
                </TouchableOpacity>
            </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    button:{
        padding:16,
        backgroundColor:Colors.PRIMARY,
        borderRadius:99,
        marginTop:60
    }
})