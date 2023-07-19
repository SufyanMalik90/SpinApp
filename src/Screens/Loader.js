import { 
    View, 
    Text,
    StyleSheet,
    useWindowDimensions,
    ActivityIndicator

} from 'react-native'
import React from 'react'
import COLORS from '../Components/Color';

const Loader = ({visible = false}) => {

  const {height, width} = useWindowDimensions();
  return visible && <View style={[styles.container, {height, width}]}>
    <View style={styles.loader}>
        <ActivityIndicator  size='large' color={COLORS.blue} />
        <Text style={styles.loaderText}>Loading....</Text>
    </View> 
  </View>
}

const styles = StyleSheet.create({

    container: {
        position: 'absolute',
        zIndex: 10,
        backgroundColor: '#f1f1f1',
        opacity: 0.8,
        justifyContent: 'center',
    },
    loader: {
        height: 70,
        backgroundColor: '#ffffff',
        opacity: 10,
        marginHorizontal: 50,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    loaderText: {
        marginRight: 15,
        fontSize: 16,
    }
})
export default Loader