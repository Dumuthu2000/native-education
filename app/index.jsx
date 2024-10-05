import { StyleSheet, View } from 'react-native';
import { useEffect } from 'react';
import { client } from './Utils/KindeConfig';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './Navigations/TabNavigation';
import LoginScreen from './Screens/LoginScreen';


export default function Index() {
  useEffect(() => {
    checkAuthenticate();
  }, []);

  const checkAuthenticate = async () => {
    if (await client.isAuthenticated()) {
      const userProfile = await client.getUserDetails();
      console.log(userProfile);
      console.log('Authenticated!!!!!');
    } else {
      return(
        <LoginScreen/>
      )
    }
  };

  return (
    <NavigationContainer independent={true}>
      <TabNavigation/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
