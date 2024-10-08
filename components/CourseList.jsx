import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../config/FirebaseConfig';
import Colors from '../app/Utils/Colors';
import SectionHeadings from './SectionHeadings';
import Ionicons from '@expo/vector-icons/Ionicons';

const CourseList = () => {
    const[courses, setCourses] = useState([]);
    const[activeIndex, setActiveIndex] = useState();

    useEffect(()=>{
        getCourses();
    },[])

    const getCourses=async()=>{
        const docQuery = query(collection(db, 'course'));
        const querySnapshot = await getDocs(docQuery);

        //Collect all courses in an array
        const coursesList = [];
        querySnapshot.forEach((doc)=>{
            coursesList.push(doc.data());
            console.log(doc.data())
        });

        setCourses(coursesList);
    }
  return (
    <View style={{marginTop:20}}>
        <SectionHeadings headingName={`Latest Courses`}/>
      <FlatList
        data={courses}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index})=>(
            <TouchableOpacity style={[styles.container, activeIndex==index&&{borderColor:Colors.PRIMARY, borderWidth:1}]}
            onPress={()=>{setActiveIndex(index)}}>
                <Image source={{uri:item.banner}} 
                style={{width:250, height:150, borderRadius:10}}/>
                <Text style={{fontFamily:'outfit', fontSize:18, marginTop:5}}>{item.name}</Text>
                <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:5}}>
                    <Ionicons name="pricetags-sharp" size={18} color={Colors.PRIMARY} />
                    <Text style={{fontSize:15, fontFamily:'outfit-bold', color:Colors.PRIMARY, marginTop:5}}>{item.free?'Free':'Paid'}</Text>
                </View>
            </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default CourseList

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.WHITE,
        padding:10,
        marginTop:5,
        marginRight:10,
        borderRadius:10
    }
})