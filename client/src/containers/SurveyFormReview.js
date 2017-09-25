import React from 'react';
import {connect} from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';

const SurveyFormReview = ({onCancel, formValues}) => {
    const reviewFields = _.map(formFields, ({name, label}) => {
        return (
            <div className="text-center" key={name}>
                <label>{label}</label>
                <br/>
                <div>
                    {formValues[name]}
                </div>
            </div>
        )
    })
    return (
        <div className="container formReview">
            <h3 className="text-center">Please Confirm Your Entries</h3>

            <span>{reviewFields}</span>
            <div className="flexButtons">
                <button
                    className="yellow darken-3 btn-flat"
                    onClick={onCancel}
                >
                    Back
                </button>
                <button className="green btn-flat right">
                    Send Survey
                    <i className="material-icons right">email</i>
                </button>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {formValues: state.form.surveyForm.values};
}

export default connect(mapStateToProps)(SurveyFormReview);