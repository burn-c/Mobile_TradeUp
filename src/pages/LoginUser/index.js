import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Form,
  InputEmail,
  InputPassword,
  LoginButton,
} from './styles';

export default function LoginUser() {
  return (
    <Container>
      <Form>
        <InputEmail
          autoCompleteType="email"
          keyboardType="email-address"
          placeholder="Digite seu e-mail"
        />

        <InputPassword
          autoCompleteType="password"
          placeholder="Digite sua senha"
        />
        <LoginButton>
          <Icon name="login-variant" size={30} color="#FFF" />
        </LoginButton>
      </Form>
    </Container>
  );
}

LoginUser.navigationOptions = {
  title: 'Login',
};
