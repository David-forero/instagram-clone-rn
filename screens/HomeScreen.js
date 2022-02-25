import { SafeAreaView, StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/home/Header';
import Stories from '../components/home/Stories';
import Post from '../components/home/Post';
import {POST} from '../data/posts';
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs';

const HomeScreen = ({navigation}) => {
  console.log(POST);
  return (
    <SafeAreaView
        style={styles.container}
    >
      <StatusBar />
      <Header navigation={navigation} />
      <Stories/>
      <ScrollView>
        {
          POST.map((post, index) => (
            <Post post={post} key={index} />
          ))
        }
      </ScrollView>

      <BottomTabs icons={bottomTabIcons} />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
        flex: 1
    }
});