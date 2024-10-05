import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./Screens/LoginScreen";
import { client } from "./Utils/KindeConfig";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    checkAuthenticate();
  }, []);

  const checkAuthenticate = async () => {
    // Using `isAuthenticated` to check if the user is authenticated or not
    if (await client.isAuthenticated) {
      // Need to implement, e.g: call an api, etc...
      const userProfile = await client.getUserDetails();
      console.log(userProfile);
      // output: {"given_name":"Dave","id":"abcdef","family_name":"Smith","email":"dave@smith.com"}
      console.log('Authenticated!!!!!')
    } else {
      // Need to implement, e.g: redirect user to sign in, etc..
    }
  };
  
  return (
    <View>
      <LoginScreen/>
    </View>
  );
}

const styles = StyleSheet.create({});
