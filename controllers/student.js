var mongoose = require('mongoose');
var Student = mongoose.model('Student');

//read methods
exports.listAllStudents = function(req, res) {
    Student.find({}, function(err, students) {
        if (err)
            res.send(err);
        res.json(students);
    });
};

exports.findByName = function(req, res) {
    Student.find({name:req.params.name}, function(err, student) {
        if (err)
            res.send(err);
        res.json(student);
    });
};


//insert methods
exports.insertStudent = function(req, res) {
    var newStudent = new Student(req.body);
    // newStudent.phones=undefined;
    newStudent.save(function(err, student) {
        if (err)
            res.send(err);
        res.json(student);
    });
};


//update methods
exports.updateStudent = function(req, res) {
    console.log("Body");
    console.log(req.body);
    Student.findOneAndUpdate({_id:req.params.studentId}, req.body, {new: true}, function(err, student) {
        if (err)
            res.send(err);
        res.json(student);
    });
};

exports.updatePhoneArray = function(req, res) {
    Student.findOneAndUpdate({_id:req.params.studentId}, {$addToSet: {phones: req.body.phones}}, {new: true}, function(err, subject) {
        if (err)
            res.send(err);
        res.json(subject);
    });
};

exports.removePhone = function(req, res) {
    console.log(req.body);
    Student.findOneAndUpdate({_id:req.params.studentId}, {$pullAll: {phones: req.body.phones}}, {new: true}, function(err, subject) {
        if (err)
            res.send(err);
        res.json(subject);
    });
};


//delete methods
exports.deleteStudent = function(req, res) {
    console.log(req.params.studentId);
    Student.findByIdAndRemove(req.params.studentId, function(err, student) {
        if (err)
            res.send(err);
        res.json({ message: 'Student successfully deleted' });
    });
};