import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/FontAwesome';

const Withdraw = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="arrow-back" size={24} color="white" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.heading}>Withdraw</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>Total Amount</Text>
          <Text style={styles.messageText}>RS 0.0</Text>
        </View>
        <View style={styles.menuContainer}>
          <View style={styles.menu}>
          <Icon1 name="cc-stripe" size={90} color="white" />
            {/* <Text style={styles.menuText}>Withdraw</Text> */}
          </View>
        </View>
        {/* Add more content here for the scrollable area */}
        {/* You can add more ads or any other content that you want to scroll */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '10%',
    width: '100%',
    backgroundColor: '#6238b4',
    paddingHorizontal: 16,
  },
  backIcon: {
    marginRight: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center', // Center vertically
  },
  messageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  messageText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    fontWeight: 'bold',
  },
  menuContainer: {
    flexDirection: 'row',
    marginVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    backgroundColor: '#6238b4',
    width: '50%',
    height: '60%',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  subText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default Withdraw;
