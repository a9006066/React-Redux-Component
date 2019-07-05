

class Tab extends React.Component {

    constructor(props) {
        super(props)
        this.state = store.getStatus();
        // this.state = {
        //     menuIndex: [true, false, false, false, false],
        //     datas: {},
        //     dataList: [],
        //     answer: '',
        //     menus: ['行動投保', 'eDDA', '速報', '建議書', '其它'],
        // }
        this.showAnswer = this.showAnswer.bind(this);
        this.getListData = this.getListData.bind(this);
    }

    componentWillMount() { }


    componentDidMount() {
        this.getListData();
    }

    tabSwitch = (i) => {
        this.setState((prevState) => {
            return {
                menuIndex: (prevState.menuIndex.map((menu, index) =>
                    (i === index) ? menu = true : menu = false
                )),
                dataList: this.state.datas[`NO${i + 1}`]
            }
        })
    }


    showAnswer(answer) {
        this.setState({ answer });
    }


    getListData() {
        fetch('./component/data/faq.json').then(res => res.json()).
            then(data => {
                this.setState((prevState) => {
                    return Object.assign({}, prevState, {
                        datas: data
                    })
                })
                this.tabSwitch(0);
            })
    }


    render() {
        const { menus, dataList } = this.state;

        return (
            <div className='main'>
                <div className="navtab" >
                    <ul>
                        {menus.map((item, i) => (<li key={i} className='trapezoid' onClick={this.tabSwitch.bind(this, i)}>{item}</li>))}
                    </ul>
                </div>
                <div className="section_cont container">
                    <div className="row list">
                        <List dataList={dataList} getAnswer={this.showAnswer} />
                        <Content answer={this.state.answer} />
                    </div>
                </div>
            </div>
        )
    }
}












