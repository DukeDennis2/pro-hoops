import {View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react' 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Stack } from 'expo-router';


// This allows the background image to fully cover the phone screen
export default function Index() {
   return (
    <Stack screenOptions={{
        headerShown: false,
    }}></Stack>
   );
}