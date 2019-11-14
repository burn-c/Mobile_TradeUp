import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

import {
  Container,
  List,
  User,
  Avatar,
  Name,
  Email,
  DetailButton,
  DetailButtonText,
  Form,
} from './styles';

export default class ListUser extends Component {
  static navigationOptions = {
    title: 'Lista de Usuários',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      dispatch: PropTypes.func,
    }).isRequired,
  };

  state = {
    users: [],
  };

  async componentDidMount() {
    const resp = await api.get('/api/users');

    this.setState({ users: resp.data.data });
  }

  handleNavigate = user => {
    const { navigation } = this.props;

    navigation.navigate('UserDetails', { user });
  };

  render() {
    const { users } = this.state;

    return (
      <Container>
        <List
          data={users}
          keyExtractor={data => String(data.id)}
          renderItem={({ item }) => (
            <User>
              <Avatar source={{ uri: item.avatar }} />
              <Form>
                <Name>
                  {item.first_name} {item.last_name}
                </Name>
                <Email>{item.email}</Email>
              </Form>
              <DetailButton onPress={() => this.handleNavigate(item)}>
                <DetailButtonText>Ver Detalhes</DetailButtonText>
              </DetailButton>
            </User>
          )}
        />
      </Container>
    );
  }
}
