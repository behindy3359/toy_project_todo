const db = require('../models/index');
const { Op } = require('sequelize');

exports.getTodos = async (req, res) => {
  try {
    let todos = await db.Todo.findAll();
    return res.json({ todos });

  } catch (err) {
    return res.status(500).json({ 
      "message" : "Internal Server Error"
    });
  }
};

exports.postTodo = async (req,res)=>{
  console.log('req.body >>>> ',req.body);
  try{
    let newTodo = await db.Todo.create({
      title :req.body.title,
      done: false,
    })
    console.log( 'new todo >>>> ', newTodo);
    return res.json({ newTodo });
    
  }catch(err){
    return res.status(500).json({ 
      "message" : "Internal Server Error"
    });
  }  
}

exports.updateTodo = async (req,res)=>{
  console.log('req.body >>>> ',req.body);
  try{
    let [result] = await db.Todo.update({
      title :req.body.title,
      done: req.body.done,
    },{
      where:{
        id : {[Op.req]: req.params.todoId}
      },
    },);
    if(idUpdated === 0){
      return res.send(false);
    }

    console.log( 'new todo >>>> ', result);
    return res.json({ result, msg : '입력 성공' });
  }catch(err){
    return res.status(500).json({ 
      "message" : "Internal Server Error"
    });
  }  
}
exports.deleteTodo = async (req, res)=>{
  try{
    
    const id = req.params.todoId;
    console.log('id>>>>',id);
    

    const result = await db.Todo.destroy({
      where: { id },
    });

    console.log('22222');
    if (result) {
      return res.status(200).send({ 
        "message" : "Todo deleted successfully",
        "deletedId" : "1"
      })
    }else{
      return res.status(404).send({
        "message" : "Todo not found" 
      });
    }
  }
  catch(err){
    return res.status(500).send({ 
      "message" : "Internal Server Error" 
    });
  }
}