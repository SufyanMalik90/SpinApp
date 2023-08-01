import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'; // Import Firebase Firestore
import Logo from '../../assets/image/logo.png';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Check if the user is already authenticated after a delay of 1 seconds
    const timer = setTimeout(() => {
      checkUserAuthentication();
    }, 1000);

    // Clear the timer to avoid any memory leaks
    return () => clearTimeout(timer);
  }, []);

  const checkUserAuthentication = () => {
    const user = auth().currentUser;
    if (user) {
      checkUserDataInFirestore(user.uid); // Check if the user's data exists in Firestore
    } else {
      navigation.replace('SignIn'); // Navigate to SignIn screen if the user is not authenticated
    }
  };

  const checkUserDataInFirestore = async (uid) => {
    try {
      const userDoc = await firestore().collection('users').doc(uid).get();
      if (userDoc.exists) {
        // User data exists in Firestore
        navigation.replace('Home'); // Navigate to Home screen
      } else {
        // User data does not exist in Firestore
        navigation.replace('SignIn'); // Navigate to SignIn screen
      }
    } catch (error) {
      console.log('Error checking user data in Firestore:', error);
      navigation.replace('SignIn'); // Navigate to SignIn screen in case of any error
    }
  };

  return (
    <View style={styles.root}>
        <StatusBar barStyle="light-content" hidden={true} backgroundColor="#6238b4"/>
      <Image source={Logo}  style={styles.logo} resizeMode = "contain" />
      
    </View>

  )
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#6238b4',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
       
        
  },
    logo : {
    width: '80%',
    maxWidth: 300,
    maxHeight: 150,
    }
})
export default SplashScreen