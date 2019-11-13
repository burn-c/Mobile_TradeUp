import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 15px;
`;

export const Form = styled.View`
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const InputEmail = styled.TextInput.attrs({
  placeholderTextColor: '#456',
})`
  border-radius: 1px;
  padding: 0 15px;
  border: 1px solid #eee;
  margin-top: 10px;
  align-self: stretch;
`;

export const InputPassword = styled.TextInput.attrs({
  placeholderTextColor: '#456',
})`
  border-radius: 1px;
  padding: 0 15px;
  border: 1px solid #eee;
  margin-top: 10px;
  align-self: stretch;
`;

export const LoginButton = styled(RectButton)`
  justify-content: center;
  align-self: stretch;
  background: #177;
  border-radius: 2px;
  margin-left: 5px;
  padding: 0 12px;
  margin-top: 10px;
  align-items: center;
`;
