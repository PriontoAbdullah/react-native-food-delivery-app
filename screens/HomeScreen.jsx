import { View, Text, Button } from 'react-native';
import React from 'react';

const HomeScreen = ({ route, navigation, extraData }) => {
  const { name, email } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text>{name}</Text>
      <Text>{email}</Text>
      <Text>Extra Data: {extraData}</Text>
      <Button title='Go back' onPress={() => navigation.goBack()} />
    </View>
  );
};

export default HomeScreen;
