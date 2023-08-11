import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';
import { useFocusEffect } from '@react-navigation/native';

const WatchScreen = ({ navigation }) => {
  const [showTimer, setShowTimer] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(30);
  const [timerStartTime, setTimerStartTime] = useState(null);

  const startTimer = () => {
    setShowTimer(true);
    setTimerStartTime(Date.now());
  };

  useFocusEffect(
    React.useCallback(() => {
      if (timerStartTime && showTimer) {
        const elapsedTime = Math.floor((Date.now() - timerStartTime) / 1000);
        const remainingTime = Math.max(0, secondsLeft - elapsedTime);
        setSecondsLeft(remainingTime);

        if (remainingTime === 0) {
          setShowTimer(false);
          setSecondsLeft(30);
        }
      }
    }, [timerStartTime, showTimer])
  );

  useEffect(() => {
    let timerInterval;

    if (showTimer && secondsLeft > 0) {
      timerInterval = setInterval(() => {
        setSecondsLeft((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (showTimer && secondsLeft === 0) {
      setShowTimer(false);
      setSecondsLeft(30);
      // Perform any action you want after the timer ends (e.g., navigate, show reward)
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [showTimer, secondsLeft]);

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="arrow-back" size={24} color="white" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.heading}>Watch Ads</Text>
      </View>
      <View style={styles.bannerContainer}>
        <BannerAd
          unitId="ca-app-pub-3709682500463474/7685545872"
          size={BannerAdSize.BANNER}
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>
            You can watch 200 ads. After every ad, you have to wait for 30 seconds.
          </Text>
        </View>
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={[styles.menu, showTimer && styles.disabledMenu]}
            onPress={startTimer}
            disabled={showTimer}>
            <Text style={styles.menuText}>Watch Ad</Text>
            <Text style={styles.subText}>Each Ad Contains 50 points</Text>
          </TouchableOpacity>
        </View>
        {showTimer && (
          <View style={styles.timerContainer}>
            <Text style={styles.timerText}>{secondsLeft} seconds left</Text>
          </View>
        )}
      </ScrollView>
      <View style={styles.bannerContainer}>
        <BannerAd
          unitId="ca-app-pub-3709682500463474/7685545872"
          size={BannerAdSize.BANNER}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    marginHorizontal: 10,
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
  timerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  timerText: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  disabledMenu: {
    opacity: 0.5, // Adjust opacity to indicate disabled state
  },
});

export default WatchScreen;
