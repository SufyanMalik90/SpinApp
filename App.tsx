import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SignInScreen from './src/Screens/SignInScreen'
import SignUpScreen from './src/Screens/SignUpScreen'
import SplashScreen from './src/Screens/SplashScreen'
import Navigation from './src/Navigation/Navigation'
import HomeScreen from './src/Screens/HomeScreen'
import WatchScreen from './src/Screens/WatchScreen'
import Withdraw from './src/Screens/Withdraw'

const App = () => {
  return (
    <View style={styles.root}>
      {/* <Text>App 123</Text> */}
      {/* <SignInScreen /> */}
      {/* <SignUpScreen /> */}
      {/* <SplashScreen /> */}
      <Navigation />
      {/* <Withdraw /> */}
      {/* <HomeScreen /> */}
    </View>
  )
}
const styles = StyleSheet.create({
  root : {
      flex : 1,
      backgroundColor: '#fff',
    },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 150,
  }
})
export default App