import React from 'react';

export default ({ input, label }) => {
    return (
        <div className="surveyField">
            <label>{label}</label>
            <input {...input}/>
        </div>
    )
}


