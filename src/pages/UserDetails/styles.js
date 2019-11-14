import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 100px;
`;

export const User = styled.View`
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 150;
  height: 150px;
  border-radius: 10px;
  background: black;
`;

export const Name = styled.Text`
  font-size: 30px;
  color: #333;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;

export const Email = styled.Text`
  font-size: 15px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;
