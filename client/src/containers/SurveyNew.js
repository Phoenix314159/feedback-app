import React, {Component} from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';


class SurveyNew extends Component {

    state = {showFormReview: false};

    renderConent() {
        if (this.state.showFormReview) {
            return <SurveyFormReview />
        }
        return <SurveyForm onSurveySubmit={() => this.setState({showFormReview: true})} />
    }

    render() {
        return (
            <div>
                {this.renderConent()}
            </div>
        )
    }
}

export default  SurveyNew;