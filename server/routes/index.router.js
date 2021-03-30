const express = require('express');
const router = express.Router();
const ctrlUser = require('../controllers/user.controller');
const ctrlIdea = require('../controllers/idea.controller');
const jwtHelper = require('../config/jwtHelper');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const Video = require('../models/video.model');

router.post('/authenticate', ctrlUser.authenticate);
router.post('/register', ctrlUser.register);
router.post('/idea', ctrlIdea.idea);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);

var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads');
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
var upload = multer({
    storage:storage
});

router.post('/upload',upload.single('file'),(req,res,next) =>{
    const file = req.file;
        if(!file){
            const error = new Error("Please Upload a File");
            error.httpStatusCode = 400;
            return next(error); 
        }
        res.send(file);
});

router.get('/videos', function (req, res) {
  //  console.log('Get Request For all Videos');
    Video.find({})
    .exec(function(err, videos) {
        if(err){
            console.log("Error retrieving videos");
        }else{
            res.json(videos);
        }
    });
});

router.get('/videos/:id', function (req, res) {
    console.log('Get Request For Single Videos');
    Video.findById(req.params.id)
    .exec(function(err, video) {
        if(err){
            console.log("Error retrieving videos");
        }else{
            res.json(video);
        }
    });
});

router.post('/videos', function(req, res){
    var newVideo = Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;
    newVideo.save(function(err, insertedVideo){
        if(err){
            console.log('Error Videos');
        }else{
            res.send(insertedVideo);
        }
    });
});

router.put('/videos/:id', function(req, res){
    console.log('Updated Videos');
    Video.findByIdAndUpdate(req.params.id,
    {
        $set: { title: req.body.title, url: req.body.url, description: req.body.description}
    },
    {
        new: true
    },
    function(err, updtedVideo){
        if(err){
            res.send("Error Updated Video");
        }else{
            res.json(updtedVideo);
        }
    }
    );
});

router.delete('/videos/:id', function(req, res){
    console.log('Deleted Videos');
    Video.findByIdAndRemove(req.params.id, function(err, deletedVideo){
        if(err){
            res.send("Error Deleted Videos");
        }else{
            res.json(deletedVideo);
        }
    });
});
module.exports = router;

