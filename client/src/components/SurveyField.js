import React from 'react';
export default ({input, label, meta: {error, touched}}) => {
    return (
        <div className="surveyField">
            <label>{label}</label>
            <input {...input} className={(error === 'Please provide an survey title.' || error === 'Please provide a survey subject.') && touched === true ? "surveyInputs1" : "surveyInputs2"}/>
            <div className="red-text" style={{marginBottom: '20px'}}>
                {touched && error}
            </div>
        </div>
    )
}


