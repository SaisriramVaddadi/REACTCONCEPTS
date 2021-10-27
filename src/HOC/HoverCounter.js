import React from 'react'
import withCounter from './withCounter'

class HoverCounter extends React.Component {
    render(){
        const {count, incrementCount} = this.props;
        return(
            <p onMouseOver={incrementCount}>
                Hovered {count} times
            </p>
        )
    }
}

export default withCounter(HoverCounter);
