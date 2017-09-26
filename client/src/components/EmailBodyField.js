import React from 'react';
export default ({input, label, meta: {error, touched}}) => {
    return (
        <div className="emailBodyField">
            <label>{label}</label>
            <textarea
                {...input}
                className={error === 'Please provide an email body.' && touched === true ? "emailTextArea2" : "emailTextArea1"}>
            </textarea>
            <div className="red-text" style={{marginBottom: '20px'}}>
                {touched && error}
            </div>
        </div>
    )
}
