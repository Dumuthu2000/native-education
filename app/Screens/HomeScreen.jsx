import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../index';
import { client } from '../Utils/KindeConfig';
import Header from '../../components/Header';
import { data } from '../Utils/GlobalAPI';
import CategoryList from '../../components/CategoryList';


const HomeScreen = () => {
    const {auth, setAuth} = useContext(AuthContext)
    const[categories, setCategories] = useState([]);

    useEffect(()=>{
      setCategories(data.categoties);
    },[])

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
    
    //Get category list
    // const getCategory=()=>{
    //   setCategories(data.categoties);
    //   categories.map((item,index)=>{})
    // }
      
  return (
    <View style={{padding:10}}>
      <Header/>
      <CategoryList categories={categories}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})