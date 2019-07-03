

class App extends React.Component {

    render() {
        return (
            <div ui-view="main" ng-class="pageAnimation">
                <Tab />
            </div>

        )
    }
}