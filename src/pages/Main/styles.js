import styled from 'styled-components/native';

export const Container = styled.View`
  background: #333;
  height: 100%;

  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContainerItems = styled.View`
  padding: 30px;
  margin-bottom: 15px;

  height: 80px;
  width: 100%;
`;

export const Item = styled.TouchableOpacity`
  background: #333;
  border: 2px solid #FFE700;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const TextItem = styled.Text`
  padding: 30px 0 30px;

  color: #FFE700;
  font-size: 22px;
`;