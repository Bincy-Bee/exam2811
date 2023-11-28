const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title : String,
    duedate : String,
    importance : {
    type : String,
    enum : [ "low", "high", "extreme" ]},
    createdby : String,
})

const task = mongoose.model("task", taskSchema);

module.exports = {task}