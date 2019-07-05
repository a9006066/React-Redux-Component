
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

const BoilingVerdict = ({ celsius }) => (celsius >= 100) ? <p>The water would boil.</p> : <p>The water would not boil.</p>;
const toCelsius = fahrenheit => (fahrenheit - 32) * 5 / 9
const toFahrenheit = celsius => (celsius * 9 / 5) + 32
const tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const value = e.target.value
        this.props.onTemperatureChange(value)
    }

    render() {
        const { temperature, scale } = this.props;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>

        )
    }
}

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = { scale: 'c', temperature: '' }
    }

    handleCelsiusChange(temperature) {
        this.setState({ scale: 'f', temperature })
    }

    handleFahrenheitChange(temperature) {
        this.setState({ scale: 'c', temperature })
    }

    render() {
        const { scale } = this.state
        const temperature = this.state.temperature
        const celssius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature
        return (
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
            </div>
        )
    }
}



ReactDOM.render(<Calculator />,
    document.getElementById('root'))
