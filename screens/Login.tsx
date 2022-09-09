import React from 'react';
import { Button, ImageBackground, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Input from '../components/Input';

import { Text, View } from '../components/Themed';
import { useTextField } from '../hooks/strings';

// Local Variables
const FormContainer = styled.View({
  // I will make the form pretty here.
  flex: 1,
  justifyContent: 'center',
  alignContent: 'center',
  padding: '20px'
})

export default function Login() {
  const usernameTextField = useTextField();
  const passwordTextField = useTextField();
  const handleLogin = () => {
    console.log('I will submit things');
  }
  return (
    <ImageBackground
      source={require('../assets/images/retro_tv.jpg')}
      style={{ width: '100%', height: '100%' }}
    >
      <Text>
        Show Ranker
      </Text>
      <FormContainer>
        <Input 
          {...usernameTextField}
          placeholder="Username"
        />
        <Input
          {...passwordTextField}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Button 
          onPress={handleLogin}
          title="Login" 
        />
      </FormContainer>
    </ImageBackground>
  );
}
