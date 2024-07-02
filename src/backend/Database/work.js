const faker = require('faker');
const { allMinions } = require('./minions');

let workIdCounter = 1;

const createWork = (minionId) => {
  return {
    id: `${workIdCounter++}`,
    title: `Close deal #${Math.floor(Math.random() * 4) + 3}`,
    description: 'Close the biggest deal!',
    hours: Math.floor(Math.random() * 8) + 1,
    minionId: `${minionId}`,
  };
};

const isValidWork = (instance)=>{
    instance.title = instance.title || '';
    instance.description = instance.description || '';

    if(typeof instance.title !== 'string' || typeof instance.description !== 'string'){
        throw new Error('Work\'s title and description must be strings');
    }

    if(!isNaN(parseFloat(instance.hours)) && isFinite(instance.hours)){
        instance.hours = Number(instance.hours)
    }else{
        throw new Error('Work\'s hours must be a number.');
    }

    let isValidMinionId = allMinions.find((minion)=>{
        return minion.id === instance.minionId
    })

    if(!isValidMinionId){
        throw new Error('Work must have a valid minionId that actually exists in the database');
    }

    return true
}

const allWork = allMinions.map(minion => createWork(minion.id));

module.exports = {
  createWork,
  allWork,
  workIdCounter,
  isValidWork
};
