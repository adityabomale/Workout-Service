const express = require('express');
const Model = require('../models/models.js');
const router = express.Router()

module.exports = router;
  
//Post Method
router.post('/createPlan', async (req, res) => {
    
     const data = new Model({
        userid: req.body.userid,
        //name: req.body.name,
        plan: req.body.plan,
        days: req.body.days,
        exercise: req.body.exercise
    })

    try {
    
    const dataToSave = data.save();
    res.status(201).json({ message: "Operation successful" });
    console.log('New workout plan created')
    }
    catch (error) {
        res.status(400).json({message: error.message})
        res.send('workout plan not created')
    }
})

//Get all Method
router.get('/showAllPlans', async (req, res) => {
    try{
        console.log(req.headers);
        const data = await Model.find();
        res.json(data)
        console.log("All users' workout plans fetched")
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/showPlan/:userid', async (req, res) => {
    try {
        const user_id = req.params.userid;
        const item = await Model.findOne({ userid: user_id });
        if (item) {
            res.json(item);
            console.log("data fetched");
            } 
        else {
            res.status(404).send('Item not found');
     }  }  
     catch(error){
        res.status(404).json({message: error.message})
    }
})

//Update by ID Method
router.put('/updatePlan/:userid', async (req, res) => {
    try {
        const id = req.params.userid;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findOneAndUpdate(
            { userid:id }, updatedData, options
        
        )
        console.log("Workout plan changed")
        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Update exercise
router.patch('/updatePlan/exerciseSchedule/:userid', async (req, res) => {
    try{
        const id = req.params.userid;
        const { exercise } = req.body;
        const options = { new: true };

        const result = await Model.findOneAndUpdate(
            { userid:id }, { exercise:exercise }, options
        )
        console.log("Exercise schedule updated")
        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })        
    }
})

//Delete by ID Method
router.delete('/deletePlan/:userid', async (req, res) => {
    try {
        const user_id = req.params.userid;
        const data = await Model.findOneAndDelete({ userid:user_id })
        res.send(`Document with ${data.userid} has been deleted..`)
        console.log("data deleted")
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})