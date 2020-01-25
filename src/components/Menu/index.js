import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode-svg';

import { Container, Code, Nav, NavItems, NavText, SignOutButtom, SignOutButtomText } from './styles';

export default function Menu({ translateY }) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
      })
    }}>
      <Code>
        <QRCode
          value="https://rocketseat.com.br"
          size={80}
          color="#8b10ae"
        />
      </Code>   

      <Nav>
        <NavItems>
          <Icon
            name="help-outline"
            size={20}
            color="#fff"
          />
          <NavText>Me ajuda</NavText>
        </NavItems>
        <NavItems>
          <Icon
            name="person-outline"
            size={20}
            color="#fff"
          />
          <NavText>Perfil</NavText>
        </NavItems> 
        <NavItems>
          <Icon
            name="credit-card"
            size={20}
            color="#fff"
          />
          <NavText>Configurar cartão</NavText>
        </NavItems> 
        <NavItems>
          <Icon
            name="smartphone"
            size={20}
            color="#fff"
          />
          <NavText>Configurações do app</NavText>
        </NavItems> 
      </Nav>

      <SignOutButtom onPress={() => {}}>
        <SignOutButtomText>Sair do App</SignOutButtomText>
      </SignOutButtom>
    </Container>
  )
}
