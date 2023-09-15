const Todo = require('../models/Todo');

const getTodo = async(req, res) => {
    try {
        const todos = await Todo.find({})

        res.status(200).json({
            success: true,
            data: todos,
            message: "Get All Todos Succesful"
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

const getTodoById = async(req, res) => {
    try {
        const {id} = req.params;
        const todo = Todo.findById({_id: id})

        if(!todo) {
            res.status(404).json({
                success:false,
                error: err,
                message: err.message
            })
        }

        res.status(200).json({
            success:true,
            data: todo,
            message: "Data By ID Fetched Succesfully"
        })
    }
    catch(err) {
        res.status(500).json({
            success:false,
            error: err,
            message: err.message
        })
    }
}

module.exports = getTodo, getTodoById;