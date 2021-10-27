import React from 'react'

function withCounter(WrappedComponent) {
     class NewComponent extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
        incrementCount = ()=>{
            this.setState(prev=>{
                return {count:prev.count+1}
            })
        }
        render(){
            console.log(this.state.count);
           return(
           <WrappedComponent 
                count={this.state.count} 
                incrementCount={this.incrementCount}
            />)
        }
    }
    return NewComponent;
}

export default withCounter
