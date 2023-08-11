import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Logo from '../../assets/image/logo.png';
import TopRatedProfiles from '../Components/TopRatedProfiles ';
import SocialIconButtons from '../Components/SocialIconButtons';
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';
import MenuItem from '../Components/MenuItem';

const HomeScreen = ({ navigation }) => {
  const menuData = [
    {
      title: 'Daily Bonus',
      description: 'Each Add Contain 50 point',
      route: 'WatchNow', // Add the route name
    },
    {
      title: 'Extra Reward',
      description: 'Each Add Contain 50 point',
      route: 'WatchNow',
    },
    {
      title: 'Watch Earn',
      description: 'Each Add Contain 50 point',
      route: 'WatchNow',
    },
    {
      title: 'Spin Earn',
      description: 'Each Add Contain 50 point',
      route: 'WatchNow',
    },
  ];

  const { height } = useWindowDimensions();

  const onWithdrawPressed = () => {
    navigation.navigate('Withdraw');
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6238b4" />

      <View style={styles.headerContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.text}>
            <Text style={{ color: '#6238b4', fontWeight: 'bold' }}>Rs 230.02</Text>
          </View>
          <Image
            source={Logo}
            style={[styles.logo, { height: height * 0.2 }]}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity onPress={onWithdrawPressed}>
          <View style={styles.withdraw}>
            <Text style={styles.withdrawText}>Withdraw</Text>
          </View>
        </TouchableOpacity>

        <SocialIconButtons />
        <View style={styles.divider} />

        <View style={styles.inviteContainer}>
          <Text style={styles.textMessage}>Invite Friend</Text>
          <TouchableOpacity onPress={onWithdrawPressed}>
            <Text
              style={[
                styles.textMessage,
                styles.inviteButton,
                { color: '#55588d' },
              ]}>
              Invite Now
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <TopRatedProfiles />
      </View>

      <View style={styles.menuContainer}>
        <MenuItem menuData={menuData} navigation={navigation} />
      </View>

      <View style={styles.bannerContainer}>
        <BannerAd
          unitId="ca-app-pub-3709682500463474/7685545872"
          size={BannerAdSize.BANNER}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    backgroundColor: '#6238b4',
    paddingVertical: 20,
    paddingHorizontal: 10,
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
    right: 0,
  },
  withdraw: {
    alignItems: 'flex-end',
    width: 'auto',
    marginHorizontal: '11%',
    justifyContent: 'center',
  },
  withdrawText: {
    color: '#6238b4',
    fontWeight: 'bold',
    backgroundColor: '#fff',
    borderRadius: 5,
    width: 80,
    height: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  divider: {
    width: '100%',
    height: 2,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  inviteContainer: {
    flexDirection: 'row',
    marginVertical: 4,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inviteButton: {
    backgroundColor: '#fffffd',
    borderRadius: 5,
    paddingHorizontal: 2,
  },
  textMessage: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  logo: {
    width: '50%',
    maxWidth: 200,
    maxHeight: 120,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  menuContainer: {
    flexDirection: 'row',
    marginVertical: 6,
    justifyContent: 'space-around',
  },
});

export default HomeScreen;
