import React from 'react';
import {connect} from 'react-redux';
import formFields from '../utilities/formFields';
import _ from 'lodash';
import * as actions from '../actions';
import {withRouter} from 'react-router-dom';

const SurveyFormReview = ({onCancel, formValues, submitSurvey, history, auth}) => {
    const reviewFields = _.map(formFields, ({name, label}) => {
        return (
            <div className="text-center" key={name}>
                <label>{label}</label>
                <br/>
                <div className="values">
                    {formValues[name]}
                </div>
                <hr/>
            </div>
        )
    })
    
    const checkForCredits = () => {
        if(auth.credits === 0) {
            return alert('You need to add some credits please.')
        }
        submitSurvey(formValues, history);
    }
    return (
        <div className="container formReview">
            <h3 className="text-center">Please Confirm Your Entries</h3>
            <hr/>
            <span>{reviewFields}</span>
            <div className="flexButtons">
                <button
                    className="yellow darken-3 white-text btn-flat"
                    onClick={onCancel}
                >
                    <i className="material-icons left yellowArrow">arrow_backward</i>
                    Back
                </button>
                <button
                    onClick={checkForCredits}
                    className="green btn-flat right white-text">
                    Send Survey
                    <i className="material-icons right">email</i>
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        formValues: state.form.surveyForm.values,
        auth: state.auth
    };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));