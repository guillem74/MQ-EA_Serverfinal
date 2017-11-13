var mongoose = require('mongoose');
var Subject = mongoose.model('Subject');

//read methods
exports.listAllSubjects = function(req, res) {
    /*Subject.find({}, function(err, subjects) {
        if (err)
            res.send(err);
        res.json(subjects);
    });*/
	
	Subject
	.find()
	.populate({ path: 'students' })
	.exec(function(err, subjects) {
        if (err)
            res.send(err);
        res.json(subjects);
    });
};

exports.findByName = function(req, res) {
    /*Subject.find({name:req.params.subjectName}, function(err, subject) {
        if (err)
            res.send(err);
        res.json(subject);
    });*/
	
	Subject
	.find({name:req.params.subjectName})
	.populate({ path: 'students' })
	.exec(function(err, subject) {
        if (err)
            res.send(err);
        res.json(subject);
    });
};


//insert methods
exports.insertSubject= function(req, res) {
    var newSubject = new Subject(req.body);
   newSubject.save(function(err, subject) {
        if (err)
            res.send(err);
        res.json(subject);
    });
};


//update methods
exports.updateSubject = function(req, res) {
    Subject.findOneAndUpdate({_id:req.params.subjectId}, req.body, {new: true}, function(err, subject) {
        if (err)
            res.send(err);
        res.json(subject);
    });
};

exports.updateSubjectArray = function(req, res) { 
    console.log(req.body);
    Subject.findOneAndUpdate({_id:req.params.subjectId}, {$addToSet: {students: req.body.students}}, {new: true}, function(err, subject) {
        
        if (err)
            res.send(err);
        Subject
        .findById(subject._id)
        .populate({ path: 'students' })
        .exec(function(err, sub) {
            if (err)
                res.send(err);
            res.json(sub);
        });
    });
};


//delete methods
exports.deleteSubject = function(req, res) { //delete subject
    Subject.findByIdAndRemove(req.params.subjectId, function(err, subject) {
        if (err)
            res.send(err);
        res.json({ message: 'Subject successfully deleted' });
    });
};


exports.deleteStudent = function(req, res) { //delete student from subject
    Subject.findOneAndUpdate({_id:req.params.subjectId}, {$pull: {students:req.params.studentId}}, {new: true}, function(err, subject) {
        if (err)
            res.send(err);
        res.json(subject);
    });
};