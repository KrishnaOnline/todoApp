const Todo = require('../models/Todo');

const updateTodo = async(req, res) => {
    try {
        const id = req.params.id;
        const {title, description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id: id},
            {title, description, updatedAt: Date.now()}
        )

        res.status(200).json({
            success: true,
            data: todo,
            message: `Updated Todo of id:${id} Successfully`
        })
    }

    catch(err) {
        res.status(500).json({
            success: false,
            error : err,
            message: err.message
        })
    }
}

module.exports = updateTodo;