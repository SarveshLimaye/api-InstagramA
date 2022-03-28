const express = require('express');

const router = express.Router()
const Model = require('../models/user.model');

module.exports = router;

//Post Method
router.post('/createUser', async(req, res) => {
    const user = new Model({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        followers: req.body.followers,
        profilepicture: req.body.profilepicture,
        myFollowings: req.body.myFollowings,
        myPosts: req.body.myPosts
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.post('/createPost', async(req, res) => {
    const post = new Model({
        image: req.body.image,
        caption: req.body.caption,
        postedby: req.body.postedby
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/getUser', (req, res) => {
    res.send('Get All API')
})

//Get by ID Method
router.get('/getUser/:id', (req, res) => {
    res.send('Get by ID API')
})



//Get by ID Method
router.get('/getPostByUser/:id', (req, res) => {
    res.send('Get by ID API')
})

//Get by ID Method
router.get('/getFollowers/:id', (req, res) => {
    res.send('Get by ID API')
})


//Delete by ID Method
router.delete('/deletePost/:id', (req, res) => {
    res.send('Delete by ID API')
})