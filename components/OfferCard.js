import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline';

const OfferCard = ({ imgUrl, address, title, description, rating, genre }) => {
  return (
    <TouchableOpacity className='bg-white mr-4 shadow-xl rounded-lg'>
      <Image source={{ uri: imgUrl }} className='h-36 w-64 rounded-t-lg' />
      <View className='px-3 pb-4'>
        <Text className='font-bold text-lg pt-2'>{title}</Text>
        <Text className='font-semibold text-base text-gray-700 pt-1'>
          {description}
        </Text>

        <View className='flex-row items-center space-x-1 mt-1'>
          <StarIcon color='green' opacity={0.5} size={20} />
          <Text className='text-sm text-gray-700'>
            <Text className='text-green-600'>{rating}</Text> • {genre}
          </Text>
        </View>

        {/* LocationMarker */}
        <View className='flex-row items-center space-x-1 mt-1'>
          <MapPinIcon color='red' opacity={0.6} size={20} />
          <Text className='text-sm text-gray-600'>Nearby • {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OfferCard;
