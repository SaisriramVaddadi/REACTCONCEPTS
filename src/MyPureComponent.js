import React from 'react';
import ChildComponent from './ChildComponent';


export default class MyPureComponent extends React.PureComponent {

    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.changeCounter = this.changeCounter.bind(this);
    }
    componentDidUpdate() {
        console.log("The component is updated");
    }
    shouldComponentUpdate(){
        console.log("THis is should ComponentUpdate method");
        return true;
    }
    changeCounter() {
        this.setState({
            counter: this.state.counter+1
        },()=>{console.log("after setState is completely executed",this.state.counter)})
        console.log("Hello this is after setState line");
    }
    render() {
        console.log("This is the render method");
        return (
        <>
            <div>
                <button onClick={this.changeCounter}>Counter {this.state.counter}</button>
            </div>
            <ChildComponent />
        </>)
    }
}