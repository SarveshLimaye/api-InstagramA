const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    followers: {
        required: false,
        type: Array,
        default: []
    },
    profilepicture:{
        required: false,
        type: String,
        default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    },
    myFollowings: {
        required: false,
        type: Array,
        default: []
    },
    myPosts: {
        required: false,
        type: Array,
        default: []
    }
})

module.exports = mongoose.model('insta', dataSchema)