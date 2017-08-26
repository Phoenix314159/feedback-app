const mongoose = require('mongoose'),
    { Schema } = mongoose,  // pulls Schema property off of mongoose object and assigns it to the variable Schema
    userSchema = new Schema({  //creates model class
        googleId: String,
        name: String,
        emailAddress: String
    });
mongoose.model('users', userSchema);

