var express = require('express');
var router = express.Router();


const goals  = [
    { id: 1, name: 'Goal 1', description: 'Description for Goal 1' },
    { id: 2, name: 'Goal 2', description: 'Description for Goal 2' },
    { id: 3, name: 'Goal 3', description: 'Description for Goal 3' }    
]

router.get('/getGoals', function(req, res) {
  res.json(goals);
});

router.delete('/removeGoal/:id', function(req, res) {
    const goalId = parseInt(req.params.id);

    // Check if the goal exists
    const goal = goals.find(goal => goal.id === goalId);
    if (!goal) {
        return res.status(400).json({ message: 'Goal not found' });
    } else {

        goal = goals.filter(goal => goal.id !== goalId);
        res.json({ message: 'Goal deleted successfully' });
    }

});

router.post('/addGoal', function(req, res) {
    if (!req.body.name || !req.body.description) {
        return res.status(400).json({ message: 'Name and description are required' });
    }

    const newGoal = {
        id: goals.length + 1,
        name: req.body.name,
        description: req.body.description
    };

    goals.push(newGoal);
    
    res.json({ message: 'Goal added successfully', goal: newGoal });
});


module.exports = router;