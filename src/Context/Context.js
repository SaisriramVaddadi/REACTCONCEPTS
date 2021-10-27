import React from 'react';
import { createContext, useContext,useState } from 'react';

const UserContext = createContext();
console.log(UserContext)

export default function Component1() {
    const [name,useName] = useState("Sriram");
    return (
        <UserContext.Provider value={name}>
            <div>
                Hello
                <Component2 name={name} />
            </div>
        </UserContext.Provider>

    )
}

function Component2() {
    return (
        <div>
            Component 2
            <Component3/>
        </div>
    )
}

function Component3() {
    const username = useContext(UserContext)
    return (
        <div>Hello {username} this is component 3</div>
    )
}