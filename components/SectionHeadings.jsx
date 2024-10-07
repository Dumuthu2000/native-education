import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../app/Utils/Colors'

const SectionHeadings = ({headingName}) => {
  return (
    <View>
      <Text style={{fontFamily:'outfit-medium', fontSize:20, marginBottom:5, color:Colors.PRIMARY}}>{headingName}</Text>
    </View>
  )
}

export default SectionHeadings

const styles = StyleSheet.create({})