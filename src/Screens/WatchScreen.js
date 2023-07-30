import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const WatchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Watch Ads</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.menuContainer}>
          <View style={styles.menu}>
            <Text style={styles.menuText}>Watch Earn</Text>
            <Text style={styles.subText}>Each Add Contain 50 point</Text>
          </View>
        </View>
        {/* Add more content here for the scrollable area */}
        {/* You can add ads or any other content that you want to scroll */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: '10%', 
    width: '100%',
    backgroundColor: '#6238b4', 
    justifyContent: 'center',
    alignItems: 'center',
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
  menuContainer: {
    flexDirection: 'row',
    marginVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    backgroundColor: '#6238b4',
    width: '45%',
    height: 120,
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

export default WatchScreen;
