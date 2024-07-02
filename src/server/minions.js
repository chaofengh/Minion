const minionsRouter = require('express').Router();

const {addToDatabase,getAllFromDatabase,getFromDatabaseById,updateInstanceInDatabase,deleteFromDatabasebyId}= require('./Database/db');
const { minionIdCounter } = require('./Database/minions');

minionsRouter.param('minionId',(req,res,next,id)=>{
    const minion = getFromDatabaseById('minions',id)
    if(minion){
        req.minion = minion;
        next()
    }else{
        resizeTo.status(404).send()
    }
})

minionsRouter.get('/',(req,res,next)=>{
    res.send(getAllFromDatabase('minions'))
})

minionsRouter.post('/',(req,res,next)=>{
    const newMinion = addToDatabase('minions',req.body)
    res.status(201).send(newMinion)
})

minionsRouter.get('/:minionId',(req,res,next)=>{
    res.send(req.minion)
})

minionsRouter.put('/:minionId',(req,res,next)=>{
    let updatedMinionInstance = updateInstanceInDatabase('minions',req.body);
    res.send(updatedMinionInstance)
})

minionsRouter.delete('/minionId',(req,res,next)=>{
    const deleted = deleteFromDatabasebyId('minions',req.params.minionId)
    if(deleted){
        res.status(204).send()
    }else{
        res.status(500).send()
    }
})

minionsRouter.get('/:minionId/works',(req,res,next)=>{
    const work = getAllFromDatabase('works').filter((singleWork)=>{
        return singleWork.minionId = req.params.minionId
    })
    res.send(work)
})

minionsRouter.post('/:minionId/works',(req,res,next)=>{
    const workToAdd = req.body;
    workToAdd.minionId = req.params.minionId
    const createdWork = addToDatabase('works',workToAdd)
    res.status(201).send(createdWork)
})

minionsRouter.param('workId',(req,res,next,id)=>{
    const work = getFromDatabaseById('works',id)
    if(work){
        req.work = work
        next()
    }else{
        res.status(404).send()
    }
})

minionsRouter.put('/:minionId/works/:workId',(req,res,next)=>{
    if(req.work.minionId !== req.body.minionId || req.work.id !== req.body.id){
        res.status(400).send()
    }else{
        const updatedWork = updateInstanceInDatabase('workds',req.body)
        res.send(updatedWork)
    }
})

minionsRouter.delete('/:minionId/works/:workId',(req,res,next)=>{
    const deleted =deleteFromDatabasebyId('works',req.params.workId)
    if(deleted){
        res.status(204).send()
    }else{
        res.status(500).send()
    }
})

module.exports = minionsRouter;