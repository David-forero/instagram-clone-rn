import { StyleSheet, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import AddNewPost from '../components/new-post/AddNewPost'
import FormikPostUpload from '../components/new-post/FormikPostUpload'

const NewPostScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>  
      <StatusBar/>
      <AddNewPost navigation={navigation}/>
      <FormikPostUpload/>
    </SafeAreaView>
  )
}

export default NewPostScreen

const styles = StyleSheet.create({
  
})