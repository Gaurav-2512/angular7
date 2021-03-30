const mongoose = require('mongoose');
const Idea = require('../models/idea.model');

module.exports.idea = (req, res, next) => {
    var idea = new Idea();
    idea.idea = req.body.idea;
    idea.problem = req.body.problem;
    idea.solution = req.body.solution;
    idea.many = req.body.many;
    idea.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            //error handling
        }
    });
}