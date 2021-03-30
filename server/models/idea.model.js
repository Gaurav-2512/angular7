const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ideaSchema = new Schema({
    idea: String,
    problem: String,
    solution: String,
    many: String
});

// mongoose.model('Idea', ideaSchema);

module.exports = mongoose.model('idea', ideaSchema, 'ideas');