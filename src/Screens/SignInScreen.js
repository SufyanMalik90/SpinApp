import { 
    View, 
    Text,
    StyleSheet,
    TextInput,
    Image,
    useWindowDimensions,
    ScrollView,
    Keyboard,
    Alert
} from 'react-native'
import React, { useState } from 'react';
import CustomButton from '../Components/CustomButton'
import Logo from '../../assets/image/logo.png'
import Input from './Input'
import Loader from './Loader';
// import { useNavigation } from '@react-navigation/native';

const SignInScreen = ({navigation}) => {

    const [input, setInput] = useState({
      email: '',
      password: '',

    });
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);


    const Validate = () => {
      Keyboard.dismiss(); // hide the keyboard
      let Valid = true;
      if (!input.email) {
        handleError('Please Input Email', 'email');
        Valid = false;
      } else if (!input.email.match(/\S+@\S+\.\S+/)) {
        handleError('Please Input Valid Email', 'email');
        Valid = false;
      }
  
      if (!input.password) {
        handleError('Please Input Password', 'password');
      } else if (input.password.length < 6) {     // minimum length for password is 6
        handleError('Minimum Length of Password is 6', 'password');
      }
  
      if (Valid) {
        register();
      }
  
    };

    let loginUser = () => {
      //Firebase connect code
    };

    const register = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
  
  
        try {
  
          loginUser();
          Alert.alert('Welcome', 'To Spin App');
          navigation.replace('Home');
          // console.log(`Username is: ${input.username} Email: ${input.email} Password: ${input.password} Phone: ${input.phone}`);
  
        } catch (error) {
          Alert.alert('Error', 'Something Went Wrong..!!');
  
        }
  
      }, 2000)
    }
    const handleOnChange = (text, input) => {
      setInput((prevState) => ({ ...prevState, [input]: text }));  // get text from user & set to input fields  
    };
    const handleError = (errorMessage, input) => {
      setError((prevState) => ({ ...prevState, [input]: errorMessage }));  // clear error message & back to previous state  
    };
    const { height } = useWindowDimensions();
    // const navigation = useNavigation();

    const onSignUpPresssed = () => {
      // console.warn("Sign Up");
      navigation.navigate('SignUp');
    };

    const onLoginPressed = () => {
      Validate();
    }

  return (
    
      <View style={styles.root}>
        <Loader visible={loading} />
          <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
          <View style={styles.loginContainer}>
              <Text style={styles.textLogin}>Login your account</Text>

              
                <Input
                placeholder='Email'
                iconName='email-outline'
                error={error.email}
                onFocus={() => {
                  handleError(null, 'email');
                }}
                onChangeText={(text) => handleOnChange(text, "email")}
              />

              <Input
                placeholder='Enter Your Password'
                iconName='lock-outline'
                password
                error={error.password}
                onFocus={() => {
                  handleError(null, 'password');
                }}

                onChangeText={(text) => handleOnChange(text, "password")}
              />

              <CustomButton text='Login' onPress={onLoginPressed}/>
              <View style={styles.message}>
              <Text>Create a new account? <Text style={styles.textInput} onPress={onSignUpPresssed}>SignUp</Text></Text>
              </View>
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
    root : {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6238b4',
      },
      loginContainer : {
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
      message:{
        marginBottom: 10
      },
      textInput :{
        // width: '90%',
        // height: 35,
        // backgroundColor: '#bdaee7',
        // borderRadius: 10,
        // fontSize: 13,
        color: '#02074c'
        
      },
    logo: {
      width: '70%',
      maxWidth: 300,
      maxHeight: 150,
      marginBottom: 10,
    }
  })

export default SignInScreen