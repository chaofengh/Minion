const minionsRouter = require('express').Router();
const {
  addToDatabase,
  getAllFromDatabase,
  getFromDatabaseById,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require('./Database/db');
const workRouter = require('./work');


minionsRouter.param('minionId', (req, res, next, id) => {
  const minion = getFromDatabaseById('minions', id);
  if (minion) {
    req.minion = minion;
    next();
  } else {
    res.status(404).send();
  }
});

minionsRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('minions'));
});

minionsRouter.post('/', (req, res, next) => {
  const newMinion = addToDatabase('minions', req.body);
  res.status(201).send(newMinion);
});

minionsRouter.get('/:minionId', (req, res, next) => {
  res.send(req.minion);
});

minionsRouter.put('/:minionId', (req, res, next) => {
  const updatedMinionInstance = updateInstanceInDatabase('minions', req.body);
  if (updatedMinionInstance) {
    res.send(updatedMinionInstance);
  } else {
    res.status(404).send({ error: 'Minion not found or update failed' });
  }
});

minionsRouter.delete('/:minionId', (req, res, next) => {
  const deleted = deleteFromDatabasebyId('minions', req.params.minionId);
  if (deleted) {
    res.status(204).send();
  } else {
    res.status(500).send({ error: 'Minion deletion failed' });
  }
});

minionsRouter.use('/:minionId/works',workRouter)


module.exports = minionsRouter;
