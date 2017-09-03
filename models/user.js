const mongoose = require('mongoose'),
    { Schema } = mongoose,  // pulls Schema property off of mongoose object and assigns it to the variable Schema
    userSchema = new Schema({  //creates model class
        googleId: String,
        credits: {
            type: Number,
            default: 0
        },
        name: String,
        emailAddress: String
    });

mongoose.model('users', userSchema);

