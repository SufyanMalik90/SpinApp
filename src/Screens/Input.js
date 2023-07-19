import { 
    View, 
    Text,
    StyleSheet,
    TextInput,
 } from 'react-native'
import Reac, {useState} from 'react'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import COLORS from '../Components/Color'


const Input = ({label, iconName, error, password, onFocus=()=>{}, ...props }) => {

const [isFocused, setIsFocused] = useState(false);
const [hidePassword, setHidePassword] = useState(password);

  return (
    <View style={{marginBottom: 2}}>
      <Text style={styles.label}>{label}</Text>
    <View style={[styles.inputContainer,{borderColor: error ? COLORS.red :isFocused ? COLORS.darkBlue: COLORS.light }]}>
        <Icon name={iconName} style={styles.iconDesign}/>

        <TextInput 
            secureTextEntry={hidePassword}
            {...props}
            style={styles.text}
            onFocus={()=>{
                onFocus();
                setIsFocused(true);
            }}
            onBlur={()=>{
                setIsFocused(false);
            }}
        />
        {password && (
            <Icon 
            onPress={()=> setHidePassword(!hidePassword)}
            style={styles.eyeIconDesign} 
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}/>)}
        
      </View>
      {error && (<Text style={styles.errorText}>{error}</Text>)}
      
    </View>
  )
}

const styles = StyleSheet.create({
    label:{
        alignItems: 'flex-start',
        fontSize: 15,
        color: 'gray',
        marginVertical: 3,
        
    },
    inputContainer:{
        backgroundColor: '#bdaee7',
        width: '90%',
        height: 35,
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderWidth: 0.5,
        alignItems: 'center',
        borderRadius: 10,

    },
    iconDesign : {
        fontSize:20,
        color: '#4f44a4',
        marginRight: 10,  
     },
     eyeIconDesign : {
        fontSize:17,
        color: '#02074c',
        marginLeft: 10,
          
     },
    text: { 
        color: '#000',
        flex: 1, 
        fontSize: 12,
     },
     errorText: { 
        color: 'red',
        fontSize: 12,
        marginTop: 5,
         
     },
})
export default Input