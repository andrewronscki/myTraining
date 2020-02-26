import React from 'react';

import Header from '../../components/Header';

import { Container, ContainerItems, Item, TextItem } from './styles';

export default function Main() {
  return (
    <>
      <Header />
      <Container>
        <ContainerItems>
          <Item onClick={() => {}}><TextItem>Treinos</TextItem></Item>
        </ContainerItems>

        <ContainerItems>
          <Item onClick={() => {}}><TextItem>Medidas</TextItem></Item>
        </ContainerItems>

        <ContainerItems>
          <Item onClick={() => {}}><TextItem>Dieta</TextItem></Item>
        </ContainerItems>
        
       
      </Container>
    </>
  );
}
