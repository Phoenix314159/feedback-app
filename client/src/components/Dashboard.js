import React from 'react';
import {Link} from 'react-router-dom';
import SurveyList from '../containers/SurveyList';

const DashBoard = () => {
    return (
        <div className="container">
            <SurveyList />
        <div className="moveButton">
        <div className="whiteText">Add A New Survey </div>
            <Link to="/surveys/new" className="btn-floating btn-large blue circleButton">
                <i className="material-icons">add</i>
            </Link>
        </div>
        </div>
    )
}
export default DashBoard;