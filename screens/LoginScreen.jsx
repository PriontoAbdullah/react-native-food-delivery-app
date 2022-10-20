import { Button, View, Text } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <Button
        title='Go to Home'
        onPress={() =>
          navigation.navigate('Home', {
            name: 'Prionto Abdullah',
            email: 'prionto71@gmail.com',
          })
        }
      />
    </View>
  );
};

export default LoginScreen;
