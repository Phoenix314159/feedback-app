const mongoose = require('mongoose'),
    { Schema } = mongoose;

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [String]
})

mongoose.model('surveys', surveySchema);