import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TopRatedProfiles = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
      <Icon name="user" size={24}/>
      </View>
      <View style={styles.circle}>
      <Icon name="user" size={24}/>
      </View>
      <View style={styles.circle}>
      <Icon name="user" size={24}/>
      </View>
      <View style={styles.circle}>
      <Icon name="user" size={24}/>
      </View>
      <View style={styles.circle}>
      <Icon name="user" size={24}/>
      </View>
      <View style={styles.circle}>
      <Icon name="user" size={24}/>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Arrange circles in a single row
    justifyContent: 'center', // Center the circles horizontally
    alignItems: 'center', // Align the circles vertically
    marginVertical: 14,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginHorizontal: 5,
    justifyContent: 'center', // Center the icon inside the circle
    alignItems: 'center', // Center the icon inside the circle
  },
});

export default TopRatedProfiles;
