import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../app/Utils/Colors'
import SectionHeadings from './SectionHeadings';

const CategoryList = ({categories}) => {
    const[activeIndex, setActiveIndex] = useState();
  return (
    <View style={{marginTop:20}}>
        <SectionHeadings headingName={`Category`}/>
      <FlatList
        data={categories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index})=>(
            <TouchableOpacity style={[styles.container, activeIndex==index&&{borderColor:Colors.PRIMARY, borderWidth:1}]}
            onPress={()=>{setActiveIndex(index)}}>
                <Image source={{uri:item.icons.url}} style={{width:45, height:45, borderRadius:50, objectFit:'contain'}}/>
                <Text style={{marginTop:10}}>{item.name}</Text>
                
            </TouchableOpacity>
        )}
        />
    </View>
  )
}

export default CategoryList

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.WHITE,
        padding:15,
        marginRight:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        width:100
    }
})