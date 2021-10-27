import React, { Component } from 'react'
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';
import { tryConvert,toCelsius,toFahrenheit } from './tryConvert';
export default class Calculator extends Component {
    constructor(props){
        super(props);
        this.state={
            temperature: ' ',
            scale:'c'
        }
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFarenheitChange = this.handleFarenheitChange.bind(this);
    }

    handleCelsiusChange(temp){
            this.setState({
                scale: 'c',
                temperature: temp

            })
    }
    handleFarenheitChange(temp){
        this.setState({
            scale: 'f', 
            temperature:temp
            
        })
}
    render() {
        const {temperature,scale} = {...this.state};
        const celsius = scale==='f'?tryConvert(temperature,toCelsius):temperature;
        const farenheit= scale==='c'?tryConvert(temperature,toFahrenheit):temperature;

        return (
            <div>
                <TemperatureInput 
                    scale='c'
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureInput 
                    scale='f'
                    temperature={farenheit}
                    onTemperatureChange={this.handleFarenheitChange}
                />
                <BoilingVerdict temperature={this.state.temperature} scale={this.state.scale}/>
            </div>
        )
    }
}
