
class List extends React.Component {

    static propTypes = {
        dataList: PropTypes.array,
        getAnswer: PropTypes.func
    }
    static defaultProps = {
        dataList: [],
        getAnswer: f => f
    }

    render() {
        const { dataList, getAnswer } = this.props;

        return (
            <div className="col-lg-7 col-md-7">
                <table className="table table-bordered ">
                    <thead>
                        <tr>
                            <th className="thead" style={{ width: '10%' }}>序號</th>
                            <th className="thead" style={{ width: '85%' }}>標題</th>
                        </tr>
                    </thead>
                    <tbody>{
                        dataList.map((item, i) => (
                            <tr key={i}>
                                <td>{`Q${i + 1}`}</td>
                                <td><a onClick={() => getAnswer(item.answer)}>{item.question}</a></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}