import React from 'react'

const scaleNames = {c:'(°C)',f:'(°F)'}

function BoilingVerdict(props) {
    if (props.celsius >= 100){
        return <p>水会烧开</p>
    }
    return <p>水不会烧开</p>
}
class TemperatureInput extends React.Component{
    constructor(props){
        super(props)
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
        this.props.onTemperatureChange(e.target.value);
    }
    render(){
        const temperature = this.props.temperature;
        const scale = this.props.scale;

        return (
            <fieldset>
                <legend>输入温度{scaleNames[scale]}</legend>
                <input value={temperature} onChange={this.handleChange}/>
            </fieldset>
        );
    }
}
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) *5 /9;
}
function toFahrenherit(celsius) {
    return (celsius * 9 /5) +32;
}
function tryConvert(temperature,convertFn) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)){
        return '';
    }
    const outPut = convertFn(input);
    const rounded = Math.round(outPut* 1000)/1000;
    return rounded.toString();
}

class HqCalculator extends React.Component{

    constructor(props){
        super(props)
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {
            temperature:'',
            scale:'c'
        };

    }
    handleCelsiusChange(temperature){
        this.setState({scale:'c',temperature:temperature});
    }
    handleFahrenheitChange(temperature){
        this.setState({scale:'f',temperature:temperature});
    }
    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature,toCelsius):temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature,toFahrenherit):temperature;

        return (
            <di>
                <TemperatureInput
                    scale='c'
                    temperature = {celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureInput
                    scale='f'
                    temperature = {fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />
                <BoilingVerdict celsius={celsius} />
            </di>
        );
    }
}
export default HqCalculator;