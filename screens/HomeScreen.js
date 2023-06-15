import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { HeroImg } from '../assets';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native';

const HomeScreen = () => {

  const navigation = useNavigation();

  useLayoutEffect (() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      {/* 1st Section */}
      <View className="flex-row px-6 mt-12 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
        </View>

        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
      </View>

      {/* 2nd Section */}
      <View className="px-6 mt-6">
        <Text className="text-[#3C6072] text-[42px]">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[38px] font-bold">Good Moments</Text>
        <Text className="text-[#3C6072] text-base mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Text>
      </View>

      {/* Circle section */}
      <View className="w-[350px] h-[350px] bg-[#00BCC9] rounded-full absolute bottom-20 -right-36"></View>
      <View className="w-[350px] h-[350px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View>

      {/* Image container */}
      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
        animation="fadeIn"
        easing="ease-in-out"
        source={HeroImg} 
        className="w-full h-full object-cover mt-8"/>

      <View className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center">
      <TouchableOpacity
        onPress={() => {
        // Handle onPress event
        }}
      >
        <Animatable.View 
          animation={"pulse"} 
          easing={"ease-in-out"}
          iterationCount={"infinite"}
          className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]">
          <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
        </Animatable.View>
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen