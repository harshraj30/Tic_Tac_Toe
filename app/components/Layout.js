import React, { Component } from 'react'
import { StatusBar, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const Layout = ({ children }) => {
  return (
    <View className="w-full min-h-screen">
      <StatusBar backgroundColor='green' barStyle='default' />
      <View className="bg-green-800 h-16 flex justify-center">
        <Text className="text-3xl font-semibold text-white  px-3">Tic Tac Toe</Text>
      </View>
      {children}
    </View>
  )
}

export default Layout
