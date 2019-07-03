
class Form extends React.Component {
    constructor(props) {
        super(props);

        this.query = {
            name: '',
            age: ''
        }
        this.state = store.getState();
        this.clickHandle = this.clickHandle.bind(this)
        this.refresh = this.refresh.bind(this)
      
    }
    render() {
        // let { name, age } = this.query
        return (
            <div className='toggleBtn'>
                <label>
                    姓名: <input type='text' className='name' ref={input => this.query.name = input}></input>
                </label><br />
                <label>
                    年齡: <input type='text' className='age' ref={input => this.query.age = input}></input>
                </label><br />
                <button type='button' onClick={this.clickHandle}>送出</button>
            </div>
        )
    }

    clickHandle() {
        store.dispatch(Object.assign({ type: 'SEARCH_NUMBER' }, { query: this.query }));
        console.log(store.getState())
        // store.dispatch({ type: 'GET_NUMBER' })
    }

    refresh() { this.setState(store.getState()) }

    componentDidMount() { this.unsubscribe = store.subscribe(this.refresh); }

    componentWillUnmount() { this.unsubscribe() }

}


const initialState = {
    query: {
        name: '',
        age: ''
    },
    datas: []
}

const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'SEARCH_NUMBER': return { query: action.query }
        case 'GET_NUMBER': return { number: getNumber() }
        default: return state
    }
}

const store = Redux.createStore(reducer, initialState)





ReactDOM.render(<Form />, document.getElementById('root'))




// const getNumber = () => {
//     return ['1', '2', '3', '4']
    // const getPromise = () => {
    //     const url = 'https://aegonrwdtest.moneydj.com/w/djxml/RateData.djxml';
    //     return new Promise((resolve, reject) => {
    //         const xhr = new XMLHttpRequest();
    //         xhr.open('GET', url);
    //         xhr.onload = (res) => {
    //             resolve(res)
    //         }
    //         xhr.onerror = (err) => reject(err);
    //         xhr.send();
    //     });
    // }
    // getPromise().then((res) => {
    //  dispatch({})
    // }).catch((err) => console.log(err)
// }