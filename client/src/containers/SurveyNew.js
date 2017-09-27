import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
    constructor(props) {
        super(props);
        this.state = {showFormReview: false};
        this.checkForCredits = this.checkForCredits.bind(this);
    }

    checkForCredits(){
        if(this.props.auth.credits === 0) {
            return alert('You need to add some credits please.')
        }
        this.setState({showFormReview: true})
    }

    renderContent() {
        if (this.state.showFormReview) {
            return <SurveyFormReview onCancel={() => this.setState({showFormReview: false})}/>
        }
        return <SurveyForm onSurveySubmit={() => this.checkForCredits()}/>
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

const mapStateToProps = ({auth}) => {
    return {auth}
}

export default connect(mapStateToProps, null)(reduxForm({
    form: 'surveyForm'
})(SurveyNew));

