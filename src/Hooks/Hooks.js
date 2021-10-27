import React, {useState, useEffect}from 'react'


function Hooks() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let timer = setTimeout(()=>{
            setCount(count+1);
        },1000);
        return ()=>clearTimeout(timer);
    },[])
    
    return( 
        <div>
            <h1>Rendering {count} {count<=1?'time':'times'}</h1>
            {/* <button onClick={()=>setCount(count+1)}>Click me</button> */}
        </div>
    )
}

export default Hooks
