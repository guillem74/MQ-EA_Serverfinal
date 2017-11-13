var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var studentModel = require('./student');
var Student= mongoose.model('Student')

var subject= mongoose.Schema({
	name:String,
	studies:String,
	semester:String,
	students:[{type:Schema.Types.ObjectId, ref: 'Student'}]
});

module.exports=mongoose.model('Subject', subject);