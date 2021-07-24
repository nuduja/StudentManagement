const router = require('express').Router();
let Student = require('../models/Student');

//Routes for teh 4 CRUDS

//Route for create CRUD
router.route('/add').post((req, res)=>{
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newStudent = new Student({
        //Intializing variables
        name,
        age,
        gender
    })

    //Passing the Student object to mongodb via Student model and Exception Handling
    newStudent.save().then(()=>{
        res.json('Student Added')
    }).catch((err)=>{
        console.log(err);
    })
})

//Route for Read CRUD

router.route('/').get((req, res)=>{
    Student.find().then((student)=>{
        res.json(student);
    }).catch((err)=>{
        console.log(err);
    })
})

//Route for Update CRUD

router.route('/update/:id').put(async (req, res) => {
    let userId = req.params.id
    const {name, age, gender} = req.body;

    const updateStudent = {
        name,
        age,
        gender
    }

    //Check if user available
    const update = await Student.findByIdAndUpdate(userId, updateStudent)
    .then(() => {
        res.status(200).send({status: 'User updated'});
    }).catch((err) => {
        res.status(500).send({status: 'Error with updating data'});
    })
})

//Delete Crud

router.route('/delete/:id').delete(async (req, res) => {
    let userId = req.params.id;

    await Student.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: 'User Deleted'});
    }).catch(err => {
            res.status(500).send({status:'Error with delete user', error: err.message});
    })
})

//Get User Details of one user

router.route('/get/:id').get(async (req, res) => {
    let userId = req.params.Id;
    await Student.findById(userId)
    .then(() => {
        res.status(200).send({status: 'User Fetched'});
    }).catch(() => {
        console.log(err.message);
        req.status(500).send({status: 'Error with get user', error: err.message});
    })
})

//Exporting the route
module.exports = router;