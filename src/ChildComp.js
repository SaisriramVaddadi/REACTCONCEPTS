import React, { Component } from 'react'

export default class ChildComp extends Component {
    constructor(props){
        super(props);
    }
    handleClick(){
        this.props.nameChangeCallBack("sriram vaddadi")
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>Name Change</button>
            </div>
        )
    }
}
