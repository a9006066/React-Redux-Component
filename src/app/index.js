


// const a = ()=>{
//     for(let i = 1 ; i < 5 ; i++){
//         let btn = document.querySelector(`#btn${i}`)
//         btn.addEventListener('click',()=>console.log(i))
//     }
// }
// a();



// const list = [{ key: 'no1',value:'1' }, {  key: 'no2',value:'2' }, { key: 'no3',value:'4' }, { key: 'no5',value:'6' }, {  key: 'no7',value:'7' }]

// const alert = (value) => console.log(value)
// const Select = ({ selectMenu = {}, onChange = (f) => f }) => {

//     return (
//         <div className='selection'>
//             <select onChange={(e) => onChange(e.target.value)}>
//                 {
//                     selectMenu.map((op, n) =>
//                         <option key={n} value={op.value}>{op.key}</option>
//                     )
//                 }
//             </select>
//         </div>
//     )
// }
// ReactDOM.render(
//     <Select selectMenu={list} onChange={alert} />,
//     document.getElementById('root')
// )



// const DateFormat = ({ date }) =>
//     <p>it is {date.toLocaleTimeString()}.</p>



// class Click extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             date: new Date()
//         }
//     }

//     tick() {
//         this.setState({ date: new Date() })
//     }

//     componentDidMount() {
//         this.timerID = setInterval(() => this.tick(), 1000)
//     }

//     componentWillUnmount() {
//         clearInterval(this.timerID)
//     }

//     render() {
//         return (
//             <div className='clock'>
//                 <DateFormat date={this.state.date} />
//             </div>
//         )
//     }
// }

// const ActionLink = () => {
//     const handle = (e) => {
//         e.preventDefault();
//         console.log('111212')
//     }

//     return (
//         <div>
//             <a href='#' onClick={handle}>click me</a>
//         </div>
//     )
// }

// const ShowGreeting = () =>
//     <div>
//         <h1>Welcome back!</h1>;
// </div>

// class Toggle extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             isToggleOn: true
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick() {
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }))
//     }

//     render() {
//         return (
//             <div className='toggle'>
//                 <button className='toggleBtn' onClick={this.handleClick}>
//                     {this.state.isToggleOn ? 'ON' : 'OFF'}
//                 </button>

//                 {
//                 this.state.isToggleOn ?  <ShowGreeting/>:''
//                 }


//             </div>
//         )
//     }
// }


class LoginControl extends React.Component{

    constructor(props){
        super(props)
        this.state={
            isToggle:true
        }
        this.login = this.login.bind(this)
        this.logOut = this.logOut.bind(this)
    }

    login(){
       this.setState({isToggle:false});
    }

    logOut(){
        this.setState({isToggle:true});
    }

    render(){
        const isLoggedIn = this.state.isToggle;
        let btn;
        return (this.state.isToggle)? btn = <button onClick={this.login}>login</button>:
        btn = <button onClick={ this.logOut}>logout</button>
    }

}

ReactDOM.render(<LoginControl></LoginControl>,
    document.getElementById('root'))


























