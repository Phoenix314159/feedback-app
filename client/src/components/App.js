import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import '../styles/css/main.css';

import Landing from './Landing';
import Albums from './Albums';

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>


class App extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser();
        this.props.fetchAlbums();
    }

    render() {
        return (
            <div className="main">
                <div className="container">
                    <BrowserRouter>
                        <div>
                            <Header/>
                            <Route exact path="/" component={Landing}/>
                            <Route exact path="/surveys" component={Dashboard}/>
                            <Route path="/surveys/new" component={SurveyNew}/>
                            <Route exact path="/albums" component={Albums}/>
                        </div>
                    </BrowserRouter>
                </div>
            </div>
        )
    }
}

export default connect(null, actions)(App);
