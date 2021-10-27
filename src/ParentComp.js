import React, { Component } from 'react'
import ChildComp from './ChildComp';
export default class ParentComp extends Component {
    constructor(props){
        super(props);
        this.state={
            name: "sriram"
        }
        this.nameChangeCallBack=this.nameChangeCallBack.bind(this);
    }
    nameChangeCallBack(name){
        this.setState({name:name})
    }
    render() {
        console.log(this.state.name);
        return (
            <div>
                <ChildComp nameChangeCallBack={this.nameChangeCallBack}/>
            </div>
        )
    }
}
