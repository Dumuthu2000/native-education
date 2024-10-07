import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { client } from '../app/Utils/KindeConfig'
import Colors from '../app/Utils/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

const Header = () => {
  const[userDetails, setUserDetails] = useState([]);

  useEffect(()=>{
    getUserAuthDetails();
  },[])

  const getUserAuthDetails = async()=>{
    const user = await client.getUserDetails();
    console.log(user)
    setUserDetails(user);
  }
  return (
    <>
      <View style={{display:'flex', flexDirection:'row', gap:10, alignItems:'center'}}>
        <Image source={{uri: userDetails.picture}} style={{width:45, height:45, borderRadius:50}}/>
        <View>
          <Text style={{fontSize:18}}>Welcome,</Text>
          <Text style={{fontSize:20, fontWeight:'bold', color:Colors.PRIMARY}}>{userDetails.given_name}</Text>
        </View>
      </View>
      <View style={styles.input}>
        <Ionicons name="search" size={24} color={Colors.GRAY}/>
        <TextInput placeholder='Search'/>
      </View>
    </>
  )
}

export default Header
const styles = StyleSheet.create({
  input:{
    backgroundColor:Colors.WHITE,
    padding:10,
    borderRadius:50,
    paddingHorizontal:20,
    marginTop:20,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:10,
    borderWidth:0.5,
    borderColor:Colors.PRIMARY
  }
})