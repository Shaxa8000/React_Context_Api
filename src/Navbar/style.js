import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100px;
background: black;
border-bottom: 3px solid white;
display: flex;
justify-content: space-around;
align-items: center;
`;


export const Title = styled.div`
font-size: 30px;
color: #fff;
font-weight: 700;
`;


export const NavItems = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;
`

export const Item = styled.div`
font-size: 20px;
color: ${({qizil}) => qizil ? 'red' : 'white'}
`;

