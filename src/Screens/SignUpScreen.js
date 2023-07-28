import { View, Text, StyleSheet, TextInput, Image, useWindowDimensions, ScrollView, Keyboard, Alert } from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../Components/CustomButton';
import CountryPicker from 'react-native-country-picker-modal';
import Logo from '../../assets/image/SigmaAdsdlogo.png';
import Input from './Input';
import Loader from './Loader';
import auth from '@react-native-firebase/auth';

const SignUpScreen = ({ navigation }) => {
  const [input, setInput] = useState({
    email: '',
    username: '',
    password: '',
    phone: '',
  });
  
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [countryCode, setCountryCode] = useState('PK');
  const [callingCode, setCallingCode] = useState('92');
  
  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };

  const Validate = () => {
    Keyboard.dismiss(); // hide the keyboard
    let Valid = true;
    if (!input.email) {
      handleError('Please Input Email', 'email');
      Valid = false;
    } else if (!input.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please Input Valid Email', 'email');
    }
    if (!input.username) {
      handleError('Please Input Username', 'username');
      Valid = false;
    }
    if (!input.password) {
      handleError('Please Input Password', 'password');
    } else if (input.password.length < 6) {
      // minimum length for password is 6
      handleError('Minimum Length of Password is 5', 'password');
    }
    if (input.password !== confirmPassword) {
      // handleError('Passwords do not match.', 'password');
      handleError('Passwords do not match.', 'confirmPassword');
      return;
    }
    else if(!confirmPassword){
      handleError('Please Input Confirm Password', 'confirmPassword');
    }
    if (!input.phone) {
      handleError('Please Input Phone', 'phone');
    } else if (input.phone.length < 10) {
      // minimum length for phone is 10
      handleError('Minimum Length of Phone is 10', 'phone');
    }
    if (Valid) {
      register();
    }
  };

  const createUser = async () => {
    try {
      const { email, password } = input;
      await auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log('Error creating user:', error);
      throw new Error('Something went wrong during user registration.');
    }
  };

  const register = async () => {
    setLoading(true);
    try {
      await createUser();
      setLoading(false);
      Alert.alert('Successful', 'Record Inserted');
      navigation.navigate('SignIn');
    } catch (error) {
      setLoading(false);
      Alert.alert('Error', error.message);
    }
  };

  const handleOnChange = (text, input) => {
    setInput((prevState) => ({ ...prevState, [input]: text })); // get text from user & set to input fields
  };

  const handleError = (errorMessage, input) => {
    setError((prevState) => ({ ...prevState, [input]: errorMessage })); // clear error message & back to previous state
  };

  const onRegesterPresssed = () => {
    //console.warn("Sign Up");
    Validate();
  };

  const { height } = useWindowDimensions();

  const onSignInPresssed = () => {
    // console.warn("Sign Up");
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Loader visible={loading} />
        <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
        <View style={styles.loginContainer}>
          <Text style={styles.textLogin}>Create a new account</Text>

          <Input
            placeholder='Username'
            iconName='account-outline'
            error={error.username}
            onFocus={() => {
              handleError(null, 'username');
            }}
            onChangeText={(text) => handleOnChange(text, 'username')}
          />
          <Input
            placeholder='Email'
            iconName='email'
            error={error.email}
            onFocus={() => {
              handleError(null, 'email');
            }}
            onChangeText={(text) => handleOnChange(text, 'email')}
          />
          {/* <Input
            keyboardType="numeric"
            placeholder='03XXXXXXXXX'
            iconName='phone'
            error={error.phone}
            onFocus={() => {
              handleError(null, 'phone');
            }}
            onChangeText={(text) => handleOnChange(text, 'phone')}
          />   */}
          <View style={styles.inputContainer}>
            <CountryPicker
              countryCode={countryCode}
              withFilter
              withCurrencyButton={false}
              withFlag
              withCallingCode
              onSelect={(country) => {
                console.log('country', country);
                const { cca2, callingCode } = country;
                setCountryCode(cca2);
                setCallingCode(callingCode[0]);
              }}
            />
            <TextInput
              style={{
                color: '#000',
                flex: 1,
                fontSize: 12,
              }}
              placeholder='3XXXXXXXXX'
              keyboardType='numeric'
              error={error.phone}
              onChangeText={(text) => handleOnChange(text, 'phone')}
            />
          </View>
          <Input
            placeholder='Password'
            iconName='lock-outline'
            error={error.password}
            onFocus={() => {
              handleError(null, 'password');
            }}
            password
            onChangeText={(text) => handleOnChange(text, 'password')}
          />
            <Input
          placeholder='Confirm Password'
          iconName='lock-outline'
          error={error.confirmPassword} // Update the error prop to show error for Confirm Password
          onFocus={() => {
            handleError(null, 'confirmPassword');
          }}
          password
          onChangeText={(text) => {
            handleOnChange(text, 'confirmPassword');
            handleConfirmPasswordChange(text); // Add this line to update the Confirm Password state
          }}
        />
          <CustomButton text='Register' onPress={onRegesterPresssed} />
          <View style={styles.message}>
            <Text>
              I have already an account? <Text style={styles.textInput} onPress={onSignInPresssed}>Login</Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#6238b4',
  },
  loginContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '75%',
    height: 'auto',
    borderRadius: 10,
  },
  textLogin: {
    color: '#6238b4',
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  textInput: {
    color: '#02074c',
  },
  message: {
    marginBottom: 10,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 150,
    marginBottom: 10,
  },
  inputContainer: {
    backgroundColor: '#bdaee7',
    width: '90%',
    height: 35,
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderWidth: 0.5,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 22,
  },
});

export default SignUpScreen;
