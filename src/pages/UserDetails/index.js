import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, User, Avatar, Name, Email } from './styles';

export default class UserDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').first_name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  render() {
    const { navigation } = this.props;

    const user = navigation.getParam('user');

    return (
      <Container>
        <User>
          <Avatar source={{ uri: user.avatar }} />
          <Name>
            {user.first_name} {user.last_name}
          </Name>
          <Email>{user.email}</Email>
        </User>
      </Container>
    );
  }
}
