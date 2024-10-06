import { StyleSheet, View } from 'react-native';
import { createContext, useEffect, useState } from 'react';
import { client } from './Utils/KindeConfig';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './Navigations/TabNavigation';
import LoginScreen from './Screens/LoginScreen';

//Creating auth context
export const AuthContext = createContext();

export default function Index() {
  const[auth, setAuth] = useState(false);

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
