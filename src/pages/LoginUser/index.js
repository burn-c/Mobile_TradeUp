import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { AsyncStorage } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

import api from '../../services/api';
import {
  Container,
  Form,
  InputEmail,
  InputPassword,
  LoginButton,
  LoginButtonText,
} from './styles';

export default class LoginUser extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      dispatch: PropTypes.func,
    }).isRequired,
  };

  state = { email: 'eve.holt@reqres.in', password: 'cityslicka', error: '' };

  handleEmailChange = email => {
    this.setState({ email });
  };

  handlePasswordChange = password => {
    this.setState({ password });
  };

  handleSignInPress = async () => {
    if (this.state.email.length === 0 || this.state.password.length === 0) {
      this.setState({ error: 'Erro' }, () => false);
    } else {
      try {
        const response = await api.post('/api/login', {
          email: this.state.email,
          password: this.state.password,
        });

        await AsyncStorage.setItem('App:token', response.data.token);

        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'ListUser' })],
        });
        this.props.navigation.dispatch(resetAction);
      } catch (_err) {
        this.setState({
          error: 'Erro',
        });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form>
          <InputEmail
            placeholder="Digite seu e-mail"
            value={this.state.email}
            onChangeText={this.handleEmailChange}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <InputPassword
            placeholder="Digite sua senha"
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
          />
          {this.state.error.length !== 0 && (
            <ErrorMessage>{this.state.error}</ErrorMessage>
          )}
          <LoginButton onPress={this.handleSignInPress}>
            <LoginButtonText>Entrar</LoginButtonText>
          </LoginButton>
        </Form>
      </Container>
    );
  }
}
