class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ value: this.name.value })
    }

    handleSubmit(e) {
        alert('提交的名字: ' + this.state.value);
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    名稱:
                    <input type='text' ref={input => this.name = input} value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type='submit' value='提交' />
            </form>
        )
    }
}

class FlavorForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: 'coconut' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('你喜欢的风味是: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        const fruits = ['grapefruit', 'lime', 'coconut', 'mango']
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    选择你喜欢的风味:
              <select value={this.state.value} onChange={this.handleChange}>
                        {fruits.map((fruit, i) => <option key={i} value={fruit}>{fruit}</option>)}
                    </select>
                </label>
                <input type="submit" value="提交" />
            </form>
        );
    }
}


class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e){
        const target = e.target;
        const value = target.type === 'checkbox'? target.checked : target.value;
        const name = target.name;

        this.setState({name:value});
    }

    render() {
        return (
            <form>
                <label>參予:<input name="isGoing"
                    type="checkbox" checked={this.state.isGoing}  onChange={this.handleInputChange}/>
                </label><br/>
                <label>人數
                <input   name="numberOfGuests" type='number' value={this.state.numberOfGuests} onChange={this.handleInputChange} />
                </label>
            </form>
        )
    }

}



ReactDOM.render(<input value='hi'/>, document.getElementById('root'))


