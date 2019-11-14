import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 15px;
`;

export const List = styled.FlatList.attrs({
  showsVertivalScrollIndicator: false,
})`
  margin-top: 10px;
`;
export const User = styled.View`
  background: #f5f5f5;
  border-radius: 4px;
  padding: 2px 2px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Form = styled.View``;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: #fff;
  padding: 10px;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;

export const Email = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 2px;
  text-align: center;
`;

export const DetailButton = styled(RectButton)`
  border-radius: 4px;
  background: #458b74;
  justify-content: center;
  margin-right: 5px;
`;

export const DetailButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  padding: 12px;
`;
