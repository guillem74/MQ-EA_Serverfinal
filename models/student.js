var mongoose = require('mongoose');

var student = mongoose.Schema({
	name: String,
	address: String,
	phones :[]

}/*,{collection:'students'}*/);

module.exports=mongoose.model('Student', student);