import '../styles/css/main.css';
import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from '../components/Landing';
import Albums from '../components/Albums';
import Dashboard from '../components/Dashboard';
import SurveyNew from './SurveyNew';


class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
        this.props.fetchAlbums();
    }

    render() {
        return (
            <div className="main">
                <BrowserRouter>
                    <div className="container">
                        <Header/>
                        <Route exact path="/" component={Landing}/>
                        <Route exact path="/surveys" component={Dashboard}/>
                        <Route path="/surveys/new" component={SurveyNew}/>
                        <Route exact path="/albums" component={Albums}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);
