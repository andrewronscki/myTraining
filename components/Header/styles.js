import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100px;
  background: #FFE700;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerLogo = styled.View`
  display: flex;
  padding-top: 30px;
  align-items: center;
  flex-direction: row;
`;

export const ContainerNavbar = styled.View``;

export const ImageLogo = styled.Image`
  width: 80px;
  height: 50px;
`;

export const TextLogo = styled.Text`
  margin-left: 10px;
  font-size: 30px;
`;

export const ImageNavbar = styled.Image`
  margin-top: 40px;
  margin-right: 5px;

  width: 50px;
  height: 50px;
`;
