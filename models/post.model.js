const mongoose = require('mongoose');

const user = require('./user.model');
const dataSchema = new mongoose.Schema({
    image:{
        required: true,
        type: String,
        default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    },
    caption:{
        required: true,
        type: String
    },
    postedby: {
        required: true,
        ref: user,
        type: mongoose.Schema.Types.ObjectId,
    }
})

module.exports = mongoose.model('insta', dataSchema)