import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, StatusBar } from 'react-native'

function HomeScreen({navigation}){
  return (
    <SafeAreaView style={styles.block}>
      <StatusBar backgroundColor="orange"></StatusBar>
      <View>
        <Text>할일목록</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  block: {
    flex: 1
  }
})
export default HomeScreen