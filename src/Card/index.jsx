import React, {useState, useContext} from 'react';
import { Container, Cards, Img, Title, Button } from './style';
import { Kino } from '../context';

const Card = () => { 
    const [mock, setMock] = useContext(Kino);

    console.log(mock)



    // Delete

    const onDelete = (ids) => {
        const newData = mock.filter(value => value.id !== ids);

        setMock(newData)
    };


    return (
        <Container>
            {
                mock.map((value) => {
                    return (
                        <Cards>
                            <Img src={value.url} />
                            <Title>{value.name}</Title>
                            <Button onClick={()=> onDelete(value.id)} >Delete</Button>
                        </Cards>
                    )
                })
            }
        </Container>
    )
}

export default Card
