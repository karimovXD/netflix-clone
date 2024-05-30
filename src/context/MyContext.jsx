import { createContext, useContext, useState } from 'react';

const Mycontext = createContext();

export const setMyContext = () => useContext(Mycontext);

export default ({ children }) => {

    const [count, setCount] = useState(0);

    return <Mycontext.Provider value={{ count, setCount }}>
        <Mycontext.Consumer>
            {() => children}
        </Mycontext.Consumer>
    </Mycontext.Provider>
}