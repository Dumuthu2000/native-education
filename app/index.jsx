import { StyleSheet, View } from 'react-native';
import { createContext, useEffect, useState } from 'react';
import { client } from './Utils/KindeConfig';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './Navigations/TabNavigation';
import LoginScreen from './Screens/LoginScreen';
import { useFonts } from 'expo-font';

//Creating auth context
export const AuthContext = createContext();

export default function Index() {
  const[auth, setAuth] = useState(false);
  const [loaded, error] = useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
    'outfit-semiBold': require('../assets/fonts/Outfit-SemiBold.ttf'),
  });

  useEffect(() => {
    checkAuthenticate();
  }, [auth]);

  const checkAuthenticate = async () => {
    if (await client.isAuthenticated()) {
      const userProfile = await client.getUserDetails();
      setAuth(true);
    } else {
      setAuth(false);
    }
  };

  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      <NavigationContainer independent={true}>
        {auth?
        <TabNavigation/>:
        <LoginScreen/>
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({});
