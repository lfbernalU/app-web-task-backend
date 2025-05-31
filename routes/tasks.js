var express = require('express');
var router = express.Router();
const Tasks = require('../models/Tasks');


router.get('/getTasks', async function(req, res) {
  try {
    const tasks = await Tasks.find();

    res.json(tasks);

  } catch (error) {
        return res.status(400).json({ error: error.message });
  }
});



router.post('/addTask', async function(req, res) {
    // Validate the request body
    const { name, description, dueDate } = req.body;
    if (!name || !description || !dueDate) return res.status(400).json({ message: 'Name and description are required' });
    const task = new Tasks({ name, description, dueDate});

    // Save the task to the database
    try {

        await task.save();

        res.status(201).json({ message: 'Task created successfully', task });

    } catch (error) {

        return res.status(400).json({ error: error.message });
    }

});


router.delete('/deleteTask/:id', async function(req, res) {

  const { id } = req.params;

  try {
    const task = await Tasks.findByIdAndDelete(id);

    if (!task) return res.status(404).json({ message: 'Task not found' });

    res.json({ message: 'Task deleted successfully' });

  } catch (error) {

    return res.status(400).json({ error: error.message });
  
  }

});


module.exports = router;