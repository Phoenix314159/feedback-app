import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSurveys} from '../actions/index';

class SurveyList extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            currentPage: 1,
            elemPerPage: 3
        }
    }
   
    componentDidMount() {
        this.props.fetchSurveys();
     }
    
    handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
        
      }
    
    render() {
        const { currentPage, elemPerPage } = this.state,
              indexOfLastElem = currentPage * elemPerPage,
              indexOfFirstElem = indexOfLastElem - elemPerPage,
              currentElem = this.props.surveys.slice(indexOfFirstElem, indexOfLastElem),
              pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.surveys.length / elemPerPage); i++) {
               pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
          return (
            <li
              className="pagButton text-center"
              key={number}
              id={number}
              onClick={this.handleClick}
            >
              {number}
            </li>
          );
        });
       
    return (
      <div className="frontPage">
        <div>
         {currentElem.reverse().map((survey, index) => {
          return (
            <div className="card blue-grey darken-1" key={index} >
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
            
         }).slice(0,3)}
        </div>
        <ul className="flexNumbers">
          {renderPageNumbers}
        </ul>
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