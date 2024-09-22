import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

export default function Index() {
  const navigation = useNavigation(); // Get navigation object

  return (
    <ImageBackground
      source={{ uri: 'https://wallpapers.com/images/hd/basketball-player-preparation-moment-yfv2dl0julv4z7jj.jpg' }} // URL to your image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Welcome to </Text>
            <Text style={styles.title}>ProHoops</Text>
          </View>

          {/* "Let's Get Started" Button */}
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('LoginScreen')} // Navigate to login page
          >
            <Text style={styles.buttonText}>Let's Get Started</Text>
          </TouchableOpacity>

          {/* "Language" Button with no background */}
          <TouchableOpacity style={styles.languageButton}>
            <Text style={styles.languageButtonText}>Language</Text>
          </TouchableOpacity>
        </View>

        <LinearGradient
          colors={['transparent', '#18170a']}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1.3 }}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp(10),
  },
  textContainer: {
    alignItems: 'center',
    marginTop: hp(30),
  },
  text: {
    color: 'white',
    fontWeight: '300',
    fontSize: 40,
    marginBottom: 10,
  },
  title: {
    color: 'white',
    fontWeight: '300',
    fontSize: 28,
    marginTop: 0,
  },
  button: {
    backgroundColor: '#FF6347',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 300, // Pushes the button down the page
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  languageButton: {
    marginTop: 20, // Adds space between "Let's Get Started" and "Language" button
    backgroundColor: 'transparent',
  },
  languageButtonText: {
    color: 'white',
    fontSize: 16,
    textDecorationLine: 'underline', // Adds underline to the "Language" button text
  },
  gradient: {
    position: 'absolute',
    width: wp(100),
    height: hp(100),
    zIndex: -1,
  },
});