const mongosee = require('mongoose');

const TasksSchema = new mongosee.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongosee.model('Tasks', TasksSchema);