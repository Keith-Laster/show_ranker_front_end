import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import Button from '../components/Button';
import FormContainer from '../components/Form/FormContainer';
import Input from '../components/Form/Input';
import Title from '../components/Text/Title';

import { useTextField } from '../hooks/strings';

const ScreenContainer = styled.View({
  height: '60%',
  flexDirection: 'column',
})

const StyledFormContainer = styled(FormContainer)({
  flex: 4,
  alignItems: 'center',
  justifyContent: 'space-around'
})


const Login: FC = () => {
  const usernameTextField = useTextField();
  const passwordTextField = useTextField();
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log('I will submit things');
    navigation.navigate("Root");
  }

  return (
    <ImageBackground
      source={require('../assets/images/retro_tv.jpg')}
      style={{ width: '100%', height: '100%' }}
    >
      <ScreenContainer>
        <Title>
          Show Ranker
        </Title>
        <StyledFormContainer>
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
          >
            Login
          </Button>
        </StyledFormContainer>
      </ScreenContainer>
    </ImageBackground>
  );
}

export default Login;
