import React from 'react';
import {Link} from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className="container">
            <h1>Dashboard</h1>
            <div>
                <Link to="/surveys/new" className="btn-floating btn-large blue waves-effect waves-light">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    )
}
export default DashBoard;