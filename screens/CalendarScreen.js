import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, StatusBar } from 'react-native'

function CalendarScreen({navigation}){
  return (
    <SafeAreaView style={styles.block}>
      <StatusBar backgroundColor="orange"></StatusBar>
      <View>
        <Text>캘린더</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  block: {
    flex: 1
  }
})
export default CalendarScreen