const { faker } = require('@faker-js/faker');


let ideaIdCounter = 1;
const companies = [
  'Codecademy',
  'Uber',
  'Snapchat',
  'Facebook',
  'Microservices',
  'Pets.com',
];

const createIdea = () => {
  const noun = faker.company.buzzNoun();
  const name = companies[Math.floor(Math.random() * companies.length)];
  let weeklyRevenue = 0;
  let numWeeks = 0;
  while (weeklyRevenue * numWeeks < 1000000) {
    weeklyRevenue = Math.floor(Math.random() * 123562);
    numWeeks = Math.floor(Math.random() * 104) + 6;
  }

  return {
    id: `${ideaIdCounter++}`,
    name: `${name} but for ${noun}`,
    description: 'The name says it all!!!',
    weeklyRevenue: weeklyRevenue,
    numWeeks: numWeeks,
  };
};

const isValidIdea = (instance)=>{
    instance.name = instance.name || '';
    instance.description = instance.description || '';

    if(typeof instance.name !== 'string' || typeof instance.description !== 'string'){
        throw new Error('Idea\'s name and description must be strings');
    }

    if(!isNaN(parseFloat(instance.numWeeks)) && isFinite(instance.numWeeks)){
        instance.numWeeks = Number(instance.numWeeks);
    }else{
        throw new Error('Idea\'s numWeeks must be a number.');
    }

    if (!isNaN(parseFloat(instance.weeklyRevenue)) && isFinite(instance.weeklyRevenue)) {
        instance.weeklyRevenue = Number(instance.weeklyRevenue);
    } else {
        throw new Error('Idea\'s weeklyRevenue must be a number.');
      }

    return true;
}


const allIdeas = new Array(10).fill(0).map(createIdea);

module.exports = {
  createIdea,
  allIdeas,
  ideaIdCounter,
  isValidIdea
};
