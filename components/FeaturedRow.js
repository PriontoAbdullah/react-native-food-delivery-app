import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';

import OfferCard from './OfferCard';
import OfferData from '../data/OfferData';

const FeaturedRow = ({ title, description }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    setRestaurants(OfferData);
  }, []);

  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-xl text-red-600'>{title}</Text>
        <ArrowRightIcon color='#FF4565' />
      </View>

      <Text className='text-sm text-gray-600 px-4'>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className='pt-4'
      >
        {restaurants?.map((restaurant) => (
          <OfferCard
            key={restaurant?.id}
            id={restaurant?.id}
            imgUrl={restaurant?.imgUrl}
            address={restaurant?.address}
            title={restaurant?.title}
            description={restaurant?.description}
            rating={restaurant?.rating}
            genre={restaurant?.genre}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
