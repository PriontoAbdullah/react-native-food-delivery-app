import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className='mx-1.5 my-2 px-1 py-1 bg-white rounded-lg shadow-xl'>
      <Image source={{ uri: imgUrl }} className='h-16 w-16 rounded mx-1.5' />
      <Text className='text-red-500 font-bold text-center mt-2 text-base'>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
