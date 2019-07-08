
const initialState = {
    faq_menuIndex: [true, false, false, false, false],
    faq_datas: {},
    faq_dataList: [],
    faq_answer: '',
    faq_menus: ['行動投保', 'eDDA', '速報', '建議書', '其它'],
}

const app = Redux.combineReducers({ faq_menuIndex, faq_datas, faq_dataList, faq_answer, faq_menus })
const store = Redux.createStore(app, initialState);


class Tab extends React.Component {

    constructor(props) {
        super(props)
        this.state = store.getState();
        this.showAnswer = this.showAnswer.bind(this);
        this.getListData = this.getListData.bind(this);
    }

    /**週期 */
    componentWillMount() { }


    componentDidMount() {
        this.getListData();
        const unsubscribe = store.subscribe(() => this.setState(store.getState()))
    }

    componentWillUnmount(){
        unsubscribe() ;
    }

    /**各涵式 */


    /**切頁簽 */
    tabSwitch = (i) => {
        const index = i + 1;
        store.dispatch(switchIndex(index));
        store.dispatch(getDataList(index, store.getState().faq_datas));
        console.log(store.getState());
    }

    showAnswer(answer) {
        store.dispatch(setAnswer(answer));
    }


    /**取問題資料 */
    getListData() {
        fetch('./component/data/faq.json').then(res => res.json()).
            then(data => {
                store.dispatch(setData(data))
                this.tabSwitch(0);
            })
    }


    render() {
        const { faq_menus, faq_dataList, faq_answer } = store.getState();

        return (
            <div className='main'>
                <div className="navtab" >
                    <ul>
                        {faq_menus.map((item, i) => (<li key={i} className='trapezoid' onClick={this.tabSwitch.bind(this, i)}>{item}</li>))}
                    </ul>
                </div>
                <div className="section_cont container">
                    <div className="row list">
                        <List dataList={faq_dataList} getAnswer={this.showAnswer} />
                        <Content answer={faq_answer} />
                    </div>
                </div>
            </div>
        )
    }
}












