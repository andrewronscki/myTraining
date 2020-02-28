import React from 'react';

import Header from '../../components/Header';

import { Container, ContainerItems, Item, TextItem } from './styles';

export default function Main({ navigation }) {
  
  return (
    <>
      <Header />
      <Container>
        <ContainerItems>
          <Item onPress={() => navigation.navigate('Training')}><TextItem>Treinos</TextItem></Item>
        </ContainerItems>

        <ContainerItems>
          <Item onPress={() => {}}><TextItem>Medidas</TextItem></Item>
        </ContainerItems>

        <ContainerItems>
          <Item onPress={() => {}}><TextItem>Dieta</TextItem></Item>
        </ContainerItems>
        
       
      </Container>
    </>
  );
}
