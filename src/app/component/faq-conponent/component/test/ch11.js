// const FancyBorder = ({ color, children }) =>
//     <div className={`FancyBorder FancyBorder-${color}`}>
//         {children}
//     </div>

// const WelcomeDialog = () =>
//     <FancyBorder color='blue'>
//         <h1 className="Dialog-title"> Welcome</h1>
//         <p className="Dialog-message"> Thank you for visiting our spacecraft!</p>
//     </FancyBorder>



// const contacts =  <div className="Contacts" />;

// const chat =  <div className="Chat" />;



// const SplitPane = ({ left, right }) =>
//     <div>
//         <div className="SplitPane-left">
//             {left}
//         </div>
//         <div className="SplitPane-right">
//             {right}
//         </div>
//     </div>


// const App = () => <SplitPane left={contacts} right={chat} />
// ReactDOM.render(<App />, document.getElementById('root'))



class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myTextInput = React.createRef();
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.myTextInput.current.focus();
    }

    render() {
        return (
            <div>
                <input className='name' type='text' ref={this.myTextInput} />
                <button className='btn' type='button' onClick={this.handleClick} value="Focus the text input" />
            </div>
        )
    }

}

ReactDOM.render(<MyComponent/>,document.getElementById('root'))