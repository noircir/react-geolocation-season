import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    // if there is no explicit constructor, Babel creates
    // constructor with this.state in the background.

    state = { lat: null, errMsg: '' }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errMsg: err.message })
        );
    }

    componentDidUpdate() {
        console.log('My component was just updated - it rerendered!');

    }

    // Helper method
    renderContent() {
        if (this.state.errMsg && !this.state.lat) {
            return <div>Error: {this.state.errMsg}</div>
        }

        if (!this.state.errMsg && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return (
            <Spinner message="Please accept location request" />
        )
    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
        
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)