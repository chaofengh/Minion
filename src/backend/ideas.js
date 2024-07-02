const express = require('express');
const ideasRouter = express.Router();

const { 
  addToDatabase,
  getAllFromDatabase,
  getFromDatabaseById,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require('./Database/db');

const checkMillionDollarIdea = require('./checkMillionDollarIdea');

ideasRouter.param('id', (req, res, next, id) => {
  const idea = getFromDatabaseById('ideas', id);
  if (idea) {
    req.idea = idea;
    next();
  } else {
    res.status(404).send({ error: 'Idea not found' });
  }
});

ideasRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('ideas'));
});

ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
  const newIdea = addToDatabase('ideas', req.body);
  res.status(201).send(newIdea);
});

ideasRouter.get('/:id', (req, res, next) => {
  res.send(req.idea);
});

ideasRouter.put('/:id', checkMillionDollarIdea, (req, res, next) => {
  const updatedInstance = updateInstanceInDatabase('ideas', req.body);
  if (updatedInstance) {
    res.send(updatedInstance);
  } else {
    res.status(404).send({ error: 'Idea not found or update failed' });
  }
});

ideasRouter.delete('/:id', (req, res, next) => {
  const deleted = deleteFromDatabasebyId('ideas', req.params.id);
  if (deleted) {
    res.status(204).send();
  } else {
    res.status(500).send({ error: 'Idea deletion failed' });
  }
});

module.exports = ideasRouter;
