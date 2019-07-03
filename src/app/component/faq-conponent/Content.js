
class Content extends React.Component {


    render() {
        const {answer} = this.props
        return (

            <div className="col-lg-5 col-md-5">
                <div className="detail">
                    <strong>內容</strong>
                </div>
                <div className="col-md-12 col-sm-12">
                    <div className="detailContent">
                        <p dangerouslySetInnerHTML={{__html:answer}}/>
                    </div>
                </div>
            </div>

        )
    }



}