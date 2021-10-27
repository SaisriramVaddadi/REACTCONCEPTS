import React from 'react';

export default function JSX(){
    const user = "Sriram Vaddadi";
    const paragraph = <p>Hello {user}</p>
    return(
        <div>
            {paragraph}
        </div>
    )
}