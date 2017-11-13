var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var subjects = require('../controllers/subject');



//GET REQUESTS
//get all the subjects
router.get('/all',subjects.listAllSubjects);
//get subject by id
router.get('/:subjectName',subjects.findByName);

//POST REQUESTS
//insert subject
router.post('/add', subjects.insertSubject);

//UPDATE REQUESTS
//update subject by id
router.post('/:subjectId', subjects.updateSubject);
router.post('/student/:subjectId', subjects.updateSubjectArray);

//DELETE REQUESTS
//delete subject by id
router.delete('/:subjectId',subjects.deleteSubject);
router.delete('/student/:subjectId/:studentId',subjects.deleteStudent);


module.exports=router;