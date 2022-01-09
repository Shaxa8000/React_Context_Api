import React, { createContext, useState } from 'react';
import { data } from './mock';


export const Kino = createContext();




const Context = ({ children }) => {
    const [mock, setMock] = useState(data);


    return (
        <Kino.Provider value={[mock, setMock]}>
         {children}
        </Kino.Provider>    
    
    )
}

export default Context
