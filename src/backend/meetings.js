const express = require('express');
const meetingsRouter = express();

const {getAllFromDatabase, addToDatabase,deleteAllFromDatabase,createMeeting} = require('./Database/db');

meetingsRouter.get('/',(req,res,next)=>{
    res.send(getAllFromDatabase('meetings'))
})

meetingsRouter.post('/',(req,res,next)=>{
    let newMeeting = addToDatabase('meetings',createMeeting())
    res.status(201).send(newMeeting)
})

meetingsRouter.delete('/',(req,res,next)=>{
    deleteAllFromDatabase('meetings');
    res.status(204).send()
})

module.exports = meetingsRouter