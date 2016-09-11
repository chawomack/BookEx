var mongoose = require('mongoose');

var SchoolSchema = mongoose.Schema({
    name: String
});

var School = mongoose.model('School', SchoolSchema, 'schools');

module.exports = School;
