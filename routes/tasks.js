var express = require('express');
var router = express.Router();

let tasks = [
    { id: 1, name: 'Task 1', description: 'Description for Task 1' },
    { id: 2, name: 'Task 2', description: 'Description for Task 2' },
    { id: 3, name: 'Task 3', description: 'Description for Task 3' }    
];

router.get('/getTasks', function(req, res) {
  res.json(tasks);
});


router.delete('/removeTask/:id', function(req, res) {
    // Extract the task ID from the request parameters
    const taskId = parseInt(req.params.id);
    // Check if the task exists
    const task = tasks.find(task => task.id === taskId);
    if (!task) {
        return res.status(400).json({ message: 'Task not found' });
    } else {
        // If the task exists, remove it from the array
        tasks = tasks.filter(task => task.id !== taskId);
        res.json({ message: 'Task deleted successfully' });
    }
});


router.post('/addTask', function(req, res) {
    // Validate the request body
    if (!req.body.name || !req.body.description) {
        return res.status(400).json({ message: 'Name and description are required' });
    }
    
    const newTask = {
        id: tasks.length + 1,
        name: req.body.name,
        description: req.body.description
    };
    tasks.push(newTask);
    res.json({ message: 'Task added successfully', task: newTask });
});




module.exports = router;