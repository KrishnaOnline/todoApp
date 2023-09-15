const Todo = require('../models/Todo');

const deleteTodo = async(req, res) => {
    try {
        const id = req.params.id;
        const todo = await Todo.findByIdAndDelete({_id: id})

        res.status(200).json({
            success: true,
            dataUpdated: todo,
            message: "Deleted Todo Successfully" 
        })
    }
    catch(err) {
        res.status(500).json({
            success: false,
            error: err,
            message: err.message
        })
    }
}

module.exports = deleteTodo;