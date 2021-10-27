import React, { Component } from 'react'

const scaleTypes ={
    'c': 'celsius',
    'f': 'farenheit'
}

export default class TemperatureInput extends Component {
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event){
        this.props.onTemperatureChange(event.target.value);
    }
    render() {
        const scale = this.props.scale;
        return (
            <div>
                <fieldset>
                    <legend>Enter the temparature in {scaleTypes[scale]}</legend>
                    <input type="text" 
                        value={this.props.temperature}
                        onChange={this.handleChange}
                    />
                </fieldset>
            </div>
        )
    }
}
