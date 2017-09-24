import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';
import SurveyField from '../components/SurveyField';
import _ from 'lodash';
import validateEmails from '../utilities/validateEmails';

const FIELDS = [
    {label: 'Survey Title', name: 'title', noValueError: 'Please provide a survey title.'},
    {label: 'Subject Line', name: 'subject', noValueError: 'Please provide a survey subject.'},
    {label: 'Email Body', name: 'body', noValueError: 'Please provide an email body.'},
    {label: 'Recipient List', name: 'emails'}
]

class SurveyForm extends Component {

    renderFields() {
        return _.map(FIELDS, ({label, name}) => {
            return <Field key={name} component={SurveyField} type="text" label={label} name={name}/>

        })
    }

    render() {
        return (
            <div className="surveyFormBackGround">
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)} className="formPadding">
                    {this.renderFields()}
                    <div className="buttons">
                        <Link to="/surveys" className="red btn-flat left white-text">
                            Cancel
                        </Link>
                        <button className="teal btn-flat right white-text" type="submit">Next
                            <i className="material-icons right">arrow_forward</i>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const validate = values => {
    const errors = {};
    errors.emails = validateEmails(values.emails || '');
    _.each(FIELDS, ({ name, noValueError }) => {
        if(!values[name]) {
           errors[name] = noValueError;
        }
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);
