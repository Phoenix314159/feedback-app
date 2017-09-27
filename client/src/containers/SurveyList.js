import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSurveys} from '../actions/index';
import Pagination from 'react-js-pagination';

class SurveyList extends Component {
    constructor(props) {
        super(props)
        this.renderSurveys = this.renderSurveys.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.state = {
            activePage: 1,
            arr: []
        }
    }
   
    componentDidMount() {
        this.props.fetchSurveys();
     }
    
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
        
//    let arr2 = this.props.surveys.slice(4,8);
//        let arr3 = this.props.surveys.slice(8,12);
//        let arr4 = this.props.surveys.slice(12,16);
//        let arr5 = this.props.surveys.slice(16,20);
//        if(pageNumber === 1) {
//            this.setState({activePage: pageNumber});
//        }
//        if(pageNumber === 2) {
//            
//            this.setState({activePage: pageNumber,
//                           arr: arr2
//                         });
//        }
//       if(pageNumber === 3) {
//           console.log(arr3);
//            this.setState({activePage: pageNumber,
//                           arr: arr3
//                         });
//        }
//        if(pageNumber === 4) {
//            console.log(arr4);
//            this.setState({activePage: pageNumber,
//                           arr: arr4
//                         });
//        }
//        if(pageNumber === 5) {
//            console.log(arr5);
//            this.setState({activePage: pageNumber,
//                           arr: arr5
//                         });
//        }
        
      }
    
    
    renderSurveys() {
        const page_range = Math.ceil(this.props.surveys.length / 4);
        
    return (
        
        <div>
            {this.props.surveys.reverse().map((survey, index) => {
            
       return (
            <div className="card blue-grey darken-1" key={survey._id} >
                <div className="card-content whiteText">
                  <span className="card-title">{survey.title}</span>
                  <p>{survey.body}</p>
                  <p className="right">Sent On: {new Date(survey.dateSent).toLocaleDateString()}</p>
                </div>
                <div className="card-action">
                  <a>Yes: {survey.yes}</a>
                  <a>No: {survey.no}</a>
                  </div>
            </div>
            )
            
         }).slice(0,4)}
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={4}
          totalItemsCount={this.props.surveys.length}
          pageRangeDisplayed={page_range}
          onChange={this.handlePageChange}
        />
        </div>
       )
        
    }
        
    render() {
        return (
        <div className="container frontPage">
            {this.renderSurveys()}
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        surveys: state.surveys
    }
}

export default connect (mapStateToProps, {fetchSurveys})(SurveyList)