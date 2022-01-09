import React, {useState, useContext} from 'react';
import { Container, Title, NavItems, Item } from './style';
import { Kino } from '../context';

const Navbar = () => {
  const [mock, setMock] = useContext(Kino);
    return (
      <Container>
        <Title>Web Brain</Title>
        <NavItems>
          <Item>Home</Item>
          <Item>About</Item>
          <Item>Products</Item>
          <Item qizil>Contacts</Item>
          <Item>{mock.length}</Item>
        </NavItems>
      </Container>
    );
}

export default Navbar
