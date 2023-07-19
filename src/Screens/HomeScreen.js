import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    StatusBar
} from 'react-native'
import React from 'react'

const HomeScreen = () => {
    return (
        <View style={styles.root}>
        <StatusBar barStyle="light-content" backgroundColor="#6238b4"/>

            <View style={styles.headerContainer}>
                <View style={styles.headerText}>

                    <Text style={styles.textMessage}>Spin Earn Pak</Text>

                    <View style={styles.text}>
                        <Text style={{ color: '#6238b4', fontWeight: 'bold' }}>Rs 230.02</Text>
                    </View>

                </View>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                    <View style={styles.headerImage} />
                    <Text style={styles.textMessage}>Hellow Test Account
                        {'\n'}03000000000
                    </Text>
                </View>
                <View style={styles.textProfile}>
                    <Text style={{fontSize: 12, fontWeight: 'bold'}}>Edit Profile</Text>
                </View>
                <View style={{ alignItems: 'center', flexDirection: 'row', marginVertical: 4, justifyContent: 'center'}}>
                    <Text style={styles.textMessage}>Latest Update Available</Text>
                    <Text style={[styles.textMessage, {backgroundColor: '#fffffd', color: '#55588d', borderRadius: 5, paddingHorizontal: 2}]}>Update Now</Text>
                </View>
            </View>
            <View style={styles.menuContainer}>
                <View style={styles.menu}>
                    <Text style={styles.menuText}>Daily Bonus</Text>
                </View>
                <View style={styles.menu}>
                    <Text style={styles.menuText}>Extra Reward</Text>
                </View>
            </View>

            <View style={styles.menuContainer}>
                <View style={styles.menu}>
                    <Text style={styles.menuText}>Watch Earn</Text>
                </View>
                <View style={styles.menu}>
                    <Text style={styles.menuText}>Spin Earn</Text>
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
        height: '35%'
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
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    headerImage: {
        backgroundColor: '#f79a4a',
        width: 90,
        height: 90,
        borderRadius: 50,
        marginLeft: 5,
        marginTop: '4%'
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
    textProfile: {
        backgroundColor: '#d9d4fd', 
        width: 70, 
        alignItems: 'center', 
        color: '#02074c',
        marginTop: 4,
        borderRadius: 3,
        marginHorizontal: 15

    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 150,
        marginBottom: 10,
    }
})
export default HomeScreen