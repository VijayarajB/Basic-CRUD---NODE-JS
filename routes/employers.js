const express = require('express');
const router = express.Router();
const employersSchema = require('../models/employers_Schema');


// Getting all the Employers Details
router.get('/', async(req, res) => {
    try{
        const employers = await employersSchema.find()
        res.json(employers);
    }catch(err){
        res.send('Employees Details are not found! ', 404);
    }
});

//Getting one Employee using ID
router.get('/:id', async(req, res) => {
    try{
        const employer = await employersSchema.findById(req.params.id) // Using params as we are fetching it from the url
        res.json(employer);
    }catch(err){
        res.send('The Employer ID is not found! ', 404);
    }
});

// Adding an Employee Details
router.post('/', async(req,res) => {
    const employersDetails = new employersSchema({
    name : req.body.name,
    employeeID : req.body.employeeID,
    emailID : req.body.emailID,
    password : req.body.password,
    pocSubmitted : req.body.pocSubmitted
    });
    try{
        const emp1 = await employersDetails.save();
        res.json(emp1);
    }catch(err){
        res.send('Adding a Employee Detail failed!', 409 );
    }
})

//Updating an Employee Detail
router.patch('/:id', async(req,res) =>{
    try{
        const employer = await employersSchema.findById(req.params.id);
        employer.password = req.body.password;
        employer.pocSubmitted = req.body.pocSubmitted;
        const empUpdatedDetail = await employer.save();
        res.json(empUpdatedDetail);
    }catch(err){
        res.send('Updating the Employer Details Failed', 400);
    }
})

//Deleting an Employee Detail
router.delete('/:id', async(req,res) =>{
    try{
        const employer = await employersSchema.findById(req.params.id);
        const empUpdatedDetail = await employer.remove(employer);
        res.send(`Deleted the details of ${employer.name} is Successfull!`, 200);
    }catch(err){
        res.send('Updating the Employer Details Failed', 400);
    }
})

module.exports = router;