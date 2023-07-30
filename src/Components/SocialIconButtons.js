import React from 'react';
import { View, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SocialIconButtons = () => {
  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton} onPress={() => openLink('https://www.facebook.com')}>
        <Icon name="facebook" size={30} color="#4267B2" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton} onPress={() => openLink('https://twitter.com')}>
        <Icon name="twitter" size={30} color="#1DA1F2" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton} onPress={() => openLink('https://www.instagram.com')}>
        <Icon name="instagram" size={30} color="#E1306C" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
  },
  iconButton: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#f2f2f2',
  },
});

export default SocialIconButtons;
