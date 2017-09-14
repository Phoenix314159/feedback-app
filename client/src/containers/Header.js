import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <a href="/auth/google"><h3 className="rightNav">Login With Google</h3></a>
                )
            default:
                return [
                    <li key="1"><Payments/></li>,
                    <li key="2" style={{margin: '0 10px'}}  >
                        <h3 className="rightNav">Credits: {this.props.auth.credits}</h3>
                    </li>,
                    <li key="3"><a href="/api/logout"><h3 className="rightNav">Logout</h3></a></li>
                ]
        }
    }

    render() {
        return (
            <nav className="header">
                <div className="nav-wrapper blue border">
                    <Link to={this.props.auth ? '/surveys' : '/'}
                          className="left brand-logo"><i className="fa fa-envelope fa-2x"></i></Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}


function mapStateToProps({auth}) {
    return {auth}
}
export default connect(mapStateToProps)(Header)