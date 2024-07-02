const { type } = require('@testing-library/user-event/dist/type');
const faker = require('faker');
//fake is a module that generate fake data

let minionIdCounter = 1;

const createMinion = ()=>{
    
    //it will create three weaknesses
    const weaknesses = new Array(3).fill(0).map(() => {
        const reasons = ['Cannot do', 'Unable to execute', 'Will not build'];
        const reason = reasons[Math.floor(Math.random() * reasons.length)];
        const adj = faker.company.bsAdjective();
        const noun = faker.company.catchPhraseNoun();
        return `${reason} ${adj} ${noun}`;
      }).join(', ') + ', too ' + faker.hacker.adjective()
    
      return {
        id: `${minionIdCounter++}`,
        name: faker.name.findName(),
        title: faker.name.jobTitle(),
        weaknesses: weaknesses,
        salary: 40000,
      }
}

const isValidMinion = (instance)=>{
    instance.name = instance.name || '';
    instance.weaknesses = instance.weaknesses || '';
    instance.title = instance.title || ''
    
    if(typeof instance.name !== 'string' || typeof instance.weaknesses !== 'string' || typeof instance.title !== 'string'){
        throw new Error('Minion\'s name, title, and weaknesses must be strings');
    }

    if(!isNaN(parseFloat(instance.salary)) && isFinite(instance.salary)){
        instance.salary = Number(instance.salary);
    }else{
        throw new Error('Minion\'s salary must be a number.');
    }

    return true
}

const allMinions = new Array(10).fill(null).map(createMinion);

module.exports = {
  createMinion,
  allMinions,
  minionIdCounter,
  isValidMinion
};