const express = require('express');
const workRouter = express.Router({mergeParams:true});

const{
    getAllFromDatabase,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId
} = require('./Database/db')

workRouter.get('/', (req,res,next)=>{
    const allWork = getAllFromDatabase('work').filter(work =>work.minionId === req.params.minionId)
    res.send(allWork)
})

workRouter.post('/',(req,res,next)=>{
    const newWork = req.body;
    newWork.minionId = req.params.minionId;
    const createdWork = addToDatabase('work',newWork)
    res.status(201).send()
})

workRouter.put('/:workId',(req,res,next)=>{ 
    const updatedWork = req.body; 
    updatedWork.minionId = req.params.minionId; // ask GPT why add minion id. shouldnt req.body comes with ID?
    const updated = updateInstanceInDatabase('work',updatedWork)
    if(updated){
        res.send(updated)
    }else{
        res.status(404).send()
    }
})

workRouter.delete('/:workId',(req,res,next)=>{
    const deleted = deleteFromDatabasebyId('work',req.params.workId);
    if(deleted){
        res.status(204).send()
    }else{
        res.status(404).send()
    }
})

module.exports = workRouter