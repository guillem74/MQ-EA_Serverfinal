var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var students = require('../controllers/student');



//GET REQUESTS
//get all the students
router.get('/all',students.listAllStudents);
//get student by id
router.get('/:name',students.findByName);

//POST REQUESTS
//insert student
router.post('/add', students.insertStudent);

//UPDATE REQUESTS
//update student by id
router.post('/:studentId', students.updateStudent);
router.post('/phone/:studentId', students.updatePhoneArray);

//DELETE REQUESTS
//delete student by id
router.delete('/:studentId',students.deleteStudent);
router.delete('/phone/:studentId', students.removePhone);


module.exports=router;

//comentario de prueba