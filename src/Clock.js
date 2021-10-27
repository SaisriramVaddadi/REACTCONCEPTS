import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(){
        super();
        this.state={
            date: new Date()
        }
        this.tick=this.tick.bind(this);
    }
    componentDidMount(){
        setInterval(this.tick,1000);
    }
    tick(){
        this.setState({date: new Date()})
        // console.log("this is tick function");
    }
    componentWillUnmount(){
        // clearInterval()
    }

    render() {
        return (
            <div>
                <h2>Hello Sai!</h2>
                <p>The time is{this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}
