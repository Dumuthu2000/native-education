import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext} from 'react'
import { AuthContext } from '../index';
import { client } from '../Utils/KindeConfig';
import Header from '../../components/Header';
import CategoryList from '../../components/CategoryList';
import CourseList from '../../components/CourseList';


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
    <ScrollView style={{padding:10}}>
      <Header/>
      <CategoryList/>
      <CourseList/>
      <CourseList/>
      <CourseList/>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})