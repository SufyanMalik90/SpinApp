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
import React, {useState} from 'react';
import CustomButton from '../Components/CustomButton'
import Logo from '../../assets/image/logo.png'
import Input from './Input'
import Loader from './Loader';

const SignUpScreen = ({navigation}) => {

  const [input, setInput] = useState({
    email: '',
    username : '',
    password : '',
    phone    : '',

  });

  const [loading,setLoading] = useState(false);
    const [error, setError] = useState({});

    const Validate = () => {

      Keyboard.dismiss(); // hide the keyboard
      let Valid = true;
      if(!input.email){
        handleError('Please Input Email', 'email');
        Valid = false;
        } else if(!input.email.match(/\S+@\S+\.\S+/)) {
        handleError('Please Input Valid Email', 'email');
        }
      if(!input.username){
          handleError('Please Input Username', 'username');
          Valid = false;  
      };
      if(!input.password){
        handleError('Please Input Password', 'password'); 
      } else if(input.password.length < 6){     // minimum length for password is 6
        handleError('Minimum Length of Password is 5', 'password'); 
      } 
      if(!input.phone){
        handleError('Please Input Phone', 'phone'); 
  } else if(input.phone.length < 10){     // minimum length for address is 6
    handleError('Minimum Length of Phone is 10', 'phone'); 
  } 
      if(Valid){
        register();
      }

    };

    let createUser = () => {
      //Firebase Register User
    };

    const register = () =>{
      setLoading(true);
      setTimeout(() =>{
        setLoading(false);
        // createUser();
        
        try {
         
         createUser();
         Alert.alert('Sucessful','Record Inserted');
         navigation.navigate('SignIn');
        // console.log(`Username is: ${input.username} Email: ${input.email} Password: ${input.password} Phone: ${input.phone}`);
          
        } catch (error) {
          Alert.alert('Error', 'Something Went Wrong..!!');
          
        }

      }, 2000)
    }

    const handleOnChange = (text,input) => {
      setInput((prevState)=>({...prevState,  [input]: text}));  // get text from user & set to input fields  
    };
    const handleError = (errorMessage, input) => {
      setError((prevState)=>({...prevState,  [input]: errorMessage}));  // clear error message & back to previous state  
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
            onChangeText={(text) => handleOnChange(text, "username")}
          />
          <Input
            placeholder='Email'
            iconName='email'
            error={error.email}
            onFocus={() => {
              handleError(null, 'email');
            }}
            onChangeText={(text) => handleOnChange(text, "email")}
          />
          <Input
            keyboardType="numeric"
            placeholder='03XXXXXXXXX'
            iconName='phone'
            error={error.phone}
            onFocus={() => {
              handleError(null, 'phone');
            }}
            onChangeText={(text) => handleOnChange(text, "phone")}
          />  
          <Input
            placeholder='Password'
            iconName='lock-outline'
            error={error.password}
            onFocus={() => {
              handleError(null, 'password');
            }}
            password
            onChangeText={(text) => handleOnChange(text, "password")}
          />   
          <Input
            placeholder='Confirm Password'
            iconName='lock-outline'
            error={error.password}
            onFocus={() => {
              handleError(null, 'password');
            }}
            password
            onChangeText={(text) => handleOnChange(text, "password")}
          />   

              <CustomButton text='Register' onPress={onRegesterPresssed}/>
              <View style={styles.message}>
              <Text>I have already an account? <Text style={styles.textInput} onPress={onSignInPresssed}>Login</Text></Text>
              </View>
          </View>
      </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
    root : {
        flex : 1,
        // justifyContent: 'center',
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
      textInput :{
        color: '#02074c'
        
      },
      message:{
        marginBottom: 10
      },
    logo: {
      width: '70%',
      maxWidth: 300,
      maxHeight: 150,
      marginBottom: 10,
    },
  })

export default SignUpScreen