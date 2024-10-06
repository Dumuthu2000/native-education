import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../index';
import { client } from '../Utils/KindeConfig';

const HomeScreen = () => {
    const {auth, setAuth} = useContext(AuthContext)
    const handleLogout = async () => {
        try {
          const loggedOut = await client.logout(true);
          if (loggedOut) {
            setAuth(false);
          } else {
            console.error("Failed to log out properly");
          }
        } catch (error) {
          console.error("Logout failed:", error);
        }
      };
      
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title='Logout' onPress={handleLogout}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})