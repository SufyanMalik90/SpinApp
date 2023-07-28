import { 
  View, 
  Text,
  StyleSheet,
  TextInput,
  Image,
  useWindowDimensions,
  ScrollView,
  Keyboard,
  Alert,
  SafeAreaView
} from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../Components/CustomButton';
import Logo from '../../assets/image/logo.png';
import Input from './Input';
import Loader from './Loader';
import auth from '@react-native-firebase/auth'; // Import Firebase Auth

const SignInScreen = ({ navigation }) => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const Validate = () => {
    Keyboard.dismiss(); // hide the keyboard
    let isValid = true;
    const errors = {};

    if (!input.email) {
      errors.email = 'Please Input Email';
      isValid = false;
    } else if (!input.email.match(/\S+@\S+\.\S+/)) {
      errors.email = 'Please Input Valid Email';
      isValid = false;
    }

    if (!input.password) {
      errors.password = 'Please Input Password';
      isValid = false;
    } else if (input.password.length < 6) {
      errors.password = 'Minimum Length of Password is 6';
      isValid = false;
    }

    setError(errors);
    return isValid;
  };

  const loginUser = async () => {
    try {
      const { email, password } = input;
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log('Error logging in:', error);
      throw new Error('Invalid email or password.');
    }
  };

  const handleOnChange = (text, input) => {
    setInput((prevState) => ({ ...prevState, [input]: text }));
  };

  const { height } = useWindowDimensions();

  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };

  const onLoginPressed = async () => {
    const isValid = Validate();
    if (isValid) {
      try {
        setLoading(true);
        await loginUser();
        setLoading(false);
        Alert.alert('Welcome', 'To Spin App');
        navigation.replace('Home');
      } catch (error) {
        setLoading(false);
        Alert.alert('Error', error.message);
      }
    } else {
      Alert.alert('Error', 'Please fill in all fields correctly.');
    }
  };

  return (
    <SafeAreaView style={styles.root}>
     
        <Loader visible={loading} />
        <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
        <View style={styles.loginContainer}>
          <Text style={styles.textLogin}>Login your account</Text>

          <Input
            placeholder='Email'
            iconName='email-outline'
            error={error.email}
            onFocus={() => {
              setError((prevState) => ({ ...prevState, email: null }));
            }}
            onChangeText={(text) => handleOnChange(text, 'email')}
          />

          <Input
            placeholder='Enter Your Password'
            iconName='lock-outline'
            password
            error={error.password}
            onFocus={() => {
              setError((prevState) => ({ ...prevState, password: null }));
            }}
            onChangeText={(text) => handleOnChange(text, 'password')}
          />

          <CustomButton text='Login' onPress={onLoginPressed} />
          <View style={styles.message}>
            <Text>Create a new account? <Text style={styles.textInput} onPress={onSignUpPressed}>SignUp</Text></Text>
          </View>
        </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
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
  message: {
    marginBottom: 10,
  },
  textInput: {
    color: '#02074c',
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 150,
    marginBottom: 10,
  }
});

export default SignInScreen;
