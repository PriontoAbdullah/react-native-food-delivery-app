import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';

import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className='bg-white pt-8'>
      {/* Header */}
      <View className='flex-row pb-3 items-center mx-4 space-x-2'>
        <Image
          source={{ uri: 'https://i.ibb.co/hgydpKB/logo2.png' }}
          className='h-8 w-8'
        />

        <View className='flex-1'>
          <Text className='font-bold text-gray-500 text-sm'>Deliver Now!</Text>
          <View className='flex-row justify-start items-center'>
            <Text className='font-bold text-lg text-gray-800 mr-1'>
              Current Location
            </Text>
            <ChevronDownIcon size={20} color='#FF4565' />
          </View>
        </View>

        <UserIcon size={30} color='#FF4565' />
      </View>

      {/* Search */}
      <View className='flex-row items-center space-x-2 pb-3 mx-4'>
        <View className='flex-row flex-1 space-x-2 bg-red-50 p-2 rounded-lg'>
          <MagnifyingGlassIcon color='gray' size={24} />
          <TextInput
            placeholder='Restaurants and cuisines'
            keyboardType='default'
          />
        </View>

        <AdjustmentsVerticalIcon color='#FF4565' />
      </View>

      {/* Body */}
      <ScrollView
        className='bg-red-50'
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <Text className='font-bold text-red-600 text-lg text-center mt-2.5'>
          Best Food Waiting For Your Belly!
        </Text>
        {/* Categories */}
        <Categories />

        {/* Featured */}
        <FeaturedRow
          title={`Offer's Near By You!`}
          description='Claim your discount!'
        />

        {/* Banners */}
        <View className='flex-row justify-center items-center mt-4 mx-6'>
          <Image
            source={{ uri: 'https://i.ibb.co/9VMqrDF/logo2.png' }}
            className='h-24 w-full'
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
