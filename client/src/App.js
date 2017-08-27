import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {name: {}};
    }

    // async componentDidMount() {
    //     let name = axios.get('/api/current_user');
    //     await this.setState({name: name.data});
    // }



    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Hello World! yo dude</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <a href="/api/login">
                    <button>Sign In With Google</button>
                </a>
                <a href="/api/logout">
                    <button>Logout</button>
                </a>
                See current user:
                {/*{this.state.name}*/}
            </div>
        );
    }
}

export default App;
