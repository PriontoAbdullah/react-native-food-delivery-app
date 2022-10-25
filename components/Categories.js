import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import CategoryData from '../data/CategoryData';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(CategoryData);
  }, []);

  return (
    <View className='flex-row flex-wrap justify-center items-center m-2'>
      {categories?.map((category) => (
        <CategoryCard
          key={category?.image}
          imgUrl={category?.image}
          title={category?.name}
        />
      ))}
    </View>
  );
};

export default Categories;
