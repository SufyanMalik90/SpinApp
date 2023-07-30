import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    StatusBar,
    useWindowDimensions,
    Image
} from 'react-native'
import React from 'react'
import Logo from '../../assets/image/logo.png'
import TopRatedProfiles from '../Components/TopRatedProfiles '
import SocialIconButtons from '../Components/SocialIconButtons'

const HomeScreen = () => {

    const { height } = useWindowDimensions();

    return (
        <View style={styles.root}>
            <StatusBar barStyle="light-content" backgroundColor="#6238b4" />

            <View style={styles.headerContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center',}}>

                    <View style={styles.text}>
                        <Text style={{ color: '#6238b4', fontWeight: 'bold' }}>Rs 230.02</Text>
                    </View>
                    <Image source={Logo} style={[styles.logo, { height: height * 0.2 }]} resizeMode="contain" />

                </View>
                <View style={{ alignItems: 'flex-end', marginHorizontal: '11%', marginBottom: 5}}>
                        <Text style={styles.withdrawText}>Withdraw</Text>
                </View>

                <SocialIconButtons />
                <View style={{ width: '100%', height: 2, backgroundColor: '#fff', marginVertical: 5 }} />


                <View style={{ alignItems: 'center', flexDirection: 'row', marginVertical: 4, justifyContent: 'space-around' }}>
                    <Text style={styles.textMessage}>Invite Friend</Text>
                    <Text style={[styles.textMessage, { backgroundColor: '#fffffd', color: '#55588d', borderRadius: 5, paddingHorizontal: 2 }]}>Invite Now</Text>
                </View>
                <View style={{ width: '100%', height: 2, backgroundColor: '#fff', marginVertical: 5 }} />
                <TopRatedProfiles />
                
            </View>
            <View style={styles.menuContainer}>
                <View style={styles.menu}>
                    <Text style={styles.menuText}>Daily Bonus</Text>
                    <Text style={styles.subText}>Each Add Contain 50 point</Text>
                </View>
                <View style={styles.menu}>
                    <Text style={styles.menuText}>Extra Reward</Text>
                    <Text style={styles.subText}>Each Add Contain 50 point</Text>
                </View>
            </View>

            <View style={styles.menuContainer}>
                <View style={styles.menu}>
                    <Text style={styles.menuText}>Watch Earn</Text>
                    <Text style={styles.subText}>Each Add Contain 50 point</Text>
                </View>
                <View style={styles.menu}>
                    <Text style={styles.menuText}>Spin Earn</Text>
                    <Text style={styles.subText}>Each Add Contain 50 point</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    headerContainer: {
        backgroundColor: '#6238b4',
        width: '100%',
        height: 'auto'
    },
    headerText: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        marginHorizontal: '-20%'
    },
    text: {
        backgroundColor: '#fff',
        width: 'auto',
        height: 30,
        marginHorizontal: '8%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        position: 'absolute',
        right: 0
    },
    withdraw: {
        alignItems: 'center', // Center the content horizontally
        width: 'auto',
        marginHorizontal: '11%',
        justifyContent: 'center', // Center the content vertically
    },
    withdrawText: {
        color: '#6238b4',
        fontWeight: 'bold',
        backgroundColor: '#fff',
        borderRadius: 5,
        width: 80,
        height: 25,
        textAlign: 'center', // Use textAlign to center the text within the Text component
        textAlignVertical: 'center', // For Android, use this to center the text vertically
    },
    menu: {
        backgroundColor: '#6238b4',
        width: '45%',
        height: 120,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',

    },
    menuContainer: {
        flexDirection: 'row',
        marginVertical: 6,
        justifyContent: 'space-around',
    },
    textMessage: {
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 8
    },
    menuText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    },
    subText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12
    },
    textProfile: {
        width: 90,
        alignItems: 'center',
        marginTop: 4,
        marginHorizontal: 15,


    },
    logo: {
        width: '50%',
        maxWidth: 200,
        maxHeight: 120,
    }
})
export default HomeScreen