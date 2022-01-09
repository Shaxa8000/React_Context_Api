import styled from 'styled-components';



export const Container = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
`

export const Cards = styled.div`
width: 320px;
height: 420px;
background: #fff;
margin: 30px 10px;;
display: flex;
flex-direction: column;
align-items: center;
`;


export const Img = styled.img`
width: 100%;
height: 50%;

`;


export const Title = styled.div`
font-size: 20px;
text-align: center;
`


export const Button = styled.div`
width: 200px;
height: 50px;
background: red;
color: #fff;
display: flex;
align-items: center;
justify-content: center;
font-size: 23px;
border-radius: 10px;
margin-top: auto;
margin-bottom: 20px;
cursor: pointer;
`