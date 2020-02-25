import React from 'react';
import { TouchableOpacity} from 'react-native';

import alter from '../../assets/alter.png';
import navbar from '../../assets/navbar.png';

import { Container, ContainerLogo, ContainerNavbar, ImageLogo, TextLogo, ImageNavbar } from './styles';

export default function Header() {
  return (
    <Container>
      <ContainerLogo>
        <ImageLogo source={alter} />
        <TextLogo>My Training</TextLogo>
      </ContainerLogo>

      <ContainerNavbar>
        <TouchableOpacity>
          <ImageNavbar source={navbar} />
        </TouchableOpacity>
      </ContainerNavbar>
    </Container>
  );
}
