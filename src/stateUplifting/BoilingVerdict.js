import React from 'react'

function BoilingVerdict(props) {
    if(props.temperature >=100 && props.scale==='c'){
        return <p>The water would boil.</p>
    }
    else if(props.scale==='f' && props.temperature >= 212){
        return <p>The water would boil.</p>
    }
    else return <p>The water wouldn't boil</p>
}

export default BoilingVerdict
