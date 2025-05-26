var express = require('express');
var router = express.Router();
const Goals = require('../models/Goals');


router.get('/getGoals', async function(req, res) {
  try {
    const goals = await Goals.find();

    res.json(goals);

  } catch (error) {
        return res.status(400).json({ error: error.message });
  }
});



router.post('/addGoal', async function(req, res) {
    // Validate the request body
    const { name, description } = req.body;
   
    if (!name || !description) return res.status(400).json({ message: 'Name and description are required' });
   
    const goal = new Goals({ name, description});

    // Save the goal to the database
    try {

        await goal.save();

        res.status(201).json({ message: 'Goal created successfully', goal });

    } catch (error) {

        return res.status(400).json({ error: error.message });
    }

});


router.delete('/deleteGoal/:id', async function(req, res) {

  const { id } = req.params;

  try {
    const goal = await Goals.findByIdAndDelete(id);

    res.json({ message: 'Goal deleted successfully' });

  } catch (error) {

    return res.status(400).json({ error: error.message });
  
  }

});


module.exports = router;