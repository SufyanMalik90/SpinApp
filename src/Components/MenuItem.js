import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MenuItem = ({ menuData, navigation }) => {
  const handleMenuItemPress = (route) => {
    navigation.navigate(route); // Navigate to the specified route
  };

  return (
    <View style={styles.menuContainer}>
      {menuData.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menu}
          onPress={() => handleMenuItemPress(item.route)}>
          <Text style={styles.menuText}>{item.title}</Text>
          <Text style={styles.subText}>{item.description}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  menu: {
    backgroundColor: '#6238b4',
    width: '48%', // Adjust as needed
    height: 120,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
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

export default MenuItem;
